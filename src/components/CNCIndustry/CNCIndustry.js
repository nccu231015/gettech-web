
import Image from "next/image"
import './CNCIndustry.css'
import { useRouter } from "next/navigation"
import React, { useState } from 'react';

export default function CNCIndustry({props}){
    
    const router = useRouter();

    return(
        <div id="CNCexpert" className='industryOverviewSection'>
            <div className="overlay"></div>
            <div className="content">
                <div className="flexColGroup">
                    <div className="flexRowGroup">
                        <img className="imageMachinery" src="/assets/CNCEXPERT_mainImg.svg" alt="" />
                        <div className="rightColBox">
                            <div className="imageContainer">
                                <img className='imageProcessing' onClick={() => router.push("/milling-machine")} src={'/assets/ArrowButton.svg'} alt="ArrowButton"/>
                                <div className='titleMillingMachine'>
                                    <div className='medium_title'>MILLING MACHINE</div>
                                </div>
                            </div>
                            <div className="imageContainer2">
                                <img className='imageProcessing' onClick={() => router.push("/car-milling-compound-processing")} src={'/assets/ArrowButton.svg'} alt="ArrowButton"/>
                                <div className='flexColBox3'>
                                    <div className='medium_title'>CAR MILLING COMPOUND PROCESSING</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Industry" className="flexColGroup2">
                        <div className="heroTitleIndustry">INDUSTRY</div>
                        <div className="flexRowGroup1">
                            <div className="imagePairGroupAerospace">
                                <img className='coverImageAerospace' src={'/assets/Aerospace.png'} alt="Aerospace" />
                                <img className='imageAerospace' onClick={() => router.push("/aerospace")} src={'/assets/ArrowButton.svg'} alt="ArrowButton" />
                                <div className='titleAerospace'>AEROSPACE</div>
                            </div>
                            <div className="imagePairGroupMilitary">
                                <img className='coverImageAerospace' src={'/assets/Customize_Img.png'} alt="Customize_Img" />
                                <img className='imageMilitary' onClick={() => router.push("/military")} src={'/assets/ArrowButton.svg'} alt="ArrowButton" />
                                <div className='titleMilitary'>MILITARY</div>
                            </div>
                            <div className="imagePairGroupAerospace" id="groupElectronic">
                                <img className='coverImageAerospace' src={'/assets/Electronic_Img.png'} alt="Electronic_Img" />
                                <img className='imageAerospace' onClick={() => router.push("/electronic")} src={'/assets/ArrowButton.svg'} alt="ArrowButton" />
                                <div className='titleAerospace'>ELECTRONIC</div>
                            </div>
                            <div className="imagePairGroupMilitary" id="groupCustomize">
                                <img className='coverImageAerospace' src={'/assets/Customize_Img.svg'} alt="Customize_Img" />
                                <img className='imageMilitary' onClick={() => router.push("/customize")} src={'/assets/ArrowButton.svg'} alt="ArrowButton" />
                                <div className='titleMilitary'>CUSTOMIZE</div>
                            </div>
                        </div>
                        <div className="mdAltGroup">
                            <div className="mdAltLeftCol">
                                <div className="imagePairGroupAerospace">
                                    <img className='coverImageAerospace' src={'/assets/Aerospace.png'} alt="Aerospace" />
                                    <img className='imageAerospace' onClick={() => router.push("/aerospace")} src={'/assets/ArrowButton.svg'} alt="ArrowButton" />
                                    <div className='titleAerospace'>AEROSPACE</div>
                                </div>
                                <div className="imagePairGroupAerospace" id="groupElectronic">
                                    <img className='coverImageAerospace' src={'/assets/Electronic_Img.png'} alt="Electronic_Img" />
                                    <img className='imageAerospace' onClick={() => router.push("/electronic")} src={'/assets/ArrowButton.svg'} alt="ArrowButton" />
                                    <div className='titleAerospace'>ELECTRONIC</div>
                                </div>
                            </div>
                            <div className="mdAltRightCol">
                                <div className="imagePairGroupMilitary">
                                    <img className='coverImageAerospace' src={'/assets/Customize_Img.png'} alt="Customize_Img" />
                                    <img className='imageMilitary' onClick={() => router.push("/military")} src={'/assets/ArrowButton.svg'} alt="ArrowButton" />
                                    <div className='titleMilitary'>MILITARY</div>
                                </div>
                                <div className="imagePairGroupMilitary" id="groupCustomize">
                                    <img className='coverImageAerospace' src={'/assets/Customize_Img.svg'} alt="Customize_Img" />
                                    <img className='imageMilitary' onClick={() => router.push("/customize")} src={'/assets/ArrowButton.svg'} alt="ArrowButton" />
                                    <div className='titleMilitary' id="altCustomizeTitle">CUSTOMIZE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}