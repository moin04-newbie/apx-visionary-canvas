import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import service1Img from "@/source/service-1.jpg";
import service2Img from "@/source/service-2.jpg";
import service3Img from "@/source/service-3.jpg";

const services = [
  {
    id: 1,
    title: "Performance Marketing",
    desc: "We turn ad spend into measurable growth — scaling brands with data, strategy, and high-converting funnels.",
  },
  {
    id: 2,
    title: "Web Design",
    desc: "Crafting pixel-perfect digital experiences that balance beauty with function — responsive, accessible, and built to convert.",
  },
  {
    id: 3,
    title: "Shoots & Product Shoot",
    desc: "Premium product visuals that boost trust, clicks.",
  },
  {
    id: 4,
    title: "Social Media",
    desc: "Aisa content jo brand banaye aur audience ko genuinely engage kare.",
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

        {/* Right — large image grid */}
        <div className="col-span-12 lg:col-span-5 hidden lg:grid grid-cols-3 gap-3 content-start mt-2">
          <div className="aspect-[3/4] rounded-xl overflow-hidden">
            <img src={service1Img} alt="Performance Marketing" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] rounded-xl overflow-hidden mt-10">
            <img src={service2Img} alt="Web Design" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] rounded-xl overflow-hidden">
            <img src={service3Img} alt="Shoots & Product Shoot" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
