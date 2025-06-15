import React from "react";
import Header from "../../components/core/Header"
import NameAndInfo from "../../components/Library/NameAndInfo";
import AboutMe from "../../components/Library/AboutMe"


const Home: React.FC = () => {
    return (
        <div className="w-[100vw]">
        <Header/>
        <main className="flex flex-col gap-2 pb-7 cursor-default">
            <NameAndInfo/>
            <AboutMe/>
        </main>
        </div>
    )
}

export default Home