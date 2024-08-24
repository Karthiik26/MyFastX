import React from "react";

const Joinus = () => {
  return (
    <>
      <div className=" text-xs w-auto h-[406px] bg-[#F2FAF5] flex justify-center items-center flex-col gap-10">
        <div className="flex justify-center items-center flex-col gap-6">
          <div className="text-green-600 font-bold ">
            Drive Your Succes With MyFastx
          </div>
          <div className="text-[34px] font-bold">
            Join Us as a Partner Driver
          </div>
          <div className="w-[600px] text-center text-slate-600 ">
            {" "}
            Are you a vehicle owner looking for new opportunities? Join MyFastX
            today and become part of a dynamic network of drivers. With us,
            you’ll enjoy flexible work hours, competitive earnings, and the
            satisfaction of delivering smiles across the city.
          </div>
        </div>
        <div>
          <button className="px-8 py-2.5 bg-black text-white rounded-xl">
            Register now for just Rs. 999!
          </button>
        </div>
      </div>
    </>
  );
};

export default Joinus;
