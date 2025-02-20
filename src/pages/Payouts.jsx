import React from 'react'
import Partner from '../components/Partner'
import Reviews from '../components/Reviews'
import Faqs from '../components/Faqs'
import JoinDiscord from '../components/JoinDiscord'
import PayoutBanner from '../components/PayoutBanner'
import Statistics from '../components/Statistics'

const Payouts = () => {
  return (
    <main>
        <div className="px-6 max-md:px-4">
        <PayoutBanner />
      </div>
      <Statistics/>
      <div className="px-6 max-md:px-4">
      <Partner />
        <Reviews />
      </div>
      <Faqs />
      <JoinDiscord/>
    </main>
  )
}

export default Payouts
