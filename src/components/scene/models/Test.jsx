import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export function Test(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/shirt/hoodie.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions["Key.001Action"];
    console.log(actions);
    // action.loop = THREE.LoopRepeat;
    action.reset().fadeIn(0.5).play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
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
        <mesh
          name="cloth_parent003"
          castShadow
          receiveShadow
          geometry={nodes.cloth_parent003.geometry}
          material={materials.hoodie}
          morphTargetDictionary={nodes.cloth_parent003.morphTargetDictionary}
          morphTargetInfluences={nodes.cloth_parent003.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/shirt/hoodie.glb");
