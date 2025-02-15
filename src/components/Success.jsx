import React from 'react'
import Eyebrow from '../ui/Eyebrow'
import AboutBg from "../assets/images/about-bg.webp";
import Payout from "../assets/images/payout-chart.svg";


const Success = () => {
  return (
    <section className="py-[120px]"
    style={{
        background: `radial-gradient(150.94% 139.8% at 60.26% 151.92%, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${AboutBg})  0px -49.5px / 100% 110.092% no-repeat`
    }}>
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
        <div className="grid grid-cols-2 gap-6">
        <div
              className="bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset"
            >
              <div
                className="relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-5 justify-between items-start bg-card-gradient">
                <div>
                  
                  <h4 className="text-white text-xl leading-tight font-semibold font-inter mt-4 mb-[10px]">
                  $1,240,000+
                  </h4>
                  <p className="text-ivoryTint text-sm leading-[1.7] font-inter">
                  The total amount of money paid out to traders over time, showcasing overall earnings.
                  </p>
                </div>
                <img src={Payout} alt="Payout" className="w-full h-full max-h-[209px]" />
                {/* card-lines */}
                <div className="absolute top-[-1px] right-0 left-0 w-[85%] h-[1px] bg-card-line"></div>
                <div className="absolute bottom-[-1px] left-0 right-0 w-[85%] h-[1px] bg-card-line"></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Success
