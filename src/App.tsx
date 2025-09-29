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
import Contact from "./components/Contact/Contact";
import TextPressure from "./components/animatedComponents/TextPressure";
import ScrollVelocity from "./components/animatedComponents/ScrollVelocity";
import ScrollReveal from "./components/animatedComponents/ScrollReveal";
import VariableProximity from "./components/animatedComponents/VariableProximity";
import ShinyText from "./components/animatedComponents/ShinyText";
import ColourfulText from "./components/ui/colourful-text";
import FlowingMenu from "./components/animatedComponents/FlowingMenut";
import { motion, AnimatePresence } from 'framer-motion';
import GlitchText from "./components/animatedComponents/GlitchText";
import PixelTransition from "./components/animatedComponents/PixelTransition";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { HeroHighlight } from "./components/ui/hero-highlight";
import SplitText from "./components/animatedComponents/SplitText";
import AboutPage from "./components/about";
import ButtonPrimary from "./components/ButtonPrimary";
import Logo from "./components/Logo";
import Skills from "./components/skills/Skill";
import Navigation from "./components/navigation/Header";



gsap.registerPlugin(ScrollTrigger);

function App() {
  const [count, setCount] = useState(0);
  const [showMain, setShowMain] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => setCount(count + 1), 50); // control speed here
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowMain(true), 1000); // show site after count hits 100
    }
  }, [count]);

  // Map count from 0–100 to font size scale (e.g., from 2rem to 6rem)
  const fontSize = `${2 + (count / 100) * 10}rem`; // 2rem → 6rem

  return (
    <div className="relative w-screen h-screen bg-[#0a192f] text-[#ccd6f6]">
      <AnimatePresence>
        {!showMain && (
          <motion.div
            key="loader"
            style={{ fontSize }}
            className="absolute w-full h-full flex items-center justify-center font-semibold transition-all duration-75 ease-in-out"
          >
            {count}%
          </motion.div>
        )}
      </AnimatePresence>

      {showMain && <MainContent />}
    </div>
  );
}


function MainContent() {

  const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
  ];

  const containerRef = useRef(null);

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

      <div className="overflow-hidden overflow-x-hidden" style={{ 'backgroundColor': '#0A192F' }} >
        <div>
          <Navigation />

          <MaxWidthWrapper classname="">
            <section className="w-full h-[100vh] md:mt-[10vh]" id="home">
              <Hero />
            </section>
          </MaxWidthWrapper>
        </div>

        {/* <div className="rotate-2 ">
          <ScrollVelocity
            texts={['React Native', 'Typescript']}
            className=" text-[#CCD6F6]"
          />
        </div> */}

        <MaxWidthWrapper classname="mt-[30vh] md:mt-[1vh]">
          <AboutPage />
        </MaxWidthWrapper>


        <MaxWidthWrapper classname="">
          <div className="container py-20 flex-row flex-wrap" id="projects">
            <SplitText
              text="Projects"
              className="mb-10 text-[#8892B0] font-poppins small font-bold text-[35px] md:text-[60px]"
              delay={10}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing={(t) => t * (2 - t)} // Example easing function
              threshold={0.2}
              rootMargin="-50px"
            // onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div style={{ height: '60vh' }} className="">
            <FlowingMenu items={demoItems} />
          </div>
        </MaxWidthWrapper>

        <Skills />

        <Contact />


        {/* <div style={{ position: 'relative', }}>
          <TextPressure
            text="DEVELOPER"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div> */}
      </div >
    </>
  );
}

export default App;