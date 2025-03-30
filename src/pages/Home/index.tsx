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
        <div>
        <Header/>
        <main className="grid grid-cols-3 gap-2 mx-24 pb-7 cursor-default">
            <AboutMe/>
            <img src="/images/profile-image.jpg" className="rounded-lg h-[65vh] w-[fill] object-cover"></img>
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