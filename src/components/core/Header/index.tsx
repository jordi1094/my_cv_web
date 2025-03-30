import React from "react";
import "../../../i18n";
import { useTranslation} from 'react-i18next'
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Header : React.FC = () => {
    const { t } = useTranslation();
    
    const handleScroll =(targetId: string):void => {
        const targetElement: HTMLElement |null = document.getElementById(targetId)
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <div className="header font-roboto mx-24 sticky bg-white">
            <div className="flex gap-7">
                <h5 onClick={() => handleScroll("home")} className="cursor-pointer active:scale-y-90">{t('headerHome')}</h5>
                <h5 onClick={() => handleScroll("projects")} className="cursor-pointer active:scale-y-90">{t('headerProjects')}</h5>
                <h5 onClick={() => handleScroll("expirience")}>{t('headerCV')}</h5>
                {/* <h5>{t('headerContact')}</h5> */}
            </div>
            <LanguageSwitcher/>
        </div>
    )
}

export default Header