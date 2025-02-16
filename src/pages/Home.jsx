import React from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import Success from "../components/Success";
import HowitWorks from "../components/HowitWorks";
import PricingPlan from "../components/PricingPlan";
import Secure from "../components/Secure";
import Benifits from "../components/Benifits";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <main>
      <div className="px-6">
        <Banner />
      </div>
      <AboutSection />
      <Success />
      <HowitWorks />
      <PricingPlan />
      <Secure />
      <Benifits />
      <div className="px-6">
        <Reviews />
      </div>
    </main>
  );
};

export default Home;
