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

            </div>
          </section>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

export default App;