import React, { useState } from "react";
import { Link } from "react-router-dom";
import Brand from "../assets/images/brand.svg";
import BrandLight from "../assets/images/brand-light.svg";

const Header = ({mode}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Challenges", path: "/challenges" },
    { name: "How it Works", path: "/how-it-works" },
    { name: "Payouts", path: "/payouts" },
    { name: "Affiliate Program", path: "/affiliate-program" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className=" left-0 right-0 top-0 w-full z-10 py-4">
      <div className="container max-w-[1832px]">
        <div className="flex items-center justify-between gap-5 xl:gap-[60px]">
          {/* Brand */}
          <Link to="/" className="max-w-[134px] h-16 flex items-center">
            <img src={`${mode=== 'dark' ? Brand : BrandLight}`} alt="Aeon Funding Brand" />
          </Link>
          {/* Hamburger Button - Appears at lg */}
          <button
            className="lg:hidden text-white z-20 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
          {/* Main Navigation */}
            <nav className={`${mode === 'dark'?"max-lg:bg-black shadow-nav-shadow":""}
            max-w-[666px] rounded-[100px] p-[17px_30px] bg-[rgba(18,18,18,0.10)]
            max-xl:max-w-[580px] max-xl:p-[14px_24px] max-lg:overflow-hidden
            max-lg:absolute top-[70px]  left-0 right-0 max-lg:max-w-full max-lg:w-full 
            max-lg:rounded-lg transition-all ease-in-out duration-500 backdrop:blur-lg z-[20] lg:z-auto  
            ${
              menuOpen ? "max-lg:block" : "max-lg:hidden "
            }`}>
              <ul className="flex flex-col lg:flex-row items-center justify-between gap-[30px] max-xl:gap-5">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`text-sm xl:text-base leading-normal font-normal font-inter ${mode=== 'dark'? 'text-white': 'dark1f'}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="hidden max-lg:flex flex-col lg:flex-row items-center gap-[14px] ">
            <Link
                  to="/"
                  className="btn bg-[#FFD221] font-inter font-medium leading-none shadow-nav-shadow rounded-[100px] text-black h-10 px-5 py-4 flex items-center justify-center"
                >
                  Get Funded
                </Link>
            <Link
                  to="/"
                  className="btn bg-[rgba(255,255,255,0.10)] font-inter font-medium leading-none shadow-nav-shadow rounded-[100px] text-white h-10 px-5 py-4 flex items-center justify-center"
                >
                  Log In
                </Link>
            </div>
            </nav>
            <div className="hidden lg:flex flex-col lg:flex-row items-center gap-[14px] ">
            <Link
                  to="/"
                  className={`btn font-inter font-medium leading-none rounded-[100px] h-10 px-5 py-4 flex items-center justify-center
                  ${mode=== 'dark'? 'bg-[#FFD221]  text-black shadow-nav-shadow': 'bg-black text-white'}`}
                >
                  Get Funded
                </Link>
            <Link
                  to="/"
                  className={`btn font-inter font-medium leading-none rounded-[100px]  h-10 px-5 py-4 flex items-center justify-center
                    ${mode=== 'dark'? 'bg-[rgba(255,255,255,0.10)] text-white  shadow-nav-shadow': 'text-black'}`}
                >
                  Log In
                </Link>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
