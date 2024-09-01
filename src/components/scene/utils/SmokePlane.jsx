import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export const SmokePlane = ({ count = 100 }) => {
  const texture = useTexture("/logo.jpg");
  const meshRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        0,
        (Math.random() - 0.5) * 10
      );
      const scale = Math.random() * 1 + 0.5;
      const speed = Math.random() * 0.01 + 0.01;
      temp.push({ position, scale, speed });
    }
    return temp;
  }, [count]);

//   useFrame(() => {
//     const mesh = meshRef.current;
//     const positions = mesh.geometry.attributes.position.array;
    
//     particles.forEach((particle, i) => {
//       positions[i * 3] = particle.position.x;
//       positions[i * 3 + 1] = particle.position.y;
//       positions[i * 3 + 2] = particle.position.z;

//       particle.position.y += particle.speed;
//       if (particle.position.y > 2) particle.position.y = 0;
//     });

//     mesh.geometry.attributes.position.needsUpdate = true;
//   });

  return (
    <points ref={meshRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          array={new Float32Array(particles.length * 3)}
          count={particles.length}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={texture}
        size={1}
        sizeAttenuation
        transparent
        alphaTest={0.5}
        opacity={0.7}
      />
    </points>
  );
};
