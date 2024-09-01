import React, { useRef } from "react";
import { Loader, useGLTF } from "@react-three/drei";

export function Stage2(props) {
  const { nodes, materials } = useGLTF("/tubelight.glb");

  materials.stage.emissiveIntensity = 1;
  materials.light.emissiveIntensity = 20;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.stage}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials.light}
      />
    </group>
  );
}

useGLTF.preload("/tubelight.glb");
