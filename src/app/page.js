"use client";

import Configurator from "@/components/configurator/Configurator";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Scene from "@/components/scene/Scene";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      {/* <Leva hidden /> */}
      <LoadingScreen />
      <Navbar />

      <div className="fixed top-0 left-0 w-full h-svh overflow-hidden">
        <Scene />
      </div>


      <Configurator />
    </>
  );
}
