"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

interface MainBannerProps {
  data: {
    day1?: {
      dayDate: string;
      list: {
        head: string;
        date: string;
        _id: string;
      }[];
    };
  };
}


const FirstDay: React.FC<MainBannerProps> = ({ data }) => {
  const arrayData = data?.day1?.list || []; // Handle undefined day1

  return (
    <div>
      <Accordion>
        {arrayData.map((item) => (
          <AccordionItem key={item?._id}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="schedule-info">
                  <h3>{item?.head}</h3>
                  <ul>
                    <li>
                      <i className="icofont-wall-clock"></i> {item?.date}
                    </li>
                  </ul>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            {/* <AccordionItemPanel>
              <p>Details for {item.head} can go here.</p>
            </AccordionItemPanel> */}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};


export default FirstDay;
