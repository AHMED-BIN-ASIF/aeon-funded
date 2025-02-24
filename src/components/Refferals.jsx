import React from "react";
import Eyebrow from "../ui/Eyebrow";
import Emily from "../assets/images/emily.png";
import CountUp from "react-countup";

const Refferals = ({ mode }) => {
  return (
    <section
      className="py-[120px] max-xl:pt-36 max-xl:pb-20 max-md:py-10"
      style={{
        background:
          mode === "dark"
            ? "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%), 0px -173.5px / 100% 145.749% no-repeat"
            : "",
      }}
    >
      <div className="container max-w-[1240px]">
          <div className=" text-center flex flex-col items-center">
            <Eyebrow
              text="Referalls"
              theme={mode === "dark" ? "white" : "light"}
            />
            <h2
              className={`text-[50px] leading-tight font-semibold tracking-[-0.5px]
            max-lg:text-4xl ${mode === "dark" ? "text-white" : "text-dark1f"}`}
            >Share, Get and Paid
            </h2>
            <p
              className={`text-sm leading-[1.71] max-w-[449px] mx-auto mt-[10px]
              ${mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"}`}
            >
              Trade with our capital, keep up to 95% of the profits, and maximize your earnings with zero risk to your funds!
            </p>
          </div>
          <div
            className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset 
              ${mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"}`}
          >
            <div
              className={`relative h-full font-inter p-8 rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-8
                ${mode === "dark" ? "bg-card-radial" : "bg-white"}`}
              style={{ backdropFilter: "blur(7.5px)" }}
            >
                <div className="w-full flex justify-between items-center ">
                  <div className="flex items-center gap-4">
                    <img src={Emily} alt="emily" className="w-[74px] rounded-[10px]" />
                    <div>
                    <span className={`text-[16px] block mb-1 leading-tight font-semibold`}>
                    Emily Johnson
                  </span>
                <span className={` text-sm block ${mode==='dark'?'text-ivoryTint opacity-60':'text-dark1f'}`}>
                Awesome Costumer
                </span>
                    </div>
                  </div>
                  <div className="relative h-8 flex items-center justify-center gap-2 rounded-[100px] py-2.5 px-4 mb-4 border border-solid max-w-max bg-black shadow-nav-shadow border-[rgba(255,255,255,0.20)]">
                    <span class="text-sm font-inter text-[#ECECFB]">Referalls</span>
                    <div class="absolute inset-[-1px_0_auto] mx-auto h-[1px] w-[60%] z-1"
                     style={{background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 100%)"}}>
                      </div>
                  </div>
                </div>
              <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-2.5">
              <div className={`p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)] 
                ${mode==='dark'?'bg-[rgba(5,5,5,0.40)]':'bg-[#F1F1F1]'}`}>
                <span className={`text-[28px] block mb-2.5 leading-tight font-semibold`}>
                    
                    <CountUp end={"17"} duration={2} separator="," />
                  </span>
                <span className={` text-sm block ${mode==='dark'?'text-ivoryTint opacity-60':'text-dark1f'}`}>
                Referrals
                </span>
                </div>
              <div className={`p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)] 
                ${mode==='dark'?'bg-[rgba(5,5,5,0.40)]':'bg-[#F1F1F1]'}`}>
                <span className={`text-[28px] block mb-2.5 leading-tight font-semibold`}>
                    
                    <CountUp end={"42"} duration={2} separator="," />
                  </span>
                <span className={` text-sm block ${mode==='dark'?'text-ivoryTint opacity-60':'text-dark1f'}`}>
                Customers
                </span>
                </div>
              <div className={`p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)] 
                ${mode==='dark'?'bg-[rgba(5,5,5,0.40)]':'bg-[#F1F1F1]'}`}>
                <span className={`text-[28px] block mb-2.5 leading-tight font-semibold`}>
                    
                    <CountUp end={"42"} duration={3} separator="," />
                  </span>
                <span className={` text-sm block ${mode==='dark'?'text-ivoryTint opacity-60':'text-dark1f'}`}>
                Clicks
                </span>
                </div>
              <div className={`p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)] 
                ${mode==='dark'?'bg-[rgba(5,5,5,0.40)]':'bg-[#F1F1F1]'}`}>
                <span className={`text-[28px] block mb-2.5 leading-tight font-semibold`}>
                    $
                    <CountUp end={"7200"} duration={4} separator="," />
                  </span>
                <span className={` text-sm block ${mode==='dark'?'text-ivoryTint opacity-60':'text-dark1f'}`}>
                Unique Earnings
                </span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Refferals;
