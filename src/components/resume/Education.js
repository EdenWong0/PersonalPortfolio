import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="xs:block mdl:flex w-full gap-20 lgl:flex-row lgl:gap-10"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h4 className="text:3xl md:text-4xl font-bold">Education</h4>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-white border-opacity-20 flex flex-col gap-10">
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
        <div className="py-6 lgl:py-12 font-titleFont">
          <h4 className="text-4xl font-bold">Experience</h4>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-white border-opacity-20 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Developer"
            subTitle="E-dimensionz (April 2024 - Present)"
            gpaOrlocation="Canada"
          />
          <ResumeCard
            title="Freelance Front End Developer"
            subTitle="Self Employed (May 2023 - April 2024)"
            gpaOrlocation="Canada"
          />
          {/*
                    <ResumeCard 
                        title="Junior Front End Developer"
                        subTitle="ThinkCol (Nov 2019 - Oct 2020)"
                        gpaOrlocation="Hong Kong"          
                    />
                    */}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
