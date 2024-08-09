import "./Footer.css"

export default function Footer(){
    return(
        <div className="footer">
            <img className="footerChild" src="/assets/Footer_backgroundImg.png" about=""/>
            <div className="frameParent">
                <div className="getTechPrecisionParent">
                    <div className="getTechPrecision">GET-Tech Precision</div>
                    <div className="taiwanParent">
                        <img className="taiwanIcon" src="/assets/Taiwan.png" alt=""/>
                        <div className="taoyuanTaiwan">Taoyuan-Taiwan</div>
                    </div>
                </div>
                <div className="viberParent">
                    <img className="viberIcon" src="/assets/Viber.png" alt=""/>
                    <div className="taoyuanTaiwan">+886 3-3586599</div>
                </div>
                <div className="mailParent">
                    <img className="mailIcon" src="/assets/Mail.png" alt=""/>
                    <div className="taoyuanTaiwan">gettech@gmail.com</div>
                </div>
                <div className="locationParent">
                    <img className="mailIcon" src="/assets/Location.png" alt=""/>
                    <div className="taoyuanTaiwan">{`No. 30, Yanku St., Taoyuan Dist., Taoyuan City 330, Taiwan (R.O.C.) `}</div>
                </div>
                <img className="facebookIcon" src="/assets/Facebook.png" alt=""/>
                <img className="lineIcon" src="/assets/Line.png" alt=""/>
                <img className="phoneIcon" src="/assets/Phone.png" alt=""/>
            </div>
        </div>
    )
}