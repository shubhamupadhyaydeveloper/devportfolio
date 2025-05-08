import React from 'react'
import Terminal from './components/Terminal';
import ButtonPrimary from '../ButtonPrimary';

const AboutPage = () => {
  return (
    <div className='h-screen mt-[30vh]'>
         {/* <h1>this is abbout page</h1> */}
         <div className="max-w-5xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">About</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
           below little detail about myself more you in my linkedin profile visit
          </p>
        </div>
         <Terminal />
    </div>
  )
}

export default AboutPage;