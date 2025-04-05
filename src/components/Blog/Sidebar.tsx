"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="sidebar">
        <div className="widget widget_search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="#">AJAX</Link>
            </li>
            <li>
              <Link href="#">Apache</Link>
            </li>
            <li>
              <Link href="#">CSS</Link>
            </li>
            <li>
              <Link href="#">PHP</Link>
            </li>
            <li>
              <Link href="#">Django</Link>
            </li>
            <li>
              <Link href="#">Error</Link>
            </li>
            <li>
              <Link href="#">IIS</Link>
            </li>
            <li>
              <Link href="#">JavaScript</Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_recent_entries">
          <h3 className="widget-title">Recent Posts</h3>

          <ul>
            <li>
              <Link href="/blog/details">
                <Image
                  src="/images/blog1.jpg"
                  alt="blog"
                  width={800}
                  height={550}
                />
              </Link>

              <h5>
                <Link href="/blog/details">
                  The Most Popular New top Business Apps
                </Link>
              </h5>
              <p className="date">21 March, 2024</p>
            </li>

            <li>
              <Link href="/blog/details">
                <Image
                  src="/images/blog2.jpg"
                  alt="blog"
                  width={800}
                  height={550}
                />
              </Link>

              <h5>
                <Link href="/blog/details">
                  3 WooCommerce Plugins to Boost Sales
                </Link>
              </h5>
              <p className="date">20 March, 2024</p>
            </li>

            <li>
              <Link href="/blog/details">
                <Image
                  src="/images/blog3.jpg"
                  alt="blog"
                  width={800}
                  height={550}
                />
              </Link>

              <h5>
                <Link href="/blog/details">
                  The Best Marketing top Management Tools
                </Link>
              </h5>
              <p className="date">27 March, 2024</p>
            </li>

            <li>
              <Link href="/blog/details">
                <Image
                  src="/images/blog4.jpg"
                  alt="blog"
                  width={800}
                  height={550}
                />
              </Link>

              <h5>
                <Link href="/blog/details">
                  How to Build Link Business Dashboard
                </Link>
              </h5>
              <p className="date">27 January, 2024</p>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="#">Error</Link>
            <Link href="#">Cake Bake</Link>
            <Link href="#">Dromzone</Link>
            <Link href="#">File</Link>
            <Link href="#">Yii</Link>
            <Link href="#">Yii2</Link>
            <Link href="#">UUID</Link>
            <Link href="#">Setup</Link>
            <Link href="#">Error</Link>
            <Link href="#">Cake Bake</Link>
            <Link href="#">Dromzone</Link>
            <Link href="#">File</Link>
            <Link href="#">Yii</Link>
            <Link href="#">Yii2</Link>
            <Link href="#">UUID</Link>
            <Link href="#">Setup</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
