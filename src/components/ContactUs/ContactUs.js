
import Image from "next/image"
import './ContactUs.css'
import { useRouter } from "next/navigation"
import React, { useState, useEffect, useRef } from 'react';
import Footer from "../Footer/Footer";
import emailjs from '@emailjs/browser';

export default function ContactUs({props}){

    const form = useRef();
    
    const router = useRouter();

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
            .then(
                () => {
                    console.log("Email sent successfully!");
                },
                (error) => {
                    console.error("Failed to send email: ", error);
                },
            );
    };

    return(
        <div className="ContactUsParent">
            <div className="CUoverlay"></div>
            <div className="ContactSection">
                <div className="leftSection">
                    <div className="ContactUsTitle">
                        <div className="ContactTitle">CONTACT</div>
                        <div className="ContactTitle">US</div>
                        <div className="InnerInfoContainer">
                            <div className="InnerTitleContainer">
                                <div className="InnerInfoTitle">GET-Tech Precision</div>
                                <div className="InnerInfoLocation">
                                    <img className="NationFlag" src="assets/Taiwan.png" alt=""/>
                                    <div className="LocationText">Taoyuan-Taiwan</div>
                                </div>
                            </div>
                            <div className="ContactInfoContainer">
                                <div className="InnerPhoneContainer">
                                    <img className="PhoneIcon" src="/assets/contact_phone.svg" alt="" />
                                    <div className="PhoneNumberText">+886 3-3586599</div>
                                </div>
                                <div className="InnerEmailContainer">
                                    <img className="EmailIcon" src="/assets/contact_mail.svg" alt="" />
                                    <div className="EmailText">gettech@gmail.com</div>
                                </div>
                                <div className="InnerAddressContainer">
                                    <img className="AddressIcon" src="/assets/contact_location.svg" alt="" />
                                    <div className="AddressText">No. 30, Yanku St., Taoyuan Dist., Taoyuan City 330, Taiwan (R.O.C.) </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSection">
                    <div className="MessageForm">
                        <div className="FormContainer">
                            <form ref={form} id="form" onSubmit={sendEmail}>
                                <div className="field">
                                    <label htmlFor="from_name"><img src="/assets/name_icon.svg" alt="" /></label>
                                    <input type="text" name="from_name" id="from_name" placeholder="*name" />
                                </div>
                                <div className="field">
                                    <label htmlFor="from_email"><img src="/assets/contact_mail.svg" alt="" /></label>
                                    <input type="text" name="from_email" id="from_email" placeholder="*mail" />
                                </div>
                                <div className="field">
                                    <label htmlFor="phone_number"><img src="/assets/contact_phone.svg" alt="" /></label>
                                    <input type="text" name="phone_number" id="phone_number" placeholder="*phone number" />
                                </div>
                                <div className="field">
                                    <label htmlFor="company"><img src="/assets/company_icon.svg" alt="" /></label>
                                    <input type="text" name="company" id="company" placeholder="*company" />
                                </div>
                                <div className="field" id="messageField">
                                    <label htmlFor="message"><img src="/assets/message_icon.svg" alt="" /></label>
                                    <textarea type="text" name="message" id="message" placeholder="*message"></textarea>
                                </div>
                                {/* <input type="submit" id="button" value="Send Email" /> */}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="sendBtn">
                    <button type="submit" id="button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => form.current && form.current.requestSubmit()}><img className="submitBtn" src={isHovered ? '/assets/sent.svg' : '/assets/send.svg'} alt="" /></button>
                </div>
            </div>
            <div className="CHG_Section">
                <div className="CH-Group">
                    <div className="CHG_Title"></div>
                    <div className="CHG_Content">Taikoh Precision Technology is one of the affiliated companies of CH Group. CH Group began in 1976 with Chung Hua Plastic, a company dedicated to professional plastic product manufacturing. Over 40 years of development, it has evolved into a business entity spanning three major areas: Manufacture, Service, and Agent. Today, CH Group encompasses 12 affiliated companies.</div>
                </div>
                <div className="belowSectionParent">
                    <div className="belowSection">
                        <div className="ManufactureSection">
                            <img className="ManufacturePhoto" src="/assets/manufacture_photo.svg" alt="" />
                            <div className="belowTitleParent">
                                <div className="belowTitleBackground">
                                    <div className="belowTitle">MANUFACTURE</div>
                                </div>
                                <img className="Hyperlink" src="/assets/right_arrow.svg" onClick={() => router.push("/manufacture")} alt="" />
                            </div>
                        </div>
                        <div className="ServiceSection">
                            <img className="ManufacturePhoto" src="/assets/service_photo.svg" alt="" />
                            <div className="belowTitleParent">
                                <div className="belowTitleBackground">
                                    <div className="belowTitle">SERVICE</div>
                                </div>
                                <img className="Hyperlink" src="/assets/right_arrow.svg" onClick={() => router.push("/service")} alt="" />
                            </div>
                        </div>
                        <div className="AgentSection">
                            <img className="ManufacturePhoto" src="/assets/agent_photo.svg"  alt="" />
                            <div className="belowTitleParent">
                                <div className="belowTitleBackground">
                                    <div className="belowTitle">AGENT</div>
                                </div>
                                <img className="Hyperlink" src="/assets/right_arrow.svg" onClick={() => router.push("/agent")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}