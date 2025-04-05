"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./page.css";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";

const Page = () => {
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
        session: "",
        attachFile: null,
    });

  const [countryData, setCountryData] = useState([]);
    
  const [guide, setGuide] = useState({});

  const guideApi = async () => {
    try {
      const response = await axios.get("https://admin.precision-omics.org/api/guide-abstract");
      console.log(response, 'ghnfgh');
      setGuide(response.data);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || "An error occurred");
    }
  };




    // Fetch topics from the API
    const abstractApi = async () => {
        try {
            const response = await axios.get("https://admin.precision-omics.org/api/topic");
            setTopicData(response.data);
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.error || "An error occurred");
        }
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

    useEffect(() => {
        abstractApi();
        guideApi()
        fetchCountryData();
    }, []);

    // Handle input changes
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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await axios.post("https://admin.precision-omics.org/api/uploadAbstract", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Abstract submitted successfully!");
            console.log(response.data);
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.error || "An error occurred during submission.");
        }
    };

    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="Abstract"
                shortText=""
                homePageUrl="/"
                homePageText="Home"
                activePageText="Abstract"
                bgImg="/images/own/slide2.jpg"
            />
            <div className="form-container">
                <form className="form-section" onSubmit={handleSubmit}>
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
                            {countryData.map((country) => (
                                <option key={country.code} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
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
                            <option value="Workshop Presentation">Workshop Presentation</option>
                            <option value="Virtual Presentation">Virtual Presentation</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="session">session</label>
                        <select id="session" name="session" value={formData.session} onChange={handleInputChange}>
                            <option value="">Select</option>
                            {topicData.map((topic, index) => (
                                <option key={index} value={topic}>
                                    {topic}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Attach File</label>
                        <input type="file" id="file" name="file" onChange={handleFileChange} />
                        <p className="file-info">
                            Upload less than 8 MB file (Suggested Formats: .doc, .docx, .pdf)
                        </p>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit-button">
                            Submit Abstract
                        </button>
                    </div>
                </form>

                <div className="topics-section">
                    <h3>Topics</h3>
                    <ul className="topics-list">
                        {topicData.map((topic, index) => (
                            <li key={index}>
                                <button className="topic-item">{topic}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>

            <div style={{margin:'5%'}}>

             <p
                dangerouslySetInnerHTML={{
                __html: guide?.abstract || "<span>No content available</span>",
               }}
             ></p>
            </div>

            {/* <div className="content-div" style={{ }}>
                <div>
                    <h3 style={{ color: '#F97916' }}>Review Process</h3><br></br>
                    <p>USG United Scientific Group and the organizing committee members of Pharma R&D ensures a rigorous, high-quality and unbiased peer review process for all abstracts submitted to the conference. The decision of abstract acceptance will be judged by a panel of expert reviewers and / or session chair and / or conference chairman emphasizing whether the findings and / or conclusions are novel and make useful contributions to the field.</p>

                    <p>The committee will determine whether the abstract is more appropriate for oral or poster presentation. Eligibility for oral or poster presentation will be determined by the total score (with adjustment for differential scoring behavior between referees).</p>

                    <p>The committee operates a single / double-blind peer review process for all the abstracts submitted, where both the reviewer and the author remain anonymous.</p>


                    <h5>The following are the steps that each abstract of Pharma R&D undergoes during the process of peer review:</h5>
                    <p>
                        ✔ All submitted abstracts are reviewed by internal editorial team to ensure adherence to the conference scope and abstracts which have passed this initial screening are then assigned to the session chair / review committee for evaluation.<br></br>
                        ✔ The session chair / review committee decides whether reviews from appropriate independent experts / reviewers are needed to evaluate the abstract. External reviewer (s) evaluate majority of the submissions, but it is up to the session chair / review committee to determine the number of reviews required.<br></br>
                        ✔ Once the reviews have been received, the session chair / review committee decides to accept or reject a manuscript, or to request revisions from the author in response to the reviewers’ comments. If the decision is minor revision or major revision, authors will be given 14 days to resubmit the revised abstract.<br></br>
                    </p>
                    <p>Abstracts submitted by invited and/or keynote speakers will be reviewed by conference chairman.</p>


                    <h5>Criteria to be Considered for Scoring</h5>
                    The abstract should be reviewed according to the following criteria:<br></br>
                    <p>
                        ✔ Originality of concept/approach and level of innovativeness<br></br>
                        ✔ Significance/impact/relevance to conference theme<br></br>
                        ✔ Quality of research design/theoretical argument<br></br>
                        ✔ Conclusions and interpretations of results<br></br>
                        ✔ Presentation style: coherence and clarity of structure<br></br>
                    </p>
                </div>

                <div style={{ marginTop: '50px' }}>
                    <h3 style={{ color: '#F97916' }}>Speaker Guidelines</h3><br></br>

                    <h5>Basic presentation requirements</h5>
                    <p>Presentation format: PPT.doc or PPT.docx.<br></br>
                        MAC-compatible presentation.<br></br>
                        Please take steps to compress any videos.<br></br>
                        Each slide should be concise, uncluttered and readable from a distance; include only key words and phrases for visual reinforcement. Avoid lengthy text.<br></br>
                    </p>

                    <h5>AV Set up</h5>
                    <p>
                        Basic AV setup will be provided: laser pointer, cordless mike, desktop mike, basic sound system.<br></br>
                        If you have any audio/video to be played, they should be checked in with the AV team 24 hours before your presentation.<br></br>
                        Upload your presentation at least 3 days before traveling to the conference venue.<br></br>
                    </p>

                    <h5>Go to the presentation upload site and upload your presentation slides.</h5>
                    <p>
                        Use the email address you provided when submitting your abstract. Once logged in, follow the instructions on the screen.<br></br>
                        You can also email the presentation to the designated conference email ID.<br></br>
                        All presentations will be downloaded to your session room on the day of your presentation.<br></br>
                        The presentations will be loaded prior to your session with the name &quot;first name_last name and date / session&quot;.<br></br>
                    </p>

                    <h5>OR upload your presentation at the registration desk:</h5>
                    <p>
                        It is recommended to upload your presentation 3 days before the conference start date. If you are unable to send it, you can always upload your presentation (save the presentation on a USB Flash drive) at the lectern during the break preceding your scheduled presentation. The USB Flash drive will be scanned before transferring the presentation to the presentation folder.
                        Once you have completed your presentation it will be permanently removed. (Optionally it may be selected for the presentation library maintained by USG.)
                    </p>

                    <h5>Considerations for PC Users [create on PC then move to Mac]</h5>
                    <p>
                        Appropriate extension usage: use .PPTX, .PPSX if saving from PowerPoint 2007/2008/2010/2011 format or use .PPT or .PPS if saving to an earlier-version format or saving from an earlier version.<br></br>
                        Copy the media file to the folder where the PowerPoint file is, and only then insert it; otherwise links to most media files will break.<br></br>
                        AVI or MPEG are better choice files for videos or sounds; don&apos;t use WMV (Windows Media Player).<br></br>
                        Usage of fonts: Arial, Times New Roman, Courier and Symbol are best presented on MACS.<br></br>
                        Don&apos;t squeeze your text into placeholders: Text rendering on PC vs MAC (font substitution) can cause your squeezed text to get cut off by text boxes.<br></br>
                    </p><br></br>
                </div>

                <div>
                    <h3 style={{ color: '#F97916' }}>Poster Guidelines</h3><br></br>
                    <p>
                        The poster session gives an opportunity to interact with senior faculty and share your ideas and get the suggestions in return which make this session an interactive and encouraging bit for the young researchers.
                    </p>

                    <h5>Guaranteed dimensions:</h5> <p>1 meter x 1 meter</p>

                    <h5>Note:</h5>
                    <p>
                        The poster boards or the area designed for the session limits the dimension of the posters to the mentioned numbers.<br></br>
                        Meticulous checking is required in all posters for typographic and grammatical mistakes and image (usage of color) quality.<br></br>
                    </p>
                </div>

                <div style={{ marginTop: '50px' }}>
                    <h3 style={{ color: '#F97916' }}>Visa Information</h3><br></br>

                    <p>
                        Please be aware that participants are responsible for applying for their own visa. USG - United Scientific Group (a non-profit organization), the organizer of the conference, does not assume responsibility for visa applications. However, we are happy to provide a Visa Support Letter to assist with the process. To qualify for this letter, applicants must meet the following criteria:
                    </p>

                    <h5>Visa Support Letter Requirements</h5>

                    <p>
                        ✔ Applicants must have completed their registration and submitted an abstract to be eligible for the support letter.<br></br>
                        ✔ Applicants must provide a scan of their valid passport, which includes a photo. (If necessary).<br></br>
                        ✔ Applicants must submit a letter from their institution confirming support for their participation in the conference. (If necessary).<br></br>
                        ✔ Requests for a Visa Support Letter should be made well in advance. Last-minute requests will not be processed.<br></br>
                    </p>

                </div>
            </div> */}
            
            <Footer />
        </>
    );
};

export default Page;
