"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="" >
          <div className="row">

            {/* <div className="col-lg-12"> */}
              <div className="copyright-area">

              <div className="single-footer-widget social-con">
                <h3>Contact Infomation</h3>
                {/* <span>
                  <i className="icofont-calendar"></i> February 24-26, 2025
                </span> */}

                <p className="contact-authority">
                  <i className="icofont-google-map"></i>The Proxima, 1400 W <br/>  Lombard Street PMB
                  1140 Baltimore, MD 21223, USA
                </p>

                <Link href="tel:+1-667-444-3988" className="contact-authority" style={{justifySelf:'left'}}>
                  <i className="icofont-phone"></i> +1-667-444-3988
                </Link>
              </div>

              <div className="social-con">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/own/proxima.png"
                      alt="logo"
                      width={257}
                      height={257}
                    />
                  </Link>
                </div>

                <ul>
                  <li>
                    <Link href="/abstract">Abstract</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                  <li>
                    <Link href="/Register">Register</Link>
                  </li>
                  <li>
                    <Link href="/dates">Dates</Link>
                  </li>
                  <li>
                    <Link href="/venue">Venue</Link>
                  </li>
                </ul>

                <p>
                  © All Rights Reserved by The Proxima{" "}
                  {/* <a
                    href="https://hibootstrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HiBootstrap
                  </a> */}
                </p>

              </div>

              <div className="single-footer-widget social-con">
                <h3>Social Connection</h3>
                <p>
                  Don&apos;t miss Link thing! Receive daily news You should
                  connect social area for Any Proper Updates Anytime.
                </p>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/people/The-Proxima/61550951262213/ "
                      className="facebook"
                      target="_blank"
                    >
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/the_proxima"
                      className="twitter"
                      target="_blank"
                    >
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      className="instagram"
                      target="_blank"
                    >
                      <i className="icofont-instagram"></i>
                    </a>
                  </li> */}
                </ul>
              </div>


              {/* </div> */}
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
