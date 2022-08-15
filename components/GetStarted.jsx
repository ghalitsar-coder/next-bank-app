import Image from "next/image";
import React from "react";
import { arrowUp } from "../assets";
const GetStarted = () => (
  <div
    className={`flex items-center justify-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition hover:scale-110 `}
  >
    <div className="flex items-center justify-center flex-col bg-primary w-full h-full rounded-full ">
      <div className="flex flex-col justify-center items-start ">
        <p className="font-poppins font-medium text-[18px] leading-[23px] flex items-center ">
          <span className="text-gradient mr-1">Get</span>
          <Image src={arrowUp} width={23} height={23} alt="arrow" />
        </p>
        <p className="text-gradient text-[18px] font-medium ">Started</p>
      </div>
    </div>
  </div>
);

export default GetStarted;
