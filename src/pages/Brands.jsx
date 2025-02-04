import React from "react";
import redbull from "/logos/redbull.png";
import vtv from "/logos/vtv.png";
import ftvlogo from "/logos/ftvlogo.png";
import toyotalogo from "/logos/toyota.png";
import ifplogo from "/logos/ifplogo.png";
import abhilogo from "/logos/abhilogo.png";
import gimme from "/logos/gimme.png";
import hungrito from "/logos/hungrito.png";
import lamproslogo from "/logos/lamproslogo.png";
import indus from "/logos/indus.png";
import intel from "/logos/intel.png";
import justdogs from "/logos/justdogs.png";
import parul from "/logos/parul.png";
import torrent from "/logos/torrent.png";

const Brands = () => {
  
  const logos = [
    redbull,
    toyotalogo,
    vtv,
    justdogs,
    intel,
    ftvlogo,
    torrent,
    parul,
    ifplogo,
    indus,
    hungrito,
    abhilogo,
    gimme,
    lamproslogo,
  ];

  return (
    <div id="brands" className="flex flex-col w-screen h-auto bg-[#111a1f] p-4 font-alegreya-sans">

      {/* Footer Section */}
      <div className="flex flex-col text-white items-center mt-8">
        <h1 className="text-3xl font-bold">Work with Manav</h1>
        <p className="font-bold">like they did...</p>
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-between p-4">
        {logos.slice(0, -2).map((logo, index) => (
          <div
            key={index}
            className="w-[33%] h-[55%] mb-4 flex flex-col items-center justify-center"
          >
            <img
              src={logo}
              alt="logo"
              className="w-2/3 h-2/3 object-contain grayscale hover:grayscale-0"
            />
          </div>
        ))}

        {/* Last row with two logos and text */}
        <div className="flex w-full items-center justify-between">
          <div className="w-[30%] h-48 flex flex-col items-center justify-center">
            <img
              src={logos[logos.length - 2]}
              alt="second last logo"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
          <div className="w-[30%] h-48 flex flex-col items-center justify-center">
            <img
              src={logos[logos.length - 1]}
              alt="last logo"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
          <div className="w-[30%] h-48 flex flex-col items-center justify-center">
            <p className="text-center text-white">
              and many more...
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center bg-[#111a1f] h-screen text-white">
  <button className="absolute left-4 text-2xl">❮</button>
  <div className="flex flex-col items-center">
    <h1 className="text-4xl mb-4 font-bold">Shu Plan Che?</h1>
    <iframe
      className="w-[550px] h-[309px] shadow-lg"
      src="https://www.youtube.com/embed/El59GSC37Fc?si=chlGxpHJ7nrPoTE6"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <button className="absolute right-4 text-2xl">❯</button>
</div>

    </div>
  );
};

export default Brands;
