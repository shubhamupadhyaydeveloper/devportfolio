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

  const textcolor = useColorModeValue('black','white')


  return (
    <Box className="mt-[15vh] md:mt-[30vh] w-full leading-tight">
      <Text
        className={`font-poppins font-bold small flex flex-wrap text-[25px] md:text-[35px]`}
      >
        <span className="text-[#7A7A7A]">I'm&nbsp;</span>{" "}
        <span className={`text-[${textcolor}]`}>Shubham Upadhyay </span>
        <span className="text-[30px] md:text-[40px] -mt-[0.6vh] md:-mt-[1vh]">
          ✌️
        </span>
      </Text>

      <Text
        className={` text-[#7A7A7A] font-poppins small font-bold flex flex-wrap text-[25px] md:text-[35px]`}
      >
        Interested in Code, I love building
      </Text>
      <Text
        className={`text-[#7A7A7A]  font-poppins small font-bold text-[25px]  flex flex-wrap md:text-[35px]`}
      >
        web and mobile apps working with
      </Text>
      <Text
        className={`text-[#7A7A7A] font-poppins small font-bold text-[25px] md:text-[35px]`}
      >
        TypeScript{" "}
      </Text>
    </Box>
  );
};

export default HeroText;
