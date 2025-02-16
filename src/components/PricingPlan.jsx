import React from "react";
import Eyebrow from "../ui/Eyebrow";

const PricingPlan = () => {
  return (
    <section
      className="py-[120px] bg-cover bg-no-repeat bg-center"
      style={{
        background: `radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
        linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%),  
        0px -173.5px / 100% 145.749% no-repeat`
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="text-center flex items-center flex-col">
          <Eyebrow text="Planning" />
          <h2 className="text-white text-[50px] leading-relaxed font-semibold tracking-[-0.5px]">
            Pricing Plan
          </h2>
          <p className="text-sm leading-[1.71] text-ivoryTint max-w-[644px] mx-auto mt-[10px]">
          We appreciate that every trader and trading style is different. With that in mind we offer the opportunity to customize your trading accounts at the checkout.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
