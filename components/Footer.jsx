import Image from "next/image";
import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const SocialMedia = ({ icon, link }) => (
  <Image
    alt="social-media"
    src={icon}
    onClick={() => window.open(link)}
    className="cursor-pointer"
  />
);

const ChildLink = ({ name }) => (
  <li
    className={`font-poppins font-normal text-[14px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}
  >
    {name}
  </li>
);

const FootLink = ({ title, links }) => (
  <>
    <h4 className={`font-poppins font-medium text-[18px]     text-white`}>
      {" "}
      {title}{" "}
    </h4>
    <ul className={`grid gap-y-1`}>
      {links.map((item, idx) => (
        <ChildLink key={idx} {...item} />
      ))}
    </ul>
  </>
);

const Footer = () => {
  return (
    <footer className="__container  !flex-col  ">
      <div className="__container !w-full gap-x-5 gap-y-10">
        <div className="flex-1 flex flex-col  place-items-start gap-y-5 justify-start">
          <Image
            src={logo}
            alt="logo"
            width={266}
            height={72}
            className="object-contain"
          />
          <figcaption className="font-poppins text-sm text-slate-200 ">
            {" "}
            A new way to make the payments easy, reliable and secure.{" "}
          </figcaption>
        </div>
        <div className="md:flex-[2.6] flex-1     flex justify-between ">
          {footerLinks.map((item, idx) => (
            <div key={idx} className="flex  flex-col gap-y-2 min-w-[150px] ">
              <FootLink {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-[.1px] border-t-slate-700 my-5 flex justify-between pt-3">
        <p className="font-poppins text-sm text-slate-200 font-light ">
          Copyright &copy; 2022 Ghalitsar ft.Hoobank All Right Reserved{" "}
        </p>
        <div className="flex gap-x-5 items-center">
          {socialMedia.map((item, idx) => (
            <SocialMedia key={idx} {...item} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
