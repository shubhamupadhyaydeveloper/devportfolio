import React from 'react'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);


const Flips = () => {
  const handleClick = () => {
     const state = Flip.getState(".box")
     const redBox = Flip.getState(".redbox")
     Flip.from(state,{
        x : redBox.targets.values.length,
        duration : 1,
        ease : "power2.inOut"
     })
  }
  return (
    <>
    <div className='text-white'>Flip</div>
    <div className='w-full flex justify-between'>
    <div className='w-40 h-40 bg-blue-400 box' onClick={handleClick}></div>
    <div className='w-40 h-40 bg-red-400 redbox'></div>
    </div>
    </>
  )
}

export default Flips;