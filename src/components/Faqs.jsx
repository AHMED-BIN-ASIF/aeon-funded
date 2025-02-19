import React, { useState } from "react";
import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";

const faqsData = [
  {
    question: "What do I need to get started?",
    answer:
      "To get started, you'll need to create an account and choose a plan that suits your needs. Our team is here to help if you have any questions!",
  },
  {
    question: "What kind of customization is available?",
    answer:
      "You can customize the design, layout, and content to match your brand. We offer both basic and advanced customization options.",
  },
  {
    question: "How easy is it to edit for beginners?",
    answer:
      "Our platform is designed with beginners in mind, offering an intuitive drag-and-drop editor and plenty of guides.",
  },
  {
    question: "Let me know more about moneyback guarantee?",
    answer:
      "We offer a 30-day money-back guarantee, no questions asked. If you're not satisfied, we’ll make it right!",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="py-[120px] max-xl:py-20"
      style={{
        background: `radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
        linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%),  
        0px -173.5px / 100% 145.749% no-repeat`,
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="grid grid-cols-[.65fr_1fr] gap-5 items-center
        max-lg:grid-cols-1">
          <div className="max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
            <Eyebrow text="FAQ" />
            <h2 className="text-white text-[50px] leading-tight font-semibold tracking-[-0.5px] 
            max-lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-sm leading-[1.71] text-ivoryTint max-w-[344px] mt-[10px]">
              Have questions? Our FAQ section has you covered with
              quick answers to the most common inquiries.
            </p>
          </div>
          <div className="bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] flex flex-col gap-[10px]">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className="rounded-[20px] p-8 border border-solid border-[rgba(255,255,255,0.20)] flex flex-col justify-between items-start
                max-lg:p-5"
                style={{
                  background: "linear-gradient(180deg, rgba(255, 204, 0, 0.00) 0%, rgba(255, 204, 0, 0.04) 100%), rgba(0, 0, 0, 0.20)"
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-white text-left font-inter text-lg leading-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-[24px] leading-[0.9] font-light">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="text-sm font-inter text-ivoryTint pt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
