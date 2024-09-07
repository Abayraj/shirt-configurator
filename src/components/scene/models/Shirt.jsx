import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useModelStore from "@/store/useStore";
import * as THREE from "three";

export function Shirt(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/shirt2.glb");
  const { color, isRotating, image } = useModelStore();

  const textureRef = useRef();

  const canvas = Array.from(document.getElementsByTagName("canvas"))[1];
  const ctx = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(ctx.canvas);

  texture.encoding = THREE.sRGBEncoding;
  texture.toneMappingExposure = 3;
  texture.anisotropy = 16;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  textureRef.current = texture;

  useFrame((state, delta) => {
    if (isRotating) {
      ref.current.rotation.y += delta;
    }
    if (materials.Material32186) {
      materials.Material32186.color.set(color);
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
       geometry={nodes.SHIRT_1.geometry}
       material={customMaterial}
       position={[0.003, 0.316, 0.001]}
       rotation={[Math.PI / 2, 0, 0]}
     />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.SHIRT_1.geometry}
        material={materials.Material32186}
        position={[0.003, 0.316, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    
    </group>
  );
}

useGLTF.preload("/shirt2.glb");
