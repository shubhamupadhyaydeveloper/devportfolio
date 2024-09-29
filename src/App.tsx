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
import About from "./components/about/About";
import ProfileImg from "./components/about/ProfileImg";
import { useColorModeValue } from "@chakra-ui/react";
import {ScrollTrigger} from "gsap/all";
import Stackpage from "./components/stack/Stackpage";
import Footer from "./components/footer/footer";

gsap.registerPlugin(ScrollTrigger)

function App() {

  const scrollRef = useRef<any>(null);

useGSAP(() => {
  gsap.fromTo(
    scrollRef.current,
    {
      x: window.innerWidth,
      scale: 0.5,
      rotation: -90,
      opacity: 0,
    },
    {
      x: 150,
      rotation: 360,
      borderRadius: "20%",
      scale: 1.2,
      opacity: 1,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top 80%",
        end: "top 35%", 
        scrub: true,
      },
      ease: "power1.inOut",
    }
  );
}, []);



  return (
    <>
      <MaxWidthWrapper classname="">
        <Hero />
        <section
          id="about"
          className="w-full h-[100vh] mx-auto mt-[35vh] md:mt-[30vh]"
        >
          <div className="w-full flex justify-between md:flex-col flex-col lg:flex-row items-center ">
            <div className="flex-[2]">
              <About />
            </div>
            <div ref={scrollRef} className="flex-1 h-full mt-[5vh] md:mt-[5vh] lg:mt-[0vh] ml-[5vw] items-center">
              <ProfileImg />
            </div>
          </div>
        </section>
        <section
          id="stack"
          className="w-full h-[100vh] mx-auto mt-[35vh] md:mt-[0vh] "
        >
         <Stackpage />
        </section>
        <Footer />
      </MaxWidthWrapper>
    </>
  );
}

export default App;
