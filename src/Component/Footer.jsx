import React from "react";
import Heading from "../../public/head1.png";
import { IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="h-[534px] w-auto bg-black text-white px-8 pt-8">
        <div className="flex items-center gap-12">
          <div className="flex gap-4 flex-col">
            <div className="flex items-center text-xl font-bold">
              <div>MyFast</div>
              <div className="text-green-700">X</div>
              <img src={Heading} alt="Img Not Found" />
            </div>
            <div className="flex flex-col items-start gap-10 pt-3 text-[13px]">
              <div className="w-[440px]">
                MyFastX is a leading logistics platform that provides
                hyper-local, on- demand delivery solutions for individuals and
                businesses. Whether you need a delivery boy for your shop or to
                ship items items within city, MyFastX is your trusted partner,
                making delivery affortless and convenient. With a mission to
                revolutionize logistics through innovation and technology,
                MyFastX is committed to providing seamless, end-to-end delivery
                solutions that exceed customer expectations
              </div>
              <div className="flex gap-2">
                <IoHomeOutline size={20} className="text-green-600" /> Nayagon
                Nimi Vihar, Sector 89, Noida Phase 02, Noida
              </div>
              <div>
                <div className="flex gap-2 items-center pb-1">
                  {" "}
                  <CiMail size={20} className="text-green-600" />{" "}
                  care@myfastx.com
                </div>
                <div className="pl-7">+91 8961310988</div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-10 text-[13px]">
            <div className="flex flex-col items-start gap-4 tracking-wide">
              <div className=" font-semibold text-slate-200">Company</div>
              <ul className="flex flex-col items-start gap-4 text-slate-200">
                <li className="hover:text-green-700 cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-green-700 cursor-pointer">
                  What We Do
                </li>
                <li className="hover:text-green-700 cursor-pointer">
                  Investors
                </li>
                <li className="hover:text-green-700 cursor-pointer">
                  Press Release
                </li>
                <li className="hover:text-green-700 cursor-pointer">Careers</li>
                <li className="hover:text-green-700 cursor-pointer">
                  Pricing Details
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4 tracking-wide">
              <div className=" font-semibold text-slate-200">Policies</div>
              <ul className="flex flex-col items-start gap-4 text-slate-200">
                <li className="hover:text-green-700 cursor-pointer">
                  Terms And Conditions
                </li>
                <li className="hover:text-green-700 cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-green-700 cursor-pointer">
                  Cookie Policy
                </li>
                <li className="hover:text-green-700 cursor-pointer">
                  Fraud Disclaimer
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4 tracking-wide">
              <div className=" font-semibold text-slate-200">Help</div>
              <ul className="flex flex-col items-start gap-4 text-slate-200">
                <li className="hover:text-green-700 cursor-pointer">
                  Restricted Items
                </li>
                <li className="hover:text-green-700 cursor-pointer">
                  Parcel size and weight guide
                </li>
                <li className="hover:text-green-700 cursor-pointer">
                  Packaging guide
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4 tracking-wide">
              <div className=" font-semibold text-slate-200">Support</div>
              <ul className="flex flex-col items-start gap-4 text-slate-200">
                <li className="hover:text-green-700 cursor-pointer">FAQ</li>
                <li className="hover:text-green-700 cursor-pointer">
                  Customer Care
                </li>
                <li className="hover:text-green-700 cursor-pointer">
                  Driver Term and Condition
                </li>
                <li className="hover:text-green-700 cursor-pointer">
                  Packaging Instruction
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="w-auto h-0.5 bg-slate-200 mt-10 "></div>
          <div className="text-[13px] flex flex-col gap-2.5 p-2.5">
            <div className="text-lg">Our Presence</div>
            <ul className="flex flex-row gap-5">
              <li>Delhi</li>
              <li>Noida</li>
              <li>Greater Noida</li>
              <li>Ghaziabad</li>
              <li>Gurugram</li>
              <li>Faridabad</li>
              <li>Bahadurgarh</li>
              <li>Kolkata</li>
            </ul>
          </div>
          <div className="w-auto h-0.5 bg-slate-200  "></div>
        </div>

        <div className="flex justify-center items-center p-2.5 text-[14px] gap-10 font-semibold text-slate-200">
          <div>
            &copy; 2024 MYFASTX TECHNOLOGIES PVT LTD . ALL Rights Reserved
          </div>
          <div>CIN : U52219UP2023PTC192260</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
