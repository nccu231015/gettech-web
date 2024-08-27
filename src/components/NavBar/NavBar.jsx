'use client';
import "./NavBar.css"
import React, {useEffect} from "react";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function NavBar(){
    
    const [isChecked, setIsChecked] = useState(false);
    
    const [isCheckedCNC, setIsCheckedCNC] = useState(false);

    const [isCheckedIND, setIsCheckedIND] = useState(false);

    const [isCheckedEQU, setIsCheckedEQU] = useState(false);

    const [isCheckedCHG, setIsCheckedCHG] = useState(false);

    const router = useRouter();

    const handleScrollTo = (sectionId) => {
        const currentPath = window.location.pathname;

        if (currentPath === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push(`/#${sectionId}`);
        }
    };

    const handleToggle = () => {
        setIsChecked(prev => !prev);
    };

    const handleToggleCNC = () => {
        setIsCheckedCNC(prev => !prev);
    };

    const handleToggleIND = () => {
        setIsCheckedIND(prev => !prev);
    };

    const handleToggleEQU = () => {
        setIsCheckedEQU(prev => !prev);
    };

    const handleToggleCHG = () => {
        setIsCheckedCHG(prev => !prev);
    };

    return(
        <div className="nb_container">
            <div className='group'>
                <div className='navBar'>
                    <button className='languageButton'>
                        繁體中文
                    </button>
                    <div className='NavflexRowContainer'>
                        <img className='NavcompanyImage' src={'/assets/GetTech.svg'} alt="GetTechLogo" onClick={() => router.push("/")} />
                        <div className='highlightTextRow'>
                            <p className='cncExpertText' onClick={() => handleScrollTo("CNCexpert")}>CNC EXPERT</p>
                            <p className='cncExpertText' onClick={() => handleScrollTo("Industry")}>INDUSTRY</p>
                            <p className='cncExpertText' onClick={() => handleScrollTo("Equipment")}>EQUIPMENT</p>
                            <p className='cncExpertText' onClick={() => handleScrollTo("AboutGETTECH")}>ABOUT GET-TECH</p>
                            <p className='cncExpertText' onClick={() => handleScrollTo("ContactUs")}>CONTACT US</p>
                            <p className='cncExpertText' onClick={() => handleScrollTo("Ch-Group")}>CH-GROUP</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MenuContainer">
                <div className="MenuRowContainer">
                    <img className="MenuButton" src={isChecked ? '/assets/CancelMenu.svg' : '/assets/icon_menu.svg'} alt=""  onClick={handleToggle} />
                    <input type="checkbox" checked={isChecked} id="switch" onChange={handleToggle}/>
                    <img className="MenuLogo" src="/assets/logo.svg" alt="" onClick={() => router.push("/")} />
                    <img className="MenuPhone" src="/assets/menu_phone.svg" alt="" /> 
                </div>
            </div>

            {isChecked && (

                <div className="overlayMenu">
                    <div className="CNCContainer">
                        <div className="MenuRowTitle">
                            <div className="hm_CNCexpert">CNC EXPERT</div>
                            <img className="downVector" src="/assets/downVector.svg" alt="" onClick={handleToggleCNC} />
                            <input type="checkbox" checked={isCheckedCNC} id="CNC" onChange={handleToggleCNC} />
                        </div>
                        {isCheckedCNC && (
                            <div>
                                <div className="hm_belowTitle" onClick={() => router.push("/milling-machine")}>MILLING MACHINE</div>
                                <div className="hm_belowTitle" onClick={() => router.push("/car-milling-compound-processing")}>CAR MILLING COMPOUND PROCESSING</div>
                            </div>
                        )}
                    </div>

                    <div className="CNCContainer">
                        <div className="MenuRowTitle">
                            <div className="hm_CNCexpert">INDUSTRY</div>
                            <img className="downVector" src="/assets/downVector.svg" alt="" onClick={handleToggleIND} />
                            <input type="checkbox" checked={isCheckedIND} id="IND" onChange={handleToggleIND} />
                        </div>
                        {isCheckedIND && (
                            <div>
                                <div className="hm_belowTitle" onClick={() => router.push("/aerospace")}>AEROSPACE</div>
                                <div className="hm_belowTitle" onClick={() => router.push("/military")}>MILITARY</div>
                                <div className="hm_belowTitle" onClick={() => router.push("/electronic")}>ELECTRONIC</div>
                                <div className="hm_belowTitle" onClick={() => router.push("/customize")}>CUSTOMIZE</div>
                            </div>
                        )}
                    </div>

                    <div className="CNCContainer">
                        <div className="MenuRowTitle">
                            <div className="hm_CNCexpert">EQUIPMENT</div>
                            <img className="downVector" src="/assets/downVector.svg" alt="" onClick={handleToggleEQU} />
                            <input type="checkbox" checked={isCheckedEQU} id="EQU" onChange={handleToggleEQU} />
                        </div>
                        {isCheckedEQU && (
                            <div>
                                <div className="hm_belowTitle" onClick={() => router.push("/equipment")}>ALL</div>
                            </div>
                        )}
                    </div>

                    <div className="CNCContainer">
                        <div className="MenuRowTitle">
                            <div className="hm_CNCexpert" onClick={() => router.push("/about-get-tech")}>ABOUT GET-TECH</div>
                        </div>
                    </div>

                    <div className="CNCContainer">
                        <div className="MenuRowTitle">
                            <div className="hm_CNCexpert">CONTACT US</div>
                        </div>
                    </div>

                    <div className="CNCContainer">
                        <div className="MenuRowTitle">
                            <div className="hm_CNCexpert">CH-GROUP</div>
                            <img className="downVector" src="/assets/downVector.svg" alt="" onClick={handleToggleCHG} />
                            <input type="checkbox" checked={isCheckedCHG} id="CHG" onChange={handleToggleCHG} />
                        </div>
                        {isCheckedCHG && (
                            <div>
                                <div className="hm_belowTitle" onClick={() => router.push("/manufacture")}>MANUFACTURE</div>
                                <div className="hm_belowTitle" onClick={() => router.push("/service")}>SERVICE</div>
                                <div className="hm_belowTitle" onClick={() => router.push("/agent")}>AGENT</div>
                            </div>
                        )}
                    </div>

                    <img className="LangButton" src="/assets/Chinese.svg" alt="" />
                </div>

            )}
                
        </div>
    )
}