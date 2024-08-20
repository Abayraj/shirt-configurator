import React, { useEffect, useRef } from "react";
import { Shirt } from "./models/Shirt";
import Lights from "./utils/Lights";
import Effects from "./utils/Effects";
import { CameraControls, MeshReflectorMaterial } from "@react-three/drei";
import { Hoodie } from "./models/Hoodie";

export default function Experience() {
  const controls = useRef();

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1.6;
    controls.current.dolly(22, true);
  };

  useEffect(() => {
    intro();
    controls.current.setLookAt(0, 1, 3, 0, 0.5, 0, true);
  }, []);
  return (
    <>
      <CameraControls ref={controls} />
      {/* <Shirt position={[0, 0.1, 0]} rotation-y={4.6} /> */}
      <Hoodie />

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>
      <Lights />
      <Effects />
    </>
  );
}
