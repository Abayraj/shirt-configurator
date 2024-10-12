import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useModelStore from "@/store/useStore";
import * as THREE from "three";

export function Hanger(props) {
  const ref = useRef();

  const { nodes, materials } = useGLTF("/models/shirt/hanger.glb");

  const { color, isRotating, canvasImage } = useModelStore();

  const textureRef = useRef(null);

  const canvas = canvasImage;
  const ctx = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(ctx.canvas);

  texture.encoding = THREE.sRGBEncoding;
  texture.premultiplyAlpha = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.flipY = false;
  texture.mipBias = 2;
  texture.needsUpdate = true;

  textureRef.current = texture;

  useFrame((state, delta) => {
    if (isRotating) {
      ref.current.rotation.y += delta;
    }

    if (materials.shirt) {
      materials.shirt.color.set(color);
    }
    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  });

  const customMaterial = new THREE.MeshStandardMaterial({
    map: textureRef.current,
    side: THREE.DoubleSide,
    transparent: true,
    roughness: 1,
  });

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shirthanger.geometry}
        material={materials.shirt}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shirthanger.geometry}
        material={customMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chain_1.geometry}
        material={materials.Material2253121}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chain_2.geometry}
        material={materials.Material2253118}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chain_3.geometry}
        material={materials.Material2253119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chain_4.geometry}
        material={materials.Material2253120}
      />
    </group>
  );
}

useGLTF.preload("/models/shirt/hanger.glb");
