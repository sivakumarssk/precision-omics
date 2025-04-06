"use client"

import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeDefault/MainBanner";
import AboutUsContent from "@/components/HomeDefault/AboutUsContent";
import WhyUs from "@/components/Common/WhyUs";
import Speakers from "@/components/HomeDefault/Speakers";
import EventSchedules from "@/components/HomeDefault/EventSchedules";
import FunFact from "@/components/Common/FunFact";
import Register from "@/components/HomeDefault/Register";
import Partner from "@/components/Common/Partner";
import LatestNews from "@/components/HomeDefault/LatestNews";
import BuyTicket from "@/components/Common/BuyTicket";
import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";
import Topics from "@/components/HomeDefault/Topics";
import Speakerskey from "@/components/HomeDefault/Speakerskey";
import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "@/components/HomeDefault/ImageGallery";

interface HomeData {
  // Define the structure of the expected data from the API response
  [key: string]: any; // Replace with specific keys and types if known
}


export default function Home() {

  const [homeData, setHomeData] = useState<HomeData>({});
  const [imageData, setImageData] = useState<any>({});

  const homeApi = async (): Promise<void> => {
    try {
      const response = await axios.get("https://admin.precision-omics.org/api/");
      // console.log(response,'ghnfgh');
      setHomeData(response.data);
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.error || "An error occurred");
    }
  };

  const imageApi = async (): Promise<void> => {
    try {
      const response = await axios.get("https://admin.precision-omics.org/api/event-with-images");
      console.log(response,'ghnfgh');
      setImageData(response.data);
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.error || "An error occurred");
    }
  };

  // console.log(homeData);
  
  useEffect(()=>{
    homeApi()
    imageApi()
  },[])

  return (
    <>
      <Navbar />

      <MainBanner data={homeData}/>

      <AboutUsContent data={homeData}/>

      <Speakerskey data={homeData?.KeynoteSpeakers}/>
      
      <Speakers data={homeData?.speaker}/>


      <Topics data={homeData} />

      <WhyUs />
      

      <EventSchedules data={homeData} />

      {/* <ImageGallery data={imageData || []}/> */}


      {/* <FunFact /> */}

      <Register data={homeData} />

      {/* <Partner /> */}

      {/* <LatestNews /> */}

      {/* <BuyTicket /> */}

      {/* <Subscribe /> */}

      <Footer />
    </>
  );
}
