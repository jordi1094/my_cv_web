import React from "react";
import "../../../i18n";
import { useTranslation} from 'react-i18next'
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Header : React.FC = () => {
    const { t } = useTranslation();

    const handleScroll = (targetId: string): void => {
        const targetElement: HTMLElement | null = document.getElementById(targetId);
        const headerOffset = document.querySelector(".header")?.clientHeight || 0;
    
        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
        }
    };
    

    return (
        <div className="header w-[fill] font-roboto mx-24 sticky top-0 bg-white">
            <div className="flex gap-7">
                <h5 onClick={() => handleScroll("home")} className="cursor-pointer active:scale-y-90">{t('headerHome')}</h5>
                <h5 onClick={() => handleScroll("projects")} className="cursor-pointer active:scale-y-90">{t('headerProjects')}</h5>
                <h5 onClick={() => handleScroll("expirience")} className="cursor-pointer active:scale-y-90">{t('headerCV')}</h5>
                {/* <h5>{t('headerContact')}</h5> */}
            </div>
            <LanguageSwitcher/>
        </div>
    )
}

export default Header