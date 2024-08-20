import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Hoodie(props) {
  const { nodes, materials } = useGLTF("/hoodie.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.013, 0.392, -0.095]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.hoodie}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11_1.geometry}
          material={materials["2155_U-circular_French_Terry_FRONT_39599_5"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11_2.geometry}
          material={materials["2155_U-circular_French_Terry_FRONT_39599_7"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hoodie.glb");
