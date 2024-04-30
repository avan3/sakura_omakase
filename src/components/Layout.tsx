import { Footer } from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex h-full">
      <Navbar />
      <div className="md:ml-[10%] sm:ml-[17%] xs:ml-[120px] ml-[100px] flex-1">
        <div className="text-black my-[80px] md:my-[110px] xl:my-[200px] mx-3 sm:mx-10">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};
