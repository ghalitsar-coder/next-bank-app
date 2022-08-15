import React from "react";

const Button = ({ title, styles }) => {
  return (
    <button
      type="button"
      className={`${styles} text-primary text-[18px] outline-none font-poppins font-medium bg-blue-gradient py-4 px-6 w-fit rounded-xl`}
    >
      {title}
    </button>
  );
};

export default Button;
