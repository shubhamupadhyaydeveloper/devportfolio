import React, { useEffect, useState, Suspense, useRef } from "react";
import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Html } from "@react-three/drei";
import CanvasLoader from "./ModelLoader";
import ScrollReveal from "./components/ScrollReveal";

useGLTF.preload("./dog.glb");

function ReactModel({ isMobile }) {
  const reactModel = useGLTF("./reactscene.gltf");
  const modelRef = useRef<any>(null);

  const model = useGLTF("./dog.glb");
  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });
  return (
    <>
      <mesh ref={modelRef}>
        <hemisphereLight intensity={2} shadow={"#ffffff"} castShadow={false} />
        <primitive
          object={model.scene}
          scale={isMobile ? .5 : 0.45}
          position={[0, -0.4, 0]}       // ⬅️ Optional, keeps model centered
          rotation={[0, 1.1, 0]}
        />
      </mesh>
      <Html wrapperClass="dog">Hi, I am dog 👍</Html>

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
    <div
      data-scroll-section
      className="
        mt-[15vh]
        md:mt-[10vh]
        w-full 
        h-[250px] sm:h-[350px] 
        md:w-[50vw]
      "
    >
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        camera={{ position: [4, 2, 5], fov: 35 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={true} />
          <ReactModel isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>

  );
};

export default Model;
