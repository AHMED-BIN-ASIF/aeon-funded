import React from 'react'
import Texture from "../assets/images/footer-texture.svg"
import FooterGradient from '../assets/images/footer-gradient.svg'
import Line from '../assets/images/line.svg'
import FooterBrand from '../assets/images/brand-footer.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer  className="relative py-32">
      <div className="container max-w-[982px] relative z-[5]">
        <div className="flex gap-8 items-center ">
          <img src={Line} alt="line" />
          <Link to="/">
          <img src={FooterBrand} alt="AEON" /></Link>
          <img src={Line} alt="line" className="rotate-180" />
        </div>
        <ul className="flex items-center mt-10 mb-8 gap-[10px]">
          <li>
            <Link to="/" className="text-ivoryTint opacity-80 p-[10px]">Home</Link>
          </li>
        </ul>
      </div>
      {/* footer bg */}
      <div className="absolute w-full h-full inset-0 z-10">
        <img src={Texture} alt="Texture" className="w-full h-full object-cover" />
      </div>
      <div className="absolute w-full h-full inset-0 z-0 ">
        <img src={FooterGradient} alt="FooterGradient" className="w-full h-full object-cover object-bottom" />
      </div>
    </footer>
  )
}

export default Footer