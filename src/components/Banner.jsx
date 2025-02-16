import React from "react";
import Star from "../assets/icons/star.svg";
import Cube from "../assets/images/cube.webp";
import Texture from "../assets/images/texture.svg";
import BannerGradient from "../assets/images/banner-gradient.svg";
import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow";
const Banner = () => {
  return (
    <section
      className="relative pt-[175px] pb-[100px] rounded-[0_0_40px_40px] overflow-hidden"
      // style={{
      //   background:
      //     "radial-gradient(165.19% 140% at 50% 10%, rgba(0, 0, 0, 0.00) 37.41%, #FC0 120.27%, #FFF 100%)",
      // }}
    >
      <div className="container max-w-[1642px] relative z-[3]">
        <div className="grid grid-cols-2 items-center gap-10">
          <div className="flex flex-col items-start">
          <Eyebrow imageSrc={Star} text="Rated 10/10 From 1000+ Users" theme="golden" />
            <h1 className="text-white text-[80px] font-semibold leading-[1.12] tracking-[-1.6px]">
              Launch Your <span className="text-primary">Success</span> with Our
              Capital
            </h1>
            <p className="text-base text-[#FBF6EC] m-[16px_0_32px] max-w-[513px]">
              Trade with our capital, keep up to 95% of the profits, and
              maximize your earnings with zero risk to your funds!
            </p>
            <Link
              to="/"
              className="btn bg-white text-[16px] font-inter font-medium leading-none shadow-nav-shadow rounded-[100px] text-black h-10 px-8 py-4 flex items-center justify-center"
            >
              Get Funded
            </Link>
          </div>
          <div>
            <img src={Cube} alt="cube-img" />
          </div>
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

export default Banner;
