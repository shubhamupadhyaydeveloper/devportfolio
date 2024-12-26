import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Loading from "./Loading";
import Model from "./Model";
import Loadable from "./components/global/Loadable";
import MaxWidthWrapper from "./components/global/MaxWithContainer";

import Hero from "./components/hero/Hero";
import { useColorModeValue } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
import Stackpage from "./components/stack/Stackpage";
import ProjectItem from "./components/projects/components/ProjectItem";
import { Section } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    gsap.to(".box", {
      rotation: 160,
      ease: "none",
      scrollTrigger: {
        trigger: ".box",
        start: "top 10%",
        end: "top 30%",
        scrub: true,
      },
    });
  }, [])

  return (
    <>
      <MaxWidthWrapper classname="">
        <div >
          <section className="w-full h-[100vh]">
            <Hero />
          </section>

          <section
            id="stack"
            className="w-full h-[100vh] mx-auto mt-[35vh] md:mt-[0vh] "
            data-scroll-section
          >
            <Stackpage />
            <div className="flex flex-col gap-[50px] mt-[5vh]">
              <ProjectItem />
              <ProjectItem />
              <ProjectItem />
              <ProjectItem />
            </div>

            <div className="h-[5vh]"/>
          </section>
        </div>

        <Section
          className="w-full h-[30vh] mx-auto mt-[35vh] md:mt-[0vh] "
        >
          <div >
            <div className="flex flex-row gap-[10px] rounded-md p-[10px] w-fit ">
              <h3 className="font-poppins text-white text-[18px]">I'm always happy to chat</h3>
              <button>
                <h3 className="text-[20px] text-blue-500 underline" style={{ fontFamily: "Space Grotesk" }}> Say hello!</h3>
              </button>
            </div>
          </div>
        </Section>
      </MaxWidthWrapper>
    </>
  );
}

export default App;