import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import WithRightSidebar from "@/components/Blog/WithRightSidebar";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog With Right Sidebar"
        shortText="Our Latest News"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog With Right Sidebar"
        bgImg="/images/main-bg2.jpg"
      />

      <WithRightSidebar />

      <Footer />
    </>
  );
}
