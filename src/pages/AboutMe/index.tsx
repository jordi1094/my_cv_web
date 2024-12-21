import React from 'react'
import { useTranslation} from 'react-i18next'
import '../../i18n'
import LanguageSwitcher from '../../components/core/LanguageSwitcher/LanguageSwitcher'

const AboutMe: React.FC = () => {
    const { t } = useTranslation();
    return(
    <>
    <LanguageSwitcher className='h-2'/>
    <section id = "about-me" className="">
        <h2 className="text-3xl font-bold text-center">{t('aboutMeTitle')}</h2>
    </section>
    </>
    )
}

export default AboutMe
