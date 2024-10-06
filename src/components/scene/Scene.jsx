import { Preload, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Experience from "./Experience";
import Effects from "./utils/Effects";
import * as THREE from "three";

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ position: [0, 0, 10], fov: 30 }}
      gl={{
        antialias: true,
        // toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
        // toneMappingExposure: 1,
      }}
    >
      <color attach="background" args={["#15151a"]} />
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
  );
}
