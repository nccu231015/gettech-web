import "./NavBar.css"

export default function NavBar(){
    return(
        <div className='group'>
            <div className='navBar'>
                <button className='languageButton'>
                    繁體中文
                </button>
                <div className='flexRowContainer'>
                    <img className='companyImage' src={'/assets/GetTech.svg'} alt="GetTechLogo" />
                    <div className='highlightTextRow'>
                        <p className='cncExpertText'>CNC EXPERT</p>
                        <p className='industryText'>INDUSTRY</p>
                        <p className='equipmentText'>EQUIPMENT</p>
                        <p className='aboutGetTechText'>ABOUT GET-TECH</p>
                        <p className='contactUsText'>CONTACT US</p>
                        <p className='chGroupText'>CH-GROUP</p>
                    </div>
                </div>
            </div>
        </div>   
    )
}