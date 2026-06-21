"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const year = new Date().getFullYear();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative py-24 md:py-36 px-8 md:px-16 lg:px-24 flex flex-col justify-between min-h-[65vh] overflow-hidden"
      style={{ backgroundColor: "#080C12" }}
    >
      {/* Background orb */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "50vw",
          height: "50vw",
          bottom: "-20%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10"
      >
        <motion.p
          variants={fadeUp}
          className="mb-10 text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
        >
          Get in Touch
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="leading-none mb-16"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(44px, 8.5vw, 112px)",
            fontWeight: 300,
            color: "#ffffff",
          }}
        >
          Let&apos;s make
          <br />
          <em style={{ color: "#00B4FF" }}>something together.</em>
        </motion.h2>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          {[
            { label: "ryan.rizvianto@gmail.com", href: "mailto:ryan.rizvianto@gmail.com" },
            { label: "@rizvianto", href: "https://instagram.com/rizvianto" },
          ].map(({ label, href }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-3 text-sm tracking-wide"
              style={{ fontFamily: "var(--font-inter)", color: "#C2C8CC", fontWeight: 300 }}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.span
                className="inline-block h-px"
                style={{ backgroundColor: "#00B4FF", width: 24 }}
                whileHover={{ width: 48 }}
                transition={{ duration: 0.3 }}
              />
              <span className="group-hover:text-white transition-colors duration-200">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer bottom */}
      <motion.div
        className="relative z-10 mt-24 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        style={{ borderTop: "1px solid #10161E" }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p
          className="text-xs tracking-[0.15em]"
          style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
        >
          © {year} Ryan Rizvianto. All rights reserved.
        </p>
        <p
          className="text-xs tracking-[0.15em]"
          style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
        >
          Jakarta, Indonesia
        </p>
      </motion.div>
    </footer>
  );
}
