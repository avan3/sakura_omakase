import React from "react";
import omakase from "../assets/omakase-2.jpg";

const Hero = () => {
  return (
    <>
      <section className="max-w-max m-auto">
        <h1 className="text-[64px] xs:text-[72px] sm:text-[92px] lg:text-[108px] font-semibold font-fira_sans text-left leading-[62.2px] xs:leading-[70.4px] sm:leading-[88.6px] lg:leading-[100.8px]">
          Indulge
          <br />
          in
          <br />
          Tradition
        </h1>
        <h3 className="leading-[4.5rem] opacity-25 font-semibold font-fira_sans text-[36px] xs:text-[48px] sm:text-[60px] lg:text-[72px] m-auto">
          Sakura Omakase
        </h3>
      </section>
      <section className="m-2 xs:m-6 md:mx-16 md:my-8">
        <img src={omakase} alt="Omakase" className="rounded-sm" />
      </section>
    </>
  );
};

export default Hero;
