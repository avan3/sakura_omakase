import notFound from "../assets/404_pic.avif";
export const NotFound = () => {
  return (
    <section className="flex flex-col md:my-6 justify-center items-center">
      <section className="my-3 mx-4 font-fira_sans md:text-lg lg:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
        <h1 className="text-[64px] xs:text-[72px] sm:text-[92px] lg:text-[108px] font-semibold font-fira_sans leading-[62.2px] xs:leading-[70.4px] sm:leading-[88.6px] lg:leading-[100.8px]">
          404
        </h1>
        <h3 className="leading-[4.5rem] opacity-25 font-semibold font-fira_sans text-[36px] xs:text-[48px] sm:text-[60px] lg:text-[72px] m-auto">
          Sushi Not Found
        </h3>
        <img
          src={notFound}
          alt="Not Found Sushi"
          className="mt-6 w-full h-full"
        />
      </section>
    </section>
  );
};
