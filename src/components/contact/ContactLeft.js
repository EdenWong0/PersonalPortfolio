import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { meTwo } from '../../assist/index';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#595959] to-[#404040] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
        <img className="w-full h-45 object-cover rounded-lg"
            src={meTwo}
            alt="edenImage"
        />

        <div className="flex flex-col gap-4">
            <h3 className="text-3xl fontbold text-lightText">Eden Wong</h3>
            <p className="tex-lg font-normal text-lightText">Front-end Developer</p>
            <p className="text-base text-lightText tracking-wide">
                A passionate and results-driven Front-end developer dedicated to crafting exceptional, high-quality websites. I bring a distinctive mix of creativity and technical know-how to every project I take on
            </p>
            <p className="text-base text-white flex items-center gap-2">
                <FaPhoneAlt />
                Phone: <span className="text-lightText">+1(437)981-9858</span>
            </p>
            <p className="text-base text-white flex items-center gap-2">
                <MdEmail />
                Email: <span className="text-lightText"><a href="mailto:edenwong.work@gmail.com">edenwong.work@gmail.com</a></span>
            </p>
            <p className="text-base text-white flex items-center gap-2">
                <FaLocationDot />
                <span className="text-lightText">Toronto, Ontario, Canada</span>
            </p>
        </div>
        <div>
            <div>
                <div className="flex gap-3">
                <a href="https://www.facebook.com/pakhin.wong.9/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/edenwph/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/eden-wong-12a90724b/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/EdenWong0" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                    <FaGithub />
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactLeft