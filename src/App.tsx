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
import Flips from "./components/hero/Flip";
import MaxWidthWrapper from "./components/global/MaxWithContainer";
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
      <section className="h-[100vh]">
        <Navbar />
        <div className="flex md:flex-row flex-col w-full ">
          <HeroText />
          <Model />
        </div>
      </section>
      <section className="h-[20vh]">
        <Flips />
      </section>
    </MaxWidthWrapper>
      {/* <div className="flex flex-col items-center justify-center mt-5  ">
       
        <Data />
        <Model />
      </div> */}
    </>
  );
}

export default App;
