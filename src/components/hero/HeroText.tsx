import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MaxWidthWrapper from "../global/MaxWithContainer";

const HeroText = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".small",
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power2.inOut",
        stagger: {
          each: 0.1,
        },
      }
    );
    gsap.timeline().fromTo(
      ".name",
      { x: -100, opacity: 0, rotate: -10 },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        ease: "elastic.out(1,0.3)",
        duration: 1.3,
        stagger: { each: 0.1, from: "random" },
      }
    ); 
  }, []);

  return (
    <MaxWidthWrapper classname="mt-[30vh]">
      <div className="flex flex-col">
        <h1 className="text-[#6EACDA] small font-poppins lg:text-[25px] 2xl:text-[25px] italic bg-transparent">
          Shubham Upadhyay
        </h1>

        <div className="leading-[6.7vh]">
          <div className="flex items-baseline -mb-4 md:-mb-[2.5vh] gap-2">
            <h1 className="text-white lg:text-[6vh] 2xl:text-[7vh] md:text-[4vh] text-[8vh] name font-bold bg-transparent">Interested</h1>
            <h1 className="text-[#6EACDA] small 2xl:text-[25px] text-[20px] lg:text-[25px] font-poppins bg-transparent italic">in</h1>
          </div>
          <div className="flex gap-3 items-baseline -mb-4 md:-mb-[2.5vh]">
            <h1 className="text-[#6EACDA] small text-[25px] font-poppins bg-transparent italic">Web</h1>
            <h1 className="text-white text-[7vh] font-bold md:text-[4vh] ">&</h1>
            <h1 className="text-white lg:text-[6vh] md:text-[4vh] 2xl:text-[7vh] name bg-transparent text-[7vh] font-bold">Mobile</h1>
          </div>
          <div className="flex items-baseline md:gap-3 xl:gap-2 2xl:gap-2">
            <h1 className="text-white md:text-[4vh] lg:text-[6vh] xl:text-[6vh] 2xl:text-[7vh] bg-transparent name font-bold">Development</h1>
            <h1 className="text-[#6EACDA] small lg:text-[21px] italic text-[20px] 2xl:text-[25px] bg-transparent">From India</h1>
          </div>
        </div>
      </div>
      <div className="md:mt-[5vh] mt-0">
        <h1 className="text-[25px] font-poppins small text-white md:w-[45vw] lg:w-[45vw] lg:text-[25px] 2xl:text-[25px] md:text-[25px] xl:w-[35vw] 2xl:w-[30vw]">
          A <span className="text-[#6EACDA]">JavaScript</span> enthusiast and love to <span className="text-[#6EACDA]">React Native, React</span>, Express for backend with MongoDB.
        </h1>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroText;
