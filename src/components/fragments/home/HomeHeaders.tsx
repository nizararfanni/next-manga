import React from "react";
import Icons from "../../elements/Icons";
import DekstopNav from "../../elements/DekstopNav";
import MobileNav from "../../elements/MobileNav";

const HomeHeaders = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-gray-800/90 backdrop-blur-md w-full md:px-6 py-4 md:gap-4 fixed top-0  z-50 ">
      <Icons></Icons>
      <DekstopNav></DekstopNav>
      <MobileNav></MobileNav>
    </div>
  );
};

export default HomeHeaders;
