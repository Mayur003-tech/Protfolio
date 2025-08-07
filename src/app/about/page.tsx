"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const eduRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" }
    );
    gsap.fromTo(
      textRef.current,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.2 }
    );
    gsap.fromTo(
      imgRef.current,
      { autoAlpha: 0, y: 40, scale: 0.95 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out", delay: 0.4 }
    );
    gsap.fromTo(
      eduRefs.current,
      { autoAlpha: 0, y: 60 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: "power2.out",
        delay: 0.7,
      }
    );
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-[#4682B4] to-[#2A5A88] text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-5 md:pt-2">
        {/* About Section */}
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl font-extrabold text-center md:mb-12 mb-5"
        >
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div ref={textRef} className="space-y-6 md:order-0 order-1">
            <p className="text-lg text-gray-200">
              Hello! I am{" "}
              <span className="text-white font-bold">Mayur Gotmare</span>, a
              passionate and detail-oriented Frontend Developer. I enjoy creating
              clean, responsive, and intuitive interfaces that enhance user
              experiences.
            </p>
            <p className="text-lg text-gray-200">
              My primary tools include{" "}
              <span className="text-white font-medium">React, Next.js, Tailwind CSS</span>
              , and I love transforming ideas into beautifully functional websites.
              I am always curious and enjoy solving problems, whether it is
              optimizing UI performance or debugging complex code.
            </p>
            <p className="text-lg text-gray-200">
              Beyond coding, I am an open-source contributor, design enthusiast,
              and a lifelong learner always eager to explore new technologies.
            </p>
          </div>

          {/* Right: Image */}
          <div
            ref={imgRef}
            className="flex justify-center md:order-1 order-0 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/png/mayurImg.png"
              alt="Mayur Gotmare"
              width={230}
              height={350}
              className="rounded-2xl border-white/20 "
            />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-6xl mx-auto px-4 mt-28">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          Education
        </h2>

        <div className="relative">
          {/* Vertical Center Line: visible on all screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/30 z-0" />

          <div className="flex flex-col gap-20 relative z-10">
            {/* Graduation - Right */}
            <div
              ref={(el) => { eduRefs.current[0] = el!; }}
              className="flex flex-col md:flex-row-reverse md:items-center md:justify-between relative"
            >
              <div className="md:w-1/2 md:pl-10">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-1">Graduation</h3>
                  <p className="text-sm text-gray-200 mb-1">
                    GH Raisoni College of Engineering, Nagpur
                  </p>
                  <p className="text-sm text-white/80">
                    B.E. in Computer Science • 2022–2026 (Ongoing)
                  </p>
                </div>
              </div>
              {/* Center Dot */}
              <div className="hidden md:flex w-6 h-6 bg-white rounded-full border-4 border-blue-500 absolute left-1/2 transform -translate-x-1/2 z-20" />
            </div>

            {/* HSC - Left */}
            <div
              ref={(el) => { eduRefs.current[1] = el!; }}
              className="flex flex-col md:flex-row md:items-center md:justify-between relative"
            >
              <div className="md:w-1/2 md:pr-10">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-1">HSC</h3>
                  <p className="text-sm text-gray-200 mb-1">
                    Bhartiya Krishi Vidyalaya, Nagpur
                  </p>
                  <p className="text-sm text-white/80">Completed in 2020 • 80%</p>
                </div>
              </div>
              {/* Center Dot */}
              <div className="hidden md:flex w-6 h-6 bg-white rounded-full border-4 border-purple-500 absolute left-1/2 transform -translate-x-1/2 z-20" />
            </div>

            {/* SSC - Right */}
            <div
              ref={(el) => { eduRefs.current[2] = el!; }}
              className="flex flex-col md:flex-row-reverse md:items-center md:justify-between relative"
            >
              <div className="md:w-1/2 md:pl-10">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-1">SSC</h3>
                  <p className="text-sm text-gray-200 mb-1">
                    Jawaher High School, Nagpur
                  </p>
                  <p className="text-sm text-white/80">Completed in 2018 • 72.20%</p>
                </div>
              </div>
              {/* Center Dot */}
              <div className="hidden md:flex w-6 h-6 bg-white rounded-full border-4 border-blue-500 absolute left-1/2 transform -translate-x-1/2 z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
