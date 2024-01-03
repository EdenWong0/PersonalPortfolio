import React from 'react';
import { motion } from 'framer-motion';
import AwardCard from './AwardCard';
import { AwardOne } from '../../assist/index'

const Awards = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}}>
      <div className='grid grid-cols-3 gap-14'>
            <AwardCard 
                title="Winner"
                des="WIMTACH / Scarborough Food Network Hackathon"
                secDes="Issued by WIMTACH (Centennial College)/ Scarborough Food Network on Nov 2023"
                src={AwardOne}
            />
      </div>
    </motion.div>
  )
}

export default Awards