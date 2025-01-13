import React from 'react'
import { useTranslation} from 'react-i18next'
import '../../../i18n'


const AboutMe: React.FC = () => {
    const { t } = useTranslation();
    return(
        <div className="font-roboto bg-gradient-to-r from-slate-100 to-aboutMeBgDark rounded-lg col-span-2 grid place-content-center px-14">
            <h3 className=' text-black justify-self-center mx-16 mt-7 text-xl font-bold whitespace-pre-line'>{t('aboutMeTitle')}</h3>
            <p className=' text-black justify-self-center mx-16 m-7  whitespace-pre-line'>{t('aboutMeDescription')}</p>
        </div>
    )
}

export default AboutMe
