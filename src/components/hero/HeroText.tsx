import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MaxWidthWrapper from "../global/MaxWithContainer";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { Canvas, useThree } from "@react-three/fiber";
import { div } from "framer-motion/client";
import SplitText from "../animatedComponents/SplitText";
import BlurText from "../animatedComponents/BlutText";
import DecryptedText from "../animatedComponents/DecryptedText";

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

  const textcolor = useColorModeValue('white', '#C7CAD6')
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="mt-[15vh] md:mt-[20vh] flex flex-wrap  leading-tight w-[85vw] md:w-[50vw] lg:w-[45vw] ">
      <SplitText
        text="Hi, my name is"
        className="text-2xl font-semibold text-center text-[#64FFDA] welcometext"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing={(t) => t * (2 - t)} // Example easing function
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <div className="gap-[-10px]">
        <SplitText
          text="Shubham Upadhyay"
          className="mb-2 text-[#CCD6F6] font-poppins small font-bold text-[35px] md:text-[60px]"
          delay={50}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing={(t) => t * (2 - t)} // Example easing function
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <BlurText
          text=""
          delay={150}
          animateBy="words"
          direction="top"
          className="text-[#8892B0] font-poppins small font-bold text-[35px] md:text-[40px]"
        />

        <SplitText
          text="I build things for the web And Mobile"
          className="mb-10 text-[#8892B0] font-poppins small font-bold text-[35px] md:text-[40px]"
          delay={10}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing={(t) => t * (2 - t)} // Example easing function
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

      </div>

      <div className="flex flex-row flex-wrap mt-[2vh]">
        <SplitText
          text="Love"
          className="text-[#64FFDA] text-2xl font-semibold"
          delay={50}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing={(t) => t * (2 - t)} // Example easing function
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <SplitText
          text="build impactful mobile and web applications "
          className=" text-[#6C7794] text-2xl font-semibold"
          delay={10}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing={(t) => t * (2 - t)} // Example easing function
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <SplitText
          text="passionate full-stack"
          className=" text-[#6C7794] text-2xl font-semibold"
          delay={10}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing={(t) => t * (2 - t)} // Example easing function
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <SplitText
          text=" developer"
          className=" mb text-[#64FFDA] text-2xl font-semibold"
          delay={50}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing={(t) => t * (2 - t)} // Example easing function
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <SplitText
          text="crafting innovative products and experiences Dedicated"
          className=" text-[#6C7794] text-2xl font-semibold"
          delay={10}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing={(t) => t * (2 - t)} // Example easing function
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <SplitText
          text="to empowering startups and fostering"
          className=" text-[#6C7794] text-2xl font-semibold"
          delay={10}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing={(t) => t * (2 - t)} // Example easing function
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <SplitText
          text=" meaningful"
          className=" mb text-[#64FFDA] text-2xl font-semibold"
          delay={50}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing={(t) => t * (2 - t)} // Example easing function
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />


      </div>


    </div>

  );
};

export default HeroText;
