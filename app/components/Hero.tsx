"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

function SplitReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <span ref={ref} className="inline-block overflow-hidden leading-none">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#080C12" }}
    >
      {/* Subtle animated gradient orb */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "60vw",
          height: "60vw",
          top: "10%",
          right: "-20%",
          background: "radial-gradient(circle, rgba(212,168,83,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Nav */}
      <motion.nav
        className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 md:px-16 lg:px-24 py-8 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
        >
          Jakarta, Indonesia
        </span>
        <div
          className="flex gap-8 text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
        >
          {["About", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
              style={{ color: "#7A8A96" }}
            >
              <span className="group-hover:text-white transition-colors duration-300">{item}</span>
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#00B4FF" }}
              />
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Main content with parallax */}
      <motion.div
        className="px-4 sm:px-8 md:px-16 lg:px-24 mt-16 z-10"
        style={{ y, opacity }}
      >
        <div className="overflow-hidden">
          <h1
            className="block leading-none tracking-tight text-white select-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(52px, 14vw, 210px)",
              fontWeight: 300,
            }}
          >
            <SplitReveal text="RYAN" delay={0.2} />
          </h1>
        </div>

        {/* Tagline — slides in from left */}
        <motion.p
          className="my-4 md:my-5"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(12px, 1.1vw, 15px)",
            color: "#7A8A96",
            letterSpacing: "0.15em",
            fontWeight: 300,
          }}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          Videographer &amp; editor based in Jakarta.
        </motion.p>

        <div className="overflow-hidden">
          <h1
            className="block leading-none tracking-tight text-white select-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(52px, 14vw, 210px)",
              fontWeight: 300,
            }}
          >
            <SplitReveal text="RIZVIANTO" delay={0.45} />
          </h1>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-8 md:left-16 lg:left-24 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-px bg-white origin-top"
          style={{ height: 48 }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
        />
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
        >
          Scroll
        </span>
      </motion.div>

      {/* Bottom right index */}
      <motion.div
        className="absolute bottom-10 right-8 md:right-16 lg:right-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span
          className="text-xs tracking-[0.2em]"
          style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
        >
          © 2026
        </span>
      </motion.div>
    </section>
  );
}
