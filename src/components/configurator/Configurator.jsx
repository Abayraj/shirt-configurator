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

  const [openColor, setOpenColor] = useState(false);

  return (
    <>
      <div className=" absolute left-0 top-20 ovarlay2 p-3">
        <h1 className=" uppercase text-center font-semibold text-xl font-secondary hidden lg:flex pb-3">
          Configur
        </h1>

        <ImageKonva />

        <h1 className=" uppercase text-center font-semibold text-xl font-secondary hidden lg:flex pt-3 pb-3">
          Garment
        </h1>

        <div className="flex gap-4">
          <div
            className="button "
            onClick={() => setOpenColor((prev) => !prev)}
          >
            <svg
              height="40px"
              width="40px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  style={{ fill: "#D8D8DA" }}
                  d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,336.842c-44.648,0-80.842-36.194-80.842-80.842s36.194-80.842,80.842-80.842s80.842,36.194,80.842,80.842 S300.648,336.842,256,336.842z"
                ></path>
                <path
                  style={{ fill: "#D4B6E6" }}
                  d="M282.947,188.632h220.076C485.09,122.726,441.507,67.394,383.64,34.044L229.053,188.632H282.947z"
                ></path>
                <path
                  style={{ fill: "#EBAFD1" }}
                  d="M229.053,188.632L383.639,34.044C346.068,12.39,302.482,0,256,0c-23.319,0-45.899,3.135-67.368,8.978 v220.075L229.053,188.632z"
                ></path>
                <path
                  style={{ fill: "#E07188" }}
                  d="M188.632,229.053V8.978C122.726,26.91,67.394,70.493,34.045,128.36l154.586,154.588V229.053z"
                ></path>
                <g>
                  <polygon
                    style={{ fill: "#D8D8DA" }}
                    points="188.632,229.053 229.053,188.633 282.947,188.633 282.947,188.632 229.053,188.632 "
                  ></polygon>
                  <polygon
                    style={{ fill: "#D8D8DA" }}
                    points="229.053,323.367 188.632,282.947 229.053,323.368 282.947,323.368 323.368,282.947 282.947,323.367 "
                  ></polygon>
                </g>
                <path
                  style={{ fill: "#B4D8F1" }}
                  d="M503.024,188.632H282.947v0.001h0.958l39.463,40.42L477.955,383.64 C499.611,346.068,512,302.482,512,256C512,232.681,508.865,210.099,503.024,188.632z"
                ></path>
                <path
                  style={{ fill: "#ACFFF4" }}
                  d="M323.368,282.947v220.075c65.905-17.932,121.238-61.517,154.586-119.382L323.368,229.053V282.947z"
                ></path>
                <path
                  style={{ fill: "#95D5A7" }}
                  d="M282.947,323.368L128.361,477.956C165.932,499.61,209.518,512,256,512 c23.319,0,45.899-3.135,67.368-8.977V282.947L282.947,323.368z"
                ></path>
                <path
                  style={{ fill: "#F8E99B" }}
                  d="M229.053,323.368H8.976C26.91,389.274,70.493,444.606,128.36,477.956l154.588-154.588H229.053z"
                ></path>
                <path
                  style={{ fill: "#EFC27B" }}
                  d="M188.632,282.947L34.045,128.36C12.389,165.932,0,209.518,0,256c0,23.319,3.135,45.901,8.976,67.368 h220.076L188.632,282.947z"
                ></path>
                <polygon
                  style={{ fill: "#D8D8DA" }}
                  points="283.905,188.633 282.947,188.633 323.368,229.053 "
                ></polygon>
                <path
                  style={{ fill: "#B681D5" }}
                  d="M503.024,188.632C485.09,122.726,441.507,67.394,383.64,34.044L256,161.684v26.947h26.947H503.024z"
                ></path>
                <path
                  style={{ fill: "#E592BF" }}
                  d="M383.639,34.044C346.068,12.39,302.482,0,256,0v161.684L383.639,34.044z"
                ></path>
                <path
                  style={{ fill: "#80CB93" }}
                  d="M256,350.316V512c23.319,0,45.899-3.135,67.368-8.977V282.947l-40.421,40.421L256,350.316z"
                ></path>
                <polygon
                  style={{ fill: "#F6E27D" }}
                  points="282.947,323.368 256,323.368 256,350.316 "
                ></polygon>
              </g>
            </svg>
          </div>
          {openColor && (
            <div className=" small">
              <HexColorPicker color={color} onChange={setColor} />
            </div>
          )}
        </div>

        <h1 className=" uppercase text-center font-semibold text-xl font-secondary hidden lg:flex pt-3">
          Background
        </h1>

        <div className=" flex justify-between pt-3 gap-2">
          <div className="button" onClick={() => setStage("stage1")}>
            1
          </div>
          <div className="button" onClick={() => setStage("stage2")}>
            2
          </div>
          <div className="button" onClick={() => setStage("stage3")}>
            3
          </div>
          <div className="button" onClick={() => setStage("stage4")}>
            4
          </div>
          <div className="button" onClick={() => setStage("stage5")}>
            5
          </div>
        </div>

        {/* <div className="block">
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

      </div> */}
      </div>

      <div className="absolute right-0 bottom-0 ovarlay2 p-3">
        <h1 className=" uppercase text-center font-semibold text-xl font-secondary hidden lg:flex ">
          Options
        </h1>
        <div className="flex justify-center items-center text-center gap-1 ">
          <div className="button">
            <input
              type="checkbox"
              checked={isRotating}
              onChange={handleRotationChange}
              id="rotation-checkbox"
            />
            <svg
              height="40px"
              width="40px"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    className="st0"
                    d="M324.643,155.912c-12.546-12.561-30.026-20.384-49.193-20.377c-19.141-0.007-36.654,7.816-49.167,20.377 c-12.557,12.524-20.373,30.026-20.373,49.186v24.468h-22.448v84.872c0,24.586,19.933,44.507,44.522,44.507h94.962 c24.589,0,44.515-19.922,44.515-44.507v-84.872H345.02v-24.468C345.02,185.938,337.203,168.436,324.643,155.912z M239.665,205.097 c0-4.986,1.019-9.664,2.812-13.946c2.691-6.386,7.263-11.893,12.978-15.758c5.738-3.871,12.535-6.093,19.995-6.101 c4.994,0,9.668,0.997,13.932,2.794c6.416,2.713,11.908,7.281,15.772,13.015c3.846,5.705,6.09,12.495,6.115,19.996v24.468h-71.604 V205.097z"
                  ></path>
                  <path
                    className="st0"
                    d="M489.709,163.068L462.723,7.754c-0.502-2.918-2.584-5.309-5.404-6.211c-2.819-0.902-5.899-0.161-8.003,1.914 l-35.665,35.246c-11.325-7.061-23.079-13.183-35.152-18.316C332.559,0.862,282.101-4.653,233.553,3.905 c-48.533,8.542-95.247,31.264-133.299,68.081c-25.37,24.527-44.625,53.123-57.643,83.75 c-19.522,45.929-25.037,96.384-16.484,144.938c8.55,48.54,31.266,95.247,68.081,133.31c24.53,25.355,53.127,44.617,83.743,57.632 c45.941,19.519,96.398,25.04,144.946,16.476c48.537-8.535,95.252-31.258,133.306-68.074l-30.62-31.654 c-21.08,20.384-45.208,35.467-70.878,45.38c-38.495,14.877-80.495,18.066-120.456,9.627c-39.965-8.44-77.807-28.413-108.384-60.015 c-20.391-21.081-35.47-45.212-45.387-70.868c-14.873-38.503-18.06-80.502-9.631-120.464c8.447-39.968,28.42-77.804,60.022-108.387 c21.084-20.384,45.208-35.474,70.875-45.387c38.495-14.87,80.495-18.06,120.456-9.628c39.964,8.447,77.81,28.42,108.39,60.016 l51.719,58.006c1.268,1.422,3.328,1.826,5.052,1.004C489.082,166.822,490.039,164.952,489.709,163.068z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
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
