import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useModelStore from "@/store/useStore";
import { Color, MeshStandardMaterial } from "three";

export function Hoodie(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/hoodie.glb");

  const { color, isRotating } = useModelStore();

  useFrame((state, delta) => {
    if (isRotating) {
      ref.current.rotation.y += delta;
    }
    if (materials.cloth) {
      materials.cloth.color.set(color);
    }
  });

  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[0.013, 0.392, -0.095]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.hoodie}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hoodie.glb");
