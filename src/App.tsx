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
import { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
import Stackpage from "./components/stack/Stackpage";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    // Update ScrollTrigger with Locomotive Scroll
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: containerRef?.current?.style?.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", locoScroll.update);
    };
  }
    , [])

  return (
    <>
      <MaxWidthWrapper classname="">
        <div ref={containerRef} data-scroll-container>
          <section>
            <Hero />
          </section>
          <section
            id="about"
            className="w-full h-[80vh] mx-auto mt-[10vh] md:mt-[30vh]"
            data-scroll-section
          >
            <div className="w-full flex justify-between md:flex-col flex-col lg:flex-row items-center ">
              <div className="flex-[2]">
                <About />
              </div>
              <div
                className="flex-1 self-center h-full mt-[5vh] md:mt-[5vh] lg:mt-[0vh] ml-[5vw] items-center"
              >
                <ProfileImg />
              </div>
            </div>
          </section>
          <section
            id="stack"
            className="w-full h-[100vh] mx-auto mt-[35vh] md:mt-[0vh] "
            data-scroll-section
          >
            <Stackpage />
          </section>
        </div>

      </MaxWidthWrapper>
    </>
  );
}

export default App;
