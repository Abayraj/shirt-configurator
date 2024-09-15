"use client";

import useModelStore from "@/store/useStore";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Loader } from "@react-three/drei";

export default function LoadingScreen() {
  const [overlay, setOverlay] = useState(false);

  const setSelectedModel = useModelStore((state) => state.setSelectedModel);

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setOverlay(true);
  };
  return (
    <>
      <Overlay onModelSelect={handleModelSelect} overlay={overlay} />
      <LoaderScreen  />
    </>
  );
}

const Overlay = ({ onModelSelect, overlay }) => {
  const overlayRef = useRef();

  useGSAP(() => {
    if (overlay) {
      gsap.to(overlayRef.current, {
        duration: 0.5,
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
      className="h-svh w-full fixed top-0 left-0 overflow-hidden flex items-center justify-center z-40  ovarlay "
    >
      <div className="flex flex-col  items-center justify-center">
        <h1 className=" text-3xl lg:text-4xl pb-10 lg:pb-20  font-myriad-semibold ">
          <span>Choose</span>
          <span>Your</span>
          <span>Model</span>
        </h1>
        <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className="flex flex-col  items-center "
            onClick={() => onModelSelect("shirt")}
          >
            <Image src="/shirt.jpg" alt="Shirt Icon" width={150} height={100} />

            <h1 className="text-3xl uppercase font-myriad-light">Shirt</h1>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className="flex flex-col items-center overflow-hidden  "
            onClick={() => onModelSelect("hoodie")}
          >
            <Image
              src="/hoodie.jpg"
              alt="Shirt Icon"
              width={150}
              height={100}
            />

            <h1 className="text-3xl uppercase font-myriad-light">Hoodie</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const LoaderScreen = () => {
  return (
    <>
      <Loader />
    </>
  );
};
