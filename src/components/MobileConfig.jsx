import React, { useRef } from "react";
import { FaTshirt } from "react-icons/fa";
import { PiCoatHangerBold } from "react-icons/pi";
import { IoManSharp } from "react-icons/io5";
import { FaWalking } from "react-icons/fa";
import { TbWind } from "react-icons/tb";
import { FaCamera } from "react-icons/fa";
import { Md3dRotation } from "react-icons/md";
import useModelStore from "@/store/useStore";
import { HexColorPicker } from "react-colorful";
import dynamic from "next/dynamic";

const ImageKonva = dynamic(
  () => import("@/components/configurator/ImageKonva"),
  {
    ssr: false,
  }
);

export default function MobileConfig() {
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
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <div>
        <div className=" flex items-end justify-end mt-36  z-10">
          <div className="flex flex-col justify-between gap-2">
            <div className="button" onClick={() => setStage("stage1")}>
              1
            </div>
            <div className="button" onClick={() => setStage("stage2")}>
              2
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col z-20">
        {/* top */}

        <div className="flex z-10 justify-between px-1 items-center">
          <div className="flex  gap-1">
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

        {/* bottom  */}

        <div className="flex justify-between ovarlay2 px-1 mt-1 gap-3">
          {/* first   */}
          <div className="flex flex-col ">
            <h1 className="text-center font-secondary">Animation</h1>
            <div className="flex justify-center gap-1">
              <div className="button1" onClick={() => setWalking(true)}>
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
            <button
              className="flex justify-center items-center gap-1 border border-zinc-100 p-1 rounded-md text-md mt-5 mb-2"
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
          {/* last  */}
          <div className="flex flex-col justify-between  gap-1 flex-1">
            <ImageKonva />
            <div className=" small">
              <HexColorPicker color={color} onChange={setColor} />
            </div>
          </div>
        </div>

        {/* end   */}
      </div>
    </div>
  );
}
