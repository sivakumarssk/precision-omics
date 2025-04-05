"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react"; 

interface HomeData {
  // Define the structure of the expected data from the API response
  [key: string]: any; // Replace with specific keys and types if known
}


const ContactInfo: React.FC = () => {

  const [homeData, setHomeData] = useState<HomeData | null>(null); 

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



  // console.log(homeData);
  
  useEffect(()=>{
    homeApi()
  },[])

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-phone"></i>
            </div>

            <div className="content" style={{height:'120px'}}>
              <h4>Phone / Fax</h4>
              <Link
               href="tel:+1-667-444-3988" className="contact-authority" style={{justifySelf:'left'}}>
                  <i className="icofont-phone"></i> +1-667-444-3988
                </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-email"></i>
            </div>

            <div className="content" style={{height:'120px'}}>
              <h4>E-mail</h4>
              <p>{homeData?.email ?`${homeData?.email}`:'contact@theproxima.org'}</p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-world"></i>
            </div>

            <div className="content" style={{height:'120px'}}>
              <h4>Location</h4>
              <p>The Proxima, 1400 W Lombard Street PMB
              1140 Baltimore, MD 21223, USA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
