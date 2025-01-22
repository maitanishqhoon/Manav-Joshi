import React from "react";
import whitelogo from "/logos/white logo 2.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    const numbers = [{text: "Shows",count:264},
        {text:"Views",count: 98749903},
        {text: "Interviews",count: 54},
        {text: "Days of Herogiri",count: 3987},
        {text:"Smiles", count:"∞"}
    ]
    return (
        <>
        <div className="flex bg-[#111a1f] items-center justify-around p-4 px-10">
        {numbers.map((number, index) => (
            <div className="flex flex-col items-center" key={index}>
                <h1 className="text-white text-3xl">{number.count}</h1>
                <p className="text-white">{number.text}</p>
            </div>
        ))}
        </div>
        <div className="bg-[#242a2d] items-center flex flex-col text-white p-4 space-y-12">
            <img src={whitelogo} alt="logo" className="w-1/3 h-1/3 object-contain m-auto"/>
            <p className="font-bold">Copyright @ 2023 ✸ Manav Joshi</p>
            <div className="flex justify-between space-x-12 items-center align-middle">
                <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0"
                >
                <FaFacebookF />
                </a>
                <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0"
                >
                <FaTwitter />
                </a>
                <a
                href="https://www.instagram.com/manav.joshii/"
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0"
                >
                <FaInstagram />
                </a>
                <a
                href="https://www.youtube.com/channel/UCNBK6_Xg4j-ebsmsI_bIo4g"
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0"
                >
                <FaYoutube />
                </a>
            </div>
        </div>
        </>
    )
};

export default Footer;