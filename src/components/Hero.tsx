import omakase_xs from "../assets/omakase_480x281.webp";
import omakase_ss from "../assets/omakase_620x364.webp";
import omakase_sm from "../assets/omakase_768x450.webp";
import omakase_md from "../assets/omakase_1060x622.webp";
import omakase_lg from "../assets/omakase_1200x704.webp";
import omakase_xl from "../assets/omakase_1700x997.webp";
import omakase_xxl from "../assets/omakase_2000x1173.webp";
import omakase_xxxl from "../assets/omakase_2400x1407.webp";
import omakase_xxxxl from "../assets/omakase_3504x2055.webp";

export const Hero = () => {
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
      <section className="my-4">
        <picture>
          <source srcSet={omakase_xxxxl} media="(min-width: 2400px)" />
          <source srcSet={omakase_xxxl} media="(min-width: 2000px)" />
          <source srcSet={omakase_xxl} media="(min-width: 1700px)" />
          <source srcSet={omakase_xl} media="(min-width: 1200px)" />
          <source srcSet={omakase_lg} media="(min-width: 1060px)" />
          <source srcSet={omakase_md} media="(min-width: 768px)" />
          <source srcSet={omakase_sm} media="(min-width: 620px)" />
          <source srcSet={omakase_ss} media="(min-width: 480px)" />
          <img
            src={omakase_xs}
            alt="Omakase Background"
            className="rounded-sm"
            width="3504"
            height="2055"
          />
        </picture>
      </section>
    </>
  );
};
