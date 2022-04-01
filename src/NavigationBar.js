
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { TaskContext } from "./AppStates";
import Modal from 'react-modal';


import Logo from "./logo.svg";
const Navigation = () => {
    ////////////kalbu pakeitimo blokas////////
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        try {
            if (lng != currentLng)
                i18n.changeLanguage(lng);
            window.location.reload()
        }
        catch (e) { console.log(e) }
    }
    const kalbos = t('languages')
    const [currentLng, setCurrentLng] = useState(i18n.language)
    let body = document.getElementsByTagName('body')
    document.body.classList.add(currentLng);
   ////////////////////////////////////////////////////////////// 



    return (
        <div className="navBar">
            <div className="navLogo" onClick={() => {
                if(currentLng!='en'){
                    window.location.replace("/")
                }else{
                    window.location.replace("/")
                }
                }}>
                {/* <img src={Logo} alt="Logo" /> */}
               
            </div>
        
                <nav key='navigationConainer' className="navContainer" >
                    <Link key={t('')} className="navItem" to="/">{t('')}</Link>
                </nav>
                {/* /////////kalbu pakeitimo blokas//////////// */}
            {/* <div className="languageSelector">
                <div key="currentLng" className="currentLng">{currentLng}</div>
                <div key="changeLng" className="changeLng">
                    {kalbos.map((e,i) => (
                        <div>
                            {e != currentLng ? <div key={"lang-" + e} onClick={() => {
                                changeLanguage(e)
                            }} className="language" >{e}</div> : <div key={'epmty'}></div>}

                        </div>
                    ))}
                </div>
            </div> */}
            {/* ///////////////////////////////////////////////// */}
        </div>

    )
}

export default Navigation