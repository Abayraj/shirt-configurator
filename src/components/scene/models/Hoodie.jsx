import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useModelStore from "@/store/useStore";
import * as THREE from "three";

export function Hoodie(props) {
  const ref = useRef();
  const { nodes, materials, animations } = useGLTF("/models/shirt/hoodie.glb");
  const { actions } = useAnimations(animations, ref);

  const { color, isRotating, walking, canvasImage } = useModelStore();

  useEffect(() => {
    if (walking) {
      actions["Key.001Action"].reset().fadeIn(0.5).play();
    } else {
      actions["Key.001Action"].fadeOut(0.5).stop();
    }
  }, [walking, actions]);

  const textureRef = useRef();

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
          name="cloth_parent003"
          castShadow
          receiveShadow
          geometry={nodes.cloth_parent003.geometry}
          material={custom}
          morphTargetDictionary={nodes.cloth_parent003.morphTargetDictionary}
          morphTargetInfluences={nodes.cloth_parent003.morphTargetInfluences}
        />
        <mesh
          name="cloth_parent003"
          castShadow
          receiveShadow
          geometry={nodes.cloth_parent003.geometry}
          material={customMaterial}
          morphTargetDictionary={nodes.cloth_parent003.morphTargetDictionary}
          morphTargetInfluences={nodes.cloth_parent003.morphTargetInfluences}
        />
        <group name="chain">
          <mesh
            name="chain001"
            castShadow
            receiveShadow
            geometry={nodes.chain001.geometry}
            material={materials["Material2253121.001"]}
          />
          <mesh
            name="chain001_1"
            castShadow
            receiveShadow
            geometry={nodes.chain001_1.geometry}
            material={materials["Material2253118.001"]}
          />
          <mesh
            name="chain001_2"
            castShadow
            receiveShadow
            geometry={nodes.chain001_2.geometry}
            material={materials["Material2253119.001"]}
          />
          <mesh
            name="chain001_3"
            castShadow
            receiveShadow
            geometry={nodes.chain001_3.geometry}
            material={materials["Material2253120.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/shirt/hoodie.glb");
