"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";

const DetailsContent: React.FC = () => {
  return (
    <>
      <div className="blog-details-area ptb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details">
                <div className="post-image">
                  <Image
                    src="/images/blog1.jpg"
                    alt="blog"
                    width={800}
                    height={550}
                  />
                </div>

                <h3>The Most Popular New top Business Apps</h3>

                <div className="blog-meta">
                  <ul>
                    <li>
                      <i className="icofont-ui-user"></i>{" "}
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="icofont-clock-time"></i> June 20, 2024
                    </li>
                    <li>
                      <i className="icofont-comment"></i>{" "}
                      <Link href="#">6 Comments</Link>
                    </li>
                    <li>
                      <i className="icofont-ui-folder"></i>{" "}
                      <Link href="#">Event</Link>
                    </li>
                  </ul>
                </div>

                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in that some form by
                  injected humour or randomised words which don’t look even
                  slightly believable. If you are going to use Link passage of
                  Lorem Ipsum you need to be sure there isn’t anything of
                  embarrassing. There are many that an variations of passages of
                  Lorem Ipsum available but the majority have suffered
                  alteration in that some form by Link injected humour or
                  randomised words which don’t look even of slightly believable.
                  If you are going to use Link the passage of Lorem Ipsum you
                  need to be sure there isn’t anything embarrassing.
                </p>

                <blockquote className="blockquote">
                  <p>
                    There are many variations of passages of Lorem the Ipsum
                    available but the that as that majority have is suffered
                    alteration.
                  </p>
                </blockquote>

                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in that some form by
                  injected humour or randomised words which don’t look even
                  slightly believable. If you are going to use Link passage of
                  Lorem Ipsum you need to be sure there isn’t anything of
                  embarrassing.
                </p>

                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in that some form by
                  injected humour or randomised words which don’t look even
                  slightly believable. If you are going to use Link passage of
                  Lorem Ipsum you need to be sure there isn’t anything of
                  embarrassing.
                </p>

                <p>
                  Randomised words which don’t look even slightly believable. If
                  you are going Link to use Link passage you need to be sure
                  there isn’t anything embarrassing. Consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>

              <div className="post-tag-media">
                <div className="row h-100 align-items-center">
                  <div className="col-lg-6">
                    <ul className="tag">
                      <li>
                        <span>Tags:</span>
                      </li>
                      <li>
                        <Link href="#">Event,</Link>
                      </li>
                      <li>
                        <Link href="#">App,</Link>
                      </li>
                      <li>
                        <Link href="#">Software</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6">
                    <ul className="social-share">
                      <li>
                        <span>Share on:</span>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank">
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="icofont-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="comments" className="comments-area">
                <h2 className="comments-title">3 Comments</h2>

                <ol className="comment-list">
                  <li className="comment">
                    <article className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <Image
                            src="/images/author1.jpg"
                            className="avatar"
                            alt="blog"
                            width={150}
                            height={150}
                          />
                          <b className="fn">John Smith</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          March 28, 2024 at 7:16 am
                        </div>
                      </footer>

                      <div className="comment-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat Link ante. It is Link long
                          established fact that Link reader will be distracted
                          by the readable content of Link page when looking at
                          its layout.
                        </p>
                      </div>

                      <div className="reply">
                        <Link href="#" className="comment-reply-link">
                          Reply
                        </Link>
                      </div>
                    </article>

                    <ol className="children">
                      <li className="comment">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <Image
                                src="/images/author2.jpg"
                                className="avatar"
                                alt="blog"
                                width={150}
                                height={150}
                              />
                              <b className="fn">Steven Warner</b>
                              <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                              March 28, 2024 at 7:16 am
                            </div>
                          </footer>

                          <div className="comment-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer posuere erat Link ante. It is Link
                              long established fact that Link reader will be
                              distracted by the readable content of Link page
                              when looking at its layout.
                            </p>
                          </div>

                          <div className="reply">
                            <Link href="#" className="comment-reply-link">
                              Reply
                            </Link>
                          </div>
                        </article>
                      </li>
                    </ol>
                  </li>

                  <li className="comment">
                    <article className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <Image
                            src="/images/author3.jpg"
                            className="avatar"
                            alt="blog"
                            width={150}
                            height={150}
                          />
                          <b className="fn">John Smith</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          March 28, 2024 at 7:16 am
                        </div>
                      </footer>

                      <div className="comment-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat Link ante. It is Link long
                          established fact that Link reader will be distracted
                          by the readable content of Link page when looking at
                          its layout.
                        </p>
                      </div>

                      <div className="reply">
                        <Link
                          href="#" 
                          className="comment-reply-link"
                        >
                          Reply
                        </Link>
                      </div>
                    </article>
                  </li>
                </ol>

                <div id="respond" className="comment-respond">
                  <h3 className="comment-reply-title">Leave A Comment</h3>

                  <form id="commentform" className="comment-form">
                    <p className="comment-notes">
                      Your email address will not be published.
                    </p>

                    <p className="comment-form-comment">
                      <textarea
                        id="comment"
                        placeholder="Comment"
                        cols={40}
                        rows={4}
                      />
                    </p>
                    <p className="comment-form-author">
                      <input id="author" placeholder="Name" type="text" />
                    </p>
                    <p className="comment-form-email">
                      <input id="email" placeholder="Email" type="text" />
                    </p>
                    <p className="comment-form-url">
                      <input id="url" placeholder="Website" type="text" />
                    </p>
                    <p className="form-submit">
                      <input
                        name="submit"
                        type="submit"
                        id="submit"
                        className="submit"
                        value="Post A Comment"
                      />
                    </p>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsContent;
