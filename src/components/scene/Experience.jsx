import React, { useEffect, useRef, useState } from "react";
import { Shirt } from "./models/Shirt";
import {
  CameraControls,
  Environment,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { Hoodie } from "./models/Hoodie";
import useModelStore from "@/store/useStore";
import * as THREE from "three";
import { PlaneModel } from "./models/Plane";

export default function Experience() {
  const { selectedModel, stage, image, walking } = useModelStore();
  const controls = useRef();
  const dLight = useRef();

  const [texture, setTexture] = useState(null);

  useHelper(dLight, THREE.DirectionalLightHelper, 1, "red");

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
    controls.current.setLookAt(0, 1, 5, 0, 0.5, 0, true);
  }, [selectedModel]);
  return (
    <>
      <ambientLight intensity={0.4} />

      <CameraControls
        ref={controls}
        enablePan={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.1}
        minDistance={2}
        maxDistance={5}
      />

      {selectedModel === "shirt" ? (
        <>
          <Shirt
            position={[0, 0.1, 0]}
            scale={0.7}
            // visible={walking ? true : false}
          />
        </>
      ) : (
        ""
      )}

      {selectedModel === "hoodie" ? (
        <>
          <Hoodie />
        </>
      ) : (
        ""
      )}

      {stage === "stage1" ? (
        <>
          <Environment preset="city" />
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshBasicMaterial side={THREE.BackSide} color={"#181C14"} />
          </mesh>
        </>
      ) : (
        ""
      )}

      {stage === "stage2" ? (
        <>
          <PlaneModel scale={2} />
          <Environment files={"/images/garden.jpg"} />
        </>
      ) : (
        ""
      )}

      {stage === "stage3" ? (
        <>
          {/* <PlaneModel scale={2} /> */}
          <Environment preset="city" />
        </>
      ) : (
        ""
      )}
    </>
  );
}
