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

      <div className="overflow-hidden" >
        <MaxWidthWrapper classname="">
          <section className="w-full h-[100vh]">
            <Hero />
          </section>
        </MaxWidthWrapper>

        <div className="-rotate-2">
          <ScrollVelocity
            texts={['React Native', 'Typescript']}
            className="custom-scroll-text text-[#CCD6F6]"
          />
        </div>


        <MaxWidthWrapper classname="">
          <section className="w-full h-[100vh]">
            <div className="mt-[25vh] mb-[5vh] flex-row flex-wrap">
              <SplitText
                text="About"
                className=" mb text-[#64FFDA] font-poppins small font-bold text-[35px] md:text-[60px]"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing={(t) => t * (2 - t)} // Example easing function
                threshold={0.2}
                rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
              />

              <SplitText
                text="Myself"
                className="mb-10 text-[#8892B0] font-poppins small font-bold text-[35px] md:text-[60px]"
                delay={10}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing={(t) => t * (2 - t)} // Example easing function
                threshold={0.2}
                rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
              />

              {/* <ColourfulText text="About Myself" /> */}
            </div>

            <div className="flex flex-row gap-[10px] flex-wrap w-full ">

              <div className="flex justify-center items-center w-full mt-[5vh]">
                <PixelTransition
                  firstContent={
                    <img
                      src="/profile.jpg"
                      alt="default pixel transition content, a cat!"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#111"
                      }}
                    >
                      <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Hello 👋🏻</p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor="#ffffff"
                  animationStepDuration={0.4}
                  className="custom-pixel-card"
                />
              </div>


              <div className="flex flex-row flex-wrap mt-[5vh]">
                <ScrollReveal
                  baseOpacity={0.2}
                  enableBlur={true}
                  baseRotation={3}
                  blurStrength={10}
                  // wordAnimationEnd="bottom bottom"
                  textClassName="text-[#6C7794]  text-[25px] font-semibold "

                >
                  Hi, I’m Shubham Upadhyay, a full-stack developer from New Delhi, India, currently pursuing my Bachelor of Science at IIT Patna (2024–2028) My coding journey began in class 11, diving into backend development, and by class 12, I was building full-stack apps using the MERN stack.

                  Over time, I’ve grown confident with technologies like React.js, React Native, Next.js, TypeScript, Zustand, Redux Toolkit, Docker, MongoDB, Express, and more. I’ve built several real-world projects, I'm currently working at Flokk as a React Native Developer, where I'm building production-ready mobile apps and collaborating with cross-functional teams. I’ve also interned at Heliverse as a Full Stack Developer, gaining deep insight into building for scale and user experience.
                  Beyond code, I enjoy reading books 📚, watching anime 🎌, and exploring new tech that can bring ideas to life.
                </ScrollReveal>


              </div>

            </div>
          </section>


          <div className="mt-[20vh] flex-row flex-wrap">
          <SplitText
                text="My"
                className=" mb text-[#64FFDA] font-poppins small font-bold text-[35px] md:text-[60px]"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing={(t) => t * (2 - t)} // Example easing function
                threshold={0.2}
                rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
              />

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
        <div style={{ height: '60vh' }} className="mt-[15vh]">
          <FlowingMenu items={demoItems} />
        </div>
        </MaxWidthWrapper>

        <div style={{ position: 'relative', }}>
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
        </div>
      </div >
    </>
  );
}

export default App;