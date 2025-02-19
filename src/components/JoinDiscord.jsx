import React from 'react'
import Skill from '../assets/icons/wave.svg'
import JoinBg from '../assets/images/join-bg.svg'
import Button from '../ui/Button'
import Eyebrow from '../ui/Eyebrow'

const JoinDiscord = () => {
  return (
    <section className="py-[120px] max-xl:py-20">
      <div className="container max-w-[1004px]">
        <div className="relative min-h-[768px] flex items-center justify-center
        max-lg:min-h-[500px] max-md:min-h-[300px]">
            <div className="text-center flex items-center flex-col relative z-[4]">
                <img src={Skill} alt="skill" className="bg-primary p-[2px] rounded-[6px] w-8 h-8 mb-4" />
                <Eyebrow text="Discord" />
                <h2 className="text-white text-[50px] leading-none font-semibold tracking-[-0.5px]
                max-lg:text-4xl">
                Make Waves In Trading
                </h2>
                <p className="text-sm leading-[1.71] text-ivoryTint max-w-[644px] mx-auto mt-[10px] mb-[32px] max-lg:mb-6">
                Your journey starts here with growth and success.
                </p>
                <Button text="Join our Discord Community"/>
            </div>

            {/* bg radial  */}
            {/* firstCircle   */}
            <div className="absolute top-0 left-0 rounded-full h-[708px] w-[70%] max-w-[708px] opacity-20 bg-[#0D0A17] 
            shadow-[0px_-106px_84px_0px_#FC0_inset,0px_-36px_44px_0px_#FC0_inset]
            max-lg:h-[450px] max-md:h-[300px] max-lg:w-[90%] max-md:hidden" ></div>
            <div className="absolute z-[3] top-[100px] left-0 right-0 mx-auto rounded-full h-[666px] w-[70%] max-w-[666px] opacity-100 bg-black 
            shadow-[0px_-106px_84px_0px_rgba(255,204,0,0.40)_inset,_0px_-36px_44px_0px_#FC0_inset,_0px_-36px_30px_0px_#C65200_inset]
            max-lg:h-[500px] max-lg:top-10 max-md:hidden max-md:h-[250px] max-lg:w-[70%]" ></div>
            {/* firstCircle   */}
            <div className="absolute top-0 right-0 rounded-full h-[708px] w-[70%] max-w-[708px] opacity-20 bg-[#0D0A17] 
            shadow-[0px_-106px_84px_0px_#FC0_inset,0px_-36px_44px_0px_#FC0_inset]
            max-lg:h-[450px] max-md:h-[300px] max-lg:w-[90%] max-md:hidden" ></div>
            <div className="absolute inset-0 z-0">
              <img src={JoinBg} alt="join bg" className="w-full" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default JoinDiscord
