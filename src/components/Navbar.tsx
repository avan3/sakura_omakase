import React from "react";
import sakura_omakase_logo from "../assets/sakura_omakase_logo_wht.svg";
import { NavLinks, Link } from "../constants";

const Navbar = () => {
  return (
    <nav className={`w-full flex py-3 justify-center items-center top-0`}>
      <img
        src={sakura_omakase_logo}
        alt="Sakura Omakase"
        className="w-[120px] h-[120px] my-2 relative"
      />
      <ul className="hidden sm:flex items-center">
        {NavLinks.map((item: Link) => (
          <li
            key={item.id}
            className="font-fira_sans font-semibold uppercase cursor-pointer text-[12px] text-secondary hover:text-primary/95 mr-10"
          >
            <a href={"#"}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
