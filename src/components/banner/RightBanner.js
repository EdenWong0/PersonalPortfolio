import React from 'react';
import {edenImage} from '../../assist/index';

const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-center items-center">
        <img className="w-[450px] h-[480px] z-10" src={edenImage} alt="edenImage"/>
        <div className='absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#666666] to-[#4d4d4d] shadow-shadowOne flex justify-center items-center'></div>
    </div>
  )
}

export default RightBanner