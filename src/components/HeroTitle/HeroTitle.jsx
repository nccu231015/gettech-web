import "./HeroTitle.css"
import { builder } from '@builder.io/sdk';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const HeroTitle = (props) => {
    {`heroTitle`+console.log(props)}
    return(
        <div className="mainHeroSection">
            <div className="overlay"></div>
            <div className="content">
                <div className="flexColumnContainer">
                    <div className="heroTitleCncExpert">{props.MainTitle}</div>
                    <div className="heroTitleMillingMachine">{props.SubTitle}</div>
                </div>
            </div>
        </div>
    );
}; 

export default HeroTitle;