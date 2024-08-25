import React, { useEffect, useRef } from "react";
import { Shirt } from "./models/Shirt";
import Lights from "./utils/Lights";
import Effects from "./utils/Effects";
import { CameraControls, } from "@react-three/drei";
import { Hoodie } from "./models/Hoodie";
import useModelStore from "@/store/useStore";

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
    controls.current.setLookAt(0, 1, 3, 0, 0.5, 0, true);
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


      <Lights />
      <Effects />
    </>
  );
}
