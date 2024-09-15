"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const navLinks = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href={"/"}
          className="text-lg md:text-5xl text-white font-semibold">
          {/* <Image src={"/logo.svg"} alt="" width={200} height={150}></Image> */}
          <h1 className="text-4xl font-semibold">
            Izhrmn<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav></Nav>
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav Bar */}
        <div className="xl:hidden">
          <MobileNav></MobileNav>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
