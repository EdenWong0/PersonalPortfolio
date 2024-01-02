import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaReact, FaAngular, FaCss3, FaHtml5   } from "react-icons/fa";
import { SiTailwindcss, SiJavascript  } from "react-icons/si";
import { BsFillPersonVcardFill } from "react-icons/bs";
import Resume from '../../assist/myresume.pdf'

const LeftBanner = () => {

  const handleDownloadResume = () => {
    const resumeUrl = '../../assist/myresume.pdf';
    // Trigger download using JavaScript
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = {Resume};
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [text] = useTypewriter({
      words: ["Front End Developer.", "Web Designer."],
      Loop: true,
      typeSpeed: 50,
      deleteSpeed: 10,
      delaySpeed: 2000,
  });

  return (
    <section id="home" className="w-full py-20 h-[800px] flex border-b-[1px] border-b-black font-titleFont">
        <div className="w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className="text-lg font-normal uppercase">Welcome to my little world!</h4>
                <h1 className="text-5xl font-bold text-white">Hi there👋🏻, I'm <span className="text-designColor capitalizes">Eden Wong</span></h1>
                <h2 className="text-4xl font-bold text-white">a <span>{text}</span>
                <Cursor
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor="#7FFFD4"
                />
                </h2>
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaFacebookF />
                </span>
                <span className="bannerIcon">
                  <FaInstagram />
                </span>
                <span className="bannerIcon">
                  <FaLinkedinIn />
                </span>
                <span className="bannerIcon">
                  <FaGithub />
                </span>
                </div>
                <div className="resumeButton">
                  <BsFillPersonVcardFill/>
                  <button onClick={handleDownloadResume}>My Resume</button>
                </div>
              </div>
              <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Best skill on 
                </h2>
                <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaCss3 />
                </span>
                <span className="bannerIcon">
                  <SiJavascript />
                </span>
                <span className="bannerIcon">
                  <SiTailwindcss />
                </span>
                <span className="bannerIcon">
                  <FaReact />
                </span>
                <span className="bannerIcon">
                  <FaAngular />
                </span>
                </div>
              </div>
            </div>
        </div>

        <div></div>
    </section>
  )
}

export default LeftBanner