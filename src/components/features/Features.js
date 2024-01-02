import React from 'react';
import TItle from '../layouts/TItle';
import Card from './Card';
import { MdDeveloperMode, MdDesignServices  } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-gray-600">
      <div className='flex justify-center items-center'><TItle des="What I Do?"/></div>
      <div className='grid grid-cols-3 gap-20'>
        <Card
          title="Front End Development"
          des="Building user interfaces and interactions using HTML, CSS, and JavaScript."
          icon={<MdDeveloperMode/>}
        />
        <Card 
          title="Web Design"
          des="Creating dynamic and interactive websites with a focus on performance and functionality."
          icon={<SiAntdesign/>}
        />
        <Card 
          title="UI/UX Design"
          des="Designing visually appealing and user-friendly interfaces to enhance user experience."
          icon={<MdDesignServices/>}
        />
      </div>
    </section>
  )
}

export default Features