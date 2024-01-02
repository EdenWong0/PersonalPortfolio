import React from 'react';
import { FaGithub,  } from 'react-icons/fa';
import { TbHandClick } from "react-icons/tb";

const ProjectCard = ({ title, des, src }) => {
  return (
    <div className='w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#404040] group hover:bg-gradient-to-b hover:from-[#12303b] hover:to-[#0c2027] transition-colors duration-1000'>
        <div className='w-full h-[80%] overflow-hidden rounded-lg'>
            <img className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"src={src} alt="src"/>
        </div>
        <div className='w-full mt-5'>
        <div>
            <h3>{title}</h3>
            <div>
                <span className="text-lg w-10 h-10 rounded-full bg-bodyColor inline-flex justify-center items-center hover:text-designColor duration-cursor point">
                    <FaGithub/>
                </span>
                <span className="text-lg w-10 h-10 rounded-full bg-bodyColor inline-flex justify-center items-center hover:text-designColor duration-cursor point">
                    <TbHandClick/>
                </span>
            </div>
        </div>
        <div>
            
        </div>
        </div>
    </div>
  )
}

export default ProjectCard