import React, { useRef } from "react";
import { Loader, useGLTF } from "@react-three/drei";

export function Stage2(props) {
  const { nodes, materials } = useGLTF("/models/stage/stage1.glb");

  materials.stage.emissiveIntensity = 10;
  materials.light.emissiveIntensity = 40;

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.stage}
      />
      <mesh
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials.light}
      />
    </group>
  );
}

useGLTF.preload("/models/stage/stage1.glb");
