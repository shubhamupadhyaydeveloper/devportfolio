import { useColorModeValue } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const Stackpage = () => {
  const textRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: textRef });

  const handleMouseEnter = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".name", {
      y: -80,
      duration: 0.15,
    }).to(".name2", {
      visibility: 1,
      y: -91,
      duration: 0.1,
    });
  });

  const handleMouseLeave = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".name", {
      y: 0,
      duration: 0.15,
    }).to(".name2", {
      visibility: 1,
      duration: 0.15,
    });
  });

  const textColor = useColorModeValue("black", "white");

  return (
    <>
      <div
        className="font-poppins text-[20px] flex flex-col font-bold bg-black/0 cursor-pointer h-[80px] overflow-hidden"
        ref={textRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`name text-[${textColor}] font-poppins font-bold text-[6vh]`}
        >
          Projects
        </div>
        <div
          className={`name name2 text-[${textColor}] font-poppins font-bold text-[6vh]`}
        >
          Projects
        </div>
      </div>
    </>
  );
};

export default Stackpage;
