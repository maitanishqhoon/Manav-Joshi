import React from "react";
import manavjoshi from "/manavjoshi.png";


class About extends React.Component{
    render(){
        return(
        <>
        <div className="flex h-screen bg-[url('/manavjoshi.png')] bg-contain bg-right bg-no-repeat bg-[#111a1f] justify-between items-center align-middle">
        <div className="flex w-2/3 gap-4 font-bold flex-col p-10 items-start text-white text-lg">
            <h1 className="text-7xl font-black text-white font-roboto">About</h1>
            <p>Manav is a <span className="text-red-600">Performer, VJ, Marketer, and Bathroom singer.</span> Hosting his first show when he was 12, Manav has over 250 stage shows under his belt, having entertained crowds as huge as 15,000 people. As the host of the popular travel show "Shu Plan?" on VTV Gujarati, Manav's videos have garnered over 10 million views across social media.</p>
            <p>Manav has conducted 50+ insightful interviews with prominent personalities from the Gujarati entertainment industry. An artist at heart, Manav has a background in marketing with a 5+ years of experience in some fantastic projects.</p>
            <p>Bring the electrifying energy on stage, on camera, in your next project. Work with Manav, for your next big gig!</p>
        </div>
        <div className="flex items-start text-white text-lg">
        </div>
        </div>
        </>
        )
    }
}

export default About;