"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

interface MainBannerProps {
  data: {
    day3?: {
      dayDate: string;
      list: {
        head: string;
        date: string;
        _id: string;
      }[];
    };
  };
}

const ThirdDay: React.FC<MainBannerProps>  = ({data}) => {
  const arrayData = data.day3?.list || [];

  return (
    <div>
              <Accordion>
                {arrayData.map((item) => (
                  <AccordionItem key={item._id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="schedule-info">
                          <h3>{item.head}</h3>
                          <ul>
                            <li>
                              <i className="icofont-wall-clock"></i> {item.date}
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

export default ThirdDay;
