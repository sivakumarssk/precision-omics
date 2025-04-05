"use client";

import React, { useEffect, useState } from 'react';
import '../../../styles/Topics.css'; // Add your custom CSS here for styling


interface MainBannerProps {
  data: {
    topicsList1?: string[];
    topicsList2?: string[];
    topicsList3?: string[];
  };
}


// const topics1 = [
//   {

//     items: [
//       "Drug Discovery & Development",
//       "Pre-clinical Research",
//       "Drug Screening & Designing",
//       "Drug Delivery Systems",
//       "Pharmaceutical Product Development",
//       "Pharmaceutical Manufacturing",
//       "Quality Control & Quality Assurance",
//       "Clinical Trials & Case Studies",
//       "Pharmacotherapeutics",
//     ],
//   },
//   {

//     items: [
//       "Regulatory & HTA Review",
//       "FDA Approvals",
//       "Product Management",
//       "Market Prediction",
//       "Existing Drugs Enhancement",
//       "Pharmaceutical Chemistry",
//       "PKPD/Biopharmaceutics",
//       "Pharmaceutical Statistics",
//       "Pharmacology & Toxicology",
//     ],
//   },
//   {

//     items: [
//       "Pharmaceutical Analysis",
//       "Pharmacogenomics",
//       "Natural Product Chemistry",
//       "Safety & Monitoring",
//       "Personalized Medicine",
//       "Education & Practice",
//       "Nanomedicine",
//       "Industrial Pharmacy",
//       "Covid & Healthcare",
//       "Artificial Intelligence in R&D",
//     ],
//   },
// ];

const Topics: React.FC<MainBannerProps> = ({data}) => {
  
  const [arrayData, setArrayData] = useState<{ items: string[] }[]>([]);

  useEffect(() => {
    // Combine topics into the desired structure
    const topics = [
      { items: data?.topicsList1 || [] },
      { items: data?.topicsList2 || [] },
      { items: data?.topicsList3 || [] },
    ];
    setArrayData(topics);
  }, [data]);


  return (
    <div className="topics-container">
    <h2>Topics of Discussion</h2>
    <div className="columns">
      {arrayData.map((column, index) => (
        <div className="column" key={index}>
          <ul>
            {column.items.map((item, idx) => (
              <li key={idx}>
                <span role="img" aria-label="checkmark">
                  ✔️
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Topics;
