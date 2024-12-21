import React from "react";
import i18n from 'i18next'

const LanguageSwitcher : React.FC = () => {
    const changeLanguage = (lang:string) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className='h-2 w-2'>
            <button onClick={() => changeLanguage('es')} className="text-center text-xs">Español</button>
            <button onClick={() => {changeLanguage('en')}} className="text-center text-xs">English</button>
        </div>
    )
}
export default LanguageSwitcher