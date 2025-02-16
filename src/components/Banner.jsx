import React from "react";
import Star from "../assets/icons/star.svg";
import Cube from "../assets/images/cube.webp";
import Texture from "../assets/images/texture.svg";
import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow";
const Banner = () => {
  return (
    <section
      className="relative pt-[175px] pb-[100px] rounded-[0_0_40px_40px]"
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
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1872 1055" fill="none">
        <path d="M0 0H1872V1015C1872 1037.09 1854.09 1055 1832 1055H40.0001C17.9087 1055 0 1037.09 0 1015V0Z" fill="url(#paint0_radial_57_54)"/>
        <defs>
          <radialGradient id="paint0_radial_57_54" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(936 105.5) scale(2620.8 1742.74)">
            <stop offset="0.3741" stop-opacity="0"/>
            <stop offset="0.6927" stop-color="#FFCC00"/>
            <stop offset="1" stop-color="white"/>
          </radialGradient>
        </defs>
      </svg>
      </div>
    </section>
  );
};

export default Banner;
