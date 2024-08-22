"use client";

import Configurator from "@/components/Configurator";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Scene from "@/components/scene/Scene";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      {/* <Leva hidden /> */}
      <Navbar />
      <div className="h-svh w-full flex flex-col items-center">
        <div className="w-full h-[70%] relative lg:fixed lg:top-0 lg:left-0 lg:h-svh lg:w-full overflow-hidden">
          <Scene />
        </div>

        <div className="w-full h-[30%]  relative lg:fixed lg:left-0 ovarlay  lg:h-svh lg:w-[250px] lg:max-w-[calc(100%-75%)] z-30 md:flex">
          <Configurator />
        </div>
      </div>
    </>
  );
}
