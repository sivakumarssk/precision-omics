"use client";

import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import "../abstract/page.css";
import "./page.css";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import Image from "next/image";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const stripePromise = loadStripe("pk_live_51NI3kpSJK88knjYmtyhvaIWqcao2Of3JwX49UqnIaL4VkNEbmfKzvCcaXcpGdZ5Cn522RpxFmUzQXG6ZlCdQ9qbD00tI3YPqJf"); // Replace with your Stripe publishable key

export default function PlansPage() {
  const [plans, setPlans] = useState([]);
  const [activePlanId, setActivePlanId] = useState(null);
  const [selectedParticipantType, setSelectedParticipantType] = useState(null);
  const [highlightedPlanId, setHighlightedPlanId] = useState(null);
  const [accommodations, setAccommodations] = useState([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [participantPrice, setParticipantPrice] = useState(0);
  const [accommodationPrice, setAccommodationPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentGateway, setPaymentGateway] = useState("stripe");
  const [paypalApprove, setPaypalApprove] = useState(false);
  const [countryData, setCountryData] = useState([]);

  const [formData, setFormData] = useState({
    title: "Dr.",
    name: "",
    email: "",
    organization: "",
    phone: "",
    // city: "",
    country: "",
    // interestedIn: "Poster Presentation",
    address: "",
  });

  const [guide, setGuide] = useState({});

  const guideApi = async () => {
    try {
      const response = await axios.get("https://admin.precision-omics.org/api/guide-plans");
      console.log(response, 'ghnfgh');
      setGuide(response.data);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || "An error occurred");
    }
  };


  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentGatewayChange = (e) => {
    setPaymentGateway(e.target.value);
  };

  const fetchCountryData = async () => {
    try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countries = response.data.map((country) => ({
            name: country.name.common,
            code: country.cca2,
        }));
        setCountryData(countries.sort((a, b) => a.name.localeCompare(b.name))); // Sort alphabetically
    } catch (error) {
        console.error(error);
        alert("Failed to load country data.");
    }
};

useEffect(()=>{
  fetchCountryData()
  guideApi()
},[])

  // Fetch plans and accommodations
  useEffect(() => {
    const today = new Date();

    axios.get("https://admin.precision-omics.org/api/getPlans").then((response) => {
      const updatedPlans = response.data.map((plan) => ({
        ...plan,
        isActive:
          new Date(plan.startDate) <= today && new Date(plan.endDate) >= today,
      }));
      setPlans(updatedPlans);

      const activePlan = updatedPlans.find((plan) => plan.isActive);
      if (activePlan) setActivePlanId(activePlan._id);
    });

    axios.get("https://admin.precision-omics.org/api/getAccommodations").then((response) => setAccommodations(response.data));
  }, []);

  // Update total price whenever participant or accommodation changes
  useEffect(() => {
    const basePrice = participantPrice + accommodationPrice;
    const totalWithFee = basePrice + basePrice * 0.02; // Add 2% processing fee
    setTotalPrice(totalWithFee.toFixed(2));
  }, [participantPrice, accommodationPrice]);

  // Handle participant selection
  const handleParticipantTypeSelection = (participantTypeId) => {
    setSelectedParticipantType(participantTypeId);

    const activePlan = plans.find((plan) => plan._id === activePlanId);
    if (activePlan) {
      const selectedPriceObj = activePlan.prices.find(
        (price) => price.participationType._id === participantTypeId
      );
      if (selectedPriceObj) {
        setParticipantPrice(selectedPriceObj.price); // Set the new participant price
        setHighlightedPlanId(activePlan._id); // Highlight the active plan's selected price
      } else {
        setParticipantPrice(0); // No price for this participant type
        setHighlightedPlanId(null);
      }
    }
  };

  // Handle accommodation selection and deselection
  const handleAccommodationSelection = (accommodationId, name, price) => {
    if (selectedAccommodation?.id === accommodationId) {
      // Deselect if the same accommodation is selected again
      setSelectedAccommodation(null);
      setAccommodationPrice(0); // Reset accommodation price
    } else {
      // Select a new accommodation
      setSelectedAccommodation({ id: accommodationId, name, price });
      setAccommodationPrice(price); // Update accommodation price
    }
  };

  // Validate form inputs and selected plan
  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      // !formData.city ||
      !formData.country ||
      !formData.address ||
      !selectedParticipantType
    ) {
      alert("Please fill out all required fields and select a plan.");
      return false;
    }
    return true;
  };

  
  // Submit form data and initiate payment
  const handleStripePayment = async (e) => {

    const stripe = await stripePromise;

    try {
      // Prepare selected plan details
      const selectedPlanDetails = {
          planId: activePlanId,
      planName: plans.find((plan) => plan._id === activePlanId)?.name || "",
      participantType: selectedParticipantType || "",
      price: participantPrice,
      };

      // Send data to the backend
      const response = await axios.post("https://admin.precision-omics.org/api/register-and-pay", {
        formData,
        selectedPlan: selectedPlanDetails,
        selectedAccommodations:selectedAccommodation,
        lineItems: [
          {
            name: "Conference Plan and Accommodations",
            price: totalPrice, // Do not multiply by 100 here
            currency: "eur",
            quantity: 1,
          },
        ],
      });


      // Redirect to Stripe checkout
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Failed to start payment. Please try again.");
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!participantPrice) {
      alert("Please select a valid plan.");
      return;
    }

    if (!validateForm()) return;

    if (paymentGateway === "stripe") {
      handleStripePayment();
    }else if(paymentGateway === "paypal"){
      setPaypalApprove(true)
    }
  };

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Plans and Accommodations"
        shortText="Choose Your Plan"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Plans"
        bgImg="/images/main-bg4.jpg"
      />
      <div className="plans-container">
        <form className="form-section">
          <h1 style={{ marginBottom: "50px" }}>Registration Form</h1>
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
              required
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
              required
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter your city name"
              required
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select id="country" name="country" required value={formData.country} onChange={handleInputChange}>
            <option value="">Select country</option>
                            {countryData.map((country) => (
                                <option key={country.code} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
            </select>
          </div>
          {/* <div className="form-group">
            <label htmlFor="interestedIn">Interested In</label>
            <select id="interestedIn" name="interestedIn" required value={formData.interestedIn} onChange={handleInputChange}>
              <option value="Poster Presentation">Poster Presentation</option>
              <option value="Oral Presentation">Oral Presentation</option>
              <option value="Workshop Presentation">Workshop Presentation</option>
              <option value="Virtual Presentation">Virtual Presentation</option>
            </select>
          </div> */}
          <div className="form-group">
            <label htmlFor="address">Billing Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your Billing Address"
              required
            />
          </div>



          {/* Plan Selection Table */}
          <div className="plansSubCon">

          <div className="plansSubCon">
            <h1 className="plan-head">Plans</h1>
            {plans.length > 0 ? (
              <table className="plans-table">
                <thead>
                  <tr>
                    <th>Type of Participation</th>
                    {plans.map((plan) => (
                      <th key={plan._id}>
                        <div>{plan.name}</div>
                        <div>Before {new Date(plan.endDate).toLocaleDateString()}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {plans[0]?.prices.map((participant, index) => (
                    <tr key={index}>
                      <td>
                        <label>
                          <input
                            type="radio"
                            name="participant"
                            onChange={() =>
                              handleParticipantTypeSelection(participant.participationType._id)
                            }
                          />
                          {participant.participationType.name}
                        </label>
                      </td>
                      {plans.map((plan) => {
                        const priceObj = plan.prices.find(
                          (p) => p.participationType._id === participant.participationType._id
                        );
                        const isSelected =
                          highlightedPlanId === plan._id &&
                          selectedParticipantType === participant.participationType._id;
                        return (
                          <td
                            key={plan._id}
                            style={{
                              backgroundColor: isSelected ? "#d4edda" : "transparent",
                              textAlign: "center",
                            }}
                          >
                            {priceObj?.price ? `€${priceObj?.price}` : "N/A"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No plans available.</p>
            )}
          </div>


                     {/* Accommodations */}
                     <div className="plansSubCon">
            <h1 className="plan-head">Accommodations</h1>
            {accommodations.length > 0 ? (
              <table className="accommodations-table">
                <thead>
                  <tr>
                    <th>Accommodation</th>
                    <th>Price (€)</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  {accommodations.map((acc) => (
                    <tr key={acc._id}>
                      <td>{acc.name}</td>
                      <td>{acc.price}</td>
                      <td>
                        <input
                          type="radio"
                          name="accommodation"
                          checked={selectedAccommodation?.id === acc._id}
                          onChange={() => handleAccommodationSelection(acc._id, acc.name, acc.price)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No accommodations available.</p>
            )}
          </div>


            {/* Display Total Price */}
            <div className="plansSubCon">

           
            <div className="form-group">
            <h2 className="plan-head" style={{textAlign:'center',marginBlock:'30px'}}>Select Payment Gateway</h2>
            <div className="paymentCon">
              <div className="paymentSubCon">

              <input
                  type="radio"
                  name="paymentGateway"
                  value="stripe"
                  checked={paymentGateway === "stripe"}
                  onChange={handlePaymentGatewayChange}
                />

            <Image
               src={'/images/own/stripe.png'}
               alt={"stripe"}
               width={150}
               height={150}
               className="img-fluid"
              />
             
              </div>

              <div className="paymentSubCon">

              <input
                  type="radio"
                  name="paymentGateway"
                  value="paypal"
                  checked={paymentGateway === "paypal"}
                  onChange={handlePaymentGatewayChange}
                />

              <Image
               src={'/images/own/PayPal.png'}
               alt={"Paypal"}
               width={150}
               height={150}
               className="img-fluid"
              />
              </div>
            </div>
          </div>


              {/* <h2>Total Price: €{totalPrice}</h2> */}
              <p style={{textAlign:'center'}}>Note : (Includes 2% processing fee)</p>
            </div>
            </div>
     {/* PayPal Buttons */}
     {paypalApprove && (
      <div style={{maxWidth:'60%',margin:'0 auto'}}>
            <PayPalScriptProvider
              options={{
                "client-id": "AU-tummDVhIf9NP0kDXhq7ocFMeC8t83rMVv-4Rfm2drpXITtxvHVgukqz27zgV-DRKFHd6mg1b8AacT",
                currency: "EUR",
                intent: "capture",
              }}
            >
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={async (data, actions) => {
                  try {
                    const response = await axios.post(
                      "https://admin.precision-omics.org/api/create-paypal-order",
                      {
                        formData,
                        selectedPlan: {
                          planId: activePlanId,
                          planName: plans.find((plan) => plan._id === activePlanId)?.name || "",
                          participantType: selectedParticipantType || "",
                          price: participantPrice,
                        },
                        selectedAccommodations: selectedAccommodation,
                        totalPrice: totalPrice,
                      }
                    );
                    return response.data.orderID;
                  } catch (error) {
                    console.error("Error creating PayPal order:", error);
                    alert("Failed to create PayPal order. Please try again.");
                  }
                }}
                onApprove={async (data) => {
                  try {
                    const response = await axios.post("https://admin.precision-omics.org/api/capture-paypal-order", {
                      orderID: data.orderID,
                    });
                
                    if (response.data) {
                      window.location.replace("http://agingcongress.org/payment/success");
                      alert("Payment Successful!");
                    } else {
                      alert("Payment failed. Please try again.");
                    }
                  } catch (error) {
                    console.error("Error capturing PayPal order:", error);
                    window.location.href = "http://agingcongress.org/payment/cancel";
                    alert(`Failed to complete payment: ${error.response?.data?.error || "Unknown error"}`);
                  }
                }}
                
                onError={(err) => {
                  console.error("PayPal Error:", err);
                  alert("Payment failed. Please try again.");
                }}
              />
            </PayPalScriptProvider>
            </div>
          )}



          {/* <div className="form-group"> */}
          <button onClick={(e) => handlePayment(e)} className="submit-button">
            pay
          </button>
          {/* </div> */}

        <div className="total-price-container">
        <p>
            By clicking pay, you agree to the<span> </span>  
            <Link href="/policy/privacy/"> Privacy Policy</Link>,<span> </span> 
            <Link href="/policy/termsConditions/">Terms & conditions</Link>, and <span> </span> 
            <Link href="/policy/cancellation/">Cancellation Policy</Link>.
        </p>
    </div>
        </form>




      </div>

      <div style={{margin:'5%'}}>

             <p
                dangerouslySetInnerHTML={{
                __html: guide?.plans || "<span>No content available</span>",
               }}
             ></p>
            </div>
      <Footer />
    </>
  );
}
