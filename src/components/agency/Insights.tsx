import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";

const articles = [
  { id: 1, title: "The future of minimalist interface design", sub: "Design Thinking" },
  { id: 2, title: "Why motion is the new UX", sub: "Animation" },
  { id: 3, title: "Brand storytelling in 2024", sub: "Strategy" },
];

export default function Insights() {
  return (
    <section className="py-24 md:py-36 bg-white px-6 md:px-10">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-px bg-black/30" />
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-black/40">Article</span>
      </div>
      <div className="flex items-end justify-between mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-none text-black"
        >
          interesting information
        </motion.h2>
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-medium text-black/40 hover:text-black transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> PREV
          </button>
          <div className="w-px h-4 bg-black/20" />
          <button className="flex items-center gap-2 text-sm font-medium text-black/40 hover:text-black transition-colors group">
            NEXT <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Large card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="col-span-12 md:col-span-6 group cursor-pointer"
        >
          <PlaceholderImage aspect="aspect-[4/3]" className="rounded-2xl group-hover:scale-[1.01] transition-transform duration-500 w-full" />
          <h3 className="text-xl font-bold mt-4 tracking-tight group-hover:opacity-60 transition-opacity">{articles[0].title}</h3>
          <p className="text-sm text-black/40 mt-1">{articles[0].sub}</p>
        </motion.div>

        {/* Two smaller cards */}
        <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-6">
          {articles.slice(1).map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
              className="group cursor-pointer"
            >
              <PlaceholderImage aspect="aspect-square" className="rounded-xl group-hover:scale-[1.02] transition-transform duration-500 w-full" />
              <h4 className="text-base font-bold mt-3 tracking-tight group-hover:opacity-60 transition-opacity">{a.title}</h4>
              <p className="text-xs text-black/40 mt-1">{a.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
