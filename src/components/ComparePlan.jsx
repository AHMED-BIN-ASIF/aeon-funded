import React from "react";
import Eyebrow from "../ui/Eyebrow";
import Check from "../assets/icons/check-circle.svg"

const ComparePlan = () => {
  const planData = [
    { title: "Profit Target", value: "6-8%" },
    { title: "Drawdown Type", value: "Balance Based" },
    { title: "Free Education", value: "Yes" },
    { title: "Min Trading days", value: "0 Min Trading days" },
    { title: "Scaling Plan", value: "95% Profit Split" },
    { title: "Payouts", value: "Every 8 Days (Prime)" },
    { title: "100k Evaluation", value: "$399" }
];

  return (
    <section
      className="py-[120px] bg-cover bg-no-repeat bg-center max-xl:py-20"
      style={{
        background: `radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
        linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%),  
        0px -173.5px / 100% 145.749% no-repeat`
      }}
    >
      <div className="container max-w-[1220px]">
        <div className="text-center flex items-center flex-col mb-[60px] max-md:mb-10">
          <Eyebrow text=" Compare" />
          <h2 className="text-white text-[50px] leading-[1.2] font-semibold tracking-[-0.5px] max-w-[850px] mx-auto
          max-lg:text-4xl">
            Prime Challenge Compared to Competitors
          </h2>
          <p className="text-sm leading-[1.71] text-ivoryTint max-w-[700px] mx-auto mt-[10px]">
          Explore how Prime Challenge stands out with unique features, superior benefits, and a better overall experience.
          </p>
        </div>
        <PlanCard data={planData} />
      </div>
    </section>
  ); 
};
const PlanCard = ({ data }) => {
  return (
    <div className="font-inter relative text-white font-semibold rounded-[20px] p-6 bg-plan-card border border-[rgba(255,255,255,0.10)] bg-[rgba(0,0,0,0.10)]" style={{ backdropFilter: "blur(7.5px)" }}>
      <div className="grid items-center grid-cols-3 max-md:grid-cols-1 gap-3 py-5 mb-8 max-md:hidden">
        <div></div>
        <div className="text-white text-xl font-semibold trackling-[-0.2]"><span className="text-ivoryTint font-normal text-sm">When you trade with:</span> <span><span className="text-[#fc0]">A</span>EONFunded</span></div>
        <div className="text-white text-xl font-semibold trackling-[-0.2]"><span className="text-ivoryTint font-normal text-sm">When you trade with:</span> Others</div>
      </div>
      {data.map((item, index) => (
        <div key={index} className="grid items-center grid-cols-3 max-md:grid-cols-1 gap-3 py-5 border-b border-dashed border-[rgba(226,234,253,0.10)]">
          <div className="flex items-center gap-[10px]">
            <img src={Check} alt="check" className="w-6 h-6" />
            <span className="text-sm leading-none">{item.title}</span>
          </div>
            {item.value && 
            <div>
              <span className="text-ivoryTint font-normal text-sm hidden max-md:block mb-2">When you trade with:</span>
              <div className=" flex justify-between items-center"><span className="text-white text-base font-semibold trackling-[-0.2] hidden max-md:block"><span className="text-[#fc0]">A</span>EONFunded </span> <span className="text-sm leading-none">{item.value}</span></div>
            </div>
            }
            {item.value && 
            <div className="flex justify-between items-center"> <span className="text-white text-base font-semibold trackling-[-0.2] hidden max-md:block">Others</span>  <span className="text-sm leading-none text-ivoryTint opacity-60 font-normal">{item.value}</span></div>
              }
        </div>
      ))}
    </div>
  );
};
export default ComparePlan;
