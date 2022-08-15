import Image from "next/image";
import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { GrClose } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
const NavLink = ({ nav }) => (
  <li className={`font-poppins font-normal cursor-pointer  `}>
    <a href={`#${nav.id}`} className="transition hover:text-gradient">
      {nav.title}
    </a>
  </li>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="container mx-auto flex  justify-between  items-center navbar">
      <Image src={logo} alt="profile-logo" width={124} h={32} />
      <ul className="sm:flex hidden justify-end gap-x-4 items-center ">
        {navLinks.map((nav, idx) => (
          <NavLink key={nav.id + idx} nav={nav} />
        ))}
      </ul>

      <div className="flex sm:hidden  justify-end items-center text-white">
        {!toggle ? (
          <HiMenuAlt3
            fontSize={27}
            className="cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
        ) : (
          <IoMdClose
            fontSize={27}
            className="cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
        )}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col   gap-y-4 items-center flex-1 ">
            {navLinks.map((nav, idx) => (
              <NavLink key={nav.id + idx} nav={nav} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
