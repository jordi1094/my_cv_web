import React from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";

const HardSkills: React.FC = () => {
  const { t } = useTranslation();

  const lenguages: string[] = ["JavaScript", "Python", "Php", "TypeScript"];
  const frontEnd: string[] = ["HTML", "CSS", "TailWind", "React"];
  const backEnd: string[] = ["Node.js", "Express", "Php", "MongoDB", "MySQL"];
  const others: string[] = ["git", "mocha", "C8", "PHPUnit"];
  return (
    <div className="col-span-1 rounded-lg bg-gradient-to-r from-slate-100 to-aboutMeBgDark px-7 py-4 font-roboto">
      <h3 className="border-b-2 border-black text-2xl font-bold">
        {t("HardSkillsTittle")}
      </h3>
      <div className="grid grid-flow-col">
        <div className="my-2">
          <h6 className="font-bold">{t("ProgramingLanguagesTittle")}</h6>
          <ul>
            {lenguages.map((lenguage, index) => (
              <li key={index}>{lenguage}</li>
            ))}
          </ul>
        </div>
        <div className="my-2">
          <h6 className="font-bold">Front End</h6>
          <ul>
            {frontEnd.map((lenguage, index) => (
              <li key={index}>{lenguage}</li>
            ))}
          </ul>
        </div>
        <div className="my-2">
          <h6 className="font-bold">Back End</h6>
          <ul>
            {backEnd.map((lenguage, index) => (
              <li key={index}>{lenguage}</li>
            ))}
          </ul>
        </div>
        <div className="my-2">
          <h6 className="font-bold">{t("HardSkillsOtherTittle")}</h6>
          <ul>
            {others.map((lenguage, index) => (
              <li key={index}>{lenguage}</li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default HardSkills;
