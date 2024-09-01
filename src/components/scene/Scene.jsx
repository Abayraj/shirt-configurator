import { Preload, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Experience from "./Experience";
import Effects from "./utils/Effects";
import * as THREE from "three";

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      shadows
      camera={{ position: [0, 0, 3], fov: 30 }}
      // gl={{
      //   antialias: false,
      //   toneMapping: THREE.LinearToneMapping,
      //   toneMappingExposure: 2,
      //   preserveDrawingBuffer: true,
      // }}
    >
      <color attach="background" args={["#15151a"]} />
      <fog attach="fog" args={["#000", 10, 60]} />
      <Suspense fallback={null}>
        <Experience />
        <Effects />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}
