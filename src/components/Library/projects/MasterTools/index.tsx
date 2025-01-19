import React from "react";
import { useTranslation, UseTranslation } from "react-i18next";
import '../../../../i18n'

const MasterTools: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-bgDark rounded-lg font-roboto text-white py-4 px-7 flex flex-col">
            <h3 className="font-Bold border-b-white border-b-2 mb-3 text-2xl">Master Tools</h3>
            <p>{t('masterToolsDescription')}</p>
            <div className="flex flex-col h-full justify-end">
            <h5 className="mt-2">{t('technologiTitle')}</h5>
            <p>React, Sonner, Vite, Tailwind, Express, Mongoose, Cors, Bcryptjs, Mocha, Chai, C8</p>
            </div>
        </div>    
    )
}
export default MasterTools