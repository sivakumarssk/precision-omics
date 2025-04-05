"use client";

import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import WhyUs from "@/components/Common/WhyUs";
import Speakers from "@/components/Common/Speakers";
import Cta from "@/components/Common/Cta";
import FunFact from "@/components/Common/FunFact";
import Partner from "@/components/Common/Partner";
import BuyTicket from "@/components/Common/BuyTicket";
import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle="About Us"
        shortText="Are you ready to attend?"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImg="/images/own/slide4.jpg"
      />

     <AboutUsContent />

      <WhyUs />

      {/* <Speakers />

      <Cta />

      <FunFact /> */}

      <Partner />

      <BuyTicket />

      <Subscribe />
 
      <Footer />
    </>
  );
}
