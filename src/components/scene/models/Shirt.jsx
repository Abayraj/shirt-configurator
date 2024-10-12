import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useModelStore from "@/store/useStore";
import * as THREE from "three";

export function Shirt(props) {
  const ref = useRef();
  const { nodes, materials, animations } = useGLTF("/models/shirt/shirt1.glb");
  const { actions } = useAnimations(animations, ref);
  const { color, isRotating, walking, canvasImage } = useModelStore();

  useEffect(() => {
    if (walking) {
      actions["KeyAction.004"].reset().fadeIn(0.5).play();
    } else {
      actions["KeyAction.004"].fadeOut(0.5).stop();
    }
  }, [walking, actions]);

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
    custom.color.set(color);
    if (materials.custom) {
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

  const custom = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    roughness: 1,
    metalness: 0,
    emissive: new THREE.Color(0x050505),
    emissiveIntensity: 0.1,
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="shirt"
          castShadow
          receiveShadow
          geometry={nodes.shirt.geometry}
          material={custom}
          morphTargetDictionary={nodes.shirt.morphTargetDictionary}
          morphTargetInfluences={nodes.shirt.morphTargetInfluences}
        ></mesh>
        <mesh
          name="shirt"
          geometry={nodes.shirt.geometry}
          material={customMaterial}
          morphTargetDictionary={nodes.shirt.morphTargetDictionary}
          morphTargetInfluences={nodes.shirt.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/shirt/shirt1.glb");
