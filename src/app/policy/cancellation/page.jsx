"use client";

import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SpeakersOne from "@/components/Speakers/SpeakersOne";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Page() {

  const [cancellation, setCancellation] = useState({});

  const speakerApi = async () => {
    try {
      const response = await axios.get("https://admin.precision-omics.org/api/cancellation");
      console.log(response, 'ghnfgh');
      setCancellation(response.data);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || "An error occurred");
    }
  };

  // console.log(homeData);

  useEffect(() => {
    speakerApi()
  }, [])


  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Policy"
        shortText=""
        homePageUrl="/"
        homePageText="Home"
        activePageText="cancellation policy"
        bgImg="/images/own/slide2.jpg"
      />

      <div style={{margin:'5%'}}>

        <p
          dangerouslySetInnerHTML={{
            __html: cancellation?.cancellation || "<span>No content available</span>",
          }}
        ></p>
      </div>



      <Footer />
    </>
  );
}
