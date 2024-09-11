"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left lg:text-left w-full">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-700">
              Hello, i'm{""}
            </span>
            <br />
          </h1>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <TypeAnimation
              sequence={[
                "Luthfi Izhariman", // Types 'One'
                1000, // Waits 1s
                "Web Developer", // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                "Mobile Developer", // Types 'Three' without deleting 'Two'
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className=""></TypeAnimation>
          </h1>
          <p className="text-white text-base  sm:text-lg lg:text-xl mb-6">
            Front End Developer for Web and Mobile Application.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Contact Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-4">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-4">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/images/hehe.webp"
              // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              className="rounded-full object-cover lg:w-[500px] lg:h-[500px]"
              alt=""
              width={300}
              height={300}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
