import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";

const projects = [
  { id: 1, title: "Markel", category: "3D Illustration", index: "01" },
  { id: 2, title: "Ventura", category: "Brand Identity", index: "02" },
  { id: 3, title: "Solaris", category: "Web Design", index: "03" },
  { id: 4, title: "Nexus", category: "Motion Design", index: "04" },
];

export default function Portfolio() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setActive((i) => (i + 1) % projects.length);

  const current = projects[active];

  return (
    <section className="py-24 md:py-36 bg-[#F5F5F5] px-6 md:px-10 overflow-hidden">
      {/* Header row */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-black/30" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-black/40">
              Our Work
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-none text-black">
            portfolio
          </h2>
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="flex items-center gap-2 text-sm font-medium text-black/40 hover:text-black transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            PREV
          </button>
          <div className="w-px h-4 bg-black/20" />
          <button
            onClick={next}
            className="flex items-center gap-2 text-sm font-medium text-black/40 hover:text-black transition-colors group"
          >
            NEXT
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Left — info & thumbnails */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
          {/* Project counter + title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.4 }}
              className="mb-2"
            >
              <span className="text-xs text-black/30 font-mono tracking-widest">
                {current.index} / 0{projects.length}
              </span>
              <h3 className="text-3xl font-bold tracking-tight mt-1">{current.title}</h3>
              <p className="text-sm text-black/45 mt-1">{current.category}</p>
            </motion.div>
          </AnimatePresence>

          {/* Thumbnail strip */}
          <div className="flex flex-row lg:flex-col gap-3">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`relative transition-all duration-300 ${
                  i === active ? "opacity-100 ring-2 ring-black" : "opacity-40 hover:opacity-70"
                }`}
              >
                <PlaceholderImage aspect="aspect-video" className="w-full lg:w-full" />
              </button>
            ))}
          </div>
        </div>

        {/* Right — main image */}
        <div className="col-span-12 lg:col-span-8 order-1 lg:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <PlaceholderImage aspect="aspect-[4/3]" className="w-full rounded-2xl" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
