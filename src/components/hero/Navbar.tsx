import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import MaxWidthWrapper from "../global/MaxWithContainer";
import {
  Switch,
  ButtonGroup,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import { Moon, Sun, Text } from "lucide-react";
import { div } from "framer-motion/client";

const Navbar = () => {
  const navItems = [{ page: "Home", number: 1 }, { page: "Tech", number: 2 }, { page: "Projects", number: 3 }, { page: "Contact", number: 4 }];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeBgRef = useRef<HTMLDivElement | null>(null);
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const textRef = useRef(null);
  const { colorMode, toggleColorMode } = useColorMode();

  const { contextSafe } = useGSAP({ scope: textRef });

  const chageColor = useColorModeValue('black', 'white')

  useEffect(() => {
    moveActiveBackground(activeIndex);
  }, [activeIndex]);

  const moveActiveBackground = (index: number) => {
    const target = navRefs.current[index];

    if (target && activeBgRef.current) {
      const rect = target.getBoundingClientRect();
      const containerRect = target.parentElement?.getBoundingClientRect();

      if (containerRect) {
        gsap.to(activeBgRef.current, {
          x: rect.left - containerRect.left,
          width: rect.width,
          duration: 0.3,
          ease: "power1.inOut",
        });
      }
    }
  };

  useGSAP(() => {
    gsap.timeline().fromTo(
      ".bar",
      {
        y: -40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.in",
      }
    );
  });

  const handleMouseEnter = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".name", {
      y: -35,
      duration: 0.2,
    }).to(".name2", {
      visibility: 1,
      y: -36,
      duration: 0.2,
    });
  });
  const handleMouseLeave = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".name", {
      y: 0,
      duration: 0.2,
    }).to(".name2", {
      visibility: 1,
      duration: 0.2,
    });
  });

  const textColor = useColorModeValue("black", "white");

  return (
    <div className="fixed z-[30] bar flex justify-center inset-x-0 top-0 items-start md:items-center backdrop-blur-md bg-[#262626]  transition-all ">
      <MaxWidthWrapper classname="flex bar mb-3 justify-between w-full px-3 mt-5 items-center  backdrop-blur-md bg-black/0">
        <div
          className="font-poppins  text-[20px]bar flex flex-col gap-2 font-bold bg-black/0 cursor-pointer h-[23px] overflow-hidden"
          ref={textRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`name bar text-white `}>SU.</div>
          <div className={`name bar name2 text-white`}>SU.</div>
        </div>
        <div className="hidden md:block">
          <nav className="navbar rounded-full">
            <ul>
              {navItems.map((item, index) => (
                
                <li
                  key={index}
                  className={`nav-item ${chageColor} ${index === activeIndex ? "active" : ""
                    }`}
                  onClick={() => setActiveIndex(index)}
                  ref={(el) => (navRefs.current[index] = el)}
                >
                  <div className="flex flex-row gap-[7px]">
                      <h3 className="text-[#9899E6]">{item.number}.</h3>
                    <h3 className="text-white">    {item.page}</h3>
                  </div>
              
                </li>
              ))}
              {/* The green background element */}
              <div className="active-bg" ref={activeBgRef}></div>
            </ul>
          </nav>
        </div>
        <div className="flex gap-2 bar items-center">
          <Button onClick={toggleColorMode} className={`bg-[${textColor}]`}>
            {colorMode === "light" ? <Moon /> : <Sun />}
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
