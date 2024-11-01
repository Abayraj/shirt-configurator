import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Experience from "./Experience";
import Effects from "./utils/Effects";

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ position: [0, 0, 10], fov: 30 }}
      gl={{
        antialias: true,
        // toneMapping: THREE.ACESFilmicToneMapping,
        // toneMappingExposure: 2,
        // outputEncoding: THREE.sRGBEncoding,
      }}
    >
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
  );
}
