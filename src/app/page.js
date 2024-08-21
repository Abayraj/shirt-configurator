"use client";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Scene from "@/components/scene/Scene";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
    <LoadingScreen />
      <Leva hidden />
      <Navbar />
      <div className="fixed top-0 left-0 h-svh w-full overflow-hidden">
        <Scene />
      </div>
    </>
  );
}
