import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";

const services = [
  {
    id: 1,
    title: "Illustration",
    desc: "Our illustration services aim to deliver unique and characterful visuals, in line with your brand identity from concept to final details.",
  },
  {
    id: 2,
    title: "Web Design",
    desc: "Crafting pixel-perfect digital experiences that balance beauty with function — responsive, accessible, and built to convert.",
  },
  {
    id: 3,
    title: "Mobile App",
    desc: "Native-quality mobile experiences designed with meticulous attention to gesture, hierarchy, and platform conventions.",
  },
  {
    id: 4,
    title: "Animation",
    desc: "Motion that tells the story — from micro-interactions to full-blown brand animations that move people.",
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section className="py-24 md:py-36 bg-white px-6 md:px-10">
      {/* Header */}
      <div className="grid grid-cols-12 gap-6 mb-14">
        <div className="col-span-12 lg:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-black/30" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-black/40">
              Our Services
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-none text-black">
            my expertise
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-7 flex items-end">
          <p className="text-black/45 text-base md:text-lg leading-relaxed max-w-md">
            With expertise in creating inspiring designs and effective visual
            strategies, I help brands find an authentic and memorable identity.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          {services.map((svc, i) => (
            <div key={svc.id} className="border-t border-black/10">
              <button
                className="w-full py-7 flex items-start justify-between gap-4 text-left group"
                onClick={() => setExpanded(expanded === svc.id ? null : svc.id)}
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-xs font-mono text-black/25 w-8 shrink-0">
                    S / 0{i + 1}
                  </span>
                  <motion.span
                    className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-none"
                    animate={{ x: expanded === svc.id ? 8 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {svc.title}
                  </motion.span>
                </div>
                <div className="shrink-0 mt-1">
                  {expanded === svc.id ? (
                    <X size={18} className="text-black/50" />
                  ) : (
                    <Plus size={18} className="text-black/30 group-hover:text-black transition-colors" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {expanded === svc.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-14 flex flex-col gap-4">
                      <p className="text-black/50 text-sm leading-relaxed max-w-sm">
                        {svc.desc}
                      </p>
                      {/* Three small placeholder cards */}
                      <div className="grid grid-cols-3 gap-2 max-w-sm">
                        {[0, 1, 2].map((j) => (
                          <PlaceholderImage
                            key={j}
                            aspect="aspect-video"
                            className="rounded-lg"
                          />
                        ))}
                      </div>
                      <button className="text-xs font-bold tracking-[0.1em] uppercase text-black/60 hover:text-black transition-colors self-start">
                        See More →
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="border-t border-black/10" />
        </div>

        {/* Right — large placeholder grid */}
        <div className="col-span-12 lg:col-span-5 hidden lg:grid grid-cols-3 gap-3 content-start mt-2">
          {[0, 1, 2].map((i) => (
            <PlaceholderImage
              key={i}
              aspect="aspect-[3/4]"
              className={`rounded-xl ${i === 1 ? "mt-10" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
