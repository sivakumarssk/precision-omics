"use client";

import React from "react";
import Link from "next/link";

interface WhyUs {
  iconName: string;
  title: string;
  shortText: string;
  btnText: string;
  btnLink: string;
}

const WhyUsData: WhyUs[] = [
  {
    iconName: "icofont-headphone-alt-1",
    title: "Renowned Experts",
    shortText:
      "Join visionary leaders and innovators, delivering insights that inspire and drive progress in the field.",
    btnText: "Read More",
    btnLink: "#",
  },
  {
    iconName: "icofont-network-tower",
    title: "Networking",
    shortText:
      "Connect with industry peers, fostering partnerships that propel advancements and innovation.",
    btnText: "Read More",
    btnLink: "#",
  },
  {
    iconName: "icofont-users-social",
    title: "New People",
    shortText:
      "Meet diverse professionals, exchange ideas, and build relationships that spark innovation and growth",
    btnText: "Read More",
    btnLink: "#",
  },
  {
    iconName: "icofont-wink-smile",
    title: "Have Fun",
    shortText:
      "Immerse yourself in vibrant discussions and a dynamic atmosphere that combines learning with enjoyment.",
    btnText: "Read More",
    btnLink: "#",
  },
];

const WhyUs: React.FC = () => {
  return (
    <>
      <div className="why-choose-us">
        <div className="row m-0 justify-content-center">
          {WhyUsData &&
            WhyUsData.slice(0, 4).map((value, i) => (
              <div className="col-lg-3 col-sm-6 p-0" style={{marginBottom:'50px'}} key={i}>
                <div className="single-box">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div className="content">
                        <div className="icon">
                          <i className={value.iconName}></i>
                        </div>
                        <h3>{value.title}</h3>
                        <p>{value.shortText}</p>

                        {/* <div style={{marginBottom:'50px'}}></div> */}

                        {/* <Link href={value.btnLink} className="btn btn-primary">
                          {value.btnText}
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <ul className="slideshow">
          <li>
            <span
              style={{ backgroundImage: `url(/images/own/slide1.jpg)` }}
            ></span>
          </li>
          <li>
            <span
              style={{ backgroundImage: `url(/images/own/slide2.jpg)` }}
            ></span>
          </li>
          <li>
            <span
              style={{ backgroundImage: `url(/images/own/slide3.jpg)` }}
            ></span>
          </li>
          <li>
            <span
              style={{ backgroundImage: `url(/images/own/slide4.jpg)` }}
            ></span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhyUs;
