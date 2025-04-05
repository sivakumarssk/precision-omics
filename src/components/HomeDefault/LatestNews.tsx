"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-120 bg-image">
        <div className="container">
          <div className="section-title">
            <span>Info Update!</span>
            <h2>
            Our Successful <b>Past Conferences</b>
            </h2>

            <div className="bg-title" style={{right:'5%'}}>Past Conferences</div>

            <Link href="/blog" className="btn btn-primary">
              View All News
            </Link>

            <div className="bar"></div>
          </div>

          <div className="row">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="blog-slides"
            >
              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog1.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog/details">Pharma R&D-2019</Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">06 March 2019</span>
                    <h3>
                      <Link href="/blog/details">
                      Pharma R&D-2019
                      </Link>
                    </h3>
                    <p>
                    First edition of International Conference on Pharmscience Research & Development was held at Paris, France from March 04-06, 2019.
                    </p>
                    <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog2.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog/details">Pharma R&D-2020</Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">06 March 2020</span>
                    <h3>
                      <Link href="/blog/details">
                      Pharma R&D-2020
                      </Link>
                    </h3>
                    <p>
                    First edition of International Conference on Pharmscience Research & Development was held at Paris, France from March 04-06, 2019.
                    </p>
                    <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog3.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog/details">Pharma R&D-2021</Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">06 March 2021</span>
                    <h3>
                      <Link href="/blog/details">
                      Pharma R&D-2021
                      </Link>
                    </h3>
                    <p>
                    First edition of International Conference on Pharmscience Research & Development was held at Paris, France from March 04-06, 2019.
                    </p>
                    <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog3.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog/details">Pharma R&D-2022</Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">06 March 2022</span>
                    <h3>
                      <Link href="/blog/details">
                      Pharma R&D-2022
                      </Link>
                    </h3>
                    <p>
                    First edition of International Conference on Pharmscience Research & Development was held at Paris, France from March 04-06, 2019.
                    </p>
                    <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog3.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog/details">Pharma R&D-2023</Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">06 March 2023</span>
                    <h3>
                      <Link href="/blog/details">
                      Pharma R&D-2023
                      </Link>
                    </h3>
                    <p>
                    First edition of International Conference on Pharmscience Research & Development was held at Paris, France from March 04-06, 2019.
                    </p>
                    <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog3.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog/details">Pharma R&D-2024</Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">06 March 2024</span>
                    <h3>
                      <Link href="/blog/details">
                      Pharma R&D-2024
                      </Link>
                    </h3>
                    <p>
                    First edition of International Conference on Pharmscience Research & Development was held at Paris, France from March 04-06, 2019.
                    </p>
                    <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              
              
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
