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
  data: SpeakersMember[] | null | undefined;
}

const ImageGallery: React.FC<MainBannerProps> = ({ data }) => {
  const speakersData = Array.isArray(data) ? data : [];

  return (
    <div className="speakers-area ptb-120 pb-180">
      <div className="container">
        <div className="row">
          {speakersData.length > 0 ? (
            speakersData.map((speaker, index) => (
              <div className="col-lg-3 col-sm-6" style={{marginBottom:'20px'}} key={index}>
                <div className="speaker-card">
                  <Image
                    src={`https://admin.precision-omics.org${speaker}`}
                    alt={speaker.name}
                    width={250}
                    height={250}
                    className="speaker-image"
                    style={{maxHeight:'300px',height:'300px', width:'100%'}}
                  />
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
        .speaker-info h4 {
          margin-top: 15px;
          font-size: 1.2rem;
          color: #333;
        }
        .speaker-info p {
          font-size: 0.9rem;
          color: #666;
          margin: 10px 0;
        }
        .social-links {
          margin-top: 10px;
        }
        .social-icon {
          display: inline-block;
          margin: 0 5px;
          padding: 8px;
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .social-icon:hover {
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .speaker-card {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
