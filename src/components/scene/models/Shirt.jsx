import React, { useEffect, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import {
  Color,
  MeshStandardMaterial,
  RepeatWrapping,
  TextureLoader,
} from "three";
import { useFrame } from "@react-three/fiber";
import useModelStore from "@/store/useStore";

export function Shirt(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/shirt.glb");
  const { color, isRotating, image } = useModelStore();



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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.cloth}
        rotation={[Math.PI / 2, 0, -1.619]}
      />
    </group>
  );
}

useGLTF.preload("/shirt.glb");
