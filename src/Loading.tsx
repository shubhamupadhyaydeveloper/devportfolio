import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loading = () => {
  
  useGSAP(() => {
     gsap.fromTo(".load",{
         opacity : 0,
         y : 20
     }, {
        opacity : 1,
        y : 0,
        ease : "power1.inOut",
        stagger : .2,
        delay : .5
     })
  },[])
  

  return (
    <div className="flex items-center justify-center h-screen">
        <div className='flex gap-2'>
              <h1 className='text-white text-4xl load'>My</h1>
              <h1 className='text-white text-4xl load'>Name is </h1>
              <h1 className='text-white text-4xl load'>Shubham upadhyay</h1>
        </div>
    </div>
  );
};

export default Loading;
