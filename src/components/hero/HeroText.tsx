import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MaxWidthWrapper from "../global/MaxWithContainer";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import {
  Text as ReactText,
  Float,
  Text3D,
  Clouds,
  Cloud,
  OrbitControls,
  Center,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";

const HeroText = () => {
  useGSAP(() => {
    gsap.timeline().fromTo(
      ".small",
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
        stagger: {
          each: 0.13,
        },
      }
    );
  }, []);


  return (
    <Box className="mt-[15vh] md:mt-[30vh] w-full">
      <div className="flex flex-row flex-wrap ">
        <Text
          className={` font-poppins font-bold small flex flex-wrap text-[15px] md:text-[30px]`}
        >
          <span className="text-[40px]">✌️</span> I'm
        </Text>
        <Text
          className={`text-[#02CCFE] ml-2 font-poppins font-bold small flex flex-wrap text-[25px] md:text-[40px]`}
        >
          Shubham Upadhyay
        </Text>
      </div>
      <Text
        className={`font-poppins small font-bold flex flex-wrap text-[32px] md:text-[35px]`}
      >
        Interested in Code,
      </Text>
      <Text
        className={`  font-poppins small font-bold text-[32px] flex flex-wrap md:text-[35px]`}
      >
        I love building web and mobile apps
      </Text>
      <Text
        className={` font-poppins small font-bold text-[32px] md:text-[35px]`}
      >
        working with TypeScript
      </Text>
      <div className="flex flex-row flex-wrap items-end md:items-center mt-5 md:mt-1">
        <Text
          className={`text-[#02CCFE]  font-poppins font-bold small  text-[15px] md:text-[35px]`}
        >
          Based in India
        </Text>
        <Text
          className={`text-[#ffffff] ml-0 md:ml-2 font-poppins font-bold small  text-[15px] md:text-[20px]`}
        >
          Let's build something awesome together!
        </Text>
      </div>
      <Box
        className="mt-[5vw] flex flex-wrap"
        width={{ base: "310px", md: "500px", lg: "300px", xl: "500px" }}
      >
        <Text
          className={`font-poppins font-bold text-[15px] small  md:text-[20px]`}
        >
          Loved to work in Typescript ,{" "}
          <span className="text-[#02CCFE]  text-[20px]">React </span>, Express
          for Backend and Mongodb for database
        </Text>
      </Box>
    </Box>
  );
};

export default HeroText;
