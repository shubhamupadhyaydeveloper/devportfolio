import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import MaxWidthWrapper from "../global/MaxWithContainer";
import { Box, Text } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [active, SetActive] = useState<string>("Home");
  const links: string[] = ["Home", "About", "Stack", "Projects", "Contact"];
  const textRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: textRef });

  const handleMouseEnter = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".name", {
      y : -35,
      duration : .2
    }).to(".name2", {
      visibility : 1,
      y : -41,
      duration : .2
    })
  });
  const handleMouseLeave = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".name", {
      y : 0,
      duration : .2
    }).to(".name2",{
      visibility : 1,
      duration : .2
    }) 
  });

  return (
    <div className="fixed z-[30] flex justify-center inset-x-0 top-0 items-start md:items-center backdrop-blur-md bg-black/5 transition-all ">
      <MaxWidthWrapper classname="flex justify-between w-full px-3 mt-5 items-center  backdrop-blur-md bg-black/0">

   
        <div
          className="font-poppins text-[20px] flex flex-col gap-2 font-bold bg-black/0 cursor-pointer h-[23px] overflow-hidden"
          ref={textRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="name text-white">SU.</div>
          <div className="name name2 text-white">SU.</div>
       
        </div>
        <div className="bg-gray-900 hidden lg:flex justify-between items-center w-full md:w-[65vw] lg:w-[50vw] max-w-screen-sm rounded-full transition-all">
          {links.map((item) => (
            <a
              href="#"
              key={item}
              className={`${
                active === item
                  ? "bg-[#379777] rounded-full px-5 py-3 transition-colors duration-400 ease-in-out"
                  : "bg-gray-900 rounded-full px-5 transition-colors duration-00 ease-in-out"
              } text-white ${
                active !== item && "hover:translate-y-[-4px]"
              }  transition-transform duration-400 ease-out font-poppins`}
              onClick={(e) => {
                e.preventDefault();
                SetActive(item);
              }}
            >
              {item}
            </a>
          ))}
        </div>
           <div>
            dark mode
           </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
