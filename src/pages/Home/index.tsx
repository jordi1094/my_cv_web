import React from "react";
import Header from "../../components/core/Header"
import AboutMe from "../../components/Library/AboutMe"
import MasterTools from "../../components/Library/projects/MasterTools";


const Home: React.FC = () => {
    return (
        <div>
        <Header/>
        <main className="grid grid-cols-3 gap-2 mx-24">
            <AboutMe/>
            <img src="/images/profile-image.jpg" className="rounded-lg h-[65vh]"></img>
            <MasterTools/>
        </main>
        </div>
    )
}

export default Home