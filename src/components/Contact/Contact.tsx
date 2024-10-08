import React from 'react'
import Spline from "@splinetool/react-spline";
import "../../index.css";

const Contact = () => {
  return (
    <div className="overflow-hidden">
     <h1>hello contact start</h1>
      <Spline
        className="w-[20vw] h-[20vh]"
        scene="https://prod.spline.design/Ucemc1xmkBF0r9OY/scene.splinecode"
      />
    </div>
  );
}

export default Contact;