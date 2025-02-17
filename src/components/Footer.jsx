import React from 'react';
import Texture from "../assets/images/footer-texture.svg";
import FooterGradient from '../assets/images/footer-gradient.svg';
import Line from '../assets/images/line.svg';
import FooterBrand from '../assets/images/brand-footer.svg';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaTelegramPlane,    } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';


const socialLinks = [
  { icon: <FaInstagram />, link: 'https://instagram.com' },
  { icon: <FaFacebookF />, link: 'https://facebook.com' },
  { icon: <FaYoutube />, link: 'https://youtube.com' },
  { icon: <FaTelegramPlane />, link: 'https://telegram.org' },
  { icon: <BsTwitterX   />, link: 'https://twitter.com' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Challenges', path: '/challenges' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Affiliate Program', path: '/affiliate-program' },
  { name: 'FAQ', path: '/faq' },
];

const Footer = () => {
  return (
    <footer className="relative py-[60px]">
      <div className="container max-w-[982px] relative z-[5]">
        <div className="flex gap-8 items-center">
          <img src={Line} alt="line" />
          <Link to="/">
            <img src={FooterBrand} alt="AEON" />
          </Link>
          <img src={Line} alt="line" className="rotate-180" />
        </div>

        <ul className="flex items-center mt-10 mb-8 gap-[10px] justify-center">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <Link to={nav.path} className="text-ivoryTint font-inter opacity-80 p-[10px]">{nav.name}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-4 justify-center mb-7">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <Link
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[rgba(255,204,0,0.04)] shadow-icon-border text-primary text-2xl"
              >
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>

        <span className='text-ivoryTint text-base font-inter text-center block opacity-80'>© 2025 AeonFunded. All rights reserved.</span>
      </div>

      {/* footer bg */}
      <div className="absolute w-full h-full inset-0 z-[1]">
        <img src={Texture} alt="Texture" className="w-full h-full object-cover" />
      </div>
      <div className="absolute w-full h-full inset-0 z-0">
        <img src={FooterGradient} alt="FooterGradient" className="w-full h-full object-cover object-bottom" />
      </div>
    </footer>
  );
};

export default Footer;
