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


gsap.registerPlugin(ScrollTrigger);

function App() {
  const [count, setCount] = useState(0);
  const [showMain, setShowMain] = useState(false);

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
          <section className="w-full h-[80vh]">
            <div className="mt-[25vh] mb-[10vh]">
              <ColourfulText text="About Myself" />
            </div>

            <div className="flex flex-row flex-wrap">
              <ScrollReveal
                baseOpacity={0.2}
                enableBlur={true}
                baseRotation={10}
                blurStrength={10}
                // wordAnimationEnd="bottom bottom"
                textClassName="text-[#6C7794] leading-tight text-[30px] font-semibold "

              >
                Hi, I’m Shubham Upadhyay, a full-stack developer from Noida, India, currently pursuing my Bachelor of Science at IIT Patna (2024–2028) My coding journey began in class 11, diving into backend development, and by class 12, I was building full-stack apps using the MERN stack.
 
                Over time, I’ve grown confident with technologies like React.js, React Native, Next.js, TypeScript, Zustand, Redux Toolkit, Docker, MongoDB, Express, and more. I’ve built several real-world projects, I'm currently working at Flokk as a React Native Developer, where I'm building production-ready mobile apps and collaborating with cross-functional teams. I’ve also interned at Heliverse as a Full Stack Developer, gaining deep insight into building for scale and user experience.
                Beyond code, I enjoy reading books 📚, watching anime 🎌, and exploring new tech that can bring ideas to life.
         </ScrollReveal>
        

          </div>
        </section>

        <section className="w-full h-[100vh]">
          <div className="mt-[20vh]">
            <ColourfulText text="My Projects" />
          </div>

          <div style={{ height: '600px', position: 'relative' }}>
            <FlowingMenu items={demoItems} />
          </div>
        </section>
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