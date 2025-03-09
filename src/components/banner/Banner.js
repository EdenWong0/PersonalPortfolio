import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="xs:flex flex-col gap-10 w-full pt-10 pb-20 h-auto lg:flex-row items-center border-b-[1px] border-b-gray-600 font-titleFont"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
