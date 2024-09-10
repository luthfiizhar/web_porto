import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem" },
};

const AboutTabButton = ({ active, selectTab, children }: any) => {
  const buttonClasses = active
    ? "text-white border-b border-blue-400"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-blue-400 mt-2 mr-3"></motion.div>
    </button>
  );
};

export default AboutTabButton;
