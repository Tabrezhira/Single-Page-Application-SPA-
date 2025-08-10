import React from "react";
import logo2 from "../../public/Logo2.png";

function Footer() {
  return (
    <footer className="mx-auto container h-[120px] md:h-23 flex flex-col  md:flex-row items-center justify-between w-full mb-10  mt-13 md:mt-24 xl:mt-20 border-b border-[#e6e6e6] ">
      <div className="flex items-center justify-between gap-1">
        <img className="w-41 h-15" src={logo2} alt="logo" />
      </div>
      <div className="mb-2 md:mb-0">
        <ul className="flex items-center justify-center text-white gap-3" >
          <li className=" cursor-pointer text-base md:text-xl font-poppins font-normal">
            Home
          </li>
          <li className=" cursor-pointer text-base md:text-xl font-poppins font-normal">
            Portfolio
          </li>
          <li className=" cursor-pointer text-base md:text-xl font-poppins font-normal">
            Skills
          </li>
          <li className=" cursor-pointer text-base md:text-xl font-poppins font-normal">
            About Me
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
