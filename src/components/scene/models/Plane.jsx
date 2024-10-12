import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PlaneModel(props) {
  const { nodes, materials } = useGLTF("/models/stage/plane.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.plane}
        scale={3.017}
      />
    </group>
  );
}

useGLTF.preload("/models/stage/plane.glb");
