import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MaxWidthWrapper from "../global/MaxWithContainer";
import { Box, Flex, Text } from "@chakra-ui/react";
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
        y: 30,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.35,
        ease: "power2.inOut",
        stagger: {
          each: 0.1,
        },
      }
    );

    // gsap.fromTo(
    //   ".name",
    //   { x: -100, opacity: 0, rotate: -10 },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     rotate: 0,
    //     ease: "elastic.out(1,0.3)",
    //     duration: 1.3,
    //     stagger: { each: 0.1, from: "random" },
    //   }
    // );
  }, []);

  return (
    <MaxWidthWrapper classname="mt-[30vh] w-full ">
      <Box
        
        className="leading-tight"
      >
        <Text className="text-[#379777] font-inter small flex flex-wrap text-[15px] md:text-[20px]">
          Hey, My name is Shubham Upadhyay
        </Text>
        <Text className="text-white font-poppins small font-bold flex flex-wrap text-[32px] md:text-[32px]">
          I am Interested in Working
        </Text>
        <Text className="text-white font-poppins small font-bold text-[32px] flex flex-wrap md:text-[32px]">
          Web And Mobile Development{" "}
        </Text>
        <Text className="text-white font-poppins small font-bold text-[32px] md:text-[32px]">
           And Loved React
        </Text>
        <Text className="text-[#379777] font-inter small  text-[15px] md:text-[20px]">
          Based in India
        </Text>
        <Box className="mt-[5vw] flex flex-wrap" 
         width={{ base: "310px", md: "500px", lg: "300px", xl: "500px" }} >
           <Text className="font-poppins font-bold text-[15px] small text-white md:text-[20px]">Loved to work in Typescript , React , Express for Backend and Mongoddb for database</Text>
        </Box>
     
      </Box>
    </MaxWidthWrapper>
  );
};

export default HeroText;
