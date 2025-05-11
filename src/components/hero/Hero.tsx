import React from "react";
import { FloatingDock } from "../ui/floating-dock";

import Model from "../../Model";
import Loadable from "../global/Loadable";
import MaxWidthWrapper from "../global/MaxWithContainer";
import { useColorModeValue } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandLinkedin
} from "@tabler/icons-react";
import ScrollReveal from "../ScrollReveal";
const Navbar = Loadable(React.lazy(() => import("./Navbar")));
const HeroText = Loadable(React.lazy(() => import("./HeroText")));

const Hero = () => {
  const colorValue = useColorModeValue("black", "white");

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Linkedin",
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
    <div
      className="w-full container flex flex-col py-20 overflow-x-hidden"
      id="home"
    >

      <div className="flex md:flex-col lg:flex-row flex-col">
        <div data-scroll-section >
          <HeroText />
          <div data-scroll-section className="flex w-full justify-start mt-[80px]">
            <div className="w-full md:w-auto">
              <ScrollReveal>
                <FloatingDock items={links} />
              </ScrollReveal>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 flex justify-center items-center md:mt-[15vh]">
          <ScrollReveal>
            <Model />
          </ScrollReveal>
        </div>

      </div>

    </div>
  );
};

export default Hero;
