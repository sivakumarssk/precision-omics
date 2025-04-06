"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./MenuItem";
// import { menus } from "../../../libs/menus";
import axios from "axios";

interface HomeData {
  logo: string;
  // Add other properties you expect from the API response
}

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const [homeData, setHomeData] = useState<HomeData | null>(null); 
  const [dynamicMenus, setDynamicMenus] = useState([]);

  const homeApi = async (): Promise<void> => {
    try {
      const response = await axios.get("https://admin.precision-omics.org/api/");
      // console.log(response,'ghnfgh');
      setHomeData(response.data);
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.error || "An error occurred");
    }
  };

  const fetchDynamicMenus = async () => {
    try {
      const response = await axios.get('https://admin.precision-omics.org/api/menus');
      // return response.data.menus;
      setDynamicMenus(response.data.menus)
    } catch (error) {
      console.error("Error fetching dynamic menus:", error);
      return [];
    }
  };

  // console.log(homeData);
  
  useEffect(()=>{
    homeApi()
    fetchDynamicMenus()
  },[])

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

const menus = [
      {
        label: "Home",
        link: "/",
        // submenu: [
        //   {
        //     label: "Home Demo - 1",
        //     link: "/",
        //   },
        //   {
        //     label: "Home Demo - 2",
        //     link: "/home-2/",
        //   },
        //   {
        //     label: "Home Demo - 3",
        //     link: "/home-3/",
        //   },
        //   {
        //     label: "Home Demo - 4",
        //     link: "/home-4/",
        //   },
        //   {
        //     label: "Home Demo - 5",
        //     link: "/home-5/",
        //   },
        // ],
      },
    
      {
        label: "Experts",
        link: "#",
        submenu: [
              {
                label: "Speakers",
                link: "/speakers/"
              },
              {
                label: "Keynote Speakers",
                link: "/speakers/KeynoteSpeakers/",
              },
              {
                label: "Committe",
                link: "/speakers/Committe/",
              },
        ]
      },
    
      {
        label: "Abstract",
        link: "/abstract/",
      },
      // {
      //   label: "Past Events",
      //   link: "#",
      //   submenu: dynamicMenus,
      // },
    
      {
        label: "Guidelines",
        link: "#",
        submenu: [
          {
            label: "speaker",
            link: "/guidelines/",
          }, 
          {
            label: "poster",
            link: "/guidelines/poster/",
          }, 
          {
            label: "chair",
            link: "/guidelines/chair/",
          }, {
            label: "virtual",
            link: "/guidelines/virtual/",
          },
        ]
      },
      
      {
        label: "Dates",
        link: "/dates/",
      },
    
      {
        label: "Agenda",
        link: "/agenda/",
      },
    
      {
        label: "Venue",
        link: "/venue/",
      },
    
      // {
      //   label: "Pages",
      //   link: "#",
      //   submenu: [
      //     {
      //       label: "About Us",
      //       link: "/about-us/",
      //     },
      //     {
      //       label: "About Us 2",
      //       link: "/about-us/2/",
      //     },
      //     {
      //       label: "About Us 3",
      //       link: "/about-us/3/",
      //     },
      //     {
      //       label: "Pricing",
      //       link: "/pricing/",
      //     },
      //     {
      //       label: "Pricing 2",
      //       link: "/pricing/2/",
      //     },
      //     {
      //       label: "Speakers",
      //       link: "/speakers/",
      //     },
      //     {
      //       label: "Schedule",
      //       link: "/schedule/",
      //     },
      //     {
      //       label: "Login",
      //       link: "/auth/login/",
      //     },
      //     {
      //       label: "Sign Up",
      //       link: "/auth/signup/",
      //     },
      //     {
      //       label: "Faq",
      //       link: "/faq/",
      //     },
      //     {
      //       label: "Terms & Conditions",
      //       link: "/terms-conditions/",
      //     },
      //     {
      //       label: "Privacy Policy",
      //       link: "/privacy-policy/",
      //     },
      //     {
      //       label: "Coming Soon",
      //       link: "/coming-soon/",
      //     },
      //   ],
      // },
    
      // {
      //   label: "Speakers",
      //   link: "#",
      //   submenu: [
      //     {
      //       label: "Speakers 1",
      //       link: "/speakers/",
      //     },
      //     {
      //       label: "Speakers 2",
      //       link: "/speakers/2/",
      //     },
      //     {
      //       label: "Speakers 3",
      //       link: "/speakers/3/",
      //     },
      //   ],
      // },
    
      // {
      //   label: "Schedule",
      //   link: "#",
      //   submenu: [
      //     {
      //       label: "Schedule 1",
      //       link: "/schedule/",
      //     },
      //     {
      //       label: "Schedule 2",
      //       link: "/schedule/2/",
      //     },
      //     {
      //       label: "Schedule 3",
      //       link: "/schedule/3/",
      //     },
      //     {
      //       label: "Schedule 4",
      //       link: "/schedule/4/",
      //     },
      //   ],
      // },
    
      // {
      //   label: "Sponsors",
      //   link: "/sponsors/",
      // },
    
      // {
      //   label: "Blog",
      //   link: "#",
      //   submenu: [
      //     {
      //       label: "Blog Grid",
      //       link: "/blog/",
      //     },
      //     {
      //       label: "Blog Grid 2",
      //       link: "/blog/column-2/",
      //     },
      //     {
      //       label: "Blog Left Sidebar",
      //       link: "/blog/with-left-sidebar/",
      //     },
      //     {
      //       label: "Blog Right Sidebar",
      //       link: "/blog/with-right-sidebar/",
      //     },
      //     {
      //       label: "Blog Details",
      //       link: "/blog/details/",
      //     },
      //   ],
      // },
      
      {
        label: "Contact Us",
        link: "/contact-us/",
      },
    //     {
      //       label: "Pricing 2",
      //       link: "/pricing/2/",
      //     },
    ];


  return (
    <>
      <div id="navbar" className="elkevent-nav">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container" style={{maxWidth:'1400px'}}>
            <Link href="/" className="navbar-brand">
              <Image
                src={homeData?.logo ? `https://admin.precision-omics.org${homeData.logo}` : '/images/own/proxima.png'}
                alt="logo"
                width={257}
                height={257}
                style={{maxHeight:'90px', maxWidth:'250px'}}
              />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                {menus.map((menuItem) => (
                  <MenuItem key={menuItem.label} {...menuItem} />
                ))}
              </ul>

              {/* others-options */}
              <div className="others-option">
                <ul>
                  <li>
                    <Link href="/Register" className="btn btn-primary">
                      Register Now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
