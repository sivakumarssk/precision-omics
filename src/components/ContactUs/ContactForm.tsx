"use client";

import React, { useState } from "react";
import ContactInfo from "./ContactInfo";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  console.log(formData);
  
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch("https://admin.precision-omics.org/api/addContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit the form.");
      }
      
      alert("Your message has been sent successfully!")
      setFeedback("Your message has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      setFeedback(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact-area ptb-120">
        <div className="container">
          {/* ContactInfo */}
          <ContactInfo />

          <div className="row h-100 align-items-center contact-form">
          <div className="col-lg-4 col-md-12">
              <div className="leave-your-message">
                <h3>Leave Your Message</h3>
                <p>
                  If you have any questions about the services we provide simply
                  use the form below. We try and respond to all queries and
                  comments within 24 hours.
                </p>

                <div className="stay-connected">
                  <h3>Stay Connected</h3>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/people/The-Proxima/61550951262213/ " target="_blank">
                        <i className="icofont-facebook"></i>
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/the_proxima" target="_blank">
                        <i className="icofont-twitter"></i>
                        <span>Twitter</span>
                      </a>
                    </li>
                    {/* <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram"></i>
                        <span>Instagram</span>
                      </a>
                    </li> */}
                    {/* <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="icofont-linkedin"></i>
                        <span>Linkedin</span>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="phone">Phone phone*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Message*</label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols={30}
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>

              {feedback && (
                <p style={{ marginTop: "10px", color: feedback.includes("successfully") ? "green" : "red" }}>
                  {feedback}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
