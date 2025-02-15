import React, { useState } from "react";
import { Link } from "react-router-dom";
import Brand from "../assets/images/brand.svg";

const Header = () => {
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
    <header className="absolute left-0 right-0 top-0 w-full z-10 py-4">
      <div className="container max-w-[1832px]">
        <div className="flex items-center justify-between gap-10 xl:gap-[60px]">
          {/* Brand */}
          <Link to="/" className="max-w-[134px]">
            <img src={Brand} alt="Aeon Funding Brand" />
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
            <nav className="max-w-[666px] rounded-[100px] p-[17px_30px] bg-[rgba(18,18,18,0.10)]
            shadow-nav-shadow">
              <ul className="flex flex-col lg:flex-row items-center justify-between gap-[30px]">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-sm xl:text-base leading-normal font-normal text-white font-inter"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col lg:flex-row items-center gap-[14px]">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
