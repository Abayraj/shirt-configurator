import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Experience from "./Experience";

export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 3], fov: 30 }}>
      <color attach="background" args={["#15151a"]} />
      <fog attach={"fog"} args={["#15151a", 5, 30]} />
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
  );
}
