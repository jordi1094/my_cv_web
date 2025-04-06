import React from "react";
import { useTranslation} from "react-i18next";
import '../../../../i18n'

const HomeClimateBot: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-bgDark rounded-lg font-roboto text-white p-2 lg:py-4 lg:px-7 flex flex-col">
            <h3 className="font-Bold border-b-white border-b-2 mb-3 text-2xl">{t('homeClimateBot')}</h3>
            <p>{t('homeClimateBotDescription')}</p>
            <div className="flex flex-col h-full justify-end">
            <h5 className="mt-2">{t('technologiTitle')}</h5>
            <p>JavaScript, Node.js, npm, node-dht-sensor, node-telegram-bot-api </p>
            </div>
        </div>    
    )
}
export default HomeClimateBot