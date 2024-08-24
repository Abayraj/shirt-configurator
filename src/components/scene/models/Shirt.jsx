import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useModelStore from "@/store/useStore";
import * as THREE from "three";

export function Shirt(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/shirt.glb");
  const { color, isRotating,image } = useModelStore();

  const textureRef = useRef();



  const canvas = Array.from(document.getElementsByTagName("canvas"))[1];
  const ctx = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(ctx.canvas);

  texture.encoding = THREE.sRGBEncoding;
  texture.anisotropy = 16;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  textureRef.current = texture;

  useFrame((state, delta) => {
    if (isRotating) {
      ref.current.rotation.y += delta;
    }
    if (materials.cloth) {
      materials.cloth.color.set(color);
    }
    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  });

  const customMaterial = new THREE.MeshBasicMaterial({
    map: textureRef.current,
    side: THREE.DoubleSide,
    transparent: true,
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
      <mesh
        geometry={nodes.Object_4.geometry}
        material={customMaterial}
        rotation={[Math.PI / 2, 0, -1.619]}
      />
    </group>
  );
}

useGLTF.preload("/shirt.glb");
