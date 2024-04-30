import { Form } from "./Form";

export const Reservations = () => {
  return (
    <section className="flex flex-col md:flex-row md:my-6 justify-center items-center">
      <section className="md:basis-2/3 my-3 mx-4 text-left font-fira_sans md:text-lg lg:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
        <h3 className="font-semibold text-[48px] xs:text-[50px] sm:text-[64px] lg:text-[76px] text-center">
          Reservations
        </h3>
        <Form />
      </section>
    </section>
  );
};
