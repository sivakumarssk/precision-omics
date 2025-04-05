import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import BlogGrid from "@/components/Blog/BlogGrid";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog"
        shortText="Our Latest News"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
        bgImg="/images/main-bg2.jpg"
      />

      <BlogGrid />

      <Footer />
    </>
  );
}
