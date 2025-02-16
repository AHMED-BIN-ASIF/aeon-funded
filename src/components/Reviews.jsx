import React from "react";
import Texture from "../assets/images/texture.svg";
import Eyebrow from "../ui/Eyebrow";
import John from "../assets/images/review-img.jpeg";
import Star from "../assets/icons/star.svg";
import ReviewGradient from "../assets/images/review-gradient.svg";


const reviewCards = [
  {
    img: John,
    description: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
    name: "John Smith",
    designation: "CEO",
    company: "Innovate Solutions",
  },
  {
    img: John,
    description: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
    name: "John Smith",
    designation: "CEO",
    company: "Innovate Solutions",
  },
  {
    img: John,
    description: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
    name: "John Smith",
    designation: "CEO",
    company: "Innovate Solutions",
  },
  {
    img: John,
    description: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
    name: "John Smith",
    designation: "CEO",
    company: "Innovate Solutions",
  },
  {
    img: John,
    description: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
    name: "John Smith",
    designation: "CEO",
    company: "Innovate Solutions",
  },
  {
    img: John,
    description: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
    name: "John Smith",
    designation: "CEO",
    company: "Innovate Solutions",
  },
];
const Reviews = () => {
  return (
    <section
      className="relative py-[120px]  rounded-[40px_40px_0_0] overflow-hidden"
      // style={{
      //   background:
      //     "radial-gradient(165.19% 140% at 50% 10%, rgba(0, 0, 0, 0.00) 37.41%, #FC0 69.27%, #FFF 100%)",
      // }}
    >
      <div className="container max-w-[1240px] relative z-[3]">
            <div className="text-center flex flex-col justify-center items-center">
            <Eyebrow text="Reviews" />
            <h2 className="text-white text-[50px] leading-tight font-semibold tracking-[-0.5px]">
            Our Happy Customers
            </h2>
            <p className="text-sm leading-[1.71] text-ivoryTint max-w-[350px]  mx-auto mt-[10px]">
            Get paid quickly and securely with a smooth and reliable payout process.
            </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-[60px]">
            {reviewCards.map((card, index) => (
            <div
              key={index}
              className="bg-black p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset"
            >
              <div
                className="relative p-8 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-5 justify-between items-start bg-review-card">
                <div>
                  <div className="rounded-full w-[50px] h-[50px] overflow-hidden shadow-[2px_4px_24px_0px_rgba(255,204,0,0.30)]">
                    <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex gap-[6px] mt-[22px] mb-5">
                    <img src={Star} alt="star" className="w-5 h-5" />
                    <img src={Star} alt="star" className="w-5 h-5" />
                    <img src={Star} alt="star" className="w-5 h-5" />
                    <img src={Star} alt="star" className="w-5 h-5" />
                    <img src={Star} alt="star" className="w-5 h-5" />
                  </div>
                  <p className="text-ivoryTint text-sm leading-loose font-inter">
                    "{card.description}"
                  </p>
                  <div className="pt-5 mt-5 border-t border-solid border-[rgba(255,255,255,0.10)]">
                    <div className="flex gap-2 text-white text-base font-inter font-semibold"><span>{card.name}</span> • <span className="font-medium">{card.designation}</span></div>
                  </div>
                  <span className="text-ivoryTint font-inter text-base leading-relaxed">{card.company}</span>
                </div>
                {/* card-lines */}
                <div className="absolute top-[-1px] right-0 left-0 w-[70%] h-[1px] mx-auto bg-card-line"></div>
                <div className="absolute bottom-[-1px] left-0 right-0 w-[70%] h-[1px] mx-auto bg-card-line"></div>
              </div>
            </div>
          ))}
            </div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img src={Texture} alt="texture" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img src={ReviewGradient} alt="ReviewGradient" className="" />
      </div>
    </section>
  );
};

export default Reviews;
