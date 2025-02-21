import React from 'react'
import Button from '../ui/Button'
import Eyebrow from '../ui/Eyebrow'
import PartnerBg from '../assets/images/partner-bg.webp'
import goldenCube from '../assets/images/golden-cube.webp'

const Partner = () => {
  return (
    <section className='py-[120px] mb-10 relative rounded-[40px] overflow-hidden max-xl:py-20 max-lg:py-16 max-md:py-10'>
      <div className="container max-w-[1192px]">
        <div className="grid lg:grid-cols-2 items-center gap-40 max-xl:gap-20 maxlg:gap-16 max-md:gap-6 relative z-[3]">
        <div className="">
            <Eyebrow text="Partner us" />
            <h2 className="text-white text-[50px] leading-tight font-semibold tracking-[-0.5px]
            max-lg:text-4xl">
              Be a Partner
            </h2>
            <p className="text-sm leading-[1.71] text-ivoryTint  mx-auto mt-[10px] max-w-[590px]">
            Develop your trading skills, maximize your returns, and become a top-performing asset. Trade with our capital and keep up to 90% of your profits.
            </p>
            <div className="flex mt-8">
              <Button to="/" text="Be a Partner now" />
            </div>
          </div>
          <div>
            <img src={goldenCube} alt="golden-cube" className='w-full max-w-[433px] max-md:mx-auto' />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full z-0">
        <img src={PartnerBg} alt="partner-bg" className='w-full h-full object-cover' />
      </div>
    </section>
  )
}

export default Partner
