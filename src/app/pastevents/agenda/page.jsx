"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import PdfViewer from "./PdfViewer";
import "./page.css";
import { useSearchParams } from "next/navigation";

const AgendaPage = () => {
    const searchParams = useSearchParams();
    const date = searchParams.get("date");
    const [selectedPdf, setSelectedPdf] = useState("");
    

    // Fetch agendas from the backend
    useEffect(() => {
        const fetchPastEvent = async () => {
            try {
                const response = await axios.get(`https://admin.precision-omics.org/api/past-events/${date}`);
                console.log(response,'resp');
                if (response) {
                    setSelectedPdf(`https://admin.precision-omics.org${response.data.eventPdf}`); // Set the first PDF as default
                }
            } catch (error) {
                console.error("Error fetching agendas:", error);
                alert("Failed to fetch agendas.");
            }
        };

        fetchPastEvent();
    }, []);
    

    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Agenda"
                shortText="Select a date to view the agenda"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Information"
                bgImg="/images/own/slide2.jpg"
            />

            <div className="agendaContainer">

                <div className="pdfCon">
                    {selectedPdf ? (
                        <PdfViewer pdfUrl={selectedPdf} />
                    ) : (
                        <p>No PDF selected. Please select a date.</p>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AgendaPage;
