import React, { useState } from "react";
import Heading from "../../public/head1.png";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="py-4 px-6 md:px-24">
        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden flex float-left mt-1">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {/* Hamburger icon */}
            <RiMenu2Line size={24} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start items-center font-bold">
            <div className="flex items-center text-lg">
              <div>MyFast</div>
              <div className="text-green-700">X</div>
              <img
                src={Heading}
                alt="Img Not Found"
                className="w-8 h-8 md:w-auto md:h-auto"
              />
            </div>
            <div className="text-[10px] md:text-[11.5px] ml-1">Partner</div>
          </div>

          {/* Navigation Items */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0`}
          >
            <button className="px-8 md:px-12 py-2 text-slate-200 text-xs md:text-sm bg-black rounded-xl">
              Signup
            </button>
            <button className="px-8 md:px-12 py-2 text-slate-200 text-xs md:text-sm bg-black rounded-xl">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
