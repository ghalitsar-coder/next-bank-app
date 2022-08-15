import React from "react";
import { feedback } from "../constants";
import InfoSection from "./InfoSection";
import FeedbackCard from "./FeedbackCard";

let title = "What people are saying about us",
  content =
    "Everything you need to accept card payments and grow your business anywhere on the planet.";

const Testimonials = () => {
  return (
    <section id="clients" className="__container relative !flex-col gap-y-16">
      <div className="absolute z-0 w-[80%] h-[80%] -right-[50%] rounded-full pink__gradient  " />
      {/* <div className="absolute z-[3] w-[80%] h-[80%] -right-[50%] rounded-full pink__gradient  " /> */}
      <div className="w-full flex flex-col md:flex-row font-poppins gap-10 lg:items-center  ">
        <InfoSection
          styleTitle="!flex-[.5]   !max-w-[430px]   "
          styleContent="!flex-[1.5]  !font-normal text-slate-200 lg:text-lg "
          title={title}
          content={content}
          btnTitle={false}
        />
      </div>
      <div className="flex gap-5 flex-col  md:!flex-row">
        {feedback.map((item) => (
          <FeedbackCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
