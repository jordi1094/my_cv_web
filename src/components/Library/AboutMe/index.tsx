import React from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="home" className="col-span-2 grid place-content-center rounded-lg bg-gradient-to-br from-bgClear from-2% to-bgDarkGradient to-80% px-4 lg:px-14 font-roboto">
      <h3 className="p-2 lg:mx-16 lg:mt-7 justify-self-center whitespace-pre-line text-xl font-bold text-black">
        {t("aboutMeTitle")}
      </h3>
      <p className="p-2 lg:m-7 lg:mx-16 justify-self-center whitespace-pre-line text-black">
        {t("aboutMeDescription")}
      </p>
    </div>
  );
};

export default AboutMe;
