'use client';
import React, { useState } from 'react';
import { builder } from '@builder.io/sdk';
import { useRouter } from "next/navigation"
import './InfoCard.css';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const InfoCard = (props) => {
const [isHovered, setIsHovered] = useState(false);
const router = useRouter();

const handleMouseEnter = () => {
    setIsHovered(true);
};

const handleMouseLeave = () => {
    setIsHovered(false);
};

return (
    <div
    className="companyInfoSection"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={() => router.push(props.url)}>
        <div className="flexRowContainer">
            <div className="flexColContainer">
                <div className="companyNameHighlight">{props.InfoTitle}</div>
                <div className="flexRowInfo">
                    <img className="companyImage" src={props.Icon} alt="" />
                    <div className="locationHighlight">{props.Location}</div>
                </div>
            </div>
        </div>
        <img
            className="IFC_additionalImage"
            src={isHovered ? '/assets/HoverInfoButton.png' : '/assets/InfoButton.png'}
            alt=""
        />
    </div>
);
};

export default InfoCard;
