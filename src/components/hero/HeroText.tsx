import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MaxWidthWrapper from "../global/MaxWithContainer";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { FloatingDock } from "../ui/floating-dock";
import {
  Text as ReactText,
  Float,
  Text3D,
  Clouds,
  Cloud,
  OrbitControls,
  Center,
} from "@react-three/drei";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { Canvas, useThree } from "@react-three/fiber";

const HeroText = () => {
  
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
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
    <Box className="mt-[15vh] md:mt-[30vh]  leading-tight">
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

   
      {/* <div className="">
          <FloatingDock items={links} />
      </div>
       */}
    </Box>
  );
};

export default HeroText;
