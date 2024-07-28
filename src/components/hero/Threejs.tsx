import { OrbitControls } from '@react-three/drei';
import { Canvas,useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

function RenderModels() {
    const modelRef = useRef<any>(null)
    useFrame(() =>{
        modelRef.current.rotation.y += .01
    })
    return (
        <>
        <group ref={modelRef}>
        <mesh
         scale={1.2}
        >
            {/* <boxGeometry /> */}
            <sphereGeometry />
            {/* <torusKnotGeometry  /> */}
            {/* <meshNormalMaterial wireframe /> */}
            <meshNormalMaterial  wireframe/>
        </mesh>

        <mesh position-x={-2}>
            <boxGeometry />
             <meshNormalMaterial  wireframe />
             {/* <OrbitControls /> */}
        </mesh>
       </group>

        <mesh position-y={-2} rotation-x={-Math.PI * .5} scale={5}>
           <planeGeometry />
           <meshBasicMaterial color={"greenyellow"} />
        </mesh>
        </>
    )
}

const Threejs = () => {

  return (
    <div className='text-white w-full h-screen'>
        <Canvas>
                  <RenderModels />
                  <OrbitControls  />
        </Canvas>
    </div>
  )
}

export default Threejs;