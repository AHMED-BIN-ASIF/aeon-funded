import React from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import Success from "../components/Success";
import HowitWorks from "../components/HowitWorks";
import PricingPlan from "../components/PricingPlan";
import Secure from "../components/Secure";
import Benifits from "../components/Benifits";
import Reviews from "../components/Reviews";
import JoinDiscord from "../components/JoinDiscord";
import Faqs from "../components/Faqs";

const Home = ({mode}) => {
  return (
    <main>
      <div className="px-6 max-md:px-4">
        <Banner mode={mode} />
      </div>
      <AboutSection mode={mode} />
      <Success />
      <HowitWorks />
      <PricingPlan />
      <Secure />
      <Benifits />
      <div className="px-6 max-md:px-4">
        <Reviews />
      </div>
      <Faqs />
      <JoinDiscord/>
    </main>
  );
};

export default Home;
