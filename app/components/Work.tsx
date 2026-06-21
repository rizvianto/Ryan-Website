"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Citibank X Telkomsel",
    tags: ["DIGITAL AD"],
    embedId: "WhIEuFm1pZk",
    description:
      "A digital advertising collaboration between Citibank and Telkomsel — fast-paced, brand-aligned, built for digital platforms.",
    year: "2023",
  },
  {
    id: 2,
    title: "Herbana Woman's Day",
    tags: ["BRAND VIDEO", "ADVERTISING"],
    embedId: "bsQ-2mdkKOI",
    description:
      "Brand storytelling for Herbana celebrating Woman's Day — warm, purposeful, and emotionally resonant.",
    year: "2023",
  },
  {
    id: 3,
    title: "Renault Event Highlight",
    tags: ["EVENT HIGHLIGHT"],
    embedId: "i-EWWQ1vveU",
    description:
      "A high-energy event highlight reel capturing the energy of Renault's live experience in Jakarta.",
    year: "2022",
  },
  {
    id: 4,
    title: "Nokta Merah Perkawinan",
    tags: ["SOCIAL MEDIA", "SHORT-FORM"],
    embedId: "ZnPEjExRt4Y",
    description:
      "Short-form social content for Nokta Merah Perkawinan — punchy, scroll-stopping, optimized for mobile feeds.",
    year: "2022",
  },
  {
    id: 5,
    title: "Superga Campaign",
    tags: ["CAMPAIGN VIDEO"],
    embedId: "pg82kXJ2kxY",
    description:
      "Campaign video for Superga — lifestyle-driven visuals with a clean, editorial aesthetic.",
    year: "2021",
  },
];

function ProjectRow({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      ref={ref}
      className="py-10 md:py-14 project-divider"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
    >
      {/* Clickable header */}
      <button
        className="w-full text-left group"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-0">
          <div className="flex items-baseline gap-6">
            {/* Index number */}
            <span
              className="text-xs tracking-[0.2em] tabular-nums"
              style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
            >
              0{project.id}
            </span>
            <h3
              className="leading-none transition-colors duration-300 group-hover:opacity-70"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(28px, 4.5vw, 60px)",
                fontWeight: 400,
                color: "#1E1E1E",
              }}
            >
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs tracking-[0.18em] uppercase rounded-full"
                  style={{
                    fontFamily: "var(--font-inter)",
                    border: "1px solid #00B4FF",
                    color: "#00B4FF",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Year + expand toggle */}
            <span
              className="text-xs tracking-[0.15em]"
              style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
            >
              {project.year}
            </span>

            <motion.span
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center justify-center w-7 h-7 rounded-full border"
              style={{ borderColor: "#C2C8CC", color: "#1E1E1E", fontSize: 18 }}
            >
              +
            </motion.span>
          </div>
        </div>
      </button>

      {/* Expandable content */}
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: "hidden" }}
      >
        <div className="pt-8">
          {/* Mobile tags */}
          <div className="flex sm:hidden gap-2 flex-wrap mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs tracking-[0.18em] uppercase rounded-full"
                style={{
                  fontFamily: "var(--font-inter)",
                  border: "1px solid #00B4FF",
                  color: "#00B4FF",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* YouTube embed */}
          <div
            className="w-full rounded-sm overflow-hidden mb-6"
            style={{ aspectRatio: "16/9" }}
          >
            {expanded && (
              <iframe
                src={`https://www.youtube.com/embed/${project.embedId}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            )}
          </div>

          <p
            className="max-w-2xl"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(13px, 1vw, 15px)",
              color: "#7A8A96",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}

// Scrolling marquee of skills/services
const services = ["DIRECTION", "CINEMATOGRAPHY", "EDITING", "COLOR GRADING", "SHORT-FORM", "BRAND VIDEO", "EVENT HIGHLIGHT", "ADVERTISING"];

export default function Work() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="work"
      className="py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#EEF0F2" }}
    >
      {/* Marquee strip */}
      <div className="marquee-wrap mb-16 md:mb-24 py-4 border-y" style={{ borderColor: "#C2C8CC" }}>
        <div className="marquee-track inline-flex gap-12">
          {[...services, ...services].map((s, i) => (
            <span
              key={i}
              className="text-xs tracking-[0.35em] uppercase"
              style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
            >
              {s} <span style={{ color: "#00B4FF", marginLeft: "1.5rem" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-8 md:px-16 lg:px-24">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          className="flex items-end justify-between mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(40px, 7vw, 96px)",
              fontWeight: 300,
              color: "#1E1E1E",
              lineHeight: 1,
            }}
          >
            Selected<br /><em style={{ color: "#00B4FF" }}>Work</em>
          </h2>
          <p
            className="text-xs tracking-[0.2em] pb-2"
            style={{ fontFamily: "var(--font-inter)", color: "#7A8A96" }}
          >
            {projects.length} Projects
          </p>
        </motion.div>

        {/* Project list */}
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Full portfolio CTA */}
        <motion.div
          className="mt-12 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderTop: "1px solid #C2C8CC" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(20px, 2.5vw, 30px)",
              fontWeight: 400,
              color: "#1E1E1E",
            }}
          >
            Want to see more?
          </p>
          <motion.a
            href="https://drive.google.com/drive/folders/14pkm_oE1qcSKnKj8-x9VaFOdTc0Le7Qd?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3"
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span
              className="inline-block h-px transition-all duration-300 group-hover:w-12"
              style={{ backgroundColor: "#00B4FF", width: 28 }}
            />
            <span
              className="text-sm tracking-[0.18em] uppercase transition-colors duration-200 group-hover:opacity-60"
              style={{ fontFamily: "var(--font-inter)", color: "#1E1E1E", fontWeight: 400 }}
            >
              View Full Portfolio
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-50 group-hover:opacity-100 transition-opacity duration-200"
            >
              <path d="M1 13L13 1M13 1H4M13 1V10" stroke="#1E1E1E" strokeWidth="1.2" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
