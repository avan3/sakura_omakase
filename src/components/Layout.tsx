import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-full">
      <Navbar />
      <div className="md:ml-[10%] sm:ml-[17%] xs:ml-[120px] ml-[100px]">
        <div className="text-black mt-[80px] md:mt-[110px] xl:mt-[200px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
