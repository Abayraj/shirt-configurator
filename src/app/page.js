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
      {/* <div className="video-background fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <video autoPlay muted loop id="bg-video">
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div> */}
      <div className="h-svh w-full flex flex-col items-center">
        <div className="w-full h-[60%] relative lg:fixed lg:top-0 lg:left-0 lg:h-svh lg:w-full overflow-hidden">
          <Scene />
        </div>

        <div className="w-full h-[40%]  relative lg:fixed lg:top-16 lg:left-0 ovarlay2  lg:min-h-[calc(100%-64px)] lg:w-[250px] lg:max-w-[calc(100%-75%)] lg:z-30 lg:flex ">
          <Configurator />
        </div>
      </div>
    </>
  );
}
