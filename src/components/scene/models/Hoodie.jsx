import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useModelStore from "@/store/useStore";
import * as THREE from "three";

export function Hoodie(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/models/hoodie/hoodie.glb");
  const { color, isRotating } = useModelStore();

  const textureRef = useRef();

  const canvas = Array.from(document.getElementsByTagName("canvas"))[1];
  const ctx = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(ctx.canvas);
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;
  texture.anisotropy = 16;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  textureRef.current = texture;

  useFrame((state, delta) => {
    if (isRotating) {
      ref.current.rotation.y += delta;
    }
    if (materials.hodie) {
      materials.hodie.color.set(color);
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
        geometry={nodes.Baggy_Hoodie_obj.geometry}
        material={materials.hodie}
        position={[0.033, 0.478, -0.018]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Baggy_Hoodie_obj.geometry}
        material={customMaterial}
        position={[0.033, 0.478, -0.018]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/hoodie/hoodie.glb");
