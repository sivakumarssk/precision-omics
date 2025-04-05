import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import PricingTableTwo from "@/components/Pricing/PricingTableTwo";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle="Pricing 2"
        shortText="Get Your Tickets"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing 2"
        bgImg="/images/main-bg4.jpg"
      />

      <PricingTableTwo />
 
      <Footer />
    </>
  );
}
