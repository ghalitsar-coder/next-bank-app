import React from "react";
import { clients } from "../constants";
import Image from "next/image";
const Client = ({ logo }) => (
  <div className="w-[200px]  ">
    <Image
      src={logo}
      height="100px"
      className="w-full    object-contain "
      alt="logo"
    />
  </div>
);

const Clients = () => {
  return (
    <section id="clients" className="__container     ">
      <div className="flex flex-wrap gap-7 w-full  items-center justify-between  ">
        {clients.map((item) => (
          <Client key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
