import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiAdobephotoshop,
} from "react-icons/si";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { TbSql } from "react-icons/tb";
import Resume from "../../assist/myresume.pdf";

const LeftBanner = () => {
  const openResume = () => {
    window.open(Resume, "_blank");
  };

  const [text] = useTypewriter({
    words: ["Front End Developer.", "Web Designer."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });
  /*w-full py-40 h-[800px] flex font-titleFont*/
  return (
    <div className="w-full">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 ">
          <h1 className="xs:text-center xl:text-left text-4xl font-bold text-white">
            Hi there, I'm{" "}
            <span className="text-designColor capitalizes">Eden Wong</span>
          </h1>
          <h2 className="xs:text-center xl:text-left text-3xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ffffff"
            />
          </h2>
          <p>
            <div className="resumeButton">
              <BsFillPersonVcardFill />
              <button onClick={openResume}>My Resume</button>
            </div>
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-10 lgl:gap-0 justify-between">
          <div>
            <h2 className="text-base font-bold uppercase font-titleFont mb-8 text-center">
              Find me in
            </h2>
            <div className="xs:flex justify-center mb-8 mdl:flex gap-3">
              <a
                href="https://www.facebook.com/pakhin.wong.9/"
                target="_blank"
                rel="noopener noreferrer"
                className="bannerIcon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/edenwph/"
                target="_blank"
                rel="noopener noreferrer"
                className="bannerIcon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/eden-wong-12a90724b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bannerIcon"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/EdenWong0"
                target="_blank"
                rel="noopener noreferrer"
                className="bannerIcon"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-base font-bold uppercase font-titleFont mb-8 text-center">
              Best skill on
            </h2>
            <div className="xs:flex justify-center xs:ml-0 mdl:flex gap-3 mdl:ml-12">
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiNextdotjs />
              </span>
              <span className="bannerIcon">
                <SiJavascript />
              </span>
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
              <span className="bannerIcon">
                <TbSql />
              </span>
              <span className="bannerIcon">
                <SiAdobephotoshop />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default LeftBanner;
