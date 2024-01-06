import React from "react";
import Navbar from "./components/navbar/Navbar"
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar /> 
      <div className="max-w-screen-xl mx-auto"> 
        <Banner />
        <Resume />
        <Features />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
