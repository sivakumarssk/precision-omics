import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import WithLeftSidebar from "@/components/Blog/WithLeftSidebar";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog With Left Sidebar"
        shortText="Our Latest News"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog With Left Sidebar"
        bgImg="/images/main-bg2.jpg"
      />

      <WithLeftSidebar />

      <Footer />
    </>
  );
}
