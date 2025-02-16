import React from "react";
import CountUp from "react-countup";
import Eyebrow from "../ui/Eyebrow";
// import AboutBg from "../assets/images/about-bg.webp";
import Payout from "../assets/images/payout-chart.svg";
import PaidChart from "../assets/images/bar-chart.svg";
import World from "../assets/images/world.svg";

const successData = [
  {
    title: 1240000,
    suffix: "+",
    bodyClass: "px-6",
    description:
      "The total amount of money paid out to traders over time, showcasing overall earnings.",
    extraInfo: [
      { text: "Average Payout: $2521", highlight: false },
      { text: "Total Paid out: $1.24M", highlight: true },
    ],
    image: Payout,
    spanClass: "row-span-2",
    layoutClass: "flex flex-col justify-between pt-6",
  },
  {
    title: 18821,
    prefix: "$",
    description:
      "The trader with the highest earnings, setting a benchmark for success.",
    image: PaidChart,
    layoutClass: "grid lg:grid-cols-[1fr_0.5fr] p-8",
  },
  {
    title: 18000,
    suffix: "+",
    description:
      "The total number of active traders across different countries, highlighting global reach.",
    image: World,
    imageClass: "w-full h-[221px] max-w-[221px] absolute right-[-35px] bottom-[-58px]",
    layoutClass: "grid lg:grid-cols-[1fr_0.5fr] p-8",
  },
];

const Success = () => {
  return (
    <section
      className="py-[120px]"
      style={{
        background: `
            radial-gradient(150.94% 139.8% at 60.26% 151.92%, rgba(0, 0, 0, 0.00) 0%, #000 100%),
            linear-gradient(360deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%),
            0px -41.5px / 100% 109.422% no-repeat`,
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="text-center max-w-[842px] mx-auto flex items-center flex-col">
          <Eyebrow text="Success" />
          <h2 className="text-white text-[50px] leading-none font-semibold tracking-[-0.5px]">
            Trading <span className="text-primary">Success</span> in Numbers
          </h2>
          <p className="text-sm leading-[1.71] text-ivoryTint max-w-[540px] mx-auto mt-[10px]">
            A dynamic community where traders grow, earn, and succeed. See real results and take your trading journey to the next level.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-[60px]">
          {successData.map((data, index) => (
            <SuccessCard key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};
const SuccessCard = ({ title, suffix, prefix, bodyClass, description, extraInfo, image, spanClass, imageClass, layoutClass }) => {
    return (
      <div className={`bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset ${spanClass || ''}`}>
        <div
          className={`relative h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] ${layoutClass} gap-5 items-center overflow-hidden bg-card-radial`}
          style={{ backdropFilter: "blur(7.5px)" }}
        >
          <div className={`${bodyClass}`}>
            <div className="relative h-7 max-w-max flex items-center justify-center gap-2 rounded-[100px] py-2 px-[10px] border border-solid bg-[rgba(255,255,255,0.01)] border-[rgba(255,255,255,0.20)] shadow-nav-shadow ">
              <span className="text-[10px] font-inter text-ivoryTint">Success</span>
            </div>
            <h4 className={`text-xl leading-tight font-semibold font-inter mt-4 mb-[10px] text-white`}>
              {prefix}
              <CountUp end={title} duration={4} separator="," />
              {suffix}
            </h4>
            <p className="text-ivoryTint text-sm leading-[1.7] font-inter">{description}</p>
          </div>
          <div className="">
            {extraInfo && (
              <div className="flex gap-2 mt-4 -mb-4 px-6">
                {extraInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`relative h-7 flex items-center justify-center gap-2 rounded-[100px] py-2 px-[10px] border border-solid ${
                      info.highlight ? "bg-[rgba(255,204,0,0.10)] border-primary text-primary" : "bg-[rgba(255,255,255,0.01)] border-[rgba(255,255,255,0.10)] text-ivoryTint"
                    }`}
                  >
                    <span className="text-[10px] font-inter">{info.text}</span>
                  </div>
                ))}
              </div>
            )}
            <img src={image} alt="Success" className={imageClass || "w-full h-auto max-h-[234px]"} />
          </div>
        </div>
      </div>
    );
  };
export default Success;