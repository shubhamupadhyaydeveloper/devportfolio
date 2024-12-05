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

  const textcolor = useColorModeValue('white', '#C7CAD6')


  return (
    <Box className="mt-[15vh] md:mt-[20vh] flex flex-wrap  leading-tight w-[85vw] md:w-[50vw] lg:w-[35vw] gap-[20px]">
      <Text
        className={`welcometext text-[#000000] font-medium small flex flex-wrap text-[16px] md:text-[25px]`}
      >
        Hi, I'm Shubham Upadhyay✌️
      </Text>

      <div className="flex flex-col leading-none">
        <Text
          className="text-[#7A7A7A] font-poppins small font-bold text-[45px] md:text-[60px] leading-none"
        >
          <span className="font-poppins small font-bold text-[35px] md:text-[60px]">
            Interested in Code
          </span>
        </Text>
        <Text
          className="text-[#7A7A7A] font-poppins small font-bold text-[35px] md:text-[60px] leading-none"
        >
          love building web and mobile apps.
        </Text>
      </div>

      <Text className="welcometext text-[#000000] font-medium small flex flex-wrap text-[16px] md:text-[19px] mt-[5vh]">
        I help startups build impactful mobile and web applications.
        A passionate full-stack developer, crafting innovative products and experiences. Dedicated to empowering startups and fostering meaningful tech communities.
      </Text>
    </Box>
  );
};

export default HeroText;
