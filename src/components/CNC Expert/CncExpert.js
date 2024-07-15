
import Image from "next/image"
imoprt './CncExpert.css'

export default function CncExpert({props}){
    return(
        <div className="cncwrapper">
            <div className="left">
                <Image className="leftimg" src={props.leftimages} width={0} height={0} alt="CNC Expert images"></Image>
            </div>
            <div className="right">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}