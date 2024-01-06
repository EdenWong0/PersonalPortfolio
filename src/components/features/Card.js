import React from 'react';
import { FaHeart } from "react-icons/fa";



const Card = ({title, des, icon}) => {
  return (
    <div className='w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#404040] group hover:bg-gradient-to-b hover:from-[#12303b] hover:to-[#0c2027] transition-colors duration-300 group'>
        <div className='h-72 overflow-y-hidden'>
            <div className='flex h-full flex-col gap-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-500'>
                <div>
                    <span className='text-4xl text-designColor'>{icon}</span>
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-xl md:text-2xl font-titleFont font-bold text-white'>{title}</h2>
                    <p className='base'>{des}</p>
                    <span className='text-2xl'>
                        <FaHeart />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card