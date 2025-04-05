"use client";

import React, { useEffect, useRef } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf";

// Set the worker source to a local file
GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

const PdfViewer = ({ pdfUrl }) => {
    const canvasContainerRef = useRef();
    const currentPdfUrl = useRef(""); // Track the currently rendered PDF URL
    const currentViewportWidth = useRef(0); // Track container width to avoid unnecessary renders

    const renderPdf = async () => {
        if (!pdfUrl || !canvasContainerRef.current) return;

        // If the current URL matches the rendered PDF, skip re-rendering
        if (currentPdfUrl.current === pdfUrl) {
            return;
        }

        // Update the current PDF URL
        currentPdfUrl.current = pdfUrl;

        // Clear any existing canvases before rendering
        const canvasContainer = canvasContainerRef.current;
        canvasContainer.innerHTML = "";

        const pdf = await getDocument(pdfUrl).promise;

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);

            const canvas = document.createElement("canvas");
            canvas.style.marginBottom = "10px";
            canvasContainer.appendChild(canvas);

            // Calculate viewport scale dynamically based on container width
            const containerWidth = canvasContainer.offsetWidth;
            const viewport = page.getViewport({ scale: containerWidth / page.view[2] });

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const context = canvas.getContext("2d");
            const renderContext = {
                canvasContext: context,
                viewport: viewport,
            };

            await page.render(renderContext).promise;
        }
    };

    useEffect(() => {
        const canvasContainer = canvasContainerRef.current;

        if (!canvasContainer) return;

        // Render the PDF initially
        renderPdf();

        // Use ResizeObserver to detect actual size changes
        const resizeObserver = new ResizeObserver(() => {
            const newWidth = canvasContainer.offsetWidth;

            if (newWidth !== currentViewportWidth.current) {
                currentViewportWidth.current = newWidth;
                renderPdf();
            }
        });

        resizeObserver.observe(canvasContainer);

        // Cleanup observer on unmount
        return () => {
            resizeObserver.disconnect();
        };
    }, [pdfUrl]); // Trigger only when pdfUrl changes

    return (
        <div
            ref={canvasContainerRef}
            style={{
                width: "100%",
                maxWidth: "100%",
                overflow: "hidden",
            }}
        ></div>
    );
};

export default PdfViewer;
