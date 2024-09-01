import React, { useEffect, useRef } from "react";
import { Shirt } from "./models/Shirt";
import {
  CameraControls,
  Cloud,
  Clouds,
  Environment,
  MeshReflectorMaterial,
  Stars,
} from "@react-three/drei";
import { Hoodie } from "./models/Hoodie";
import useModelStore from "@/store/useStore";
import { Stage2 } from "./models/Stage2";
import * as THREE from "three";
import { SmokePlane } from "./utils/SmokePlane";

export default function Experience() {
  const selectedModel = useModelStore((state) => state.selectedModel);
  const controls = useRef();

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1;
    controls.current.dolly(22, true);
  };

  useEffect(() => {
    if (selectedModel === "shirt" || "hoodie") {
      intro();
    }
    controls.current.setLookAt(0, 1, 4, 0, 0.5, 0, true);
  }, [selectedModel]);
  return (
    <>
      <Stars speed={0.5} count={2000} factor={3} fade={true} />

      <CameraControls
        ref={controls}
        enablePan={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={6}
      />
      {selectedModel === "shirt" ? (
        <Shirt position={[0, 0.1, 0]} rotation-y={4.6} />
      ) : (
        ""
      )}

      {/* {selectedModel === "hoodie" ? <Hoodie position={[0, 0.1, 0]} /> : ""} */}

      {/* <Stage1 position={[0, -1.3, 0]} scale={0.9} /> */}

      <Stage2 scale={6} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[1000, 1000]}
          resolution={256}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#000"
          metalness={0.5}
        />
      </mesh>

      {/* <SmokePlane /> */}

      <mesh
        scale={4}
        position={[4, 0.1, -1.5]}
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


      <Environment preset="city" />
    </>
  );
}
