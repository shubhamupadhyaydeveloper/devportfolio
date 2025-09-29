import React from "react";
import { useColorModeValue } from "@chakra-ui/react";
import Loadable from "../global/Loadable";
import ScrollReveal from "../ScrollReveal";
import { FloatingDock } from "../ui/floating-dock";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
} from "@tabler/icons-react";

const Navbar = Loadable(React.lazy(() => import("./Navbar")));
const HeroText = Loadable(React.lazy(() => import("./HeroText")));
const Model = Loadable(React.lazy(() => import("../../Model")));

const Hero = () => {
  const colorValue = useColorModeValue("black", "white");

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/shubhamupadhyaydeveloper/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/shubhamupadhyaydeveloper",
    },
  ];

  return (
    <section
      id="home"
      className="
        w-full flex flex-col 
        items-center justify-center 
        py-12 md:py-16 lg:py-20 
        overflow-x-hidden 
        px-4 sm:px-8 lg:px-16
      "
    >
      {/* Responsive Layout */}
      <div
        className="
          flex flex-col-reverse lg:flex-row 
          items-center justify-between
           lg:gap-20 
          w-full max-w-7xl mx-auto
        "
      >
        {/* Text + Dock */}
        <div className="flex flex-col w-full lg:w-2/3">
          <ScrollReveal>
            <HeroText />
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="
               w-[12vw] mt-[5vh]
               flex justify-center
              "
            >
              <FloatingDock items={links} />
            </div>
          </ScrollReveal>
        </div>

        {/* 3D Model */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <ScrollReveal>
            <Model />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
