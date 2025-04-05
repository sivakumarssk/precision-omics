"use client"

import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import PricingTable from "@/components/Pricing/PricingTable";
import Footer from "@/components/Layouts/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import '../abstract/page.css'

export default function Page() {

  const [plans, setPlans] = useState([]);
  const [topicData, setTopicData] = useState([]);

  const [formData, setFormData] = useState({
    title: "Dr.",
    name: "",
    email: "",
    organization: "",
    phone: "",
    city: "",
    country: "",
    interestedIn: "Poster Presentation",
    Address: "",
  });


  useEffect(() => {
    try {
      axios.get("https://admin.precision-omics.org/api/getPlans").then((response) => setPlans(response.data));
      
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(plans);
  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

// Handle file input
const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
        ...prevData,
        attachFile:file,
    }));
};


  const handleSubmit = () => {
    axios.post("https://admin.precision-omics.org/api/api/register", formData).then(() => alert("Registration successful!"));
  };

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Register"
        shortText="Get Your Pass"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Register"
        bgImg="/images/main-bg4.jpg"
      />

      <div className="form-container" style={{justifyContent:'center'}}>
        <form className="form-section" onSubmit={handleSubmit}>
        <h1 style={{marginBottom:'50px'}}>Registration Form</h1>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <select id="title" name="title" value={formData.title} onChange={handleInputChange}>
              <option value="Dr.">Dr.</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Prof.">Prof.</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization/Institution</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Organization/Institution"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter your city name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select id="country" name="country" value={formData.country} onChange={handleInputChange}>
              <option value="">Select country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="interestedIn">Interested In</label>
            <select
              id="interestedIn"
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleInputChange}
            >
              <option value="Poster Presentation">Poster Presentation</option>
              <option value="Oral Presentation">Oral Presentation</option>
              <option value="Workshop">Workshop</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="Address">Billing Address:</label>
            <input
              type="text"
              id="Address"
              name="Address"
              value={formData.Address}
              onChange={handleInputChange}
              placeholder="Enter your Billing Address"
            />
          </div>



          {/* Plan Selection Table */}
          

          <div className="form-group">
            <button type="submit" className="submit-button">
              pay
            </button>
          </div>
          
        </form>

      </div>

      <Footer />
    </>
  );
}
