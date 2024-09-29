import React from "react";

import Model from "../../Model";
import Loadable from "../global/Loadable";
import MaxWidthWrapper from "../global/MaxWithContainer";
import { useColorModeValue } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Navbar = Loadable(React.lazy(() => import("./Navbar")));
const HeroText = Loadable(React.lazy(() => import("./HeroText")));

const Hero = () => {
  const colorValue = useColorModeValue("black",'white')

  useGSAP(() => { 
    gsap.timeline().fromTo(
      ".button",
      {
        y: 50,
        opacity: 0,
        delay : 100
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
      }
    );
  })
  
  return (
    <section
      className="w-full h-screen flex flex-col md:mb-[50vh] lg:mb-[0vh] mt-[5vh]"
      id="home"
    >
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
        <button
          className={`"inline-flex button -mt-[5vh] lg:mt-[10vh] xl:mt-[15vh] h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,${colorValue},45%,${colorValue},55%,${colorValue})] bg-[length:200%_100%] px-6 font-medium text-[${colorValue}] transition-colors"`}
        >
          Scroll 😁
        </button>
      </div>
    </section>
  );
};

export default Hero;
