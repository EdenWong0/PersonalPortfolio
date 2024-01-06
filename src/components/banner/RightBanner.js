import React from 'react';
import {meThree} from '../../assist/index';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center">
        <img className="w-[300px] h-[480px] lgl:w-[500px] lgl:h-[600px] z-10 mb-20" src={meThree} alt="edenImage"/>
    </div>
  )
}

export default RightBanner