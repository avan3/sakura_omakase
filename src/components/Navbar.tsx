import sakura_omakase_logo from "../assets/sakura_omakase_logo_wht.svg";
import { NavLinks, Link } from "../constants";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaYelp } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav
      className={`md:w-[10%] sm:w-[17%] xs:w-[120px] w-[100px] h-full fixed flex flex-col justify-between items-center bg-black`}
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
      <div className="flex mb-4 xl:mb-5 xxl:mb-6 xxxl:mb-7 gap-3 xxxl:gap-4">
        {/* <a
          href="https://www.instagram.com/"
          className="text-white hover:text-slate-300"
        >
          <FaInstagram className="w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8" />
        </a>
        <a
          href="https://twitter.com/"
          className="text-white hover:text-slate-300"
        >
          <FaXTwitter className="w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8" />
        </a>
        <a
          href="https://www.yelp.com/"
          className="text-white hover:text-slate-300"
        >
          <FaYelp className="w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8" />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
