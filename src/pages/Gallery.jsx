import React from "react";
import one from "/gallery/1.jpg";
import two from "/gallery/2.jpg";
import three from "/gallery/3.jpg";
import four from "/gallery/4.jpg";
import five from "/gallery/5.jpg";
import six from "/gallery/6.jpg";
import seven from "/gallery/7.jpg";
import eight from "/gallery/8.jpg";
import nine from "/gallery/9.jpg";
import ten from "/gallery/10.jpg";
import twelve from "/gallery/12.jpg";
import thirteen from "/gallery/13.jpg";
import fourteen from "/gallery/14.jpg";
import fifteen from "/gallery/15.jpg";
import seventeen from "/gallery/17.jpg";
import eighteen from "/gallery/18.jpg";
import nineteen from "/gallery/19.jpg";

const Gallery = () => {
    const images = [one, two, three, four, five, six, seven, eight, nine, ten, twelve, thirteen, fourteen, fifteen, seventeen, eighteen, nineteen];

    return (
        <div id="gallery" className="w-full bg-[#111a1f] p-6 font-alegreya-sans">
            <h1 className="text-white text-4xl text-left font-bold mb-6">Gallery</h1>

            {/* Masonry Layout */}
            <div className="columns-1 sm:columns-1 md:columns-3 lg:columns-5 gap-2 space-y-1">
                {images.map((image, index) => (
                    <div key={index} className="mb-4 overflow-hidden">
                        <img
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            className="w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
