import React from "react";
import i18n from 'i18next'

const LanguageSwitcher : React.FC = () => {
    const changeLanguage = (lang:string) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className='w-fit flex gap-1'>
            <button onClick={() => changeLanguage('es')} className="languageBtn">Español</button>
            <button onClick={() => {changeLanguage('en')}} className="languageBtn">English</button>
        </div>
    )
}
export default LanguageSwitcher