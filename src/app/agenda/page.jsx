"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import PdfViewer from "./PdfViewer";
import "./page.css";

const AgendaPage = () => {
    const [agendas, setAgendas] = useState([]);
    const [selectedPdf, setSelectedPdf] = useState("");

    // Fetch agendas from the backend
    useEffect(() => {
        const fetchAgendas = async () => {
            try {
                const response = await axios.get("https://admin.precision-omics.org/api/getAgenda");
                setAgendas(response.data.agendas || []);
                if (response.data.agendas?.length) {
                    setSelectedPdf(`https://admin.precision-omics.org${response.data.agendas[0].pdf}`); // Set the first PDF as default
                }
            } catch (error) {
                console.error("Error fetching agendas:", error);
                alert("Failed to fetch agendas.");
            }
        };

        fetchAgendas();
    }, []);

    const handleDateClick = (pdfUrl) => {
        setSelectedPdf(`https://admin.precision-omics.org${pdfUrl}`);
    };

    console.log(selectedPdf);
    

    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Agenda"
                shortText="Select a date to view the agenda"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Agenda"
                bgImg="/images/own/slide2.jpg"
            />

            <div className="agendaContainer">
                <div className="datesContainer">
                    {agendas.map((agenda) => (

                        <>
                        <button
                            key={agenda._id}
                            className="btn btn-primary"
                            onClick={() => handleDateClick(agenda.pdf)}
                        >
                            {agenda.date}
                        </button>
                        </>
                        
                    ))}
                </div>

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
