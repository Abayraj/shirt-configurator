import React, { useEffect, useRef } from "react";
import { Shirt } from "./models/Shirt";
import Effects from "./utils/Effects";
import { CameraControls, ContactShadows, Environment, MeshReflectorMaterial } from "@react-three/drei";
import { Hoodie } from "./models/Hoodie";
import useModelStore from "@/store/useStore";
import { Stage1 } from "./models/Stage1";
import { Stage2 } from "./models/Stage2";

export default function Experience() {
  const selectedModel = useModelStore((state) => state.selectedModel);
  const controls = useRef();

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1;
    controls.current.dolly(22, true);
  };

  useEffect(() => {
    if (selectedModel === "shirt" || "hoodie") {
      intro();
    }
    controls.current.setLookAt(0, 1, 4, 0, 0.5, 0, true);
  }, [selectedModel]);
  return (
    <>
      <CameraControls
        ref={controls}
        // enablePan={false}
        // maxPolarAngle={Math.PI / 2 + 0.3}
        // minDistance={0.4}
        // maxDistance={3}
      />
      {selectedModel === "shirt" ? (
        <Shirt position={[0, 0.1, 0]} rotation-y={4.6} />
      ) : (
        ""
      )}

      {/* {selectedModel === "hoodie" ? <Hoodie position={[0, 0.1, 0]} /> : ""} */}

      {/* <Stage1 position={[0, -1.3, 0]} scale={0.9} /> */}

      <Stage2 scale={6} />

      <ContactShadows
        frames={1}
        rotation-x={[Math.PI / 2]}
        position={[0, -0.4, 0]}
        far={1}
        width={1.5}
        height={1.5}
        blur={0.2}
      />

<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[1000, 1000]}
          resolution={256}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#000"
          metalness={0.5}
        />
      </mesh>

      <ambientLight intensity={0.5} />

      <Environment preset="city" />
      <Effects />
    </>
  );
}
