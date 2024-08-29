import React from "react";
import "../App.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import TestimonialCard from "./TestimonialCard.jsx";
import Questions from "./Questions";
import Vehical1 from "../assets/vehical.png";
import Vehical2 from "../assets/Vehical2.png";
import CurvedLine from "../assets/CurvedLine.png";
import CenterLine from "../assets/CenterLine.png";

const Slide3 = () => {
  return (
    <>
      <div className=" overflow-x-hidden overflow-y-hidden md:h-[1250px]">
        <div className="flex flex-col md:flex-row md:justify-between  md:gap-20 md:px-24 md:py-20">
          <div className="px-4">
            <div>
              <div className="px-1 md:w-[300px] w-[150px] py-0.5 text-center text-[10.5px] md:text-sm bg-[#F8F8F8] font-bold border-l-2 border-l-green-500">
                What our partners says
              </div>
              <div className="mb-5 mt-2.5 md:my-5 md:w-[500px] w-[250px] text-[17px] md:text-3xl font-bold half-border">
                Testimonials
              </div>
              <div className="text-sm w-[380px] text-slate-600 hidden md:block">
                At MyFastX, our commitment to excellence is reflected in the
                feedback from our valued customers. Here's what they have to say
                about their experiences with our quick and reliable delivery and
                logistics services
              </div>
            </div>

            <div className=" md:mt-80  hidden md:block">
              <div className="px-1 w-[280px] py-0.5 text-center text-sm bg-[#F8F8F8] font-bold border-l-2 border-l-green-500">
                Join The MyFastx Community Today!
              </div>
              <div className="my-6 w-[500px] text-3xl font-bold half-border ">
                Ready To Get Started
              </div>
              <div className="text-sm w-[400px] text-slate-600">
                Don't miss out on this incredible opportunity to be part of a
                leading delivery and logistics platform. Sign up now for just
                <span className="text-green-600"> Rs.999</span> and start
                driving your way to success with MyFastX!
              </div>
              <div className="my-10">
                <button className="px-6 py-1 bg-black text-white rounded-lg">
                  Register Now
                </button>
              </div>

              <div className="mb-10 text-slate-600">
                For more information, <br /> Contact us at;
              </div>

              <div className="flex gap-3 flex-col text-slate-600 ">
                <div className="flex flex-row gap-3 items-center">
                  <FaPhoneAlt
                    className="text-white bg-green-600 p-2.5 rounded-full"
                    size={40}
                  />{" "}
                  +91-XXXXX XXXXX
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <IoMdMail
                    className="text-white bg-green-600 p-2.5 rounded-full"
                    size={40}
                  />{" "}
                  support@myfastx.com
                </div>
              </div>
            </div>
          </div>

          <div className="px-4">
            <>
              <TestimonialCard />
            </>
            <div className="md:mt-80 mt-14">
              <div className="px-1 md:w-[140px] w-[170px] py-0.5 text-center text-[10.5px] md:text-sm bg-[#F8F8F8] font-bold border-l-2 border-l-green-500">
                Frequently Asked Questions
              </div>
              <div className="mb-5 mt-2.5 md:my-5 md:w-[500px] w-[300px] text-[16px] md:text-3xl font-bold half-border">
                Got Questions? We've Got Answers!
              </div>
              <div>
                <Questions />
              </div>
            </div>
          </div>

          <div className="mt-14 md:hidden">
            <div className="px-4">
              <div className="px-1 md:w-[140px] w-[210px] py-0.5 text-center text-[10.5px] md:text-sm bg-[#F8F8F8] font-bold border-l-2 border-l-green-500">
                Join The MyFastx Community Today!
              </div>
              <div className="mb-5 mt-2.5 md:my-5 md:w-[500px] w-[300px] text-[16px] md:text-3xl font-bold half-border">
                Ready To Get Started
              </div>
              <div className="text-xs w-auto text-slate-600">
                Don't miss out on this incredible opportunity to be part of a
                leading delivery and logistics platform. Sign up now for just
                <span className="text-green-600"> Rs.999</span> and start
                driving your way to success with MyFastX!
              </div>
              <div className="my-8">
                <button className="px-6 py-1.5 text-xs bg-black text-white rounded-lg">
                  Register Now
                </button>
              </div>
            </div>
            <div className="flex p-4 md:block justify-center md:justify-normal flex-col items-center md:items-start bg-[#F2FAF5] w-screen ">
              <div className="mb-10 text-slate-600 text-center">
                <span className="text-sm text-slate-700 font-semibold">
                  For more information,
                </span>{" "}
                <br />{" "}
                <span className="text-lg text-green-600 font-semibold">
                  Contact us
                </span>
              </div>

              <div className="flex justify-center items-center -ml-4 gap-1 pb-6 flex-row text-slate-600 ">
                <div className="flex flex-row gap-1 items-center text-xs bg-white p-2">
                  <FaPhoneAlt
                    className="text-white bg-green-600 p-1 rounded-full"
                    size={30}
                  />{" "}
                  <span className="text-[10px]">+91-XXXXX XXXXX</span>
                </div>
                <div className="flex flex-row gap-1 items-center text-xs bg-white p-2">
                  <IoMdMail
                    className="text-white bg-green-600 p-1 rounded-full"
                    size={30}
                  />{" "}
                  <span className="text-[10px]">support@myfastx.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex flex-row items-center relative -top-[880px] left-24 hidden">
          <img src={Vehical1} width={"193px"} height={"92px"} alt="" />
          <img src={Vehical2} width={"174.15px"} height={"68.1px"} alt="" />
        </div>

        <div className="relative -top-[890px] left-24  hidden md:block">
          <img
            src={CurvedLine}
            height={"192.01px"}
            width={"1120.27px"}
            alt=""
          />
        </div>

        <div className="relative -top-[891px] left-[630px] h-[500px]  hidden md:block">
          <img src={CenterLine} width={"1px"} alt="" />
        </div>
      </div>
    </>
  );
};

export default Slide3;
