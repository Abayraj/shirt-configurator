import { Environment } from "@react-three/drei";
import React from "react";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={1} />

      <Environment preset="studio" />
    </>
  );
}
