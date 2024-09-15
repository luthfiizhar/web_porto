"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import ProjectSliderButton from "../components/ProjectSliderButton";

const projects = [
  {
    num: "01",
    category: "mobile app",
    title: "Absensi Online",
    description: "Attendance application using face matching API.",
    stack: [{ name: "Flutter" }, { name: "Python" }, { name: "PostgreSQL" }],
    image: "/images/projects/absensi.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "web app",
    title: "E - Medical Record",
    description: "Digital medical records for hospital.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "CodeIgniter" },
      { name: "PostgreSQL" },
    ],
    image: "/images/projects/EMR.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "web app",
    title: "Visitor Management System",
    description: "Web base application for invite visitor to Head Office.",
    stack: [{ name: "Flutter" }],
    image: "/images/projects/VMS.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "mobile app",
    title: "Visitor Kiosk",
    description:
      "Kiosk device for visitor registration at Head Office reception",
    stack: [{ name: "Flutter" }, { name: "Java" }],
    image: "/images/projects/VMSKiosk.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "web app",
    title: "Meeting Room Booking System",
    description:
      "Web base application for book a meeting room with save event to personal calendar feature.",
    stack: [{ name: "Flutter" }, { name: "JavaScript" }],
    image: "/images/projects/MRBS.png",
    live: "",
    github: "",
  },

  {
    num: "06",
    category: "web app",
    title: "GA Decentralize System",
    description:
      "Web base application to do monthly order supplies and settle order supplies for retail store under Kawan Lama Group.",
    stack: [{ name: "Flutter" }, { name: "JavaScript" }, { name: "Firebase" }],
    image: "/images/projects/GADS.png",
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "mobile app",
    title: "Property Management Apps",
    description:
      "Mobile application used for support Property/Building officer activity.",
    stack: [{ name: "Flutter" }, { name: "Java" }, { name: "Firebase" }],
    image: "/images/projects/PropManMobile.png",
    live: "",
    github: "",
  },
  {
    num: "08",
    category: "web app",
    title: "Event List",
    description:
      "Event monitoring for Facility Mangement Dept. Kawan Lama Group.",
    stack: [{ name: "Flutter" }, { name: "JavaScript" }],
    image: "/images/projects/FMEventList.png",
    live: "",
    github: "",
  },
  {
    num: "09",
    category: "web app",
    title: "Property Management Web",
    description:
      "Web base application version for Property Management App. Used by supervisor to make schedule and task and have more dashboard feature.",
    stack: [{ name: "Flutter" }, { name: "JavaScript" }, { name: "Firebase" }],
    image: "/images/projects/PropManWeb.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProjectState] = useState(projects[0]);

  const onChange = (swiper) => {
    // current slide
    const currIndex = swiper.activeIndex;
    //new Index
    setProjectState(projects[currIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Num */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent text-outline
              ">
                {project.num}
              </div>
              {/* Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((tech, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {tech.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Divider */}
              <div className="border border-white/20"></div>
              {/* Button */}
              <div className="flex items-center gap-4">
                <Link href={project.live} className="">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github  */}
                <Link href={project.github} className="">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={onChange}>
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-xl"></div>
                      <div className="relative w-full h-full object-contain rounded-xl">
                        <Image
                          src={project.image}
                          fill
                          sizes="w-full h-full"
                          className="object-cover rounded-xl"
                          alt=""></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <ProjectSliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-transparent xl:bg-accent hover:bg-accent-hover text-primary xl:text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all xl:rounded-md"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
