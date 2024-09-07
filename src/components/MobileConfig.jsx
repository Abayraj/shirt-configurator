import useModelStore from "@/store/useStore";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import ImageKonva from "./configurator/ImageKonva";

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
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  </div>
);

const LogoSection = () => (
  <div className="mt-2 p-1">
    <ImageKonva />
  </div>
);
