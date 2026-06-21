"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function About() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-15% 0px" });

  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-36 px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{ backgroundColor: "#EEF0F2" }}
    >
      {/* Section label */}
      <motion.p
        className="mb-16 md:mb-24 text-xs tracking-[0.3em] uppercase"
        style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        About
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Portrait with parallax */}
        <motion.div
          ref={imgRef}
          className="w-full aspect-[3/4] rounded-sm overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <motion.div className="absolute inset-0" style={{ y: imgY }}>
            <Image
              src="/ryan-headshot.jpg"
              alt="Ryan Rizvianto"
              fill
              className="object-cover scale-110"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Bio text */}
        <motion.div
          className="flex flex-col justify-center"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.h2
            variants={fadeUp}
            className="mb-8 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 4.5vw, 60px)",
              fontWeight: 400,
              color: "#1E1E1E",
            }}
          >
            Eight years behind the lens
            <br />
            <em style={{ color: "#00B4FF" }}>and in the edit suite.</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="leading-relaxed mb-5"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(13px, 1vw, 15px)",
              color: "#3a3a3a",
              fontWeight: 300,
              maxWidth: "520px",
            }}
          >
            I&apos;m a videographer and video editor based in Jakarta, Indonesia. For the past 8
            years I&apos;ve been shooting and cutting brand videos, short-form ads, and event
            highlights — work built to cut through and stick.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="leading-relaxed"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(13px, 1vw, 15px)",
              color: "#3a3a3a",
              fontWeight: 300,
              maxWidth: "520px",
            }}
          >
            By day I&apos;m part of the team at Intrepid Indonesia; outside of that I take on
            freelance projects for brands who care about how they show up on screen. I handle
            everything from shoot to final cut.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 pt-8"
            style={{ borderTop: "1px solid #C2C8CC" }}
          >
            <div className="flex gap-12">
              {[
                { label: "Years of experience", value: "8+" },
                { label: "Projects delivered", value: "100+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <motion.p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(36px, 4vw, 52px)",
                      fontWeight: 300,
                      color: "#1E1E1E",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </motion.p>
                  <p
                    className="mt-1 text-xs tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
