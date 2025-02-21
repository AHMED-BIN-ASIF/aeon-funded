import React from "react";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import CountUp from "react-countup";
import Progress from "../assets/images/progress.svg";

const CareerTrading = () => {
  return (
    <section
      className="pt-[205px] pb-[120px] max-xl:pt-36 max-xl:pb-20 max-md:py-10"
      style={{
        background: `radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
        linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%),  
        0px -173.5px / 100% 145.749% no-repeat`,
      }}
    >
      <div className="container max-w-[1240px]">
        <div
          className="grid grid-cols-[.9fr_1fr] gap-20 items-center
        max-xl:gap-14 max-lg:gap-9 max-lg:grid-cols-1"
        >
          <div
            className={` bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset
              max-md:order-2 }`}
          >
            <div
              className={`relative h-full p-8 rounded-[18px] text-center border border-solid border-[rgba(255,255,255,0.10)] flex flex-col   gap-2.5 bg-card-radial`}
              style={{ backdropFilter: "blur(7.5px)" }}
            >
              <div className="flex items-center justify-between w-full  font-inter">
                <h3 className="text-2xl font-semibold">Account Size</h3>
              </div>
                <div className="flex justify-between items-center gap-3 p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)] bg-[rgba(5,5,5,0.40)]">
                <div className="pb-2 text-[30px] leading-none flex items-center justify-center rounded-full w-[40px] h-[40px] bg-[rgba(255,204,0,0.04)] shadow-icon-white">
                      +
                    </div>
                <div className="flex flex-col items-center">
                <span className="text-ivoryTint opacity-60 text-sm mb-3 block">
                Account Size
                </span>
                <span className={`text-[20px] leading-tight font-semibold `}>
                    $
                    <CountUp end={"200000"} duration={4} separator="," />
                  </span>
                </div>
                <div className="pb-2 text-[30px] leading-none flex items-center justify-center rounded-full w-[40px] h-[40px] bg-[rgba(255,204,0,0.04)] shadow-icon-white">
                      -
                    </div>
                </div>
                <div className="p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)] bg-[rgba(5,5,5,0.40)]">
                <span className="text-ivoryTint opacity-60 text-sm block">
                Profit Rate
                </span>
                  <img src={Progress} alt="progress"/>
                </div>
                <div className="p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)] bg-[rgba(5,5,5,0.40)]">
                <span className="text-ivoryTint opacity-60 text-sm mb-3 block">
                Take Home
                </span>
                <span className={`text-[20px] leading-tight font-semibold`}>
                    $
                    <CountUp end={"200000"} duration={4} separator="," />/Month
                  </span>
                </div>
              <div className="absolute top-[-1px] right-0 left-0 mx-auto w-[60%] h-[1px] bg-card-line"></div>
                <div className="absolute bottom-[-1px] left-0 right-0 mx-auto w-[60%] h-[1px] bg-card-line"></div>
            </div>
          </div>
          <div className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center 
          max-md:order-1">
            <Eyebrow text="A Full Time Career" />
            <h2
              className="text-white text-[50px] leading-tight font-semibold tracking-[-0.5px]
            max-lg:text-4xl"
            >
              How Much Can You Earn As A Aeon Trader?
            </h2>
            <p className="text-sm leading-[1.71] text-ivoryTint  mx-auto mt-[10px]">
            On average our top traders earn 7.8% you take home 90% of those profits
            </p>
            <div className="flex gap-[10px] mt-8 max-lg:justify-center">
              <Button to="/" text="Start Trading" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTrading;
