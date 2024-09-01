import { Preload, useTexture } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import Experience from "./Experience";

export default function Scene() {
  return (
    <Canvas flat shadows camera={{ position: [0, 0, 3], fov: 30 }}>
      <color attach="background" args={["#15151a"]} />
      {/* <fog attach="fog" args={["#15151a", 10, 15]} /> */}
      <Suspense fallback={null}>
        {/* <Background /> */}
        <Experience />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

function Background() {
  const { scene } = useThree();
  const texture = useTexture("/bgRing.jpg");
  useEffect(() => {
    scene.background = texture;
  }, [texture, scene]);

  return null;
}
