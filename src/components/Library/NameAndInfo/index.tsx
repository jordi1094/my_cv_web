import React from "react";

import { useTranslation } from "react-i18next";
import "../../../i18n";

const NameAndInfo: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="grid grid-cols-4 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white font-roboto py-4" >
            <div>
                <img src="images/profile-image-2.jpg" alt="profile image" className="w-32 h-32 my-auto mx-auto rounded-full" />                
            </div>
            <div className="col-span-2">
                <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent ">Jordi Isern</h1>
                <h2 className="text-xl mt-2">Junior Full Stack Developer</h2>  
                <div className="flex gap-2">

                    <div className="rounded-2xl bg-slate-200 bg-opacity-20 py-1 px-2 flex w-fit gap-1">                
                        <img src="icons/location-white.svg" alt="Location Icon" className="w-4 h-4" />
                        <p className="text-xs">Santa Coloma de Gramenet, Barcelona</p>
                    </div>
                    <div className="rounded-2xl bg-slate-200 bg-opacity-20 py-1 px-2 flex w-fit gap-1 cursor-copy "
                        onClick={() => navigator.clipboard.writeText("jordiisern94@gmail.com")}
                        title="Copiar email"
                    >                
                        <img src="icons/mail-white.svg" alt="Location Icon" className="w-4 h-4" />
                        <p className="text-xs">jordiisern94@gmail.com</p>
                    </div>
                    <a className="rounded-2xl bg-slate-200 bg-opacity-20 py-1 px-2 flex w-fit gap-1 cursor-copy "
                        href="https://github.com/jordi1094"
                        target="_blank"
                    > 
                        <img src="icons/github-mark-white.svg" alt="Location Icon" className="w-4 h-4" />
                        <p className="text-xs">jordi1094</p>
                    </a>
                </div>
            </div>
        </div>
    );
    };

export default NameAndInfo;