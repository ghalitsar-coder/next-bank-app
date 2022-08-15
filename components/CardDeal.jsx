import React from "react";
import InfoSection from "./InfoSection";
import Image from "next/image";
import { card } from "../assets";

let title = `Find a better card deal in few easy steps`,
  content =
    "Taciti tincidunt ultrices finibus felis luctus elit dapibus tortor iaculis litora orci donec convallis aliquam nullam viverra netus vehicula erat sagittis habitant quam";

const CardDeal = () => {
  return (
    <section id="product" className="__container items-center">
      <div className="flex-1 flex flex-col gap-y-5 ">
        <InfoSection
          title={title}
          content={content}
          btnTitle="Get Started"
        />
      </div>
      <div className="flex-1">
        <div className="lg:w-[85%] lg:h-[85%] mx-auto ">
          <Image src={card} alt="Card" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default CardDeal;
