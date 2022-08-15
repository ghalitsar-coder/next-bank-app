import React from "react";
import { stats } from "../constants";

const Stat = ({ stat }) => (
  <div className="flex font-poppins  items-center gap-x-3">
    <h4 className="font-semibold text-2xl">{stat.value}</h4>
    <p className="text-gradient  uppercase font-light"> {stat.title} </p>
  </div>
);
const Stats = () => {
  return (
    <section
      id="stats"
      className=" __container items-center justify-center ss:justify-between !flex-row flex-wrap gap-x-5 "
    >
      {stats.map((stat, idx) => (
        <Stat key={idx} stat={stat} />
      ))}
    </section>
  );
};

export default Stats;
