import React from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";

const Studies: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className=" bg-gradient-to-tl from-bgClear to-bgDarkGradient col-span-2 rounded-lg p-2 lg:px-7 lg:py-4 font-roboto">
      <h3 className="mb-3 border-b-2 border-b-black text-2xl font-bold">
        {t("EstudiesTittle")}
      </h3>
      <div className="my-2">
        <h4 className="font-bold"> Bootcamp Full Stack Developer</h4>
        <p>- ISDI Coders 2024 - 230h </p>
      </div>
      <div className="my-2">
        <h4 className="font-bold">
          {t("AdvancedAdvertisingRetouchingCourse")}
        </h4>
        <p>- Institut d’Estudis Fotogràfics de Catalunya - </p>
      </div>
      <div className="my-2">
        <h4 className="font-bold">
          {t("SpecializationCourseInFashionPhotography")}
        </h4>
        <p>- Institut d’Estudis Fotogràfics de Catalunya - </p>
      </div>
    </div>
  );
};

export default Studies;
