import React from "react";
import TItle from "../layouts/TItle";
import Card from "./Card";
import { MdDeveloperMode, MdDesignServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-600"
    >
      <div className="flex justify-center items-center">
        <TItle des="What I Do?" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:rgrid-cols-3 gap-6 xl:gap-20">
        <Card title="Front End Development" icon={<MdDeveloperMode />} />
        <Card title="Web Development" icon={<CgWebsite />} />
        <Card title="Web Design" icon={<SiAntdesign />} />
        <Card title="UI/UX Design" icon={<MdDesignServices />} />
      </div>
    </section>
  );
};

export default Features;
