import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import DetailsContent from "@/components/Blog/DetailsContent";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        shortText="Our Latest News"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImg="/images/main-bg1.jpg"
      />

      <DetailsContent />

      <Footer />
    </>
  );
}
