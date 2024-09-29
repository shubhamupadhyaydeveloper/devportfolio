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
  const textColor = useColorModeValue("#ffffff", "#379777");
  const textColor2 = useColorModeValue("black", "#ffffff");


  return (
    <MaxWidthWrapper classname="mt-[30vh] w-full ">
      <Box className="">
        <Text
          className={`text-[#379777] font-inter small flex flex-wrap text-[15px] md:text-[25px]"`}
        >
          Hey, My name is Shubham Upadhyay
        </Text>
        <Text
          className={`text-[${textColor2}] font-poppins small font-bold flex flex-wrap text-[32px] md:text-[32px]`}
        >
          I am Interested in Working
        </Text>
        <Text
          className={` text-[${textColor2}] font-poppins small font-bold text-[32px] flex flex-wrap md:text-[32px]`}
        >
          Web And Mobile Development{" "}
        </Text>
        <Text
          className={` text-[${textColor2}] font-poppins small font-bold text-[32px] md:text-[32px]`}
        >
          And Loved React
        </Text>
        <Text
          className={`text-[#379777]  font-inter small  text-[15px] md:text-[20px]`}
        >
          Based in India
        </Text>
        <Box
          className="mt-[5vw] flex flex-wrap"
          width={{ base: "310px", md: "500px", lg: "300px", xl: "500px" }}
        >
          <Text
            className={`font-poppins font-bold text-[15px] small text-[${textColor2}] md:text-[20px]`}
          >
            Loved to work in Typescript , React , Express for Backend and
            Mongoddb for database
          </Text>
        </Box>
      </Box>
    </MaxWidthWrapper>
  );
};

export default HeroText;
