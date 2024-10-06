import React, { useEffect, useRef, useState } from "react";
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
import { useControls } from "leva";
import { Stage1 } from "./models/Stage1";
import Effects from "./utils/Effects";

export default function Experience() {
  const { selectedModel, stage, image } = useModelStore();
  const controls = useRef();
  const dLight = useRef();

  const [texture, setTexture] = useState(null);

  useHelper(dLight, THREE.DirectionalLightHelper, 1, "red");

  // const { intensity, positionX, positionY, positionZ } = useControls({
  //   intensity: { value: 4, min: 0, max: 20, step: 0.1 },
  //   positionX: { value: 5, min: -20, max: 20, step: 0.1 },
  //   positionY: { value: 16.6, min: -20, max: 20, step: 0.1 },
  //   positionZ: { value: -20, min: -20, max: 20, step: 0.1 },
  // });

  const forestTexture = useTexture("/images/forest.jpg");

  useEffect(() => {
    if (image) {
      const loader = new THREE.TextureLoader();
      loader.load(image, (loadedTexture) => {
        setTexture(loadedTexture);
      });
    }
  }, [image]);

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
      <ambientLight intensity={1} />

      <CameraControls
        ref={controls}
        enablePan={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.1}
        minDistance={2}
        maxDistance={6}
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
        <Shirt position={[0, 0.3, 0]} scale={0.6} />
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
          <Stars speed={0.5} count={2000} factor={3} fade={true} />
          <Effects />

          <Stage2 scale={6} position={[0, 0, -0.01]} />

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.4, 0]}>
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

          <Environment preset="city" />
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
            <meshStandardMaterial map={forestTexture} side={THREE.BackSide} />
          </mesh>
          <Environment preset="sunset" />
        </group>
      ) : (
        ""
      )}
      {stage === "stage4" ? (
        <>
          <Environment preset="studio" />
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial side={THREE.BackSide} color={"#101010"} />
          </mesh>
        </>
      ) : (
        ""
      )}
      {stage === "stage5" ? (
        <>
          <Environment preset="sunset" />
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={texture} side={THREE.BackSide} />
          </mesh>
        </>
      ) : (
        ""
      )}
    </>
  );
}
