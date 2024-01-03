import React from 'react';
import { FaGithub,  } from 'react-icons/fa';
import { TbHandClick } from "react-icons/tb";

const ProjectCard = ({ title, des, src, tech, githubLink, webLink }) => {
  return (
    <div className='w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#404040] group hover:bg-gradient-to-b hover:from-[#12303b] hover:to-[#0c2027] transition-colors duration-1000'>
        <div className='w-full h-[80%] overflow-hidden rounded-lg'>
            <img className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"src={src} alt="src"/>
        </div>
        <div className='w-full mt-5 flex flex-col gap-5'>
            <div>
                <div className="flex items-center justify-between">
                    <h3 className="text-base uppercase">{title}</h3>
                    <div className="flex gap-1">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-lg w-10 h-10 rounded-full bg-bodyColor inline-flex justify-center items-center hover:text-designColor duration-cursor point">
                            <FaGithub />
                        </a>
                        <a href={webLink} target="_blank" rel="noopener noreferrer" className="text-lg w-10 h-10 rounded-full bg-bodyColor inline-flex justify-center items-center hover:text-designColor duration-cursor point">
                            <TbHandClick />
                        </a>
                    </div>
                </div>
                <p className="text-sm tracking-wide mt-3 hover:text-white duration-300">
                    {tech}
                </p>
                <p className="text-sm tracking-wide mt-3 hover:text-white duration-300">
                    {des}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard