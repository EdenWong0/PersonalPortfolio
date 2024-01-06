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
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-gray-600">
        <div className='flex justify-center items-center'>
            <TItle 
            des='My Projects'
            />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14'>
            <ProjectCard 
                title="Callie Wong Music Studio"
                des="Crafted React and Tailwind, boosting the teacher network."
                tech="React.js | Next.js | TailwindCSS | Shadcn UI"
                src={projectOne}
                githubLink="https://github.com/EdenWong0/React-Ms-Callie-Academy"
            />
            <ProjectCard 
                title="HKCAHomes"
                des="Associated with Centennial College, HKCAHomes offers a user-friendly platform that combines cutting-edge technology with an intuitive design to help you find your dream home effortlessly."
                tech="React.js | TailwindCSS"
                src={projectTwo}
                githubLink="https://github.com/EdenWong0/React-HKCAHomes"
            />
            <ProjectCard 
                title="Spider Web App"
                des="Associated with Centennial College, Using Angular.js, TypeScript, Node. js-based to create a basic platform for client."
                tech="Angular | TypeScript"
                src={projectThree}
                webLink="https://spiderwebdev.netlify.app/"
            />
            <ProjectCard 
                title="Weather Application"
                des="Retrieving information from OpenWeather APIs, including the ability to search for weather conditions in various cities."
                tech="React.js | TailwindCSS | OpenWeatherMap API"
                src={projectFour}
                githubLink="https://github.com/EdenWong0/WeatherApp"
            />
            <ProjectCard 
                title="SFN Online Service / Workbench"
                des="Enhances efficiency as well as elevating both user and operator experiences."
                src={projectFive}
                tech="MERN Stack"
                webLink="https://sfn-community.onrender.com/"
            />
            {/* will update shortly
            <ProjectCard 
                title="Car Rental Web Application"
                des="Crafted React, Next JS 14, TypeScript, Tailwind CSS."
                src={projectOne}
                tech="React.js | Next.js | TailwindCSS | TypeScript"
            />
            */}
        </div>
    </section>
  )
}

export default Projects