export const Menu = () => {
  return (
    <section className="md:my-6 flex flex-col justify-center items-center">
      <section className="md:basis-2/3 my-3 mx-4 font-fira_sans md:text-lg lg:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
        <h3 className="font-semibold text-[48px] xs:text-[50px] sm:text-[64px] lg:text-[76px] text-center">
          Menu
        </h3>
        <p className="mt-8 font-semibold text-lg sm:text-xl md:text-2xl xl:text-4xl xxxl:text-5xl xxxxl:text-6xl">
          Appetizer
        </p>
        <ul className="text-md sm:text-lg md:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
          <li>Seasonal Sashimi Platter</li>
          <li>Hokkaido Scallop Tartare with Yuzu Vinaigrette</li>
          <li>Grilled Japanese Eggplant with Miso Glaze</li>
        </ul>
        <p className="mt-8 font-semibold text-lg sm:text-xl md:text-2xl xl:text-4xl xxxl:text-5xl xxxxl:text-6xl">
          Sushi Selection
        </p>
        <ul className="text-md sm:text-lg md:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
          <li>Chef's Selection Nigiri Sushi</li>
          <li>Toro (Fatty Tuna) Nigiri</li>
          <li>Hamachi (Yellowtail) Nigiri</li>
          <li>Uni (Sea Urchin) Nigiri</li>
        </ul>
        <p className="mt-8 font-semibold text-lg sm:text-xl md:text-2xl xl:text-4xl xxxl:text-5xl xxxxl:text-6xl">
          Hot Dishes
        </p>
        <ul className="text-md sm:text-lg md:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
          <li>Wagyu Beef Tataki with Truffle Soy Sauce</li>
          <li>Grilled Miso Black Cod</li>
          <li>Tempura Assortment (Shrimp, Vegetables, Seafood)</li>
        </ul>
        <p className="mt-8 font-semibold text-lg sm:text-xl md:text-2xl xl:text-4xl xxxl:text-5xl xxxxl:text-6xl">
          Soup
        </p>
        <ul className="text-md sm:text-lg md:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
          <li>Clear Dashi Broth with Seasonal Vegetables</li>
        </ul>
        <p className="mt-8 font-semibold text-lg sm:text-xl md:text-2xl xl:text-4xl xxxl:text-5xl xxxxl:text-6xl">
          Dessert
        </p>
        <ul className="text-md sm:text-lg md:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
          <li>Matcha Green Tea Tiramisu</li>
          <li>Yuzu Sorbet with Fresh Berries</li>
        </ul>
        <p className="mt-8 font-semibold text-lg sm:text-xl md:text-2xl xl:text-4xl xxxl:text-5xl xxxxl:text-6xl">
          Chef's Special
        </p>
        <ul className="text-md sm:text-lg md:text-xl xl:text-3xl xxxl:text-4xl xxxxl:text-5xl">
          <li>Chef's Signature Omakase Course</li>
        </ul>
      </section>
    </section>
  );
};
