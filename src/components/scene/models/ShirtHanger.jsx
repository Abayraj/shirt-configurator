import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ShirtHanger(props) {
  const { nodes, materials } = useGLTF("/shirtHangerV2.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.367, -0.016]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SHIRT_HANGER_FBX_SAM_1.geometry}
          material={materials.Material32186}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SHIRT_HANGER_FBX_SAM_2.geometry}
          material={materials.Material12946}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SHIRT_HANGER_FBX_SAM_3.geometry}
          material={materials.Material13012}
        />
      </group>
      <group
        position={[-0.006, 0.958, -0.014]}
        rotation={[Math.PI / 2, 0, 3.111]}
        scale={0.024}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_Avatar_Shape002.geometry}
          material={materials.Material2253121}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_Avatar_Shape002_1.geometry}
          material={materials.Material2253118}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_Avatar_Shape002_2.geometry}
          material={materials.Material2253119}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_Avatar_Shape002_3.geometry}
          material={materials.Material2253120}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/shirtHangerV2.glb");
