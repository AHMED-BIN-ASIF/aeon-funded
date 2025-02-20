import React from "react";
import Texture from "../assets/images/texture.svg";
import BannerGradient from "../assets/images/banner-gradient.svg";
import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow";
import Chart from "../assets/icons/hart-arrow-up.png";
import Notepad from "../assets/icons/notepad.svg";
import Deal from "../assets/icons/deal.svg";

const payoutCards = [
    {
      index: 1,
      icon: Chart,
      title: "Highest Payout Ever",
      description: "Trade you with our capital withoout being liable fro any losses.",
    },
    {
      index: 2,
      icon: Notepad,
      title: "Last Month Payout",
      description:
        "Recieve Payouts with a High Profit Split,Protected by our Payout Guarantee.",
    },
    {
      index: 3,
      icon: Deal,
      title: "Total Funded Traders",
      description: "Our Dedicated Support team is always here to help.",
    },
  ];
const PayoutBanner = () => {
  return (
    <section
      className="relative pt-[275px] pb-[100px] rounded-[0_0_40px_40px] overflow-hidden min-h-[100vh] flex items-center
      max-2xl::pt-[220px] max-xl:pt-[170px]"
    >
      <div className="container max-w-[1240px] relative z-[3]">
          <div className="flex flex-col items-center justify-center text-center mb-14">
          <Eyebrow text="Payouts" theme="golden" />
            <h1 className="text-[80px] font-semibold leading-[1.12] tracking-[-1.6px] text-white 
            max-xl:text-[56px] max-lg:text-4xl">
              Glimpse Of Successful AEON Trading Stories
            </h1>
            <p className="text-base text-[#FBF6EC] m-[16px_0_32px] max-w-[631px]">
            Help AeonFunded grow and earn up to 20% commission – There’s no limit on how much you can earn profit!
            </p>
            <Link
              to="/"
              className="btn bg-white text-[16px] font-inter font-medium leading-none shadow-nav-shadow rounded-[100px] text-black h-10 px-8 py-4 flex items-center justify-center"
            >
              Get Funded
            </Link>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6
        max-lg:grid-cols-2
        max-md:grid-cols-1">
          {payoutCards.map((card, index) => (
            <div
              key={index}
              className="bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset"
            >
              <div className="relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-5 justify-between items-start bg-card-gradient">
                <div>
                    <div className="p-3 flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[rgba(255,204,0,0.04)] shadow-icon-border">
                      <img src={card.icon} alt={card.title} />
                    </div>
                  <h4 className="text-white text-xl leading-tight font-semibold font-inter mt-4 mb-[10px]">
                    {card.title}
                  </h4>
                  <p className="text-ivoryTint text-sm leading-[1.7] font-inter">
                    {card.description}
                  </p>
                </div>
                {/* card-lines */}
                <div className="absolute top-[-1px] right-[35px] w-[114px] h-[1px] bg-card-line"></div>
                <div className="absolute bottom-[-1px] left-[35px] w-[114px] h-[1px] bg-card-line"></div>
              </div>
            </div>
          ))}
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

export default PayoutBanner;
