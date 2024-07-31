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
import { BackgroundBeamsDemo } from "./components/hero/Background";
import { BackgroundBeams } from "./components/ui/background-beams";
import Threejs from "./components/hero/Threejs";

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
      <MaxWidthWrapper classname="overflow-hidden">
      <section className="h-screen w-full ">
        <Navbar />
        <div className="flex md:flex-col lg:flex-row flex-col gap-5 ">
          <HeroText />
          <div className="mt-[15vh] -mr-[9vw]">
            <Model />
          </div>
        </div>
        <div className="flex mt-[3vh] xl:mt-[15vh] items-center justify-center">

        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors">
         Scroll 😁
      </button>
        </div>
      </section>
      <section className="h-screen  w-full"></section>
        {/* <Threejs /> */}
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
