"use client";

import useModelStore from "@/store/useStore";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { HexColorPicker } from "react-colorful";
import { IoMdArrowDropup } from "react-icons/io";
const ImageKonva = dynamic(
  () => import("@/components/configurator/ImageKonva"),
  {
    ssr: false,
  }
);

export default function Configurator() {
  const { isRotating, setIsRotating, color, setColor, setStage } =
    useModelStore();
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleRotationChange = (event) => {
    setIsRotating(event.target.checked);
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full h-full flex flex-col p-2 gap-2 lg:gap-4  ">
      <h1 className=" uppercase text-center font-semibold text-xl font-secondary hidden lg:flex">
        Configurator
      </h1>

      <div className="block">
        <Accordion
          title="Rotation"
          isOpen={openAccordion === 0}
          onToggle={() => toggleAccordion(0)}
        >
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

      <div className="block">
        <Accordion
          title="Garment color"
          isOpen={openAccordion === 1}
          onToggle={() => toggleAccordion(1)}
        >
          <div className=" small">
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        </Accordion>
      </div>

      <div className="block">
        <Accordion
          title="Import Image"
          isOpen={openAccordion === 2}
          onToggle={() => toggleAccordion(2)}
        >
          <ImageKonva />
        </Accordion>
      </div>

      <div className="block">
        <Accordion
          title="Change Background"
          isOpen={openAccordion === 3}
          onToggle={() => toggleAccordion(3)}
        >
          <div className="flex justify-between w-full">
            <div
              className="shadow-inner shadow-white p-3 rounded-full"
              onClick={() => setStage("stage1")}
            >
              1
            </div>
            <div
              className="shadow-inner shadow-white p-3 rounded-full"
              onClick={() => setStage("stage2")}
            >
              2
            </div>
            <div
              className="shadow-inner shadow-white p-3 rounded-full"
              onClick={() => setStage("stage3")}
            >
              3
            </div>
            <div
              className="shadow-inner shadow-white p-3 rounded-full"
              onClick={() => setStage("stage4")}
            >
              4
            </div>
            <div
              className="shadow-inner shadow-white p-3 rounded-full"
              onClick={() => setStage("stage5")}
            >
              5
            </div>
          </div>
        </Accordion>
      </div>

      {/* <MobileView /> */}

      {/* ImageKonva */}
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

const Accordion = ({ children, title, isOpen, onToggle }) => {
  return (
    <div className=" p-2 border border-zinc-100 rounded-md w-full font-secondary">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onToggle}
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
          isOpen ? "max-h-[330px]" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
