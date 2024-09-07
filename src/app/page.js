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
   
      <div className="h-svh w-full flex flex-col items-center">
        <div className="w-full h-[60%] relative lg:fixed lg:top-0 lg:left-0 lg:h-svh lg:w-full overflow-hidden">
          <Scene />
        </div>

        <div className="w-full h-[40%]  relative lg:fixed  lg:top-16 lg:left-0 ovarlay2  lg:min-h-[calc(100%-64px)] lg:w-[250px] lg:max-w-[calc(100%-75%)] lg:z-30 lg:flex ">
          <Configurator />
        </div>
      </div>
    </>
  );
}
