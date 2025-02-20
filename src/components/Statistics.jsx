import React from "react";
import Eyebrow from "../ui/Eyebrow";
// import AboutBg from "../assets/images/about-bg.webp";
import Badge from "../assets/icons/medal.svg";
import Teacher from "../assets/icons/teacher.svg";
import Dimond from "../assets/icons/diamond.svg";
import Check from "../assets/icons/check mark-circle.svg";
import Globe from "../assets/icons/globe.svg";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <section
      className="py-32 bg-cover bg-no-repeat bg-center max-xl:py-24"
      style={{
        background: `radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
        linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%),  
        0px -173.5px / 100% 145.749% no-repeat`
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="text-center flex items-center flex-col">
          <Eyebrow text="Why us"  />
          <h2 className="text-white text-[50px] leading-none font-semibold tracking-[-0.5px]
          max-lg:text-4xl">
          One-Step Express Rules
          </h2>
          <p className="text-sm leading-[1.71] text-ivoryTint max-w-[350px] mx-auto mt-[10px]">
          A streamlined approach to success with clear and concise rules, designed for efficient progress and quick results.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-[60px] max-w-[818px] mx-auto
        max-lg:grid-cols-2 max-md:grid-cols-1">
            <div
              className="bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset"
            >
              <div
                className="relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col items-center bg-card-gradient">
                  <div className="p-3 mb-4 flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[rgba(255,204,0,0.04)] shadow-icon-border">
                    <img src={Badge} alt="badge" />
                  </div>
                  <h4 className="text-white text-[28px] leading-tight font-semibold font-inter">
                  <CountUp end={"2811"} duration={4} separator="," />
                  </h4>
                  <span className="text-ivoryTint text-sm font-inter">No. of Funded Traders</span>
                {/* card-lines */}
                <div className="absolute top-[-1px] right-[35px] w-[114px] h-[1px] bg-card-line"></div>
                <div className="absolute bottom-[-1px] left-[35px] w-[114px] h-[1px] bg-card-line"></div>
              </div>
            </div>
            <div
              className="bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset"
            >
              <div
                className="relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col items-center bg-card-gradient">
                  <div className="p-3 mb-4 flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[rgba(255,204,0,0.04)] shadow-icon-border">
                    <img src={Teacher} alt="badge" />
                  </div>
                  <h4 className="text-white text-[28px] leading-tight font-semibold font-inter">
                  4.6M
                  </h4>
                  <span className="text-ivoryTint text-sm font-inter">Total Trades</span>
                {/* card-lines */}
                <div className="absolute top-[-1px] right-[35px] w-[114px] h-[1px] bg-card-line"></div>
                <div className="absolute bottom-[-1px] left-[35px] w-[114px] h-[1px] bg-card-line"></div>
              </div>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6  mx-auto
        max-lg:grid-cols-2 max-md:grid-cols-1">
            <div
              className="bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset"
            >
              <div
                className="relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col items-center bg-card-gradient">
                  <div className="p-3 mb-4 flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[rgba(255,204,0,0.04)] shadow-icon-border">
                    <img src={Dimond} alt="badge" />
                  </div>
                  <h4 className="text-white text-[28px] leading-tight font-semibold font-inter">
                  <CountUp end={"223322"} duration={4} separator="," />
                  </h4>
                  <span className="text-ivoryTint text-sm font-inter">Total Lot Size</span>
                {/* card-lines */}
                <div className="absolute top-[-1px] right-[35px] w-[114px] h-[1px] bg-card-line"></div>
                <div className="absolute bottom-[-1px] left-[35px] w-[114px] h-[1px] bg-card-line"></div>
              </div>
            </div>
            <div
              className="bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset"
            >
              <div
                className="relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col items-center bg-card-gradient">
                  <div className="p-3 mb-4 flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[rgba(255,204,0,0.04)] shadow-icon-border">
                    <img src={Check} alt="badge" />
                  </div>
                  <h4 className="text-white text-[28px] leading-tight font-semibold font-inter">
                  GBPJPY
                  </h4>
                  <span className="text-ivoryTint text-sm font-inter">Most Traded Pair</span>
                {/* card-lines */}
                <div className="absolute top-[-1px] right-[35px] w-[114px] h-[1px] bg-card-line"></div>
                <div className="absolute bottom-[-1px] left-[35px] w-[114px] h-[1px] bg-card-line"></div>
              </div>
            </div>
            <div
              className="bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset"
            >
              <div
                className="relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col items-center bg-card-gradient">
                  <div className="p-3 mb-4 flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[rgba(255,204,0,0.04)] shadow-icon-border">
                    <img src={Globe} alt="badge" />
                  </div>
                  <h4 className="text-white text-[28px] leading-tight font-semibold font-inter">
                  <CountUp end={"120"} duration={4} separator="," />+
                  </h4>
                  <span className="text-ivoryTint text-sm font-inter">No. of Funded Traders</span>
                {/* card-lines */}
                <div className="absolute top-[-1px] right-[35px] w-[114px] h-[1px] bg-card-line"></div>
                <div className="absolute bottom-[-1px] left-[35px] w-[114px] h-[1px] bg-card-line"></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
