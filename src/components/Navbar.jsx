import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full h-16  z-10">
      <header className="flex items-center justify-between p-3">
        <div className="flex items-center gap-1 ">
          <div className="relative  rounded-lg overflow-clip">
            <Image src="/chimeraBg.png" alt="logo" width={180} height={100} />
          </div>
        </div>
        <nav>
          <button className="flex items-center gap-1 bg-white px-2 py-2 rounded-md hover:bg-gray-300 transition-all duration-300">
            <span className="text-black">
              <IoCartOutline size={15} />
            </span>
            <span className="text-black text-[13px] tracking-tight font-sans font-medium">
              <Link href={"/payment"}>Export</Link>
            </span>
          </button>
        </nav>
      </header>
    </div>
  );
}
