import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-30 md:pt-30 pb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-15">
        
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center space-y-6 md:order-0 order-1">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight pb-5 md:pb-0">
            Hi, I’m <span className="text-yellow-300">Mayur Gotmare</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold">
            Crafting impactful digital experiences through clean, responsive, and efficient code.
          </h2>

          <h3 className="text-lg font-medium">
            Frontend Developer | UI/UX Enthusiast | Problem Solver
          </h3>

          <p className="text-base md:text-lg leading-relaxed max-w-xl">
            I design and develop modern, user-focused web applications using React, Next , and Tailwind CSS — transforming creative ideas into interactive, real-world solutions with great performance and design.
          </p>

          {/* Optional CTA Buttons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#projects"
              className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-end items-center  md:order-1 order-0">
          <Image
            src="/Collab-bro.svg"
            alt="Mayur Gotmare"
            width={900}
            height={400}
            className="object-cover transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
