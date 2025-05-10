import React from "react";

const About = () => {
    return (
        <div 
            id="About" 
            className="flex flex-col md:flex-row h-auto md:h-screen bg-[#111a1f] relative"
        >
            {/* Background Image (Only on Large Screens) */}
            <div className="hidden md:block absolute inset-0 bg-[url('/manavjoshi.png')] bg-cover bg-right bg-no-repeat"></div>

            {/* Text Section */}
            <div className="relative w-full md:w-2/3 text-white text-lg font-bold flex flex-col gap-6 p-10 md:p-16 z-10">
                <h1 className="text-5xl md:text-7xl font-alegreyaSans font-bold">About</h1>
                <p className="text-xl md:text-2xl font-alegreyaSans font-bold">
                    Manav is a <span className="text-red-600 font-alegreyaSans font-bold">Performer, VJ, Marketer, and Bathroom singer.</span> 
                    Hosting his first show when he was 12, Manav has over 250 stage shows under his belt, having entertained crowds as huge as 15,000 people. 
                    As the host of the popular travel show "Shu Plan?" on VTV Gujarati, Manav's videos have garnered over 10 million views across social media.
                </p>
                <p className="text-xl md:text-2xl font-alegreyaSans font-bold">
                    Manav has conducted 50+ insightful interviews with prominent personalities from the Gujarati entertainment industry. 
                    An artist at heart, Manav has a background in marketing with 5+ years of experience in some fantastic projects.
                </p>
                <p className="text-xl md:text-2xl font-alegreyaSans font-bold">
                    Bring the electrifying energy on stage, on camera, in your next project. Work with Manav for your next big gig!
                </p>
            </div>
        </div>
    );
};

export default About;
