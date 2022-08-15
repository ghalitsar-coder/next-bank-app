import React from "react";
import Image from "next/image";
import { quotes } from "../assets";

const FeedbackCard = ({ content, title, name, img }) => {
  return (
    <div className="py-10 px-8 feedback-card grid gap-y-5 place-items-start transition rounded-lg w-full ">
      <Image src={quotes} alt="quote" width={42} height={27} />
      <p className="font-poppins font-light  max-w-[440px] ">{content}</p>
      <div className="flex gap-x-4 items-center">
        <Image src={img} alt="profile"  width={42} height={42}/>
        <div className="font-poppins">
          <h2 className="font-semibold text-[18px] " > {name} </h2>
          <p className='text-slate-200 text-sm font-light ' > {title} </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
