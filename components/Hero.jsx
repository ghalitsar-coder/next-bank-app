import React from "react";
import { discount, robot } from "../assets";
import Image from "next/image";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section id="home" className={`__container gap-y-20 `}>
      <div className="flex-[1.3]  flex flex-col    ">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 w-fit ">
          <Image src={discount} alt="percent-logo" width={32} height={32} />
          <p className="text-slate-400">
            {" "}
            <span className="text-white font-semibold ">20%</span> Discount For{" "}
            <span className="text-white font-semibold ">1 Month</span> Account{" "}
          </p>
        </div>
        <div className="flex flex-row gap-x-8 items-center w-full   ">
          <h1 className="text-white  font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="hidden ss:flex ">
            <GetStarted />
          </div>
        </div>
        <div className="">
          <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px]">
            Payment Method.
          </h1>
          <p className={` max-w-[450px] mt-5 font-light text-slate-200`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col relative  z-[5]     ">
        <Image
          alt="robot"
          layout="responsive"
          src={robot}
          className=" w-full h-full object-contain  "
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0  pink__gradient " />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient " />
      </div>
      <div className="flex ss:hidden mx-auto">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
