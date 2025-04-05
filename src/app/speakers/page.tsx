"use client";

import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SpeakersOne from "@/components/Speakers/SpeakersOne";
import { useEffect, useState } from "react";
import axios from "axios";


interface Speaker {
  // Define the structure of the expected data from the API response
  [key: string]: any; // Replace with specific keys and types if known
}



export default function Page() {

  const [speaker, setSpeaker] = useState<Speaker>({});

  const speakerApi = async (): Promise<void> => {
    try {
      const response = await axios.get("https://admin.precision-omics.org/api/getAllSpeakers");
      // console.log(response,'ghnfgh');
      setSpeaker(response.data);
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.error || "An error occurred");
    }
  };

  // console.log(homeData);
  
  useEffect(()=>{
    speakerApi()
  },[])


  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Speakers"
        shortText=""
        homePageUrl="/"
        homePageText="Home"
        activePageText="Speakers"
        bgImg="/images/own/slide2.jpg"
      />

      <SpeakersOne data={speaker.speakers}/>

      <Footer />
    </>
  );
}
