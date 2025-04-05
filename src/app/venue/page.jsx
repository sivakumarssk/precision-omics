"use client";

import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import List from "@/components/dates/List";
import './Page.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Page() {

    const [venue, setVenue] = useState({});

    const venueApi = async () => {
        try {
            const response = await axios.get("https://admin.precision-omics.org/api/venue");
            console.log(response, 'ghnfgh');
            setVenue(response.data?.data[0]);
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.error || "An error occurred");
        }
    };

    // console.log(homeData);

    useEffect(() => {
        venueApi()
    }, [])

    const getEmbeddableMapUrl = (url) => {
        // For demonstration, returning static embed link
        // Replace with logic to convert the URL if needed
        return url;
    };

    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Accommodation"
                shortText=""
                homePageUrl="/"
                homePageText="Home"
                activePageText="Accommodation"
                bgImg="/images/own/slide3.jpg"
            />

            {/* <SpeakersOne /> */}

            <div className="venueMain">
                {/* <div>
                    <h4>LODGING</h4>
                    <p>Lodging Packages (when selected with conference registration) are available with a special room rate at Double Tree by Hilton.
                        The special room rates will be available until the group block is sold out. For more information, please contact the conference coordinator.
                        <br />The Hotel staff will only provide general information about the hotel and guest rooms; and are not responsible for any specific details about the conference. Guest room confirmation numbers will be provided to the registrants periodically on successful completion of the registration and accommodation bookings.</p>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p><span style={{ fontWeight: '700' }}>Note 1 : </span>  Please mention the &quot;United Scientific Group&quot; name, if you wish to contact hotel reception.</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p><span style={{ fontWeight: '700' }}>Note 2 : </span>  The discounted hotel stay rates are restricted only for one day before and / or after the event dates (based on the availability). The complimentary packages are valid only on the event dates.</p>
                    </div><div style={{ display: 'flex', alignItems: 'center' }}>
                        <p><span style={{ fontWeight: '700' }}>Note 3 : </span>  Lodging Package only includes the room rent charges and rest all incidentals would be charged extra. Hotel reception would convey all the complimentary services if any at the time of check-in.</p>
                    </div>
                </div> */}

                <div>
                    <h5 style={{
                        textAlign: 'center', paddingBlock: '5px',
                        background: '#dd5a40', color: 'white'
                    }}>Address to the Hotel</h5>

                    <p
                        dangerouslySetInnerHTML={{
                            __html: venue?.address || "<span>No content available</span>",
                        }}
                    ></p>

                    <div className="imgCon">

                        <Image
                            src={`https://admin.precision-omics.org${venue?.image1}`}
                            alt={"accomidation"}
                            width={380}
                            height={250}
                            className="imgVenue"
                        />

                        <Image
                            src={`https://admin.precision-omics.org${venue?.image2}`}
                            alt={"accomidation"}
                            width={380}
                            height={250}
                            className="imgVenue"
                        />

                        <Image
                            src={`https://admin.precision-omics.org${venue?.image3}`}
                            alt={"accomidation"}
                            width={380}
                            height={520}
                            className="imgVenue"
                        />

                        {/* <img className="imgVenue"
                            src={} alt="accomidation" />
                        <img className="imgVenue"
                            src={`https://admin.precision-omics.org${venue?.image2}`} alt="accomidation" />
                        <img className="imgVenue"
                            src={`https://admin.precision-omics.org${venue?.image3}`} alt="accomidation" /> */}

                    </div>
                </div>

                {/* <div>
                    <h5 style={{
                        textAlign: 'center', paddingBlock: '5px',
                        background: '#dd5a40', color: 'white'
                    }}>Address to the Hotel</h5>

                    <p><span style={{ fontWeight: '700', fontSize: '20px' }}>DoubleTree by Hilton</span><br></br>
                        San Francisco Airport,<br></br>
                        835 Airport Blvd, Burlingame,<br></br>
                        CA 94010, United States,<br></br>
                        Phone: +1 650-344-5500</p>

                    <div >
                        <button style={{
                            marginRight: '20px', background: '#031b58',
                            color: 'white', padding: '12px', border: 'none'
                        }}>Submit Abstrat 👉</button>
                        <button style={{
                            background: '#cc3201',
                            color: 'white', padding: '12px', border: 'none'
                        }}>Register 👉</button>
                    </div>

                    <div className="imgCon">

                        <img className="imgVenue"
                            src="/images/own/h1.jpg" alt="accomidation" />
                        <img className="imgVenue"
                            src="/images/own/h2.jpg" alt="accomidation" />
                        <img className="imgVenue"
                            src="/images/own/h3.jpg" alt="accomidation" />

                    </div>
                </div> */}


                <div>
                    <h5 style={{
                        textAlign: 'center', paddingBlock: '5px',
                        background: '#dd5a40', color: 'white'
                    }}>Directions to the Venue</h5>

                    <div>
                        {venue?.hotelLocation ? (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: venue?.hotelLocation.replace(
                                        /width="\d+"/g,
                                        'width="100%"'
                                    ).replace(
                                        /height="\d+"/g,
                                        'height="450"'
                                    ),
                                }}
                            ></div>
                        ) : (
                            <p style={{ color: 'red' }}>Map is not available.</p>
                        )}
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}
