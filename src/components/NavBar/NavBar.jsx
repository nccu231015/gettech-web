'use client';
import "./NavBar.css"
import React, {useEffect} from "react";
import { useRouter } from 'next/navigation';

export default function NavBar(){

    const router = useRouter();

    const handleScrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });  // 平滑滚动到目标元素
        router.push(`#${sectionId}`);  // 更新 URL 中的哈希值
        }
    };

    return(
        <div className="container">
            <div className='group'>
                <div className='navBar'>
                    <button className='languageButton'>
                        繁體中文
                    </button>
                    <div className='NavflexRowContainer'>
                        <img className='NavcompanyImage' src={'/assets/GetTech.svg'} alt="GetTechLogo" />
                        <div className='highlightTextRow'>
                            <p className='cncExpertText' onClick={() => handleScrollTo("CNCexpert")}>CNC EXPERT</p>
                            <p className='industryText' onClick={() => handleScrollTo("Industry")}>INDUSTRY</p>
                            <p className='equipmentText'>EQUIPMENT</p>
                            <p className='aboutGetTechText' onClick={() => handleScrollTo("AboutGETTECH")}>ABOUT GET-TECH</p>
                            <p className='contactUsText'>CONTACT US</p>
                            <p className='chGroupText'>CH-GROUP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}