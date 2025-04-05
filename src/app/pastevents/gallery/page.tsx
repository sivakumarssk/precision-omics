"use client";

import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "./ImageGallery";
import { useSearchParams } from "next/navigation";




export default function Page() {

  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  const [gallery, setGallery] = useState([]);

  const pastEventApi = async (): Promise<void> => {
    try {
      const response = await axios.get(`https://admin.precision-omics.org/api/past-events/${date}`);
      // console.log(response,'ghnfgh');
      setGallery(response.data?.eventImages);
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.error || "An error occurred");
    }
  };

  // console.log(homeData);

  useEffect(() => {
    pastEventApi()
  }, [])


  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Speakers"
        shortText=""
        homePageUrl="/"
        homePageText="Home"
        activePageText="Gallery"
        bgImg="/images/own/slide2.jpg"
      />

      <ImageGallery data={gallery} />

      <Footer />
    </>
  );
}
