"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import AboutTabButton from "./AboutTabButton";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Dart/Flutter</li>
        <li>JavaScript</li>
        <li>NextJS</li>
        <li>PHP</li>
        <li>HTML/CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Telkom University</li>
      </ul>
    ),
  },
  // {
  //   title: "Certification",
  //   id: "certification",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>Telkom University</li>
  //     </ul>
  //   ),
  // },
];

const images = [
  {
    src: "/images/logo/flutter.svg",
  },
  {
    src: "/images/logo/javascript.svg",
  },
  {
    src: "/images/logo/nextjs.svg",
  },
  {
    src: "/images/logo/php.svg",
  },
  {
    src: "/images/logo/codeigniter.svg",
  },
  {
    src: "/images/logo/laravel-2.svg",
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const [imageIndex, setImageIndex] = useState<number>(0);

  const prevSlide = (): void => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = (): void => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const onTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="xl:grid xl:grid-cols-2 md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about_pict.jpg"
          width={500}
          height={500}
          alt=""></Image>
        {/* <Image
          src={images[imageIndex].src}
          alt={`Slider Image ${imageIndex + 1}`}
          // layout="fill"
          objectFit="cover"
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
          width={500}
          height={500}
        /> */}
        {/* <div className="flex flex-row gap-10 overflow-hidden h-[100%] items-center scroll-smooth">
          {images.map((image) => (
            <Image
              src={image.src}
              width={500}
              height={500}
              alt=""
              className="m-7"></Image>
          ))}
        </div> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I began my IT and software development career in 2018. With
            expertise in front-end frameworks, I specialize in Dart/Flutter,
            JavaScript, and HTML/CSS for building web and mobile applications.
            Additionally, I have experience in back-end development using PHP
            and Python, allowing me to collaborate across the full stack.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <AboutTabButton
              selectTab={() => onTabChange("skills")}
              active={tab === "skills"}>
              {" "}
              Skills{" "}
            </AboutTabButton>
            <AboutTabButton
              selectTab={() => onTabChange("education")}
              active={tab === "education"}>
              {" "}
              Education{" "}
            </AboutTabButton>
            {/* <AboutTabButton
              selectTab={() => onTabChange("certification")}
              active={tab === "certification"}>
              {" "}
              Certification{" "}
            </AboutTabButton> */}
          </div>
          <div className="mt-8 h-full flex-wrap">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
