import React, { useEffect, useMemo, useRef } from "react";
import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import useModelStore from "@/store/useStore";
import * as THREE from "three";

export function Shirt(props) {
  const ref = useRef();
  const { nodes, materials, animations } = useGLTF("/models/shirt/shirt.glb");
  const { actions } = useAnimations(animations, ref);
  const { color, isRotating, showChain, walking } = useModelStore();

  useEffect(() => {
    if (walking) {
      actions["KeyAction.004"].reset().fadeIn(0.5).play();
    } else {
      actions["KeyAction.004"].fadeOut(0.5).stop();
    }
  }, [walking, actions]);

  const { gl } = useThree();

  const textureRef = useRef();

  const canvas = Array.from(document.getElementsByTagName("canvas"))[1];
  const ctx = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(ctx.canvas);

  texture.encoding = THREE.sRGBEncoding;
  texture.premultiplyAlpha = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  texture.anisotropy = gl.capabilities.getMaxAnisotropy();
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
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="shirt"
          castShadow
          receiveShadow
          geometry={nodes.shirt.geometry}
          material={materials.shirt}
          morphTargetDictionary={nodes.shirt.morphTargetDictionary}
          morphTargetInfluences={nodes.shirt.morphTargetInfluences}
          position={[-0.027, 0.595, -0.276]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.002}
        />
        <mesh
          name="shirt"
          geometry={nodes.shirt.geometry}
          material={customMaterial}
          morphTargetDictionary={nodes.shirt.morphTargetDictionary}
          morphTargetInfluences={nodes.shirt.morphTargetInfluences}
          position={[-0.027, 0.595, -0.276]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.002}
        />
        {showChain && (
          <group
            name="chain"
            position={[-0.038, 1.598, -0.263]}
            rotation={[Math.PI / 2, 0, 3.111]}
            scale={0.038}
          >
            <mesh
              name="Obj_Avatar_Shape002"
              castShadow
              receiveShadow
              geometry={nodes.Obj_Avatar_Shape002.geometry}
              material={materials.Material2253121}
            />
            <mesh
              name="Obj_Avatar_Shape002_1"
              castShadow
              receiveShadow
              geometry={nodes.Obj_Avatar_Shape002_1.geometry}
              material={materials.Material2253118}
            />
            <mesh
              name="Obj_Avatar_Shape002_2"
              castShadow
              receiveShadow
              geometry={nodes.Obj_Avatar_Shape002_2.geometry}
              material={materials.Material2253119}
            />
            <mesh
              name="Obj_Avatar_Shape002_3"
              castShadow
              receiveShadow
              geometry={nodes.Obj_Avatar_Shape002_3.geometry}
              material={materials.Material2253120}
            />
          </group>
        )}
      </group>
    </group>
  );
}

useGLTF.preload("/models/shirt/shirt.glb");
