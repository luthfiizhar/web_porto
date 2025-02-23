"use client";

import { BsArrowsAngleExpand } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Focus on crafting responsive, high-performing, and user-friendly web application. ",
    image: "/images/web_dev.png",
    href: "/services",
  },
  {
    number: "02",
    title: "Mobile Development",
    description:
      "Build high-performance mobile application with seamless user experience across all devices. Available to develop cross-platform mobile application",
    image: "/images/mobile_dev_new.png",
    href: "/services",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
          }}
          // className="grid grid-rows gap-[60px]"
          className="flex flex-col gap-6">
          {services.map((service, index) => {
            // console.log(index % 2 === 0);
            return (
              <div
                key={index}
                className="flex flex-col xl:flex-row justify-center items-center gap-2 xl:gap-16 group/title">
                <div
                  className={`w-full o xl:w-auto flex flex-col gap-6 justify-center items-center ${
                    index % 2 !== 0
                      ? "order-2 xl:order-1"
                      : "order-2 xl:order-2"
                  } ${
                    index % 2 !== 0
                      ? " xl:items-end xl:mr-10 text-center xl:text-end"
                      : "xl:items-start xl:ml-10 text-center xl:text-start"
                  }`}>
                  {/* <div className="text-5xl font-extrabold text-outline text-transparent group-hover/title:text-outline-hover transition-all duration-500">
                    {service.number}
                  </div> */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover/title:text-accent transition-all duration-500 text-center">
                    {service.title}
                  </h2>
                  <p className="text-white/60 ">{service.description}</p>
                </div>
                <div
                  className={`relative w-[320px] h-[280px] xl:w-[460px] xl:h-[320px] justify-center items-center object-contain ${
                    index % 2 !== 0
                      ? "order-1 xl:order-2"
                      : "order-1 xl:order-1"
                  }`}>
                  <Image src={service.image} fill className="object-contain" />
                </div>
              </div>
            );

            // return (
            //   <div
            //     key={index}
            //     className="flex-1 flex flex-col justify-center gap-6 group/title">
            //     <div className="w-full flex justify-between items-center">
            //       <div className="text-5xl font-extrabold text-outline text-transparent group-hover/title:text-outline-hover transition-all duration-500">
            //         {service.number}
            //       </div>
            //       <Link
            //         href={service.href}
            //         className="w-[70px] h-[70px] rounded-full bg-white group-hover/title:bg-accent transition-all duration-500 flex justify-center items-center group/icon">
            //         <BsArrowsAngleExpand className="text-primary text-3xl group-hover/icon:bg-accent transition-all duration-500 group-hover/icon:-scale-110"></BsArrowsAngleExpand>
            //       </Link>
            //     </div>

            //     <h2 className="text-[42px] font-bold leading-none text-white group-hover/title:text-accent transition-all duration-500">
            //       {service.title}
            //     </h2>
            //     <p className="text-white/60">{service.description}</p>
            //     <div className="border-b border-white/20 w-full"></div>
            //   </div>
            // );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
