import React from 'react'
import CenterBanner from '../components/CenterBanner'
import Reviews from '../components/Reviews'
import Faqs from '../components/Faqs'
import JoinDiscord from '../components/JoinDiscord'
import Partner from '../components/Partner'

const Affiliate = () => {
  return (
    <main>
        <div className="px-6 max-md:px-4">
        <CenterBanner />
      </div>
      <div className="px-6 max-md:px-4">
      <Partner />
        <Reviews />
      </div>
      <Faqs />
      <JoinDiscord/>
    </main>
  )
}

export default Affiliate
