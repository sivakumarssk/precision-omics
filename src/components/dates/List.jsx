"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

import './List.css'

const List = ({key,heading,data}) => {
  return (
    <>
     <div className="listMain">

                <div className="list-h3-div">
                    <h3>{heading}</h3>
                </div>


                {
                    data.map((each,index)=>{
                        return(
                            <div className="list-item-div" key={each?._id || index}>
                    <h4 style={{color:'#e79391'}}>{each.head}</h4>
                    <p style={{fontSize:'18px',gap:'50px'}}>
                    <i className="icofont-calendar"></i> {each.date}</p>
                </div>
                        )
                    })
                }


                {/* <div className="list-item-div">
                    <h4 style={{color:'#e79391'}}>Hello:</h4>
                    <p style={{fontSize:'18px',gap:'50px'}}>
                    <i className="icofont-calendar"></i>  February 24-26, 2025 </p>
                </div>
                 */}
            </div>
    </>
  );
};

export default List;
