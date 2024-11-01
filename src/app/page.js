"use client";

import Configurator from "@/components/configurator/Configurator";
import LoadingScreen from "@/components/LoadingScreen";
import MobileConfig from "@/components/MobileConfig";
import Navbar from "@/components/Navbar";
import Scene from "@/components/scene/Scene";
import { Gradient } from "@/components/scene/utils/Gradient";
import { Leva } from "leva";
import { useLayoutEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // const gradient = new Gradient();
    // gradient.initGradient("#gradient-canvas");

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <>
      {/* <Leva hidden /> */}
      <LoadingScreen />
      <Navbar />

      {/* <canvas id="gradient-canvas" data-transition-in /> */}

      <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden">
        <Scene />
      </div>

      {isMobile ? <MobileConfig /> : <Configurator />}
      {/* <MobileConfig /> */}
      {/* <Configurator /> */}
    </>
  );
}
