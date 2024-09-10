"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTagButton from "./ProjectTagButton";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Visitor Management System",
    description:
      "Web base application for make invitation for employee guest to visit Kawan Lama Group Head Office.",
    image: "/images/projects/vms_web.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Meeting Room Booking System",
    description:
      "Web base application for book a meeting room. Linked to employee google workspace account.",
    image: "/images/projects/mrbs.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "GA Decentralize System",
    description:
      "Web base application to do monthly order supplies and settle order supplies for retail store under Kawan Lama Group.",
    image: "/images/projects/gads.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Property Management Mobile App",
    description:
      "Mobile application used for support Property/Building officer activity.",
    image: "/images/projects/propman_mobile.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "Property Management Web",
    description:
      "Web base application version for Property Management App. Used by supervisor to make schedule and task.",
    image: "/images/projects/propman_web.png",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const onTabChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        My Project
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTagButton
          name="All"
          onClick={onTabChange}
          isSelected={tag === "All"}></ProjectTagButton>
        <ProjectTagButton
          name="Web"
          onClick={onTabChange}
          isSelected={tag === "Web"}></ProjectTagButton>
        <ProjectTagButton
          name="Mobile"
          onClick={onTabChange}
          isSelected={tag === "Mobile"}></ProjectTagButton>
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}></ProjectCard>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
