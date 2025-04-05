"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
            <div className="about-area ptb-120 bg-image">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>Join The Event</span>
                <h2>
                Shaping the Future of <b>Pharma:</b> Advancing Innovation and Collaboration
                </h2>
                <p>
                The 7th International Conference on PharmScience Research & Development is scheduled to take place in San Francisco, CA from February 24 to 26, 2025. This dynamic event, organized by United Scientific Group (USG), a non-profit organization, is dedicated to advancing the field of pharmaceutical science for medical and biophysical chemists across the pharmaceutical, biotech, and academic sectors.


                </p>
                <p>
                The conference will deeply explore the discovery and optimization of small-molecule drug candidates, offering a diverse array of presentations across multiple concurrent tracks. Audiences will have the opportunity to tailor their experience to their specific interests, focusing on current trends, challenges, and opportunities in pharma R&D.
                </p>
                <p>
                Attendees can expect engaging discussions, potential collaborations, and valuable networking opportunities with leading professionals in the Pharma R&D community. The presentations will be of exceptional quality and highly relevant, addressing critical topics and fostering meaningful connections. This conference promises to be a pivotal platform for advancing knowledge and expanding professional networks.
                </p>

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

                <Link href="#" className="btn btn-secondary">
                  Buy Ticket
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/images/own/a1.jpg"
                  className="about-img1"
                  width={750}
                  height={500}
                  alt="about"
                />
                <Image
                  src="/images/own/a2.jpg"
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
