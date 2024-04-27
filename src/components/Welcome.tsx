import restaurant from "../assets/restaurant_view.webp";

export const Welcome = () => {
  return (
    <section className="flex flex-col md:flex-row md:my-6 justify-center items-center">
      <section className="md:basis-1/2 my-3 mx-4">
        <p className="font-fira_sans text-left text-md sm:text-lg md:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
          <span className="font-semibold text-lg sm:text-xl md:text-2xl xl:text-4xl xxxl:text-5xl xxxxl:text-6xl">
            Welcome to Sakura Omakase
          </span>
          , where tradition meets innovation in every dish. From delicate
          sashimi to meticulously crafted nigiri sushi, each bite is a symphony
          of taste and texture.
          <p className="mt-2">
            Join us for an&nbsp;
            <span className="font-semibold text-lg sm:text-xl md:text-2xl xl:text-4xl xxxl:text-5xl xxxxl:text-6xl">
              unforgettable dining experience
            </span>
            &nbsp;that celebrates the artistry and elegance of Japanese cuisine.
            Indulge in the essence of omakase at Sakura Omakase today.
          </p>
        </p>
      </section>
      <section className="md:basis-1/2 my-3">
        <img
          src={restaurant}
          alt="Restaurant View"
          className="object-cover w-full h-full"
        />
      </section>
    </section>
  );
};
