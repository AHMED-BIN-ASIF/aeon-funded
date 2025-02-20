import React from 'react'
// import Banner from '../components/Banner'
import Reviews from '../components/Reviews'
import Faqs from '../components/Faqs'
import JoinDiscord from '../components/JoinDiscord'
import WorkBanner from '../components/WorkBanner'
import MasterTrading from '../components/MasterTrading'
import TradeConfidence from '../components/TradeConfidence'
import OneStep from '../components/OneStep'
import Challenge from '../components/Challenge'

const HowitWorksPage = () => {
  return (
    <main>
      <div className="px-6 max-md:px-4">
        <WorkBanner />
      </div>
      <MasterTrading/>
      <Challenge/>
      <OneStep/>
      <div className="px-6 max-md:px-4">
      <TradeConfidence/>
        <Reviews />
      </div>
      <Faqs />
      <JoinDiscord/>
    </main>
  )
}

export default HowitWorksPage
