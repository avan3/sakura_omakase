export const Footer = () => {
  return (
    <div className="w-full my-4 xl:py-5 xl:my-5 xxl:py-6 xxl:my-6 xxxl:py-7 xxxl:my-7 xxxxl:py-8 xxxxl:my-8">
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-black"></div>
        </div>
        {/* <div className="relative flex justify-center">
          <span className="bg-white px-4 font-medium text-md md:text-lg lg:text-xl xl:text-2xl xxxl:text-3xl xxxxl:text-4xl text-black">
          Continue
          </span>
        </div> */}
      </div>
      <div className="relative font-fira_sans text-md xl:text-lg xxl:text-xl xxxl:text-2xl xxxxl:text-3xl">
        ©Copyright Sakura Omakase 2024
      </div>
    </div>
  );
};
