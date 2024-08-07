import React, { useEffect, useState, Suspense, useRef } from "react";
import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Preload,
  ContactShadows,
  Environment,
  TransformControls,
  Html
} from "@react-three/drei";
import CanvasLoader from "./ModelLoader";

useGLTF.preload("./dog.glb")

function ReactModel({ isMobile }) {
  const reactModel = useGLTF("./reactscene.gltf");
  const modelRef = useRef<any>(null);

  const model = useGLTF("./dog.glb")
  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });
  return (
    <>
    <mesh ref={modelRef}  >
      <hemisphereLight intensity={3} groundColor="black" />
      <primitive
        object={model.scene}
        scale={isMobile ? .9 : .9}
        rotation={[-0, 1.1, -0.01]}
      />
    </mesh>
    <Html
     wrapperClass="dog"
    >
        Hi, I am dog 👍
    </Html>
    </>
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
    <div className="md:-mt-[12vh] lg:mt-[9vh] -mt-[12vh] md:ml-[12vw] lg:absolute lg:right-[1vw] xl:right-[15vw] -ml-[5vw] md:w-[55vw] xl:w-[29vw] lg:w-[35vw] 2xl:w-[23vw]  md:h-[70vh] lg:h-[50vh] xl:h-[70vh] w-full h-[50vh] items-center">
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 30, near: 1, far: 40 }}
        gl={{ preserveDrawingBuffer: true, antialias: false }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={true}
          />
          <ReactModel isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Model;
