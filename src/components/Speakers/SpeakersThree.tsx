"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SpeakersMember {
  image: string;
  name: string;
  description: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  iconName: string;
  url: string;
}

interface MainBannerProps {
  data: SpeakersMember[] | null | undefined;
}

const SpeakersThree: React.FC<MainBannerProps> = ({data}) => {
  const speakersData = Array.isArray(data) ? data : [];

  return (
    <div className="speakers-area ptb-120 pb-180">
      <div className="container">
        <div className="section-title">
          <span>Listen to the Committe</span>
          <h2>Who&apos;s Committe</h2>
          <div className="bar"></div>
          <div className="bg-title">Committe</div>
        </div>

        <div className="row">
          {speakersData.length > 0 ? (
            speakersData.map((speaker, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="single-speakers" style={{marginBottom:'20px'}}>
                  <Image
                    src={`https://admin.precision-omics.org${speaker.image}`}
                    alt={speaker.name}
                    width={300}
                    height={350}
                    style={{maxHeight:'350px',height:'350px', width:'100%'}}
                    className="img-fluid"
                  />
                  <div className="speakers-content">
                    <h3>{speaker.name}</h3>
                    <span>{speaker.description}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>No speakers available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakersThree;
