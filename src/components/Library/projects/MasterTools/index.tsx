import React from "react";
import { useTranslation } from "react-i18next";
import "../../../../i18n";

const MasterTools: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="flex flex-col rounded-lg bg-bgDark px-7 py-4 font-roboto text-white">
      <h3 className="font-Bold mb-3 border-b-2 border-b-white text-2xl">
        Master Tools
      </h3>
      <p>{t("masterToolsDescription")}</p>
      <div className="flex h-full flex-col justify-end">
        <h5 className="mt-2">{t("technologiTitle")}</h5>
        <p>
          React, Sonner, Vite, Tailwind, Express, Mongoose, Cors, Bcryptjs,
          Mocha, Chai, C8
        </p>
      </div>
    </div>
  );
};
export default MasterTools;
