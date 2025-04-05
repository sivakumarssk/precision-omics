"use client";

import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import EventSchedulesThree from "@/components/Schedule/EventSchedulesThree";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Schedule"
        shortText="Get Your Tickets"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Schedule"
        bgImg="/images/main-bg1.jpg"
      />

      <EventSchedulesThree />

      <Footer />
    </>
  );
}
