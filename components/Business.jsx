import React from "react";
import Button from "./Button";
import Image from "next/image";
import { features } from "../constants";

const FeatureCard = ({ icon, title, content, idx }) => (
  <div className="feature-card  flex p-3 gap-x-5 rounded-xl items-center  ">
    <div className="flex w-[64px] h-[64px] place-content-center bg-dimBlue rounded-full ">
      <Image src={icon} alt="feature-icon" className="w-full h-full   " />
    </div>
    <div className="flex-1 grid gap-y-2 ">
      <h2 className="font-semibold text-lg   ">{title}</h2>
      <p className="font-normal text-sm text-slate-300">{content}</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className="__container items-stretch gap-y-14   ">
      <div className="flex-1 grid gap-y-7 ">
        <h2 className="text-4xl md:text-5xl leading-[48px] md:leading-[61px] font-semibold font-poppins ">
          You do the business, <br className="hidden ss:block" />
          we`ll handle the money.
        </h2>
        <p
          className="max-w-[460px] font-light text-slate-3
        00 "
        >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button title="Get Started" styles="" />
      </div>
      <div className="flex-1 grid gap-y-7 ">
        {features.map((feat, idx) => (
          <FeatureCard key={idx} {...feat} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Business;
