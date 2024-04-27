import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex h-full">
      <Navbar />
      <div className="md:ml-[10%] sm:ml-[17%] xs:ml-[120px] ml-[100px]">
        <div className="flex flex-col justify-center items-center text-black my-[80px] md:my-[110px] xl:my-[200px] mx-3 sm:mx-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
