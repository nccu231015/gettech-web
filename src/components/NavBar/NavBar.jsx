
import Image from "next/image"
import "./NavBar.css"
export default function NavBar(){
    return(
        <div className="navbar-wrapper">
            <div className="logo">
                <div>GET-TECH</div>
                <div>台工精密科技股份有限公司</div>
            </div>
            <div className="navbar">
                <div>CNC EXPERT</div>
                <div>INDUSTRY</div>
                <div>EQUIPMENT</div>
                <div>ABOUT GET-TECH</div>
                <div>CONTACT US</div>
                <div>ABOUT CH-GROUP</div>
            </div>
            <div className="language-switch">
                <div>繁體中文</div>
            </div>
        </div>   
    )
}