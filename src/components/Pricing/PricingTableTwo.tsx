"use client";

import React from "react";
import Link from "next/link";

const PricingTableTwo: React.FC = () => {
  return (
    <>
      <div className="pricing-area ptb-120 bg-image">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-plan">
                <h3>
                  BASIC PASS{" "}
                  <span>
                    <sup>$</sup>59
                  </span>
                </h3>

                <ul className="pricing-content">
                  <li>Regular Seating</li>
                  <li>Comfortable Seat</li>
                  <li>Coffee Break</li>
                  <li>One Workshop</li>
                  <li>Certificate</li>
                  <li>Custom Badge</li>
                  <li>Access to Artists Meeting</li>
                </ul>

                <Link href="#" className="btn btn-primary">
                  Buy Ticket Now
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-plan">
                <h3>
                  STANDARD PASS{" "}
                  <span>
                    <sup>$</sup>89
                  </span>
                </h3>

                <ul className="pricing-content">
                  <li>Regular Seating</li>
                  <li>Comfortable Seat</li>
                  <li>Coffee Break</li>
                  <li>One Workshop</li>
                  <li>Certificate</li>
                  <li>Custom Badge</li>
                  <li>Access to Artists Meeting</li>
                </ul>

                <Link href="#" className="btn btn-primary">
                  Buy Ticket Now
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-plan">
                <h3>
                  SILVER PASS{" "}
                  <span>
                    <sup>$</sup>99
                  </span>
                </h3>

                <ul className="pricing-content">
                  <li>Regular Seating</li>
                  <li>Comfortable Seat</li>
                  <li>Coffee Break</li>
                  <li>One Workshop</li>
                  <li>Certificate</li>
                  <li>Custom Badge</li>
                  <li>Access to Artists Meeting</li>
                </ul>

                <Link href="#" className="btn btn-primary">
                  Buy Ticket Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTableTwo;
