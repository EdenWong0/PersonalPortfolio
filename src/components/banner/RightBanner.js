import React from 'react';
import {meThree} from '../../assist/index';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center">
        <img className="w-[400px] h-[450px] lgl:w-[500px] lgl:h-[600px] z-10 mb-20 rounded-3xl" src={meThree} alt="edenImage"/>
    </div>
  )
}

export default RightBanner