import React from "react";
import NavLink from "./NavLink";

export const MenuOverlay = ({ links }: any) => {
  return (
    <ul className="flex flex-col py-4 items-center ">
      {links.map((link: any, index: any) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title}></NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
