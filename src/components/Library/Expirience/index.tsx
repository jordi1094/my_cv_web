import React from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";

const Expirience: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="col-span-3 font-roboto bg-gradient-to-tr from-bgDarkGradient from-10% to-bgClear to-98% px-7 py-4 rounded-lg">
            <h3 className=" mb-3 border-b-2 border-black text-2xl font-bold">
                {t("ExpirienceTittle")}
            </h3>
            <p className="whitespace-pre-line">
                {t("VeepeeExpirience")}
            </p>
        </div>
    )
}
export default Expirience;