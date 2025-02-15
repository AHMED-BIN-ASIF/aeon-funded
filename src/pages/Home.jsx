import React from 'react'
import Banner from '../components/Banner'
import AboutSection from '../components/AboutSection'
import Success from '../components/Success'

const Home = () => {
  return (
    <main>
      <div className="px-6">
        <Banner/>
      </div>
        <AboutSection/>
        <Success/>
    </main>
  )
}

export default Home