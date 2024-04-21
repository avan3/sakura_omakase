import React from "react";
import sakura_omakase_logo from "../assets/sakura_omakase_logo_wht.svg";
import { NavLinks, Link } from "../constants";

const Navbar = () => {
  return (
    <nav
      className={`w-full xl:w-5/6 flex justify-between items-center top-0 sm:px-16 px-6`}
    >
      <img
        src={sakura_omakase_logo}
        alt="Sakura Omakase"
        className="w-[100px] h-[100px] my-2 relative"
      />
      <span className="hidden sm:flex">
        <ul className="list-none flex">
          {NavLinks.map((item: Link) => (
            <li
              key={item.id}
              className="font-fira_sans font-semibold uppercase cursor-pointer text-[12px] text-secondary hover:text-primary/95 mr-10"
            >
              <a href={"#"}>{item.title}</a>
            </li>
          ))}
        </ul>
      </span>
    </nav>
  );
};

export default Navbar;
