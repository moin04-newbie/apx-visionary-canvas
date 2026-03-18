import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay },
});

export default function About() {
  return (
    <section className="py-32 md:py-48 bg-white px-6 md:px-10">
      {/* Section label */}
      <motion.div {...fadeUp()} className="flex items-center justify-center gap-4 mb-14">
        <div className="w-10 h-px bg-black/20" />
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-black/40">
          About Us
        </span>
        <div className="w-10 h-px bg-black/20" />
      </motion.div>

      {/* Primary statement */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          {...fadeUp(0.1)}
          className="text-section-title font-bold tracking-agency leading-[1.05] text-black mb-0"
        >
          We are a creative team that believes that every design has a story,{" "}
          <span className="text-black/25 font-bold">
            and our job is to tell that story in the most impactful way possible.
          </span>
        </motion.h2>
      </div>

      {/* Star / spark divider */}
      <motion.div
        {...fadeUp(0.25)}
        className="flex flex-col items-center mt-16 mb-10"
      >
        {/* Spark icon — four-pointed star */}
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          className="text-black"
        >
          <path
            d="M28 2 L30 26 L54 28 L30 30 L28 54 L26 30 L2 28 L26 26 Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Sub paragraph */}
      <motion.p
        {...fadeUp(0.35)}
        className="text-center text-black/50 text-base md:text-lg max-w-sm mx-auto leading-relaxed mb-10"
      >
        At Apx.co, we combine creativity with strategy to create relevant and
        functional designs.
      </motion.p>

      {/* CTA */}
      <motion.div {...fadeUp(0.45)} className="flex justify-center">
        <a
          href="#"
          className="px-8 py-3 rounded-full border-2 border-black text-black text-sm font-semibold tracking-wide hover:bg-black hover:text-[#F5F5F5] transition-all duration-300 active:scale-95"
        >
          LEARN MORE
        </a>
      </motion.div>
    </section>
  );
}
