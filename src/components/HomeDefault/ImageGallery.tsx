"use client";

import React from "react";
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
  bgColor: string;
}

interface MainBannerProps {
  data: {
    eventDate: string; // Event date to display in the heading
    eventImages: string[]; // Array of images for the event
  };
}

const ImageGallery: React.FC<MainBannerProps> = ({ data }) => {
  const speakersData = Array.isArray(data?.eventImages) ? data?.eventImages : [];

  return (
    <div className="speakers-area ptb-120 pb-180 bg-image">
      <div className="container">
        {/* Heading Section */}
        <div className="section-title text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Past Event</h1>
          <p className="text-lg text-gray-600">{data?.eventDate}</p>
        </div>

        {/* Speakers Gallery */}
        <div className="row">
          {speakersData.length > 0 ? (
            speakersData.map((speaker, index) => (
              <div className="col-lg-3 col-sm-6" style={{marginBottom:'20px'}} key={index}>
                <div className="speaker-card">
                  <Image
                    src={`https://admin.precision-omics.org${speaker}`}
                    alt={`Speaker ${index + 1}`}
                    width={250}
                    height={250}
                    style={{maxHeight:'300px',height:'300px', width:'100%'}}
                    className="speaker-image"
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="text-center text-gray-600">No speakers available.</p>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .speaker-card {
          border: 2px solid #e1e1e1;
          border-radius: 15px;
          padding: 15px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .speaker-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .speaker-image {
          border-radius: 10px;
          object-fit: cover;
          width: 100%;
          max-height: 250px;
        }
        .section-title h1 {
          font-size: 2.5rem;
          color: #333;
        }
        .section-title p {
          font-size: 1.125rem;
          color: #666;
          margin-top: 5px;
        }
        @media (max-width: 768px) {
          .speaker-card {
            margin-bottom: 20px;
          }
          .section-title h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
