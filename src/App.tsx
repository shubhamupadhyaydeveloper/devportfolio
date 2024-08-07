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

const TypewriterEffectSmooth = React.lazy(
  () => import("./components/ui/typewriter-effect")
);
const Navbar = Loadable(React.lazy(() => import("./components/hero/Navbar")));
const HeroText = Loadable(React.lazy(() => import("./components/hero/HeroText")))
const Data = React.lazy(() => import("./Data"));

function App() {
  const [results, SetResults] = useState<any[]>([]);

  // const fetchDodo = useCallback(async () => {
  //   try {
  //     const request = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const result = await request.json();
  //     SetResults(result);
  //   } catch (error: any) {
  //     console.log("error in fetch todos ", error.message);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchDodo();
  // }, [fetchDodo]);

  return (
    <>
    <MaxWidthWrapper classname="">

    
         <Hero />

      <section id="about" className="w-full h-[100vh] mx-auto mt-[35vh] md:mt-[0vh]">
        <div className="w-full flex justify-between md:flex-col flex-col lg:flex-row items-center ">
       <div className="flex-[2]">
        <About />
       </div>
       <div className="flex-1 h-full mt-[5vh] md:mt-[5vh] lg:mt-[0vh] ml-[5vw] items-center">
        <ProfileImg />
       </div>
        </div>
      </section>

    </MaxWidthWrapper>


   

      {/* <div className="flex flex-col items-center justify-center mt-5  ">
       
        <Data />
        <Model />
      </div> */}
      {/* // gsap.timeline().fromTo(
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
    // ); */}
    </>
  );
}

export default App;
