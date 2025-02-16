import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, text, variant = "white", size = "normal", hasIcon = false, icon }) => {
  const baseStyles =
    " font-inter font-medium leading-none shadow-nav-shadow rounded-full h-10 py-4 flex items-center justify-center gap-2";
  const variants = {
    white: "bg-white text-black",
    gold: "bg-[rgba(0,0,0,0.10)] text-white", // Light gold
  };
  const sizes = {
    small: "text-sm px-5", // Light gold
    normal: "text-[16px] px-8", // Light gold
  };

  return (
    <Link to={to} className={` ${baseStyles} ${variants[variant]} ${sizes[size]}`}>
      {text}
      {hasIcon && icon && <img src={icon} alt="icon" className="w-[14px]" />}
    </Link>
  );
};

export default Button;
