import React from "react";
import Button from "./Button";
import InfoSection from "./InfoSection";

const CTA = () => {
  return (
    <section className="__container  box-shadow md:!flex-row gap-y-10 justify-between bg-black-gradient-2 px-14 py-10 rounded-xl  ">
      <div className="text-white font-poppins grid  gap-y-8">
        <InfoSection
          title="Let`s try our service now! "
          content=" Everything you need to accept card payments and grow your business
          anywhere on the planet."
        />
      </div>
      <div className=" flex items-center">
        <Button title="Get Started" styles="" />
      </div>
    </section>
  );
};

export default CTA;
