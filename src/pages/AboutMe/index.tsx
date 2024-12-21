import React from 'react'
import { useTranslation} from 'react-i18next'
import '../../i18n'
import Header from '../../components/core/Header'
import { Link } from 'react-router-dom'


const AboutMe: React.FC = () => {
    const { t } = useTranslation();
    return(
    <div className='grid-flow-row h-screen font-ojuju font-medium'>
        <Header/>
        <div id = "about-me" className="grid grid-flow-row place-items-center justify-center">
            <h2 className="text-3xl font-bold text-center text-textColor mt-24">{t('aboutMeTitle')}</h2>
            <h2 className="text-2xl font-bold text-center text-textColor">{t('aboutMeSubtitle')}</h2>
            <p className='text-center w-96 text-colot-textColor justify-self-center pt-4 whitespace-pre-line'>{t('aboutMeDescription')}</p>
        <Link to='' className='textWithAction'>{t('myProjectsTitle')}</Link>
        </div>
    </div>
    )
}

export default AboutMe
