import { CTA } from "./CTA";
import Contact from "./Contact";
import { Hero } from "./Hero";
import { Welcome } from "./Welcome";

export const Index = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <CTA />
      <Contact />
    </>
  );
};
