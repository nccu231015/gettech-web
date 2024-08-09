
import Image from "next/image"
import './CNCIndustry.css'
import { useRouter } from "next/navigation"
import React, { useState } from 'react';

export default function CNCIndustry({props}){
    
    const router = useRouter();

    return(
        <div id="CNCexpert" className='industryOverviewSection'>
            <div className='overlay'></div>
            <div className='content'>
                <div className='flexColGroup'>
                    <div className='flexRowGroup'>
                        <img className='imageMachinery' src={'/assets/CNCEXPERT_mainImg.png'} alt="CNCEXPERT_mainImg" />
                        <div className='flexColBox'>
                            <div className='imageContainer'>
                                <img className='imageProcessing' onClick={() => router.push("/milling-machine")} src={'/assets/ArrowButton.svg'} alt="ArrowButton"/>
                            <div className='titleMillingMachine'>
                                <div className='medium_title'>MILLING MACHINE</div>
                            </div>
                        </div>
                        <div className='flexColBox2'>
                            <img className='imageProcessingAlt' onClick={() => router.push("/car-milling-compound-processing")} src={'/assets/ArrowButton.svg'} alt="ArrowButton"/>
                            <div className='flexColBox3'>
                                <div className='titleCarMilling'>CAR MILLING COMPOUND PROCESSING</div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div id="Industry" className='flexColGroup2'>
                        <div className='heroTitleIndustry'>INDUSTRY</div>
                        <div className='flexRowGroup1'>
                            <div className='imagePairGroupAerospace'>
                                <img className='coverImageAerospace' src={'/assets/Aerospace.png'} alt="Aerospace" />
                                <img className='image8Aerospace' onClick={() => router.push("/aerospace")} src={'/assets/ArrowButton.svg'} alt="ArrowButton" />
                                <div className='contentBoxAerospace'>
                                    <div className='titleAerospace'>AEROSPACE</div>
                                </div>
                            </div>
                            <div className='imagePairGroupMilitary'>
                                <img className='coverImageMilitary' src={'/assets/Customize_Img.png'} alt="Customize_Img" />
                                <img className='image8Military' onClick={() => router.push("/military")} src={'/assets/ArrowButton.svg'} alt="ArrowButton" />
                                <div className='contentBoxMilitary'>
                                    <div className='titleMilitary'>MILITARY</div>
                                </div>
                            </div>
                            <div className='imagePairGroupElectronic'>
                                <img className='coverImageElectronic' src={'/assets/Electronic_Img.png'} alt="Electronic_Img" />
                                <img className='image8Electronic' onClick={() => router.push("/electronic")} src={'/assets/ArrowButton.svg'} alt="ArrowButton" />
                                <div className='contentBoxElectronic'>
                                    <div className='titleElectronic'>ELECTRONIC</div>
                                </div>
                            </div>
                            <div className='imagePairGroupMilitary'>
                                <img className='coverImageMilitary' src={'/assets/Customize_Img.png'} alt="Customize_Img" />
                                <img className='image8Military' onClick={() => router.push("/customize")} src={'/assets/ArrowButton.svg'} alt="ArrowButton" />
                                <div className='contentBoxMilitary'>
                                    <div className='titleCustomize'>CUSTOMIZE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}