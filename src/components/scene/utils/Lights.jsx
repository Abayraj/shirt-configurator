import { ContactShadows, Environment } from "@react-three/drei";
import React from "react";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* <hemisphereLight intensity={0.5} /> */}
{/* 
      <ContactShadows
        resolution={1024}
        frames={1}
        position={[0, -0.1, 0]}
        scale={15}
        blur={0.5}
        opacity={1}
        far={20}
      /> */}
      <mesh
        scale={4}
        position={[3, 0.1, -1.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
      >
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <mesh
        scale={4}
        position={[-3, 0.1, -1]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
      >
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <Environment frames={Infinity} resolution={512} preset="city"  />
    </>
  );
}
