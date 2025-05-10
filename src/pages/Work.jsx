import React from "react";
import IFP from "/IFP.jpg";
import aaroncolton from "/aaroncolton.jpeg";
import anuvjain from "/anuvjain.jpg";
import shuplan from "/shuplan.jpg";
import nucleya from "/nucleya.png";
import abhivyakti from "/abhivyakti.jpeg";
import adityagadhvi from "/adityagadhvi.jpg";
import lampros from "/lampros.jpg";
import toyota from "/toyota.jpg";
import ftv from "/ftv.jpeg";

const Work = () => {
  const projects = [
    {
      title: "IFP",
      description:
        "Previously known as India Film Project, is Asia's Largest Content Festival.",
      image: IFP,
    },
    {
      title: "Aaron Colton Showcase",
      description:
        "Aaron is one of the most recognized Street Freestyle riders in the world.",
      image: aaroncolton,
    },
    {
      title: "Anuv Jain Concert",
      description: "Anuv Jain is an Indian singer, songwriter, and composer.",
      image: anuvjain,
    },
    {
      title: "Shu Plan",
      description:
        "Shu Plan is a food and travel show by Gujarati Media House VTV News.",
      image: shuplan,
    },
    {
      title: "Nucleya Concert",
      description:
        "Single-handedly responsible for defining a sound and building a lexicon of bass music unique to India, Nucleya aka Udayan Sagar is undoubtedly the country's most popular and influential independent artist.",
      image: nucleya,
    },
    {
      title: "Abhivyakti City Arts Project",
      description:
        "Abhivyakti is a festival that brings together a variety of performing and visual art forms conceptualized and curated for Ahmedabad.",
      image: abhivyakti,
    },
    {
      title: "Aditya Gadhvi",
      description: "Infamous Gujarati concert.",
      image: adityagadhvi,
    },
    {
      title: "Lampros Christmas Carnival",
      description:
        "A talent show, game show followed by a Bollywood-themed fashion show by 5-10 y/o kids.",
      image: lampros,
    },
    {
      title: "Toyota Year-End Festival",
      description:
        "A power-packed 3-hour interaction and games with premium Toyota clients.",
      image: toyota,
    },
    {
      title: "FTV SOPA Fashion Show",
      description:
        "FTV is the world's highest viewed fashion broadcasting network.",
      image: ftv,
    },
  ];

  return (
    <div id="work" className="flex flex-col w-screen h-auto bg-[#111a1f] p-4 font-alegreya-sans">
      {/* Header Section */}
      <div className="flex flex-col text-white text-3xl items-center font-alegreyaSans font-bold">
        <h1>Work</h1>
        <p>Some Projects I could be a part of...</p>
      </div>
      <br />

      {/* Grid Section */}
      <div className="flex w-full flex-wrap justify-between p-4 px-10">
        {projects.map((project, index) => (
          <a
            href="/"
            key={index}
            className="w-[48%] z-[1] hover:scale-105 transition-all h-80 mb-4  bg-cover bg-center  items-center relative text-white p-4"
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          >
            <div className=" absolute -z-10 h-full w-full top-0 left-0 bg-black opacity-50"></div>
            <div className="flex h-full z-0 flex-col justify-center items-center">
              <h1 className="text-2xl font-black font-alegreyaSans">{project.title}</h1>
              <p className="mt-2 px-20 text-center text-xl font-black font-alegreyaSans">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;
