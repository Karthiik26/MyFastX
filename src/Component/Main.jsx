import React from "react";
import Slide1 from "../Component/Slide1";
import Slide2 from "../Component/Slide2";
import Slide3 from "../Component/Slide3";
import Joinus from "../Component/Joinus";

const Main = () => {
  return (
    <div className="overflow-hidden md:overflow-auto" >
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Joinus />
    </div>
  );
};

export default Main;
