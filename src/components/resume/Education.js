import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} className="w-full flex gap-20">
            <div>
                <div className='py-12 font-titleFont'>
                    <h4 className="text-4xl font-bold">Education</h4>
                </div>
                <div className="mt-14 w-full h-[600px] border-l-[6px] border-l-white border-opacity-20 flex flex-col gap-10">
                    <ResumeCard 
                        title="Diploma in Software Engineering Technician"
                        subTitle="Centennial College (Sep 2022 - Dec 2023)"
                        gpaOrlocation="4.05/4.5"          
                    />
                    <ResumeCard 
                        title="BSc in Hospitality Administration/Management"
                        subTitle="University of Sunderland (Sep 2012 - Jul 2015)"
                        gpaOrlocation="3.23/4.5"          
                    />
                </div>
            </div>
            <div>
            <div className='py-12 font-titleFont'>
                    <h4 className="text-4xl font-bold">Experience</h4>
                </div>
                <div className="mt-14 w-full h-[600px] border-l-[6px] border-l-white border-opacity-20 flex flex-col gap-10">
                    <ResumeCard 
                        title="Guest Service Representative"
                        subTitle="The SoHo Hotel and Residences (Oct 2022 - Present)"
                        gpaOrlocation="Canada"          
                    />
                    <ResumeCard 
                        title="Front Desk Supervisor"
                        subTitle="WM Hotel (Dec 2020 - Dec 2021)"
                        gpaOrlocation="Hong Kong"          
                    />
                    <ResumeCard 
                        title="Junior Front End Developer"
                        subTitle="ThinkCol (Nov 2019 - Oct 2020)"
                        gpaOrlocation="Hong Kong"          
                    />
                </div>
            </div>
        </motion.div>
  )
}

export default Education