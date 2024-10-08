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
      className="w-[full] h-[80vh] flex flex-col md:mb-[30vh] mt-[5vh]"
      id="home"
    >
      <Navbar />
      <div className="flex md:flex-col lg:flex-row flex-col  ">
          <HeroText />
        <div className="mt-[15vh] ">
          <Model />
        </div>
      </div>

    </section>
  );
};

export default Hero;
