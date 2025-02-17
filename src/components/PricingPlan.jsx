import React, { useState } from "react";
import Eyebrow from "../ui/Eyebrow";
import { Link } from "react-router-dom";
import Check from "../assets/icons/check-circle.svg"

const PricingPlan = () => {
  const [activeTab, setActiveTab] = useState('One phase');
  const [BtmactiveTab, setBtmActiveTab] = useState('Phase 1');

  const tabs = [
    { name: 'One phase' },
    { name: 'Two Phase' },
    { name: 'Three Phase' },
    { name: 'Instant Funding' },
  ];
  const Btmtabs = [
    { name: 'Phase 1' },
    { name: 'Phase 2' },
    { name: 'Phase 3' },
  ];
  return (
    <section
      className="py-[120px] bg-cover bg-no-repeat bg-center"
      style={{
        background: `radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
        linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%),  
        0px -173.5px / 100% 145.749% no-repeat`
      }}
    >
      <div className="container max-w-[900px]">
        <div className="text-center flex items-center flex-col">
          <Eyebrow text="Planning" />
          <h2 className="text-white text-[50px] leading-relaxed font-semibold tracking-[-0.5px]">
            Pricing Plan
          </h2>
          <p className="text-sm leading-[1.71] text-ivoryTint max-w-[644px] mx-auto mt-[10px]">
          We appreciate that every trader and trading style is different. With that in mind we offer the opportunity to customize your trading accounts at the checkout.
          </p>
        </div>
        <div className="flex gap-5 mt-[60px] mb-10 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-8 py-[10px] h-12 rounded-[100px] flex items-center justify-center transition-all duration-500 ease-in-out
              font-inter text-sm leading-none font-semibold
              ${activeTab === tab.name ? 'bg-white text-black' : 'text-white bg-transparent'}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="p-[10px] bg-[#050505] rounded-[24px] border border-[rgba(255,255,255,0.05)] shadow-card-inset">
        {/* {activeTab === 'One phase' &&  */}
        <div className="p-6 rounded-[20px] border border-[rgba(255,255,255,0.10)] bg-card-gradient flex flex-col gap-5">
          <div className="grid grid-cols-4 gap-[10px] text-white text-center font-inter text-sm leading-none">
            <span className="rounded-[100px] p-[10px]">$5K</span>
            <span className="rounded-[100px] p-[10px]">$10K</span>
            <span className="rounded-[100px] p-[10px]">$15K</span>
            <span className="rounded-[100px] p-[10px] border border-[rgba(255,204,0,0.10)] bg-[rgba(255,204,0,0.10)] text-primary shadow-[0px_4px_10px_0px_rgba(0,0,0,0.00)_inset]">$25K</span>
          </div>
          <div className="grid grid-cols-4 gap-[10px] text-white text-center font-inter text-sm leading-none">
            <span className="rounded-[100px] p-[10px]">$5K</span>
            <span className="rounded-[100px] p-[10px]">$10K</span>
            <span className="rounded-[100px] p-[10px]">$15K</span>
            <span className="rounded-[100px] p-[10px] ">$25K</span>
          </div>
        </div>
        {/* } */}
        {/* {activeTab === 'Two Phase' && <p>This is the content for Two Phase.</p>}
        {activeTab === 'Three Phase' && <p>This is the content for Three Phase.</p>}
        {activeTab === 'Instant Funding' && <p>This is the content for Instant Funding.</p>} */}
        <div className="rounded-[24px] p-6 mt-[10px] flex flex-col gap-6 bg-goldYellow border border-[rgba(0,0,0,0.10)] font-inter">
          <div className="flex justify-between items-center">
            <span className="text-dark121 text-xl leading-none font-bold">Two Phase</span>
            <span className="px-5 py-[14px] text-dark121 font-bold text-xs leading-none rounded-[100px] bg-[rgba(16,16,16,0.10)]">Popular</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-dark121 text-[32px] leading-none font-semibold">$199 <span  className="text-sm font-normal leading-none opacity-80">one time fee</span></span>
            <span  className="text-sm font-normal leading-none text-darkBg">For $25k trading account</span>
          </div>
          <Link to="/" className="bg-darkBg rounded-[100px] text-white px-8 py-[10px] text-sm leading-none font-semibold h-12 flex items-center justify-center">Start trading now</Link>
          <div className="h-[1px] w-full bg-[rgba(0,0,0,0.10)]"></div>
          <span  className="text-sm font-normal text-dark121">Two-phase, two-step challenge to test your trading skill.</span>

        </div>
        <div className="flex gap-[10px] items-center justify-between mt-[20px] mb-[10px]">
        {Btmtabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-8 py-[10px] h-12 rounded-[100px] flex items-center justify-center transition-all duration-500 ease-in-out
              font-inter text-sm leading-none font-semibold text-center text-ivoryTint w-full border
              ${BtmactiveTab === tab.name ? 'bg-[rgba(255,255,255,0.10)] border-[rgba(255,255,255,0.10)]' : 'bg-transparent border-transparent'}`}
            onClick={() => setBtmActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
        </div>
        <div className="font-inter text-white font-semibold rounded-[20px] p-6 bg-plan-card border border-[rgba(255,255,255,0.10)] bg-[rgba(0,0,0,0.10)]">
          <div className="flex items-center justify-between py-5 border-b border-dashed border-[rgba(226,234,253,0.10)]">
            <div className="flex items-center gap-[10px]">
              <img src={Check} alt="check" className="w-6 h-6" />
              <span className="text-sm leading-none">Profit Target</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <span className="text-sm leading-none">$2,500</span>
              <span className="text-sm leading-none p-[10px] font-medium rounded-[100px] bg-[rgba(255,255,255,0.10)] border border-[rgba(255,255,255,0.10)]">10%</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-5 border-b border-dashed border-[rgba(226,234,253,0.10)]">
            <div className="flex items-center gap-[10px]">
              <img src={Check} alt="check" className="w-6 h-6" />
              <span className="text-sm leading-none">Profit Target</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <span className="text-sm leading-none">$2,500</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-5 border-b border-dashed border-[rgba(226,234,253,0.10)]">
            <div className="flex items-center gap-[10px]">
              <img src={Check} alt="check" className="w-6 h-6" />
              <span className="text-sm leading-none">Profit Target</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <span className="text-sm leading-none">$2,500</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-5 border-b border-dashed border-[rgba(226,234,253,0.10)]">
            <div className="flex items-center gap-[10px]">
              <img src={Check} alt="check" className="w-6 h-6" />
              <span className="text-sm leading-none">Profit Target</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <span className="text-sm leading-none">$2,500</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default PricingPlan;
