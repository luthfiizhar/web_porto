"use client";

import { BsArrowsAngleExpand } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    href: "/services",
  },
  {
    number: "02",
    title: "Mobile Development",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    href: "/services",
  },
  {
    number: "03",
    title: "Digital Solution",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
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
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group/title">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover/title:text-outline-hover transition-all duration-500">
                    {service.number}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover/title:bg-accent transition-all duration-500 flex justify-center items-center group/icon">
                    <BsArrowsAngleExpand className="text-primary text-3xl group-hover/icon:bg-accent transition-all duration-500 group-hover/icon:-scale-110"></BsArrowsAngleExpand>
                  </Link>
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover/title:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
