
import Image from "next/image"
import { builder } from '@builder.io/sdk';
import { useRouter } from 'next/navigation';
import './AboutGETTECH.css'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const AboutGETTECH = (props) => {

    const router = useRouter();

    return(
        <div id="AboutGETTECH" className="aboutSection">
            <div className="flexColumn">
                <img className="heroImage" src={"/assets/Horizon.png"} alt="Horizontal Line" />
                <div className="flexColumnDetails">
                    <div className="aboutMainTitle">
                        About
                        <br/>
                        GET-TECH
                    </div>
                    <div className="flexRowImages">
                        <img className="secondaryImage" src={props.image} alt="Main Image" />
                        <div className="flexColumnText">
                            <div className="aboutSubTitle">{props.ArticleTitle}</div>
                            <div className="textGroup">
                                <div className="descriptiveSubtitle">{props.ArticlePreview}</div>
                                <img className="ag_additionalImage" onClick={() => router.push("/about-get-tech")} src={"/assets/right_arrow.svg"} alt="Arrow Buttton" />
                            </div>
                        </div>
                    </div>
                </div>
                <img className="heroImage" src={"/assets/Horizon.png"} alt="Horizontal Line" />
            </div>
        </div>
    )
}

export default AboutGETTECH;