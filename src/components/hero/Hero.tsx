import React from "react";

import Model from "../../Model";
import Loadable from "../global/Loadable";
import MaxWidthWrapper from "../global/MaxWithContainer";
const Navbar = Loadable(React.lazy(() => import("./Navbar")));
const HeroText = Loadable(React.lazy(() => import("./HeroText")));

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col md:mb-[50vh] lg:mb-[0vh] mt-[5vh]" id="home">
      <Navbar />
      <div className="flex md:flex-col lg:flex-row flex-col gap-10 ">
        <div className="">
        <HeroText />
        </div>
        <div className="mt-[15vh] -mr-[9vw]">
          <Model />
        </div>
      </div>
      <div className="flex items-center z-10 justify-center">
        <button className="inline-flex -mt-[5vh] lg:mt-[10vh] xl:mt-[15vh] h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors">
          Scroll 😁
        </button>
      </div>
    </section>
  
  );
};

export default Hero;
