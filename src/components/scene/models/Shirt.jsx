import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Color, MeshBasicMaterial, MeshStandardMaterial } from "three";
import { useFrame } from "@react-three/fiber";

export function Shirt(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/shirt.glb");

  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });

  const bloomColor = new Color("#ffffff");

  const customMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: bloomColor,
        toneMapped: false,
      }),
    []
  );
  return (
    <group {...props} dispose={null} ref={ref}>
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
