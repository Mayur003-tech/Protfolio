"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const NAME = "Mayur Gotmare";
const SUBTITLE = "Web Developer | AI/ML Enthusiast | Problem Solver";

export default function Hero() {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<(HTMLSpanElement | null)[]>([]);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section entrance animation
    if (heroSectionRef.current) {
      gsap.fromTo(
        heroSectionRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }

    // Name animation
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    tl.to(
      lettersRef.current,
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.3,
        ease: "power2.out",
      }
    )
    .to(
      lettersRef.current,
      {
        autoAlpha: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.3,
        ease: "power2.in",
        delay: 0.8,
      }
    );

    // Simple subtitle animation: fade in and move up
    gsap.fromTo(
      subtitleRef.current,
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out",  }
    );

    // Animate h2, p, and buttons
    gsap.fromTo(
      ".hero-h2",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.5 }
    );
    gsap.fromTo(
      ".hero-p",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.7 }
    );
    gsap.fromTo(
      ".hero-btn",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.9, stagger: 0.2 }
    );
    gsap.fromTo(
      ".hero-img",
      { autoAlpha: 0, scale: 0.95 },
      { autoAlpha: 1, scale: 1, duration: 1, ease: "power2.out", delay: 1 }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroSectionRef} className="pt-30 md:pt-42 pb-16 bg-gradient-to-r from-[#DCCBC8] to-[#BDB7AB] text-[#4A4A4A] font-semibold">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-15">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center space-y-6 md:order-0 order-1">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight pb-5 md:pb-0">
            Hi, I’m{" "}
            <span className=" font-bold inline-block">
  {NAME.split("").map((char, i) => (
    <span
      key={i}
      ref={el => { lettersRef.current[i] = el; }}
      className="bg-gradient-to-tr from-amber-300 to-rose-600 bg-clip-text text-transparent"
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        display: "inline-block",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</span>

          </h1>

          <h2 className="text-xl md:text-2xl font-semibold hero-h2">
            Crafting impactful digital experiences through clean, responsive, and efficient code.
          </h2>

          <h3 className="text-lg font-medium">
            <span className="inline-block text-white">
              {SUBTITLE.split("").map((char, i) => (
                <span
                  key={i}
                  ref={el => { subtitleRef.current[i] = el; }}
                  style={{
                    opacity: 1,
                    display: "inline-block",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </h3>

          <p className="text-base md:text-lg leading-relaxed max-w-xl hero-p">
            I design and develop modern, user-focused web applications using React, Next , and Tailwind CSS — transforming creative ideas into interactive, real-world solutions with great performance and design.
          </p>

          {/* Optional CTA Buttons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="/project"
              className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition hero-btn"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition hero-btn"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-end items-center  md:order-1 order-0">
          <Image
            src="/svg/Collab-bro.svg"
            alt="Mayur Gotmare"
            width={500}
            height={300}
            className="object-cover transition-transform transform hover:scale-105 hero-img"
          />
        </div>
      </div>
    </section>
  );
}
