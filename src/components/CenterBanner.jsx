import React from "react";
import Texture from "../assets/images/texture.svg";
import BannerGradient from "../assets/images/banner-gradient.svg";
import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow";
const CenterBanner = () => {
  return (
    <section
      className="relative pt-[175px] pb-[150px] rounded-[0_0_40px_40px] overflow-hidden min-h-[100vh] flex items-center"
    >
      <div className="container max-w-[990px] relative z-[3]">
          <div className="flex flex-col items-center justify-center text-center">
          <Eyebrow text="Partner Program" theme="golden" />
            <h1 className="text-[80px] font-semibold leading-[1.12] tracking-[-1.6px] text-white 
            max-xl:text-[56px] max-lg:text-4xl">
              Our Proud Partner Program
            </h1>
            <p className="text-base text-[#FBF6EC] m-[16px_0_32px] max-w-[613px]">
            Help AeonFunded grow and earn up to 20% commission – There’s no limit on how much you can earn profit!
            </p>
            <Link
              to="/"
              className="btn bg-white text-[16px] font-inter font-medium leading-none shadow-nav-shadow rounded-[100px] text-black h-10 px-8 py-4 flex items-center justify-center"
            >
              Start Earning Now
            </Link>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img src={Texture} alt="texture" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 w-full h-full">
      <img src={BannerGradient} alt="BannerGradient" className="w-full h-full object-cover object-bottom " />
      </div>
    </section>
  );
};

export default CenterBanner;
