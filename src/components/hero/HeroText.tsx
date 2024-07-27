import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MaxWidthWrapper from "../global/MaxWithContainer";

const HeroText = () => {
  useGSAP(() => {
    // gsap.timeline().fromTo(".name",   {
    //   y: 20,
    //   opacity: 0,
    //   scale: 1.2,
    // },
    // {
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    //   scale: 1,
    //   ease: "elastic.out(1,0.3)",
    // },);
    // gsap.timeline().fromTo(
    //   ".name",
    //   { x: -100, opacity: 0, rotate: -10 },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     rotate: 0,
    //     ease: "elastic.out(1,0.3)",
    //     duration: 1.7,
    //     // transformOrigin: "left top",
    //     stagger: { each: 0.1, from: "random" },
    //   }
    // );
  }, []);
  return (
    <MaxWidthWrapper classname="mt-[30vh]">
      <div className="flex flex-col ">
        <h1 className="text-[#6EACDA] font-poppins text-[25px] name italic">
          Shubham Upadhyay
        </h1>

        <div className=" leading-[6.7vh]">
          <div className="flex items-baseline -mb-4 gap-2">
            <h1 className="text-white  text-[8vh] font-bold">Interested </h1>
            <h1 className="text-[#6EACDA]  text-[20px] font-poppins italic">
              {" "}
              in
            </h1>
          </div>
          <div className="flex gap-3 items-baseline -mb-4">
            <h1 className="text-[#6EACDA]  text-[20px] font-poppins italic">
              Web
            </h1>
            <h1 className="text-white  text-[7vh] font-bold">&</h1>
            <h1 className="text-white  text-[7vh] font-bold">Mobile</h1>
          </div>
          <div className="flex items-baseline gap-3">
            <h1 className="text-white  text-[7vh] font-bold">Developement</h1>
            <h1 className="text-[#6EACDA] italic text-[20px]">From India</h1>
          </div>
        </div>
      </div>
      <div className="mt-[5vh]">
        <h1 className=" text-[25px] font-poppins text-white md:w-[40vw] xl:w-[30vw] ">
          A <span className="text-[#6EACDA]">javascript</span> enthusiast And loved to <span className="text-[#6EACDA]">React Native , React</span>  , Express for Backend with Mongodb
        </h1>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroText;
