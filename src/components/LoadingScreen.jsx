import { useProgress } from "@react-three/drei";
import React from "react";

export default function LoadingScreen() {
  const { progress, active } = useProgress();
  console.log(active);
  return (
    <div
      className={
        progress === 100
          ? `hidden`
          : `fixed top-0 left-0 z-50 bg-black h-svh w-full flex gap-2 flex-col justify-center items-center`
      }
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
}
