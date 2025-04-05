"use client";

import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SpeakersOne from "@/components/Speakers/SpeakersOne";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Page() {

  const [speaker, setSpeaker] = useState({});

  const speakerApi = async () => {
    try {
      const response = await axios.get("https://admin.precision-omics.org/api/guide-chair");
      console.log(response, 'ghnfgh');
      setSpeaker(response.data);
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
        pageTitle="Guidelines"
        shortText=""
        homePageUrl="/"
        homePageText="Home"
        activePageText="Speakers"
        bgImg="/images/own/slide2.jpg"
      />

      <div style={{margin:'5%'}}>

        <p
          dangerouslySetInnerHTML={{
            __html: speaker?.chair || "<span>No content available</span>",
          }}
        ></p>
      </div>



      <Footer />
    </>
  );
}
