"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface MainBannerProps {
  data: {
    [key: string]: any; // Replace with specific keys and types if known
  };
}



const AboutUsContent: React.FC<MainBannerProps>  = ({data}) => {

  const getFullImageUrl = (path?: string): string => {
    return path ? `https://admin.precision-omics.org${path}` : "/images/own/a1.jpg";
  };
  
  // {console.log(`https://admin.precision-omics.org${data.aboutImage1}`)}
  // console.log(data);
  
  return (
    <>
      <div className="about-area ptb-120 bg-image">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>Join The Event</span>
                <h2>
                {data?.aboutHeading}
                </h2>
                <p
          dangerouslySetInnerHTML={{
            __html: data?.aboutDes || "<span>No content available</span>",
          }}
        ></p>
                {/* <div className="signature">
                  <Image
                    src="/images/signature.png"
                    alt="signature"
                    width={142}
                    height={68}
                  />
                </div> */}

                {/* <Link href="/about-us" className="btn btn-primary">
                  Read More
                  <i className="icofont-double-right"></i>
                </Link> */}

                {/* <Link href="/Register" className="btn btn-secondary">
                Register
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src={getFullImageUrl(data?.aboutImage1)}
                  className="about-img1"
                  width={750}
                  height={500}
                  alt="about"
                />
                <Image
                  src={getFullImageUrl(data?.aboutImage2)}
                  className="about-img2"
                  alt="about"
                  width={309}
                  height={424}
                />
                <Image
                  src="/images/shapes/5.png"
                  className="shape-img"
                  alt="about"
                  width={111}
                  height={111}
                />

                {/* <Link href="/about-us" className="btn btn-primary">
                  Explore More About
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
