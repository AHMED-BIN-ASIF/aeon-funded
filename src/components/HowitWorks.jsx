import React from "react";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import ArrowRight from "../assets/icons/arrow-right.svg";
import Target from "../assets/icons/target.svg";
import Capital from "../assets/icons/safe-box.svg";
import Paid from "../assets/icons/donate-coin.svg";
import Dashboard from "../assets/images/dashboard.webp";

const aboutCards = [
  {
    index: 1,
    icon: Target,
    title: "Take a Challenge",
    description: "Trade you with our capital withoout being liable fro any losses.",
  },
  {
    index: 2,
    icon: Capital,
    title: "Unlock Capital",
    description:
      "Recieve Payouts with a High Profit Split, Protected by our Payout Guarantee.",
  },
  {
    index: 3,
    icon: Paid,
    title: "Trade & Get Paid",
    description: "Our Dedicated Support team is always here to help.",
  },
];

const HowitWorks = () => {
  return (
    <section
      className="pt-[205px] pb-[120px] max-xl:pt-36 max-xl:pb-20"
      style={{
        background: `radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
        linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%),  
        0px -173.5px / 100% 145.749% no-repeat`,
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="grid grid-cols-[.65fr_1fr] gap-5 items-center
        max-lg:grid-cols-1">
          <div className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center ">
            <Eyebrow text="How it works" theme="white" />
            <h2 className="text-white text-[50px] leading-tight font-semibold tracking-[-0.5px]
            max-lg:text-4xl">
              Trading made <span className="text-primary">easy</span>, For You.
            </h2>
            <p className="text-sm leading-[1.71] text-ivoryTint  mx-auto mt-[10px]">
              Your Skills with Our Risk. You're not liable for any losses.
            </p>
            <div className="flex gap-[10px] mt-8 max-lg:justify-center">
              <Button to="/" text="Get Funded" />
              <Button
                to="/"
                text="Learn More"
                variant="gold"
                hasIcon={true}
                icon={ArrowRight}
              />
            </div>
          </div>
          <div>
            <img src={Dashboard} alt="dashboard" className=" w-full -mt-20 max-xl:-mt-16 max-lg:mt-0" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6
        max-lg:grid-cols-2
        max-md:grid-cols-1">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset"
            >
              <div className="relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-5 justify-between items-start bg-card-gradient">
                <div>
                  <div className="flex justify-between items-center">
                    <div className="p-3 flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[rgba(255,204,0,0.04)] shadow-icon-border">
                      <img src={card.icon} alt={card.title} />
                    </div>
                    <span className="text-[10px] font-inter text-ivoryTint relative h-7 max-w-max flex items-center justify-center gap-2 rounded-[100px] py-2 px-[10px] border border-solid bg-[rgba(255,255,255,0.01)] border-[rgba(255,255,255,0.20)] shadow-nav-shadow">
                    {card.index} Step
                    </span>
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
    </section>
  );
};

export default HowitWorks;
