import React from "react";
import sakura_omakase_logo from "../assets/sakura_omakase_logo_wht.svg";
import { NavLinks, Link } from "../constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className={`md:w-[10%] sm:w-[17%] w-[20%] min-w-[120px] h-full flex flex-col justify-between items-center bg-black`}
    >
      <img
        src={sakura_omakase_logo}
        alt="Sakura Omakase"
        className="w-5/6 my-2"
      />
      <div className="mt-2">
        <ul className="list-none flex flex-col">
          {NavLinks.map((item: Link) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                [
                  `font-fira_sans font-semibold uppercase
                  cursor-pointer text-[13px] xl:text-[17px] xxl:text-[20px] xxxl:text-[25px] text-secondary p-3
                  hover:text-slate-300`,
                  isActive ? "border border-white" : "",
                ].join(" ")
              }
            >
              {item.title}
            </NavLink>
          ))}
        </ul>
      </div>
      <div>Socials</div>
    </nav>
  );
};

export default Navbar;
