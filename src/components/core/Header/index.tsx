import React from "react";
import i18n from "../../../i18n";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Header : React.FC = () => {
    return (
        <div className="header">
            <h1 className="w-fit text-2xl text-textColor font-bold col-span-9 m-0 pl-14">Jordi Isern</h1>
            <LanguageSwitcher/>
        </div>
    )
}

export default Header