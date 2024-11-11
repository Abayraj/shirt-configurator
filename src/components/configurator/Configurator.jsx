"use client";

import useModelStore from "@/store/useStore";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { HexColorPicker } from "react-colorful";
import { IoMdArrowDropup } from "react-icons/io";
import { Md3dRotation } from "react-icons/md";
import { FaCamera, FaTshirt, FaWalking } from "react-icons/fa";
import { PiCoatHangerBold } from "react-icons/pi";
import { IoManSharp } from "react-icons/io5";
const ImageKonva = dynamic(
  () => import("@/components/configurator/ImageKonva"),
  {
    ssr: false,
  }
);

export default function Configurator() {
  const {
    image,
    walking,
    isRotating,
    setIsRotating,
    color,
    setColor,
    setStage,
    setWalking,
  } = useModelStore();

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        document.body.style.backgroundImage = `url(${reader.result})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
      };
      reader.readAsDataURL(file);
    }
  };

  const [openColor, setOpenColor] = useState(false);

  return (
    <>
      <div className=" fixed left-0 top-20 ovarlay2 p-3 rounded-md  min-w-[250px]">
        <h1 className=" uppercase text-center font-semibold text-xl font-secondary hidden lg:flex pb-3">
          Configurator
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

        <div className=" flex pt-3 gap-4">
          <div className="button" onClick={() => setStage("stage1")}>
            1
          </div>

          <div className="button" onClick={() => setStage("stage2")}>
            2
          </div>
        </div>
        <button
          className="flex justify-center items-center gap-1 border border-zinc-100 p-1 rounded-md text-md mt-5 mb-3"
          onClick={handleButtonClick}
        >
          <p>Load Background</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </button>

        <div className="button" onClick={() => setStage("stage3")}>
          View
        </div>
      </div>

      <div className="fixed bottom-0 right-0 ovarlay2 px-10 py-5 rounded-lg ">
        <h1 className="text-4xl text-center font-secondary tracking-tight pb-4">
          Options
        </h1>

        {/* part1 */}
        <div>
          <div className="flex z-10 justify-between px-1 items-center">
            <div className="flex w-full justify-center gap-4">
              <div className="button1" onClick={() => setIsRotating(false)}>
                <Md3dRotation />
              </div>
              <div className="button1">
                <FaTshirt />
              </div>
              <div className="button1">
                <PiCoatHangerBold />
              </div>
            </div>
          </div>
        </div>
        {/* part2 */}
        <div className="flex flex-col ">
          <h1 className="text-center font-secondary">Animation</h1>
          <div className="flex justify-center gap-4">
            <div className="button1" onClick={() => setWalking(false)}>
              <IoManSharp />
            </div>
            <div className="button1" onClick={() => setWalking(false)}>
              <FaWalking />
            </div>
          </div>
          <h1 className="text-center font-secondary">Camera Animation</h1>
          <div className="flex gap-1 justify-center">
            <div className="button1">
              <FaCamera />
            </div>
            <div className="button1">
              <FaCamera />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
