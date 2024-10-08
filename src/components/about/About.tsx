import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Text, useColorModeValue } from "@chakra-ui/react";
import MaxWidthWrapper from "../global/MaxWithContainer";
import ProfileImg from "./ProfileImg";

const About = () => {
  const textRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: textRef });

  const handleMouseEnter = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".name", {
      y: -75,
      duration: 0.15,
    }).to(".name2", {
      visibility: 1,
      y: -91,
      duration: 0.1,
    });
  });

  const handleMouseLeave = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".name", {
      y: 0,
      duration: 0.15,
    }).to(".name2", {
      visibility: 1,
      duration: 0.15,
    });
  });

  const textColor = useColorModeValue("black", "white");

  return (
    <>
      <div className="flex items-start w-full ">
        <div
          className="font-poppins text-[20px] flex flex-col font-bold bg-black/0 cursor-pointer h-[70px] overflow-hidden"
          ref={textRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`name text-[${textColor}] font-poppins font-bold text-[6vh]`}
          >
            About
          </div>
          <div
            className={`name name2 text-[${textColor}] font-poppins font-bold text-[6vh]`}
          >
            About
          </div>
        </div>
      </div>

      <div className="mt-[5vh] font-poppins text-[20px] md:text-[20px] lg:text-[17px] xl:text-[20px]">
        <h1 className="text-start text-[#7A7A7A]">
          Hi, I'm Shubham Upadhyay, a passionate Full-Stack Developer
          specializing in React for both web and mobile applications. I grew up
          in Delhi and began my coding journey in the middle of class 11,
          quickly discovering my love for creating impactful digital
          experiences. Currently, I'm pursuing a degree in Computer Science with
          a focus on Data Analytics at IIT Patna. Here, I am honing my skills in
          full-stack development and working on various exciting projects, such
          as a Spotify clone mobile application with innovative features to
          enhance user experience. In addition to my academic pursuits, I have
          completed an internship at Heliverse, I am also an enthusiast for
          startup culture, actively seeking opportunities to collaborate with
          startups to gain valuable experience and, eventually, launch my own.
          When I'm not coding, I enjoy watching anime and reading books, which
          inspire me to think creatively and explore new ideas.`
        </h1>
      </div>

      <button className="px-8 mt-10 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        Resume
      </button>
    </>
  );
};

export default About;
