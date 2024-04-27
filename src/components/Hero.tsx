import omakase_xs from "../assets/omakase_480x281.jpg";
import omakase_ss from "../assets/omakase_620x364.jpg";
import omakase_sm from "../assets/omakase_768x450.jpg";
import omakase_md from "../assets/omakase_1060x622.jpg";
import omakase_lg from "../assets/omakase_1200x704.jpg";
import omakase_xl from "../assets/omakase_1700x997.jpg";

const Hero = () => {
  return (
    <>
      <section className="m-auto max-w-max">
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
      <section className="mx-3 sm:mx-10 my-4">
        <picture>
          <source srcSet={omakase_xl} media="(min-width: 1200px)" />
          <source srcSet={omakase_lg} media="(min-width: 1060px)" />
          <source srcSet={omakase_md} media="(min-width: 768px)" />
          <source srcSet={omakase_sm} media="(min-width: 620px)" />
          <source srcSet={omakase_ss} media="(min-width: 480px)" />
          <img
            src={omakase_xs}
            alt="Omakase Background"
            className="rounded-sm"
          />
        </picture>
      </section>
    </>
  );
};

export default Hero;
