import React from "react";
import Eyebrow from "../ui/Eyebrow";
// import AboutBg from "../assets/images/about-bg.webp";
import Verified from "../assets/icons/shield-warning.png";
import Easy from "../assets/icons/hart-arrow-up.png";
import Clock from "../assets/icons/clock-circle.png";
import Capita from "../assets/icons/chart-icon.svg";
import Wallet from "../assets/icons/wallet.svg";
import Infinity from "../assets/icons/infinity.svg";

const benifitsCards = [
  {
    icon: Verified,
    title: "Payout Guarantee",
    shortTitle: "Get Paid in 48 Hours or We Pay 100% Profit Split",
    description: "Our commitment to timely payouts sets us apart in the industry.",
    link: "/",
  },
  {
    icon: Easy,
    title: "Easy To Achieve",
    shortTitle: "5-10% Profit Targets",
    description: "Realistic and achievable profit targets designed for consistent growth.",
  },
  {
    icon: Clock,
    title: "Fast Bi-Weekly Payouts",
    shortTitle: "Upgrade to First Payout in 7 Days",
    description: "Regular payouts to keep your trading momentum going.",
  },
  {
    icon: Capita,
    title: "Scaled Capital",
    shortTitle: "Up To $2M In Scaled Capital",
    description: "Grow your trading capacity with our scaling program.",
  },
  {
    icon: Wallet,
    title: "Generous Profit Split",
    shortTitle: "Up to 95% Profit Split",
    description: "Industry-leading profit-sharing structure with maximum returns and transparency.",
  },
  {
    icon: Infinity,
    title: "Trade Without Pressure",
    shortTitle: "No Time Limits on Challenges",
    description: "Take your time to prove your trading skills. Unlike other prop firms.",
  },
];

const Benifits = () => {
  return (
    <section
      className="py-32 bg-cover bg-no-repeat bg-center"
      style={{
        background: `radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
        linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%),  
        0px -173.5px / 100% 145.749% no-repeat`
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="text-center flex items-center flex-col">
          <Eyebrow text="Benefit"  />
          <h2 className="text-white text-[50px] leading-none font-semibold tracking-[-0.5px]">
          Why Traders Love <span className="text-primary">A</span>EON?
          </h2>
          <p className="text-sm leading-[1.71] text-ivoryTint max-w-[350px] mx-auto mt-[10px]">
          Get paid quickly and securely with a smooth and reliable payout process.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-[60px]">
          {benifitsCards.map((card, index) => (
            <div
              key={index}
              className="bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset"
            >
              <div
                className="relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-5 justify-between items-start bg-card-gradient">
                <div>
                  <div className="flex flex-wrap gap-4 items-center mb-4">
                  <div className="p-3 flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[rgba(255,204,0,0.04)] shadow-icon-border">
                    <img src={card.icon} alt={card.title} />
                  </div>
                  <h4 className="text-white text-xl leading-tight font-semibold font-inter">
                    {card.title}
                  </h4>
                  </div>
                  <span className="text-white text-sm leading-loose font-inter mb-1">{card.shortTitle}</span>
                  <p className="text-ivoryTint text-xs leading-[1.7] font-inter">
                    {card.description}
                  </p>
                </div>
                {/* card-lines */}
                <div className="absolute top-[-1px] right-0 left-0 w-[80%] mx-auto h-[1px] bg-card-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
