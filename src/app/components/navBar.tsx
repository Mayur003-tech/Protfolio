"use client";
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Side Drawer with Hamburger at the right edge */}
      <div
        className={`fixed top-0 left-0 h-full z-50 flex items-center transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-56"
        }`}
        style={{ width: "16rem" }} // 14rem drawer + 2rem hamburger
      >
        {/* Drawer */}
        <div className="w-56 h-full bg-gradient-to-r from-blue-500/80 to-purple-500/80 bg-white/70 backdrop-blur- text-white shadow-lg flex flex-col pt-20 space-y-6 pl-4">
          <Link href="/about" onClick={() => setMenuOpen(false)} className="px-8 py-2 hover:bg-white/20 rounded">about</Link>
          <Link href="/experience" onClick={() => setMenuOpen(false)} className="px-8 py-2 hover:bg-white/20 rounded">Experirence</Link>
          <Link href="/project" onClick={() => setMenuOpen(false)} className="px-8 py-2 hover:bg-white/20 rounded">Projets</Link>
          <Link href="/skills" onClick={() => setMenuOpen(false)} className="px-8 py-2 hover:bg-white/20 rounded">Skills</Link>
          <Link href="" onClick={() => setMenuOpen(false)} className="px-8 py-2 hover:bg-white/20 rounded">Contact</Link>
        </div>
        {/* Hamburger Tab at the right edge, centered vertically */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg flex items-center justify-center
            rounded-none focus:outline-none transition-all duration-200"
          style={{
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: "1rem",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Top Navbar (remains as is) */}
      <nav className="fixed top-0 w-full z-40 px-2 lg:px-0">
        <div className="max-w-[425px] mx-auto px-4 flex items-center justify-between h-16 mt-3 backdrop-blur-lg bg-white/10 rounded-full shadow-md">
          <div >
            <a rel="stylesheet" href="/">
            <Image src={"/M-removebg-preview.png"} alt="Logo" width={50} height={50} className="rounded-ee-xs" />
            </a>
            
          </div>
          <div className="font-extrabold">Mayur Gotmare</div>
        </div>
      </nav>
    </>
  );
}