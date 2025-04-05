import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Sponsors"
        shortText="Check Who Makes This Event Possible!"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sponsors"
        bgImg="/images/main-bg2.jpg"
      />

      <Partner />

      <Footer />
    </>
  );
}
