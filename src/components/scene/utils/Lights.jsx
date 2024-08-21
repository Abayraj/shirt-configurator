import { ContactShadows, Environment } from "@react-three/drei";
import React from "react";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* <hemisphereLight intensity={0.5} /> */}

      <Environment frames={Infinity} resolution={512} preset="city"  />
    </>
  );
}
