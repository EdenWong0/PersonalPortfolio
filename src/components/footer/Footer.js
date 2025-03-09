import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="w-full py-5 gap-6 flex items-center justify-center text-lg">
        © {new Date().getFullYear()} Copyright Eden Wong
      </div>
      <div className="w-full py-5 flex items-center justify-center">
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/pakhin.wong.9/"
            target="_blank"
            rel="noopener noreferrer"
            className="footerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/edenwph/"
            target="_blank"
            rel="noopener noreferrer"
            className="footerIcon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/eden-wong-12a90724b/"
            target="_blank"
            rel="noopener noreferrer"
            className="footerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/EdenWong0"
            target="_blank"
            rel="noopener noreferrer"
            className="footerIcon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
