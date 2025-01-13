import React from "react";
import "../../../i18n";
import { useTranslation} from 'react-i18next'
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Header : React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="header font-roboto mx-24">
            <div className="flex gap-7">
                <h5 className="">{t('headerHome')}</h5>
                <h5 className="">{t('headerProjects')}</h5>
                <h5 className="">{t('headerCV')}</h5>
                <h5 className="">{t('headerContact')}</h5>
            </div>
            <LanguageSwitcher/>
        </div>
    )
}

export default Header