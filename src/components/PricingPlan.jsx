import React, { useState } from "react";
import Eyebrow from "../ui/Eyebrow";
import { Link } from "react-router-dom";
import Check from "../assets/icons/check-circle.svg";
import PricingBg from "../assets/images/pricing-bg.svg";

const PricingPlan = ({ mode }) => {
  const [activeTab, setActiveTab] = useState("One phase");
  const [BtmactiveTab, setBtmActiveTab] = useState("Phase 1");

  const tabs = [
    { name: "One phase" },
    { name: "Two Phase" },
    { name: "Three Phase" },
    { name: "Instant Funding" },
  ];
  const Pricedata = [
    { amount: "$5K" },
    { amount: "$10K" },
    { amount: "$15K" },
    { amount: "$25K", isHighlighted: true },
    { amount: "$50K" },
    { amount: "$100K" },
    { amount: "$200K" },
    { amount: "$400K" },
  ];
  const Btmtabs = [
    { name: "Phase 1" },
    { name: "Phase 2" },
    { name: "Phase 3" },
  ];
  const planData = [
    { icon: Check, title: "Profit Target", value: "$2,500", percentage: "10%" },
    { icon: Check, title: "Daily Loss Limit", value: "4%" },
    { icon: Check, title: "Max Trailing Drawdown", value: "10%" },
    { icon: Check, title: "Refundable Fee", value: "100%" },
  ];
  const planDetailsTwo = [
    { icon: Check, title: "Minimum Trading Days", value: "5 Days" },
    { icon: Check, title: "Performance Split", value: "up to 90%" },
    { icon: Check, title: "Drawdown Type", value: "Trailing" },
    { icon: Check, title: "Refund", value: "100%" },
    { icon: Check, title: "Trade Through News", value: "Yes" },
  ];
  const planDetailsThree = [
    { icon: Check, title: "Maximum Trading Days", value: "Unlimited" },
    { icon: Check, title: "Leverage", value: "up to 50:1" },
    { icon: Check, title: "EAs Allowed", value: "Yes" },
    { icon: Check, title: "Hold Over Weekend", value: "Yes" },
    { icon: Check, title: "Platform", value: "MT4" },
  ];
  return (
    <section
      className="py-[120px] bg-cover bg-no-repeat bg-center max-xl:py-20"
      style={{
        background: mode === "dark"
          ? `url(${PricingBg}) no-repeat center / cover`
          : ""
      }}
    >
      <div className="container max-w-[900px]">
        <div className="text-center flex items-center flex-col">
          <Eyebrow text="Planning" />
          <h2
            className={`text-[50px] leading-relaxed font-semibold tracking-[-0.5px] 
          max-lg:text-4xl ${mode === "dark" ? "text-white " : "text-dark1f"}`}
          >
            Pricing Plan
          </h2>
          <p
            className={`text-sm leading-[1.71] max-w-[644px] mx-auto mt-[10px]
            ${mode === "dark" ? "text-ivoryTint " : "text-dark1f opacity-80"}`}
          >
            We appreciate that every trader and trading style is different. With
            that in mind we offer the opportunity to customize your trading
            accounts at the checkout.
          </p>
        </div>
        <div
          className="flex gap-5 mt-[60px] mb-10 justify-center
        max-md:flex-col"
        >
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`px-8 py-[10px] h-12 rounded-[100px] flex items-center justify-center transition-all duration-500 ease-in-out
              font-inter text-sm leading-none font-semibold max-md:w-full
              ${
                activeTab === tab.name
                  ? mode === "dark"
                    ? "bg-white text-black"
                    : "bg-dark1f text-white"
                  : mode === "dark"
                  ? "text-white bg-transparent"
                  : "text-dark1f"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div
          className={`p-[10px]  rounded-[24px] border border-[rgba(255,255,255,0.05)] shadow-card-inset
          ${mode === "dark" ? "bg-[#050505]" : "bg-[#F1F1F1]"}`}
        >
          {activeTab === "One phase" && (
            <div
              className={`p-6 rounded-[20px] border border-[rgba(255,255,255,0.10)] flex flex-col gap-5
            ${mode === "dark" ? "bg-card-gradient" : "bg-white"}`}
            >
              <div
                className={`grid grid-cols-4 gap-x-2.5 gap-y-5 text-center font-inter text-sm leading-none
              max-lg:grid-cols-2 ${
                mode === "dark" ? "text-white" : "text-dark1f"
              }`}
              >
                {Pricedata.map((item, index) => (
                  <span
                    key={index}
                    className={`rounded-[100px] p-[10px] 
                ${
                  item.isHighlighted
                    ? mode === "dark"
                      ? "border border-[rgba(255,204,0,0.10)] bg-[rgba(255,204,0,0.10)] text-primary shadow-[0px_4px_10px_0px_rgba(0,0,0,0.00)_inset]"
                      : "border border-[rgba(31,31,31,0.10)] bg-[rgba(31,31,31,0.10)] text-dark1f"
                    : ""
                }`}
                  >
                    {item.amount}
                  </span>
                ))}
              </div>
            </div>
          )}
          {activeTab === "Two Phase" && (
            <p>This is the content for Two Phase.</p>
          )}
          {activeTab === "Three Phase" && (
            <p>This is the content for Three Phase.</p>
          )}
          {activeTab === "Instant Funding" && (
            <p>This is the content for Instant Funding.</p>
          )}
          <div
            className={`rounded-[24px] p-6 mt-[10px] flex flex-col gap-6 border border-[rgba(0,0,0,0.10)] font-inter 
          ${mode === "dark" ? "bg-goldYellow" : "bg-dark1f"}`}
          >
            <div className="flex justify-between items-center">
              <span
                className={`text-xl leading-none font-bold ${
                  mode === "dark" ? "text-dark121" : "text-white"
                }`}
              >
                Two Phase
              </span>
              <span
                className={`px-5 py-[14px] font-bold text-xs leading-none rounded-[100px] ${
                  mode === "dark"
                    ? "text-dark121 bg-[rgba(16,16,16,0.10)]"
                    : "text-white bg-[rgba(255,255,255,0.10)]"
                }`}
              >
                Popular
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span
                className={`text-[32px] leading-none font-semibold ${
                  mode === "dark" ? "text-dark121" : "text-white"
                }`}
              >
                $199{" "}
                <span className="text-sm font-normal leading-none opacity-80">
                  one time fee
                </span>
              </span>
              <span
                className={`text-sm font-normal leading-none ${
                  mode === "dark" ? "text-darkBg " : "text-white"
                }`}
              >
                For $25k trading account
              </span>
            </div>
            <Link
              to="/"
              className={` rounded-[100px] px-8 py-[10px] text-sm leading-none font-semibold h-12 flex items-center justify-center
            ${
              mode === "dark" ? "bg-darkBg text-white" : " bg-white text-dark1f"
            }`}
            >
              Start trading now
            </Link>
            <div
              className={`h-[1px] w-full ${
                mode === "dark"
                  ? "bg-[rgba(0,0,0,0.10)]"
                  : "bg-[rgba(255,255,255,0.10)]"
              }`}
            ></div>
            <span
              className={`text-sm font-normal ${
                mode === "dark" ? "text-dark121" : "text-white"
              }`}
            >
              Two-phase, two-step challenge to test your trading skill.
            </span>
          </div>
          <div className={`rounded-[24px] mt-2.5 p-2.5 ${mode==='dark'?'':'bg-white'}`}>
          <div className="flex gap-[10px] items-center justify-between] mb-[10px] max-md:flex-col">
            {Btmtabs.map((tab) => (
              <button
                key={tab.name}
                className={`px-8 py-[10px] h-12 rounded-[100px] flex items-center justify-center transition-all duration-500 ease-in-out
              font-inter text-sm leading-none font-semibold text-center w-full border 
              ${mode === "dark" ? "text-ivoryTint" : "text-dark1f"}
              ${
                BtmactiveTab === tab.name
                  ? mode === "dark"
                    ? "bg-[rgba(255,255,255,0.10)] border-[rgba(255,255,255,0.10)]"
                    : "bg-[#E9E9E9] border-[rgba(31,31,31,0.10)]"
                  : "bg-transparent border-transparent"
              }`}
                onClick={() => setBtmActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <PlanCard data={planData} />
        <span
          className={`mt-6 mb-5 font-inter text-xl text-center block trackling-[-0.2px]
        ${mode === "dark" ? "text-white" : "text-dark1f"}`}
        >
          All plans included:
        </span>
        <div
          className="grid grid-cols-2 gap-2.5
        max-md:grid-cols-1"
        >
          <PlanCard data={planDetailsTwo} mode={mode} />
          <PlanCard data={planDetailsThree} mode={mode} />
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const PlanCard = ({ data, mode }) => {
  return (
    <div
      className={`font-inter font-semibold rounded-[20px] p-6 border border-[rgba(255,255,255,0.10)] 
    ${mode === "dark" ? "text-white bg-plan-card" : "text-dark1f bg-[#F1F1F1]"}`}
      style={{ backdropFilter: "blur(7.5px)" }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-5 border-b border-dashed border-[rgba(226,234,253,0.10)]"
        >
          <div className="flex items-center gap-[10px]">
            <img src={item.icon} alt={item.title} className={`w-6 h-6 ${mode==='dark'?'':'filter invert grayscale'}`} />
            <span className="text-sm leading-none">{item.title}</span>
          </div>
          <div className="flex items-center gap-[10px]">
            {item.value && (
              <span className="text-sm leading-none">{item.value}</span>
            )}
            {item.percentage && (
              <span className="text-sm leading-none p-[10px] font-medium rounded-[100px] bg-[rgba(255,255,255,0.10)] border border-[rgba(255,255,255,0.10)]">
                {item.percentage}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default PricingPlan;
