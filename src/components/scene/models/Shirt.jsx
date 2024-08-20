import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Color, MeshBasicMaterial, MeshStandardMaterial } from "three";

export function Shirt(props) {
  const { nodes, materials } = useGLTF("/shirt.glb");

  const bloomColor = new Color("#ff233f");

  const customMaterial = useMemo(() => new MeshStandardMaterial({
    color: bloomColor,
    toneMapped: false, // This will prevent the color from being affected by tone mapping
  }), [])
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={customMaterial}
        rotation={[Math.PI / 2, 0, -1.619]}
      />
    </group>
  );
}

useGLTF.preload("/shirt.glb");
