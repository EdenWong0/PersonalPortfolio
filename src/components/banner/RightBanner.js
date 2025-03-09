import React from "react";
import { meThree } from "../../assist/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center">
      <img
        className="xs:w-auto h-auto lgl:w-[500px] lgl:h-[600px] z-10 rounded-3xl"
        src={meThree}
        alt="edenImage"
      />
    </div>
  );
};

export default RightBanner;
