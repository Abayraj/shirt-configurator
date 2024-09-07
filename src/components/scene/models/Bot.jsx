import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Bot(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/animatedBot.glb')
  const { actions } = useAnimations(animations, group)


  useEffect(()=>{
    actions["walking"].reset().fadeIn(1).play()
  },[actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Tpose" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Alpha_Joints"
            geometry={nodes.Alpha_Joints.geometry}
            material={materials.Alpha_Joints_MAT}
            skeleton={nodes.Alpha_Joints.skeleton}
          />
          <skinnedMesh
            name="Alpha_Surface"
            geometry={nodes.Alpha_Surface.geometry}
            material={materials.Alpha_Body_MAT}
            skeleton={nodes.Alpha_Surface.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          position={[0, 1.158, 0]}
          scale={0.447}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/animatedBot.glb')