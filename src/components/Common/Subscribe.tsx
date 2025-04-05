"use client";

import React from "react"; 

const Subscribe: React.FC = () => {
  return (
    <>
      <div className="subscribe-area">
        <div className="container">
          <div className="subscribe-inner">
            <span>Want Something Extra?</span>
            <h2>Sign Up For Our Newsletter</h2>

            <form className="newsletter-form">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                name="EMAIL"
                required 
              />
              <button className="btn btn-primary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
