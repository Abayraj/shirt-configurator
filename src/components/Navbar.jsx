import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import React from "react";

export default function Navbar() {
  return (
    <div className="lg:relative fixed w-full h-16  p-2 z-10 ">
      <header className="flex items-center justify-between p-2">
        <div className="flex items-center gap-1 ">
          <div className="relative w-10 h-10 rounded-full overflow-clip">
            <Image src="/tshirt.jpg" alt="logo" fill sizes="1" />
          </div>
          <h1 className="text-white text-3xl font-mono font-semibold">SHIRT</h1>
        </div>
        <nav>
          <button className="flex items-center gap-1 bg-white px-2 py-2 rounded-md hover:bg-gray-300 transition-all duration-300">
            <span className="text-black">
              <IoCartOutline size={13} />
            </span>
            <span className="text-black text-[10px] tracking-tight font-sans font-medium">
              Export
            </span>
          </button>
        </nav>
      </header>
    </div>
  );
}
