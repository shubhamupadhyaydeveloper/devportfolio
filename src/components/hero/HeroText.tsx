import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MaxWidthWrapper from "../global/MaxWithContainer";
import { Text } from "@chakra-ui/react";

const HeroText = () => {
  useGSAP(() => {
    gsap.timeline().fromTo(
      ".small",
      {
        y: 30,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.35,
        ease: "power2.inOut",
        stagger: {
          each: 0.1,
        },
      }
    );
    // gsap.fromTo(
    //   ".name",
    //   { x: -100, opacity: 0, rotate: -10 },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     rotate: 0,
    //     ease: "elastic.out(1,0.3)",
    //     duration: 1.3,
    //     stagger: { each: 0.1, from: "random" },
    //   }
    // );
  }, []);

  return (
    <MaxWidthWrapper classname="mt-[30vh]">
      <div className="flex flex-col">
        <Text className="text-[#6EACDA] small font-poppins  italic bg-transparent">
          Shubham Upadhyay
        </Text>

        <div className="leading-[6.7vh]">
          <div className="flex items-baseline -mb-4 md:-mb-[2.5vh] gap-2">
            <Text className="text-white  text-[8vh] small font-bold bg-transparent">
              Interested
            </Text>
            <Text className="text-[#6EACDA] small 2xl:text-[25px] text-[20px] lg:text-[25px] font-poppins bg-transparent italic">
              in
            </Text>
          </div>
          <div className="flex gap-3 items-baseline -mb-4 md:-mb-[2.5vh]">
            <Text className="text-[#6EACDA] small text-[25px] font-poppins bg-transparent italic">
              Web
            </Text>
            <Text className="text-white text-[7vh] small font-bold md:text-[4vh] ">
              &
            </Text>
            <Text className="text-white lg:text-[6vh] md:text-[4vh] 2xl:text-[7vh] small bg-transparent text-[7vh] font-bold">
              Mobile
            </Text>
          </div>
          <div className="flex items-baseline md:gap-3 gap-2 xl:gap-2 2xl:gap-2">
            <Text className="text-white md:text-[4vh] lg:text-[6vh] xl:text-[6vh] 2xl:text-[7vh] text-[4vh] bg-transparent small font-bold">
              Development
            </Text>
            <Text className="text-[#6EACDA] small lg:text-[21px] italic text-[20px] 2xl:text-[25px] bg-transparent">
              From India
            </Text>
          </div>
        </div>
      </div>
      <div className="md:mt-[5vh] mt-[5vh]">
        <h1 className="text-[25px] font-poppins small text-white md:w-[45vw] lg:w-[45vw] lg:text-[25px] 2xl:text-[25px] md:text-[25px] xl:w-[35vw] 2xl:w-[30vw]">
          A <span className="text-[#6EACDA]">JavaScript</span> enthusiast and
          love to <span className="text-[#6EACDA]">React Native, React</span>,
          Express for backend with MongoDB.
        </h1>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroText;
