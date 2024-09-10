import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="py-10 px-12 flex justify-between">
        <span>
          <Image src={"/logo.svg"} alt="" width={160} height={100}></Image>
        </span>
        <p className="text-slate-500">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
