
"use client"

import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import List from "@/components/dates/List";
import { useEffect, useState } from "react";
import axios from "axios";

interface DateData { 
  [key: string]: any;
}

export default function Page() {

    const [dateData, setDateData] = useState<DateData>({});

    const dateApi = async (): Promise<void> => {
      try {
        const response = await axios.get("https://admin.precision-omics.org/api/getdates");
        // console.log(response,'ghnfgh');
        setDateData(response.data.data);
      } catch (error: any) {
        console.error(error);
        alert(error.response?.data?.error || "An error occurred");
      }
    };
  
  
  
    // console.log(homeData);
    
    useEffect(()=>{
      dateApi()
    },[])


    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Dates"
                shortText=""
                homePageUrl="/"
                homePageText="Home"
                activePageText="Dates"
                bgImg="/images/own/slide3.jpg"
            />

            {/* <SpeakersOne /> */}
           {
             Object.keys(dateData).map((key)=>{
              console.log(key)
              
            return(
              <List key={key} heading={key} data={dateData[key]}/>
            )   
             })
            }

            <Footer />
        </>
    );
}
