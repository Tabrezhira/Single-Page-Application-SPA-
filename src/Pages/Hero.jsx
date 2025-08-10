import React from "react";
import pic from "/public/hero.png";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { IoArrowDownCircleOutline } from "react-icons/io5";
function Hero() {
  return (
    <section className="mx-auto  container mt-7 md:mt-16 xl:mt-10 flex w-full xl:h-170 justify-between font-poppins ">
      <div className="w-96 md:w-166 mx-auto  xl:w-240 xl:h-170 flex flex-col">
        <h1 className="text-[79px] tracking-tighter text-center md:text-[136px] xl:text-left xl:text-[188px] font-extrabold text-white  leading-[1px] xl:leading-40 ">
          PRODUCT
        </h1>
        <h1 className=" text-[79px]  tracking-tighter text-center md:text-[136px] xl:text-[188px]  xl:text-left font-extrabold text-white leading-[130px] md:leading-[220px] xl:leading-0 xl:mt-22">
          DESIGNER
        </h1>
        <p className="text-[46px] -mt-6  md:-mt-13 text-center md:text-[79px] md:leading-[79px] xl:text-left  leading-[46px] tracking-tighter xl:text-[109px] xl:leading-tight xl:mt-19 font-bold  bg-gradient-to-r from-[#FA709A] to-[#FEE140] bg-clip-text text-transparent">
          CRISTIAN MUN0Z
        </p>
        <div className=" mt-10 s md:mt-17 xl:mt-13 flex mx-auto md:w-131 w-85 xl:w-131 items-center justify-between ">
        <a className="h-8 w-8 cursor-pointer hover:bg-[#C8FEC7] hover:text-black md:h-12   md:w-12 xl:p-2 p-1 rounded border border-white text-white text-center" href="#"><  FaInstagram className="text-white text-center h-full w-full hover:text-black" /></a>
        <a className="h-8 w-8 cursor-pointer hover:bg-[#C8FEC7] hover:text-black md:h-12 md:w-12 xl:p-2 p-1 rounded border border-white text-center" href="#"><IoLogoFigma className="text-white text-center h-full w-full hover:text-black" /></a>
        <a className="h-8 w-8 cursor-pointer hover:bg-[#C8FEC7] hover:text-black md:h-12 md:w-12 xl:p-2 p-1 rounded border border-white text-center" href="#"><FaLinkedin className="text-white text-center h-full w-full hover:text-black" /></a>
        <a className="h-8 w-8 cursor-pointer hover:bg-[#C8FEC7] hover:text-black md:h-12 md:w-12 xl:p-2 p-1 rounded border border-white text-center" href="#"><FaTwitter className="text-white text-center h-full w-full hover:text-black" /></a>
        <a className="h-8 w-8 cursor-pointer hover:bg-[#C8FEC7] hover:text-black md:h-12 md:w-12 xl:p-2 p-1 rounded border border-white text-center" href="#"><FaTelegram className="text-white text-center h-full w-full hover:text-black" /></a>
        <a className="h-8 w-8 cursor-pointer hover:bg-[#C8FEC7] hover:text-black md:h-12 md:w-12 xl:p-2 p-1 rounded border border-white text-center" href="#"><FaMedium className="text-white text-center h-full w-full hover:text-black" /></a>
        </div>
        <button className="w-86 h-9 cursor-pointer hover:bg-[#C8FEC7] hover:text-black md:w-148 flex items-center justify-center gap-2  md:h-15 xl:w-219 xl:text-xl md:text-lg text-sm mx-auto bg-[#292929] rounded xl:h-13 mt-6 md:mt-11 xl:mt-11 text-white font-normal font-poppins">
            Download Curriculum Vitae  <IoArrowDownCircleOutline  className="xl:text-xl md:text-lg text-sm"/>
        </button>
      </div>
      <div className=" hidden xl:block w-140 h-164 rounded overflow-hidden">
        <img src={pic} alt="heropic" />
      </div>
    </section>
  );
}

export default Hero;

