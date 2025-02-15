import React from "react";
import Eyebrow from "../ui/Eyebrow";
import AboutBg from "../assets/images/about-bg.webp";
import Like from "../assets/icons/like.svg";
import Rocket from "../assets/icons/rocket-icon.svg";
import HeadPhone from "../assets/icons/headphones.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const aboutCards = [
  {
    icon: Like,
    title: "Your skill, our risk",
    description: "Trade with our capital without being liable for any losses.",
    link: "/",
  },
  {
    icon: Rocket,
    title: "Fast & Reliable Payouts",
    description: "Receive payouts with a high profit split, protected by our payout guarantee.",
    link: "/",
  },
  {
    icon: HeadPhone,
    title: "24/7 Support",
    description: "Our dedicated support team is always here to help.",
    link: "/",
  },
];

const AboutSection = () => {
  return (
    <section
      className="py-32 bg-cover bg-no-repeat bg-center"
      style={{
        background: `radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${AboutBg})  0px -173.5px / 100% 145.749% no-repeat`
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="text-center max-w-[520px] mx-auto flex items-center flex-col">
          <Eyebrow text="Why us" theme="white" />
          <h2 className="text-white text-[50px] leading-none font-semibold tracking-[-0.5px]">
            Why Trade with <span className="text-primary">A</span>EON?
          </h2>
          <p className="text-sm leading-[1.71] text-ivoryTint max-w-[450px] mx-auto mt-[10px]">
          Trade with our capital, keep up to 95% of the profits, and maximize your earnings with zero risk to your funds!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-[60px]">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset"
            >
              <div
                className="relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-5 justify-between items-start bg-card-gradient">
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
                <Link
                  to={card.link}
                  className="bg-[rgba(0,0,0,0.10)] shadow-nav-shadow rounded-full text-sm font-inter font-medium text-white h-10 px-5 py-4 flex items-center justify-center gap-[10px]"
                >
                  Learn More <img src={ArrowRight} alt="arrow-right" />
                </Link>
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

export default AboutSection;
