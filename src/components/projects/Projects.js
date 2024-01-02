import React from 'react'
import TItle from '../layouts/TItle'
import ProjectCard from './ProjectCard'
import { projectOne, 
    projectTwo,
    projectThree,
    projectFour,
    projectFive } from '../../assist/index'

const Projects = () => {
  return (
    <section>
        <div className='flex justify-center items-center'>
            <TItle 
            des='My Projects'
            />
        </div>
        <div className='grid grid-cols-3 gap-14'>
            <ProjectCard 
                title="Callie Wong Music Academy"
                des="Crafted React and Tailwind, boosting the teacher network reach by 40%."
                src={projectOne}
            />
            <ProjectCard 
                title="HKCAHomes"
                des="Associated with Centennial College, HKCAHomes offering a user-friendly platform that combines cutting-edge technology with an intuitive design to help you find your dream home effortlessly."
                src={projectTwo}
            />
            <ProjectCard 
                title="Spider Web App"
                des="Associated with Centennial College, Using Angular.js, TypeScript, Node. js-based to create a basic platform for the user."
                src={projectThree}
            />
            <ProjectCard 
                title="Weather Appliaction"
                des="Using xxxxxxxxxxxxxxxxxxxxxx"
                src={projectFour}
            />
            <ProjectCard 
                title="SFN Online Service / Workbench"
                des="Streamlines efficiency by over 50%, improving user and operator experiences."
                src={projectFive}
            />
            <ProjectCard 
                title="Callie Wong Music Academy"
                des="Crafted React and Tailwind, boosting the teacher network reach by 40%."
                src={projectOne}
            />
        </div>
    </section>
  )
}

export default Projects