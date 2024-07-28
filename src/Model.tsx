import React, { useEffect, useState, Suspense, useRef } from "react";
import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
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
  const reactModel = useGLTF("./reactscene.gltf");
  const modelRef = useRef<any>(null);

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });
  return (
    <mesh ref={modelRef} scale={4}>
      <hemisphereLight intensity={2} groundColor="black" />
      <primitive
        object={reactModel.scene}
        scale={isMobile ? 2 : 2}
        rotation={[-0, 1.3, -0.01]}
      />
    </mesh>
  );
}

const Model = () => {
  const [isMobile, setIsMobile] = useState(false);

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
    <div className="md:mt-[9vh] -mt-[7vh] md:mr-[23vw] md:w-[35vw] md:h-[50vh] w-full items-center">
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 30, near: 1, far: 40 }}
        gl={{ preserveDrawingBuffer: true, antialias: false }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 2} // Prevent flipping upside down
            maxPolarAngle={Math.PI / 2}
          />
          <ReactModel isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Model;
