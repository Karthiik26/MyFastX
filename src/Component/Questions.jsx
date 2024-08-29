import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const QueData = [
  "What type of vehicles are eligible?",
  "How do I get paid?",
  "What areas does MyFastX operate in?",
  "What type of vehicles are eligible?",
  "How do I get paid?",
  "What areas does MyFastX operate in?",
];

const Questions = () => {
  return (
    <div className="md:w-[500px] w-[270px] bg-[#FCFCFC] rounded-2xl shadow-sm md:mt-14">
      {QueData.map((faq, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-2 m-1 border-b hover:bg-slate-50 cursor-pointer"
        >
          <span className="md:text-sm text-[12px] font-medium">{faq}</span>
          <MdKeyboardArrowRight />
        </div>
      ))}
    </div>
  );
};

export default Questions;
