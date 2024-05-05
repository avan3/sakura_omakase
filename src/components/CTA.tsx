import { NavLink } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="flex flex-col md:my-6 justify-center items-center">
      <section className="my-3 mx-4">
        <h1 className="text-[48px] xs:text-[50px] sm:text-[64px] lg:text-[76px] xl:text-[90px] font-semibold font-fira_sans leading-[62.2px] xs:leading-[70.4px] sm:leading-[88.6px] lg:leading-[100.8px]">
          Experience the Essence of Japan
        </h1>
        <h3 className="leading-[4.5rem] opacity-25 font-semibold font-fira_sans text-[32px] xs:text-[40px] sm:text-[50px] lg:text-[60px] xl:text-[72px] m-auto">
          Sakura Omakase
        </h3>
        <div className="my-5 sm:my-8 xl:my-10">
          <NavLink
            key="menu"
            to="/menu"
            className={`font-fira_sans font-medium bg-black hover:opacity-25
          cursor-pointer text-[17px] xl:text-[21px] xxl:text-[25px] xxxl:text-[30px] 
          text-secondary py-4 px-12 xl:py-5 xl:px-14`}
          >
            Menu
          </NavLink>
        </div>
      </section>
    </section>
  );
};
