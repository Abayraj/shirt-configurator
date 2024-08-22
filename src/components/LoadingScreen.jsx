"use client";

import useModelStore from "@/store/useStore";
import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function LoadingScreen() {
  const { progress } = useProgress();

  const [overlay, setOverlay] = useState(false);

  const setSelectedModel = useModelStore((state) => state.setSelectedModel);

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setOverlay(true);
  };
  return (
    <>
      <Overlay onModelSelect={handleModelSelect} overlay={overlay} />
      <Loader progress={progress} />
    </>
  );
}

const Overlay = ({ onModelSelect, overlay }) => {
  const overlayRef = useRef();

  useGSAP(() => {
    if (overlay) {
      gsap.to(overlayRef.current, {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          overlayRef.current.style.display = "none";
        },
      });
    }
  }, [overlay]);
  return (
    <div
      ref={overlayRef}
      className="h-svh w-full fixed top-0 left-0 overflow-hidden flex flex-col  items-center justify-center bg-black z-40 gap-2 ovarlay2 "
    >
      <h1 className=" text-2xl lg:text-4xl lg:pb-10 font-secondary font-bold">
        Choose Your Model
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-5 items-center justify-center">
        <div
          className="flex flex-col  items-center cursor-pointer"
          onClick={() => onModelSelect("shirt")}
        >
          <Image
            src="/shirt.png"
            alt="logo"
            width={200}
            height={200}
            className="object-contain"
          />
          <h1 className="text-3xl uppercase">Shirt</h1>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => onModelSelect("hoodie")}
        >
          <Image
            src="/hoodie.png"
            alt="logo"
            width={200}
            height={200}
            className="object-contain"
          />
          <h1 className="text-3xl uppercase">Hoodie</h1>
        </div>
      </div>
    </div>
  );
};

const Loader = ({ progress }) => {
  const loaderRef = useRef();

  useGSAP(() => {
    if (progress === 100) {
      gsap.to(loaderRef.current, {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          loaderRef.current.style.display = "none";
        },
      });
    }
  }, [progress]);
  return (
    <div
      ref={loaderRef}
      className={`fixed top-0 left-0 z-50 bg-black h-svh w-full flex gap-2 flex-col justify-center items-center`}
    >
      <h1 className="text-4xl text-white font-primary">WelCome...</h1>
      <div className="relative w-96 bg-black rounded-3xl z-10">
        <div
          className="h-1  origin-left transition-all duration-300 ease-in-out bg-white rounded-3xl"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
