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
} from "@tabler/icons-react";
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
      ".button",
      {
        y: 50,
        opacity: 0,
        delay: 100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section
      className="w-full h-[80vh] flex flex-col md:mb-[30vh] mt-[5vh]"
      id="home"
    >
      <Navbar />
      <div className="flex md:flex-col lg:flex-row flex-col">
        <HeroText />
        <div className="mt-[15vh]">
          <Model />
        </div>
      </div>

      {/* Ensure FloatingDock is aligned with the content */}
      <div className="flex w-full justify-start mt-[100px]">
        <div className="w-full md:w-auto">
          <FloatingDock items={links} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
