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
    <div className="flex flex-col w-screen h-auto bg-[#111a1f] p-4">
      {/* Header Section */}
      <div className="flex flex-col text-white text-3xl items-center">
        <h1>Work</h1>
        <p>Some Projects I could be a part of...</p>
      </div>
      <br />

      {/* Grid Section */}
      <div className="flex flex-wrap justify-between p-4">
        {projects.map((project, index) => (
          <a href="/"
            key={index}
            className="w-[48%] h-64 mb-4 flex flex-col items-center justify-center bg-cover bg-center text-white p-4"
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          >
            <h1 className="text-2xl font-black">{project.title}</h1>
            <p className="mt-2 text-center text-sm font-black">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;
