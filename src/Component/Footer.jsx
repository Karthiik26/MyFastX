import React, { useState } from "react";
import Heading from "../../public/head1.png";
import { IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  const [Company, setComapny] = useState(false);
  const OnCompanyOpen = () => {
    setComapny(!Company);
    setPolicies(false);
    setHelp(false);
    setSupport(false);
  };

  const [Policies, setPolicies] = useState(false);
  const OnPoliciesOpen = () => {
    setComapny(false);
    setPolicies(!Policies);
    setHelp(false);
    setSupport(false);
  };

  const [Help, setHelp] = useState(false);
  const OnHelpOpen = () => {
    setComapny(false);
    setPolicies(false);
    setHelp(!Help);
    setSupport(false);
  };

  const [Support, setSupport] = useState(false);
  const OnSupportOpen = () => {
    setComapny(false);
    setPolicies(false);
    setHelp(false);
    setSupport(!Support);
  };

  return (
    <>
      <div className="md:h-[534px] h-auto w-auto bg-black text-white p-3 md:px-8 md:pt-8">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <div className="flex md:gap-4 flex-col">
            {/* title */}
            <div className="flex items-center text-xl md:font-bold">
              <div>MyFast</div>
              <div className="text-green-700">X</div>
              <img src={Heading} className="ml-1.5" alt="Img Not Found" />
            </div>
            {/* description */}
            <div className="flex flex-col items-start md:gap-10 gap-3 pt-3 text-[9.5px] md:text-[13px] text-slate-200">
              <div className="md:w-[440px]">
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

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-2 py-4 md:pt-0 md:gap-10 text-[10px] md:text-[13px]">
            <div className="flex flex-col items-start md:gap-4 gap-2 tracking-wide">
              <div
                className="font-semibold text-slate-200"
                onClick={OnCompanyOpen}
              >
                <div className="flex justify-center flex-col items-center">
                  <div className="w-[260px] md:w-auto flex justify-between flex-row">
                    <span>Company</span>
                    <span className="md:hidden">
                      <MdKeyboardArrowDown size={18} />
                    </span>
                  </div>
                  <span className="w-[260px] border border-slate-200 md:hidden"></span>
                </div>
              </div>
              <ul
                className={`md:flex hidden flex-col items-start text-slate-200 gap-2`}
              >
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
              {Company && (
                <ul
                  className={`md:hidden flex flex-col items-start gap-1 text-slate-200`}
                >
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
                  <li className="hover:text-green-700 cursor-pointer">
                    Careers
                  </li>
                  <li className="hover:text-green-700 cursor-pointer">
                    Pricing Details
                  </li>
                </ul>
              )}
            </div>

            <div className="flex flex-col items-start md:gap-4 gap-2 tracking-wide">
              <div
                className=" font-semibold text-slate-200"
                onClick={OnPoliciesOpen}
              >
                <div className="flex justify-center flex-col items-center">
                  <div className="w-[260px] md:w-auto flex justify-between flex-row">
                    <span>Policies</span>
                    <span className="md:hidden">
                      <MdKeyboardArrowDown size={18} />
                    </span>
                  </div>
                  <span className="w-[260px] border border-slate-200 md:hidden"></span>
                </div>
              </div>
              <ul className="md:flex hidden flex-col items-start gap-4 text-slate-200">
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
              {Policies && (
                <ul className="md:hidden flex flex-col items-start text-slate-200 gap-2">
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
              )}
            </div>

            <div className="flex flex-col items-start md:gap-4 gap-2 tracking-wide">
              <div
                className=" font-semibold text-slate-200"
                onClick={OnHelpOpen}
              >
                <div className="flex justify-center flex-col items-center">
                  <div className="w-[260px] md:w-auto flex justify-between flex-row">
                    <span>Help</span>
                    <span className="md:hidden">
                      <MdKeyboardArrowDown size={18} />
                    </span>
                  </div>
                  <span className="w-[260px] border border-slate-200 md:hidden"></span>
                </div>
              </div>
              <ul className="hidden md:flex flex-col items-start gap-4 text-slate-200">
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
              {Help && (
                <ul className="md:hidden flex flex-col items-start gap-2  text-slate-200">
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
              )}
            </div>

            <div className="flex flex-col items-start md:gap-4 gap-2 tracking-wide">
              <div
                className=" font-semibold text-slate-200"
                onClick={OnSupportOpen}
              >
                <div className="flex justify-center flex-col items-center">
                  <div className="w-[260px] md:w-auto flex justify-between flex-row">
                    <span>Support</span>
                    <span className="md:hidden">
                      <MdKeyboardArrowDown size={18} />
                    </span>
                  </div>
                  <span className="w-[260px] border border-slate-200 md:hidden"></span>
                </div>
              </div>
              <ul className="hidden md:flex flex-col items-start gap-4 text-slate-200">
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
              {Support && (
                <ul className="md:hidden flex flex-col items-start gap-2 text-slate-200">
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
              )}
            </div>
          </div>
        </div>

        <div className="-mt-[10px]" >
          <div className="hidden md:block w-auto h-0.5 bg-slate-200 mt-10 "></div>
          <div className="text-[13px] flex flex-col gap-2.5 md:py-4 py-3 px-2">
            <div className="text-sm -ml-1.5 md:m-0">Our Presence</div>
            <div className="w-[280px] md:w-auto">
              <ul className="md:flex grid grid-cols-5 gap-1 md:flex-row md:gap-5 text-[7.5px] md:text-xs">
                <li className="md:m-0 -ml-1">Delhi</li>
                <li className="md:m-0 -ml-1.5">Noida</li>
                <li className="md:m-0 -ml-1.5">Greater Noida</li>
                <li className="md:m-0 -ml-1.5">Ghaziabad</li>
                <li className="md:m-0 -ml-1.5">Gurugram</li>
                <li className="md:m-0 -ml-1.5">Faridabad</li>
                <li className="md:m-0 -ml-1.5">Bahadurgarh</li>
                <li className="md:m-0 -ml-1.5">Kolkata</li>
              </ul>
            </div>
          </div>
          <div className="w-auto h-0.5 bg-slate-200  "></div>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center md:p-2.5 py-1 text-[9px] md:text-[14px] md:gap-10 font-semibold text-slate-200">
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
