import React from "react";
import { useTranslation} from "react-i18next";
import '../../../../i18n'

const IrrigationAlert: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-bgDark font-roboto text-white rounded-lg p-2 lg:py-4 lg:px-7 flex flex-col">
            <h3 className="font-Bold border-b-white border-b-2 mb-3 text-2xl">{t('irrigationAlert')}</h3>
            <p>{t('irrigationAlertDescription')}</p>
            <div className="flex flex-col h-full justify-end">
            <h5 className="mt-2">{t('technologiTitle')}</h5>
            <p>JavaScript, Node.js, NodeMailer</p>
            </div>
        </div>    
    )
}
export default IrrigationAlert