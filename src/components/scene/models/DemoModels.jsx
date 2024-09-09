//! model shirt_baked.glb

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload("/shirt_baked.glb");

//! mode shirt2.glb
export function Shirt(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/shirt2.glb");
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


//! model  ("/shirt_baked.glb")
<group {...props} dispose={null} ref={ref}>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.T_Shirt_male.geometry}
  material={materials.lambert1}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.T_Shirt_male.geometry}
  material={customMaterial}
/>
</group>