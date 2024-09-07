import React, { useEffect, useRef } from "react";
import { Shirt } from "./models/Shirt";
import {
  CameraControls,
  Environment,
  MeshReflectorMaterial,
  Stars,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { Hoodie } from "./models/Hoodie";
import useModelStore from "@/store/useStore";
import { Stage2 } from "./models/Stage2";
import * as THREE from "three";
import { Bot } from "./models/Bot";
import { useControls } from "leva";
import { Stage1 } from "./models/Stage1";
import { Bg1 } from "./models/bg1";

export default function Experience() {
  const { selectedModel, stage } = useModelStore();
  const controls = useRef();
  const dLight = useRef();

  useHelper(dLight, THREE.DirectionalLightHelper, 1, "red");

  // const { intensity, positionX, positionY, positionZ } = useControls({
  //   intensity: { value: 4, min: 0, max: 20, step: 0.1 },
  //   positionX: { value: 5, min: -20, max: 20, step: 0.1 },
  //   positionY: { value: 16.6, min: -20, max: 20, step: 0.1 },
  //   positionZ: { value: -20, min: -20, max: 20, step: 0.1 },
  // });

  const bgmap = useTexture("/anime.jpg");

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
      <Stars speed={0.5} count={2000} factor={3} fade={true} />
      {/* <ambientLight intensity={1} /> */}

      <CameraControls
        ref={controls}
        enablePan={false}
        // minPolarAngle={Math.PI / 2.2}
        // maxPolarAngle={Math.PI / 2}
        // minDistance={2}
        // maxDistance={6}
      />

      {/* <directionalLight
        ref={dLight}
        castShadow
        color={"#fff"}
        intensity={intensity}
        position={[positionX, positionY, positionZ]}
        shadow-mapSize={[1024, 1024]}
        // shadow-camera-left={-10}
        // shadow-camera-right={10}
        // shadow-camera-top={10}
        // shadow-camera-bottom={-10}
        // shadow-camera-near={0.5}
        // shadow-camera-far={150}
      /> */}

      {selectedModel === "shirt" ? (
        <Shirt position={[0, 0.1, 0]} rotation-y={4.6} />
      ) : (
        ""
      )}

      {selectedModel === "hoodie" ? (
        <Hoodie position={[0, 0.1, 0]} scale={0.7} />
      ) : (
        ""
      )}

      {stage === "stage1" ? (
        <group>
          <Stage2 scale={6} />

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

          <mesh
            scale={4}
            position={[4, 0.1, -1.5]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
          >
            <ringGeometry args={[0.9, 1, 4, 1]} />
            <meshStandardMaterial color="white" roughness={0.75} />
          </mesh>
          <mesh
            scale={4}
            position={[-3, 0.1, -1]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
          >
            <ringGeometry args={[0.9, 1, 3, 1]} />
            <meshStandardMaterial color="white" roughness={0.75} />
          </mesh>
          <Environment preset="lobby" />
        </group>
      ) : (
        ""
      )}

      {stage === "stage2" ? (
        <group>
          <Stage1 position={[0, -1.3, 0]} scale={0.9} />
          <Environment preset="studio" />
        </group>
      ) : (
        ""
      )}

      {stage === "stage3" ? (
        <group>
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={bgmap} side={THREE.BackSide} />
          </mesh>
          <Environment preset="sunset" />
        </group>
      ) : (
        ""
      )}
      {stage === "stage4" ? (
        <group>
          {/* <Bg1 scale={2} position={[0,-0.2,0]} /> */}
          <Environment preset="studio" ground />
        </group>
      ) : (
        ""
      )}
      {stage === "stage5" ? (
        <group>
          <Stage1 position={[0, -1.3, 0]} scale={0.9} />
          <Environment preset="studio" />
        </group>
      ) : (
        ""
      )}
    </>
  );
}
