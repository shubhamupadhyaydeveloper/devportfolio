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
import HeroText from "./components/hero/HeroText";
import MaxWidthWrapper from "./components/global/MaxWithContainer";
import { BackgroundBeamsDemo } from "./components/hero/Background";
import { BackgroundBeams } from "./components/ui/background-beams";

const TypewriterEffectSmooth = React.lazy(
  () => import("./components/ui/typewriter-effect")
);
const Navbar = Loadable(React.lazy(() => import("./components/hero/Navbar")));
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
      <MaxWidthWrapper classname="overflow-hidden">
        <section className="h-screen w-full ">
          <Navbar />
          <div className="flex md:flex-row flex-col gap-5 ">
            <HeroText />
            <div className="mt-[15vh] -mr-[9vw]">
              <Model />
            </div>
          </div>
        </section>
        <section className="h-screen  w-full"></section>
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
