import React from 'react'
import TItle from '../layouts/TItle'
import ProjectCard from './ProjectCard'
import { projectOne, 
    projectTwo,
    projectThree,
    projectFour,
    projectFive,
    projectSix,
    } from '../../assist/index'

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
                des="Crafted React.js, Next.js, and Tailwind CSS, assisting the teacher in enhancing their network."
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
                webLink="https://react-hkca-homes.vercel.app/"
            />
            <ProjectCard 
                title="Spider Web App"
                des="Engaged in a collaborative project with five team members at Centennial College, where we leveraged Angular.js, TypeScript, and Node.js to develop a foundational platform for our client."
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
                webLink="https://weather-app-sigma-sooty-45.vercel.app/"
            />
            <ProjectCard 
                title="SFN Online Service / Workbench"
                des="Achieved a winning portfolio through collaboration with five team members, enhancing efficiency, and elevating both user and operator experiences."
                src={projectFive}
                tech="MERN Stack"
                webLink="https://sfn-community.onrender.com/"
            />
            <ProjectCard 
                title="TheNorthCarHub"
                des="A dynamic web application built with React.js and Next.js, featuring a modern user interface and powered by TailwindCSS for styling. Explore a seamless browsing experience for car enthusiasts."
                src={projectSix}
                tech="React.js | Next.js | TailwindCSS"
                githubLink="https://github.com/EdenWong0/next-carrental"
                webLink="https://thenorthcarhub.vercel.app/"                     
            />
        </div>
    </section>
  )
}

export default Projects