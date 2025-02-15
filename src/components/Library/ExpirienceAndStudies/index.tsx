import React from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";

const ExpirienceAndStudies: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className=" bg-gradient-to-l from-slate-100 to bg-aboutMeBgDark col-span-2 rounded-lg px-7 py-4 font-roboto">
      <h3 className="mb-3 border-b-2 border-b-black text-2xl font-bold">
        {t("EstudiesTittle")}
      </h3>
      <div className="my-2">
        <h4 className="Font-bold text-xl"> Bootcamp Full Stack Developer</h4>
        <p>- ISDI Coders 2024 - 230h </p>
      </div>
      <div className="my-2">
        <h4 className="Font-bold text-xl">
          {t("AdvancedAdvertisingRetouchingCourse")}
        </h4>
        <p>- Institut d’Estudis Fotogràfics de Catalunya - </p>
      </div>
      <div className="my-2">
        <h4 className="Font-bold text-xl">
          {t("SpecializationCourseInFashionPhotography")}
        </h4>
        <p>- Institut d’Estudis Fotogràfics de Catalunya - </p>
      </div>
    </div>
  );
};

export default ExpirienceAndStudies;
