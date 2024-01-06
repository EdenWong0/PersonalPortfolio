import React, { useState } from 'react'
import {logo} from "../../assist/index";
import {Link} from "react-scroll"
import { navBarLinksData } from "./../../constants/index";
import { FaBars } from 'react-icons/fa';
import { IoMdCloseCircle } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)


  return (
    <div className='nav__menu w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
        <div className="left-0"><img src={logo} alt="logo"/></div>
        <div>
            <ul className='hidden mdl:inline-flex items-center gap-0 lg:gap-10'>
                {navBarLinksData.map(({_id, title, link}) => (
                    <li className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
                    key={_id}
                    >
                        <Link
                            activeClass='active'
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
            <span onClick={() => setShowMenu(!showMenu)}className="text-4xl mdl:hidden bg-bodyColor w-10 h-10 inline-flex items-center justify-center text-designColor cursor-pointer">
                <FaBars/>
            </span>
            {
                showMenu && (
                    <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-bodyColor p-4 scrollbar-hide">
                        <div className="flex flex-col py-2 gap-10">
                            <div>
                                <div className="w-32"><img src={logo} alt="logo"/></div>
                                <p className="text-base text-lightText tracking-wide">
                                    A passionate and results-driven FrontEnd developer dedicated to crafting exceptional, high-quality websites. I bring a distinctive mix of creativity and technical know-how to every project I take on.
                                </p>
                            </div> 
                            <ul className="flex flex-col gap-4 ">
                                {
                                    navBarLinksData.map((item) => (
                                        <li className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300">
                                            <Link
                                                activeClass='active'
                                                to={item.link}
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
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
                        
                        <span onClick={() => setShowMenu(false)} className="absolute top-4 right-4 text-designColor hover:text-designColor duration-300 text-4xl cursor-pointer">
                            <IoMdCloseCircle />
                        </span>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Navbar