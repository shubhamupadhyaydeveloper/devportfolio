import React, { useEffect, useState, Suspense } from "react";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Preload,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import CanvasLoader from "./ModelLoader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { div } from "three/webgpu";
import * as THREE from "three";

function ReactModel({ isMobile }) {
  const reactModel = useGLTF("./model/scene.gltf");

  // const soundEffects = [
  //   new Audio("/sounds/public_sounds_hit1.ogg"),
  //   new Audio("/sounds/public_sounds_hit2.ogg"),
  //   new Audio("/sounds/public_sounds_hit3.ogg"),
  //   new Audio("/sounds/public_sounds_hit4.ogg"),
  //   new Audio("/sounds/public_sounds_hit6.ogg"),
  // ];



  return (
    <mesh

      material={
        new THREE.MeshStandardMaterial({
          color: 0x2c3e50,
          roughness: 0.1,
          metalness: 0.5,
        })
      }
    >
      <hemisphereLight intensity={2} groundColor="black"/>
      <primitive
        object={reactModel.scene}
        scale={isMobile ? 20 : 60}
        rotation={[-0, 1.3, -0.01]}
      />
    </mesh>
  );
}

const Model = () => {
  const [isMobile, setIsMobile] = useState(false);

  useGSAP(() => {
    // gsap.to(".react", {
    //   y: 2 * Math.PI, // 360 degrees in radians
    //   repeat: -1,
    //   ease: "linear",
    //   duration: 10,
    // });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      style={{ width: "950px", height: "500px", margin: "auto" }}
      className="react"
    >
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 30, near: 1, far: 40 }}
        gl={{ preserveDrawingBuffer: true, antialias: false }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          /> */}
          <OrbitControls
            enableZoom={false}
            minPolarAngle={0.1} // Prevent flipping upside down
            maxPolarAngle={Math.PI - 0.1}
          />
          <ReactModel isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Model;
