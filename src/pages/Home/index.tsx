import React from "react";
import Header from "../../components/core/Header"
import AboutMe from "../../components/Library/AboutMe"
import MasterTools from "../../components/Library/projects/MasterTools";
import IrrigationAlert from "../../components/Library/projects/IrrigationAlert";
import HomeClimateBot from "../../components/Library/projects/HomeClimateBot";
import Expirience from "../../components/Library/Expirience";
import HardSkills from "../../components/Library/HardSkills";
import Studies from "../../components/Library/Studies";


const Home: React.FC = () => {
    return (
        <div className="w-[100vw]">
        <Header/>
        <main className="flex flex-col gap-2 mx-2 lg:grid grid-cols-3 lg:mx-24 pb-7 cursor-default">
            <AboutMe/>
            <img src="/images/profile-image.jpg" className="rounded-lg h-[30vh] lg:h-[65vh] w-stretch object-cover"></img>
            <MasterTools/>
            <IrrigationAlert/>
            <HomeClimateBot/>
            <Expirience/>
            <HardSkills/>
            <Studies/>
        </main>
        </div>
    )
}

export default Home