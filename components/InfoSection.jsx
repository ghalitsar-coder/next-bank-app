import React from "react";
import Button from "./Button";
import Image from "next/image";

const InfoSection = ({
  title,
  content,
  btnTitle,
  styleTitle,
  styleContent,
  image,
  image1,
}) => {
  return (
    <>
      <h2
        className={` ${
          styleTitle && styleTitle
        } text-4xl md:text-5xl leading-[48px] md:leading-[61px] font-semibold font-poppins lg:max-w-[660px]`}
      >
        {title}
      </h2>
      <p
        className={`max-w-[460px] font-light text-slate-3
        00 ${styleContent && styleContent}`}
      >
        {content}
      </p>
      {image && (
        <div className="flex flex-wrap gap-x-5">
          <Image
            src={image}
            alt="google"
            className="cursor-pointer"
            onClick={() => window.open("https://ghalitsardev.netlify.app/")}
          />
          <Image
            src={image1}
            alt="apple"
            className="cursor-pointer"
            onClick={() => window.open("https://ghalitsardev.netlify.app/")}
          />
        </div>
      )}
      {btnTitle && <Button title={btnTitle} />}
    </>
  );
};

export default InfoSection;
