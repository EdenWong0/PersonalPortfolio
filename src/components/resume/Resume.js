import React, { useState } from 'react';
import TItle from '../layouts/TItle';
import Education from './Education';
import { Skills } from './Skills';
import Awards from './Awards';


const Resume = () => {

    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [awardData, setAwardData] = useState(false);


  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-gray-600">
        <div className='flex justify-center items-center'>
            <TItle 
            des='My Resume'
            />
        </div>
        <div>
            <ul className="w-full grid grid-cols-3">
                <li onClick={()=>setEducationData(true) & setSkillData(false) & setAwardData(false)} className={`${educationData ? "border-designColor rounded-lg":"border-transparent" } resumeLi `}>Education & Experiences</li>
                <li onClick={()=>setEducationData(false) & setSkillData(true) & setAwardData(false)} className={`${skillData ? "border-designColor rounded-lg":"border-transparent" } resumeLi `}>Skills</li>
                <li onClick={()=>setEducationData(false) & setSkillData(false) & setAwardData(true)} className={`${awardData ? "border-designColor rounded-lg":"border-transparent" } resumeLi `}>Awards</li>
            </ul>
        </div>
        { educationData && <Education/> } 
        { skillData && <Skills/> }
        { awardData && <Awards/> }
        {/*
        <Education />
        <Skills />
        <Awards />
        */}
    </section>
  )
}

export default Resume