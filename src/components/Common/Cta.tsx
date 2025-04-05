"use client";

import React from "react";
import Link from "next/link";

const Cta: React.FC = () => {
  return (
    <>
      <div className="cta-area">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-8">
              <h3>Build Your Dream Brain Today!</h3>
              <span>
                We&apos;re professional with experience of more than a decade
              </span>
            </div>

            <div className="col-lg-4 text-right">
              <Link href="#" className="btn btn-secondary">
                Buy Ticket!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
