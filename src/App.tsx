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
import Footer from "./components/footer/Footer";

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
            <div className="flex flex-col gap-[50px] mt-[5vh]">
              <ProjectItem />
              <ProjectItem />
              <ProjectItem />
              <ProjectItem />
            </div>
          </section>
        </div>
       <Footer />
      </MaxWidthWrapper>
    </>
  );
}

export default App;