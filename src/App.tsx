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

  useEffect(() => {
    gsap.to(".box", {
      rotation: 160, // Full rotation from 0 to 360 degrees
      ease: "none", // No easing for smooth, continuous rotation
      scrollTrigger: {
        trigger: ".box", // Target the box element
        start: "top 10%", // Animation starts when the top of the box is at 80% of the viewport height
        end: "top 30%", // Animation ends when the top of the box is at 30% of the viewport height
        scrub: true, // Smooth animation that syncs with scroll
      },
    });
  }, [])

  return (
    <>
      <MaxWidthWrapper classname="">
        <div ref={containerRef} data-scroll-container>
          <section className="w-full h-[100vh]">
            <Hero />
          </section>

          <section
            id="stack"
            className="w-full h-[100vh] mx-auto mt-[35vh] md:mt-[0vh] "
            data-scroll-section
          >
            <Stackpage />
            <ProjectItem />
            {/* <div className="w-[200px] h-[200px] bg-red-800 rounded-xl box">
              <h1 className="text-white">hello this is project</h1>
            </div> */}
          </section>
        </div>

      </MaxWidthWrapper>
    </>
  );
}

export default App;