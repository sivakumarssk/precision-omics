"use client";

import React from "react";
import Link from "next/link";

interface Pass {
  name: string;
  price: number | null;
  benifits: string[];
  _id: string;
}

interface MainBannerProps {
  data: {
    pass1?: Pass[];
    pass2?: Pass[];
    pass3?: Pass[];
  };
}

const Register: React.FC<MainBannerProps> = ({ data }) => {
  // Ensure passes are valid arrays or default to empty arrays
  const pass1 = data?.pass1 || [];
  const pass2 = data?.pass2 || [];
  const pass3 = data?.pass3 || [];

  const allPasses = [...pass1, ...pass2, ...pass3];

  return (
    <div className="pricing-area ptb-120 bg-image">
      <div className="container">
        <div className="section-title">
          <span>Register Plan</span>
          <h2>
            Register <b>Now</b>
          </h2>

          <div className="bg-title">Register</div>
          <div className="bar"></div>
        </div>

        <div className="row justify-content-center">
          {allPasses?.length > 0 ? (
            allPasses.map(
              (pass) =>
                pass?.name &&
                pass?.price !== null && ( // Only display valid passes
                  <div className="col-lg-4 col-md-6" key={pass?._id}>
                    <div className="pricing-table-box">
                      <div className="pricingTable-header">
                        <h3 className="title">{pass?.name}</h3>
                        <div className="price-value">
                          <sup>$</sup>
                          {pass?.price}
                        </div>
                      </div>

                      <ul className="pricing-content">
                        {pass?.benifits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>

                      <Link href="/Register" className="btn btn-primary"  style={{marginTop:"10px"}}>
                        Register Now
                      </Link>
                    </div>
                  </div>
                )
            )
          ) : (
            <p>No passes available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
