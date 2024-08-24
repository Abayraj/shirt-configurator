import useModelStore from "@/store/useStore";
import React, { useState } from "react";

import { HexColorPicker } from "react-colorful";
import { IoMdArrowDropup } from "react-icons/io";
import ImageKonva from "./ImageKonva";

export default function Configurator() {
  const { isRotating, setIsRotating, color, setColor } = useModelStore();

  const handleRotationChange = (event) => {
    setIsRotating(event.target.checked);
  };

  return (
    <div className="w-full h-full flex flex-col p-2 gap-2 lg:gap-4  ">
      <h1 className=" uppercase text-center  font-semibold text-xl font-secondary hidden lg:flex">
        Configurator
      </h1>

      <div className="hidden lg:block">
        <Accordion title="Rotation">
          <div className="flex justify-center items-center text-center gap-1 ">
            <input
              type="checkbox"
              checked={isRotating}
              onChange={handleRotationChange}
              id="rotation-checkbox"
            />
            <p>Rotation</p>
          </div>
        </Accordion>
      </div>

      <div className="hidden lg:block">
        <Accordion title="Garment color">
          <div className=" small">
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        </Accordion>
      </div>

      <MobileView />

      {/* ImageKonva */}

      <ImageKonva />
    </div>
  );
}

const MobileView = () => {
  const { isRotating, setIsRotating, color, setColor } = useModelStore();

  const handleRotationChange = (event) => {
    setIsRotating(event.target.checked);
  };
  return (
    <div className="lg:hidden">
      <Accordion title="Color">
        <div className="small">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
        <div className="flex  justify-center items-center  gap-1 border rounded-md p-1">
          <input
            type="checkbox"
            checked={isRotating}
            onChange={handleRotationChange}
            id="rotation-checkbox"
          />
          <p>Rotation</p>
        </div>
      </Accordion>
    </div>
  );
};

const Accordion = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" p-2 border border-zinc-100 rounded-md w-full font-secondary">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="w-full ">{title}</div>
        <div
          className={`text-xl transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoMdArrowDropup />
        </div>
      </div>
      <div
        className={`overflow-hidden  transition-all duration-500 ease-in-out flex justify-between items-start  ${
          isOpen ? "max-h-[130px]" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
