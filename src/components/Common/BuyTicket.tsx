"use client";

import React from "react";
import Link from "next/link"; 

const BuyTicket: React.FC = () => {
  return (
    <>
      <div 
        className="buy-tickets-area ptb-120"
        style={{
          backgroundImage: `url(/images/buy-tickets-bg.jpg)`
        }}
      >
        <div className="buy-tickets">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title">
                  <span>Hurry Up!</span>
                  <h2>Book Your Seat</h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="buy-ticket-btn">
                  <Link href="#" className="btn btn-primary">
                    Buy Ticket!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyTicket;
