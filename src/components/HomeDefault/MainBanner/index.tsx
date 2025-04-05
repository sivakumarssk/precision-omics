"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";
import Countdown from "./Countdown";


interface MainBannerProps {
  data: {
    [key: string]: any; // Replace with specific keys and types if known
  };
}

const MainBanner: React.FC<MainBannerProps> = ({ data }) => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      /> */}

      <div
        className="main-banner"
        style={{
          backgroundImage: `url(https://admin.precision-omics.org${data?.backgroundImage})`,
          backgroundSize: 'cover'
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content">

                <div className="usaimgDiv" style={{
                  display: 'flex', marginInline: '40px',
                  marginBlock: '10px', marginTop: '40px'
                }}>

                  {/* <Image
                  className="usaimg"
                    src={"/images/own/usg-logo.png"}
                    alt="usg-logo"
                    width={157}
                    height={157} /> */}
                </div>

                {/* <div className="headingCon"> */}

                <h3>{data?.conferenceHead}</h3>
                <h3 style={{color:'#cc3201'}}>{data?.conferenceHead2}</h3>

                {/* </div> */}

                <ul>
                  <li>
                    <i className="icofont-compass"></i> {data?.conferencepalce}
                  </li>
                  <li>
                    <i className="icofont-calendar"></i>
                    {data?.conferencedate}
                  </li>
                </ul>

                <div className="button-box">
                  <Link href="/Register" className="btn btn-primary">
                    Register Now!
                  </Link>
                  {/* <Link href="#" className="btn btn-primary">
                    Register
                  </Link> */}
                  <Link href="/abstract" className="btn" style={{ backgroundColor: '#041a57', color: 'white' }}>
                    Abstract
                  </Link>
                  {/* <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn d-sm-inline"
                  >
                    <i className="icofont-ui-play"></i> Watch Pormo Video
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        {/* <Countdown endDate="" /> */}

        {/* Shape Images */}
        <div className="shape1">
          <Image
            src="/images/shapes/1.png"
            alt="shape1"
            width={77}
            height={77}
          />
        </div>
        <div className="shape2 rotateme">
          <Image
            src="/images/shapes/2.png"
            alt="shape2"
            width={38}
            height={38}
          />
        </div>
        <div className="shape3 rotateme">
          <Image
            src="/images/shapes/3.png"
            alt="shape3"
            width={51}
            height={57}
          />
        </div>
        <div className="shape4">
          <Image
            src="/images/shapes/4.png"
            alt="shape4"
            width={29}
            height={29}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
