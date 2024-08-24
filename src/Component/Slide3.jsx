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
      <div className=" overflow-x-hidden overflow-y-hidden h-[1250px]">
      <div className="flex flex-row gap-20 px-24 py-20">
        <div>
          <div>
            <div className="px-1 w-[200px] py-0.5 text-center text-sm bg-[#F8F8F8] font-bold border-l-2 border-l-green-500">
              What our partners says
            </div>
            <div className="my-6 w-[500px] text-3xl font-bold half-border ">
              Testimonials
            </div>
            <div className="text-sm w-[380px] text-slate-600">
              At MyFastX, our commitment to excellence is reflected in the
              feedback from our valued customers. Here's what they have to say
              about their experiences with our quick and reliable delivery and
              logistics services
            </div>
          </div>

          <div className=" mt-80">
            <div className="px-1 w-[280px] py-0.5 text-center text-sm bg-[#F8F8F8] font-bold border-l-2 border-l-green-500">
              Join The MyFastx Community Today!
            </div>
            <div className="my-6 w-[500px] text-3xl font-bold half-border ">
              Ready To Get Started
            </div>
            <div className="text-sm w-[400px] text-slate-600">
              Don't miss out on this incredible opportunity to be part of a
              leading delivery and logistics platform. Sign up now for just
              <span className="text-green-600"> Rs.999</span> and start driving
              your way to success with MyFastX!
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

        <div>
          <>
            <TestimonialCard />
          </>
          <div className="mt-80">
            <div className="px-1 w-[200px] py-0.5 text-center text-sm bg-[#F8F8F8] font-bold border-l-2 border-l-green-500">
              Frequently Asked Questions
            </div>
            <div className="my-6 w-[550px] text-3xl font-bold half-border ">
              Got Questions? We've Got Answers!
            </div>
            <div>
              <Questions />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center relative -top-[880px] left-24" >
        <img src={Vehical1} width={'193px'} height={'92px'} alt="" />
        <img src={Vehical2} width={'174.15px'} height={'68.1px'} alt="" />
      </div>

      <div className="relative -top-[890px] left-24" >
        <img src={CurvedLine} height={'192.01px'} width={'1120.27px'} alt="" />
      </div>

      <div className="relative -top-[891px] left-[630px] h-[500px]" >
        <img src={CenterLine} width={'1px'} alt="" />
      </div>
      </div>
    </>
  );
};

export default Slide3;
