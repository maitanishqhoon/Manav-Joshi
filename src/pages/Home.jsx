import React from "react";
import slideshow from "/homepgslideshow.mp4";
class Home extends React.Component{
    render(){
        const video = slideshow;
        return(
        <>
        <div className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src= {video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="flex-col relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold font-alegreya-sans">MAKING WORLD HAPPIER</h1><br></br>
        <h1 className="text-5xl font-bold font-alegreya-sans">ONE SHOW AT A TIME.</h1>
        <button className="bg-[#E10032] text-white px-4 py-2 mt-4 hover:bg-red-500 font-light font-alegreya-sans">Let's Work</button>
      </div>
    </div>
        </>
        )
    }
}

export default Home;