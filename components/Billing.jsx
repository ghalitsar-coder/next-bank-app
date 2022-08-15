import Image from "next/image";
import React from "react";
import { bill, apple, google } from "../assets";
import InfoSection from "./InfoSection";

let title = "Easily control your billing & invoicing.",
  content =
    "Torquent est aliquam phasellus donec elementum sollicitudin platea tristique leo sit diam scelerisque lacus tempor dui enim iaculis libero proin id vestibulum luctus curabitur conubia adipiscing ullamcorper morbi lobortis gravida";

const Billing = () => {
  return (
    <section
      id="product"
      className="__container lg:items-center lg:justify-between !flex-col-reverse md:!flex-row gap-y-14 "
    >
      <div className="flex-1 relative">
        <div className=" w-[85%]   h-[85%] mx-auto">
          <Image
            src={bill}
            alt="bill"
            className="absolute w-full
            object-cover h-full z-[10]"
          />
        </div>
        <div className="absolute z-[3] w-[50%] h-[50%] top-0  white__gradient " />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 -left-20 rounded-full pink__gradient " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 -left-20 bottom-20 blue__gradient " />
      </div>
      <div className="flex-1 flex flex-col gap-y-6  ">
        {/* <Image src={bill} alt="bill"   className="relative" /> */}
        <InfoSection
          title={title}
          content={content}
          image1={apple}
          image={google}
        />
      </div>
    </section>
  );
};

export default Billing;
