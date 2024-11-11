//! Virtual shirt model code below

<group {...props} dispose={null} ref={ref}>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.oversizedtshirt.geometry}
    material={materials.susannas_help_PBR}
    rotation={[Math.PI / 2, 0, 0]}
    scale={0.01}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.oversizedtshirt.geometry}
    material={customMaterial}
    rotation={[Math.PI / 2, 0, 0]}
    scale={0.01}
  />
</group>;

//! model shirt_baked.glb

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload("/shirt_baked.glb");

//! mode shirt2.glb
export function Shirt(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/shirt2.glb");
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SHIRT_1.geometry}
        material={customMaterial}
        position={[0.003, 0.316, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SHIRT_1.geometry}
        material={materials.Material32186}
        position={[0.003, 0.316, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/shirt2.glb");

//! model  ("/shirt_baked.glb")
<group {...props} dispose={null} ref={ref}>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.T_Shirt_male.geometry}
    material={materials.lambert1}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.T_Shirt_male.geometry}
    material={customMaterial}
  />
</group>;

//! code for ui configurator design for mobile like geko.com

export default function MobileConfig() {
  const { isRotating, setIsRotating, color, setColor } = useModelStore();

  const [activeTab, setActiveTab] = useState("Logo");

  const handleRotationChange = (event) => {
    setIsRotating(event.target.checked);
  };

  return (
    <div className="h-full w-full  rounded-lg shadow-lg">
      <div className="flex space-x-4 border-b">
        <TabButton
          label="Colors"
          isActive={activeTab === "Colors"}
          onClick={() => setActiveTab("Colors")}
        />

        <TabButton
          label="Logo"
          isActive={activeTab === "Logo"}
          onClick={() => setActiveTab("Logo")}
        />
      </div>

      {activeTab === "Colors" && (
        <ColorSection
          isRotating={isRotating}
          handleRotationChange={handleRotationChange}
          color={color}
          setColor={setColor}
        />
      )}
      {activeTab === "Logo" && <LogoSection />}
    </div>
  );
}

const TabButton = ({ label, isActive, onClick }) => (
  <button
    className={`px-4 py-2 ${
      isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const ColorSection = ({
  isRotating,
  handleRotationChange,
  color,
  setColor,
}) => (
  <div className="flex flex-col items-start  mt-3 pl-5 ">
    <div className="flex justify-center items-center text-center gap-1 border-2 p-2 rounded-md mb-5">
      <input
        type="checkbox"
        checked={isRotating}
        onChange={handleRotationChange}
        id="rotation-checkbox"
      />
      <p>Rotation</p>
    </div>
    <div className="small">
      {/* <HexColorPicker color={color} onChange={setColor} /> */}
    </div>
  </div>
);

const LogoSection = () => (
  <div className="mt-2 p-1">{/* <ImageKonva /> */}</div>
);
