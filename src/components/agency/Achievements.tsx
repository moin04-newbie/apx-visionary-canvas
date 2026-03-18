import { motion } from "framer-motion";
import PlaceholderImage from "./PlaceholderImage";

const awards = [
  {
    id: 1,
    title: "Awwwards",
    index: "01",
    desc: "We pride ourselves on delivering visual solutions that are not only relevant but also make a real impact for brands. Our designs are designed to resonate, stand out, and deserve to be recognized at Awwwards.",
  },
  {
    id: 2,
    title: "CSS Design Awards",
    index: "02",
    desc: "Every element is designed with great detail to achieve visual perfection that aligns with the brand and user needs. We believe design can create impact, and that's what we bring to every pixel.",
  },
  {
    id: 3,
    title: "Red Dot Design Award",
    index: "03",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit dolor placerat lorem convallis cursus nulla. Quis lacus cursus et tortor cursus leo quam nisl.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
});

export default function Achievements() {
  return (
    <section className="py-24 md:py-36 bg-[#F5F5F5] px-6 md:px-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-px bg-black/30" />
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-black/40">
          Awards
        </span>
      </div>
      <motion.h2
        {...fadeUp()}
        className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-[-0.04em] leading-none text-black mb-16"
      >
        achievements
      </motion.h2>

      {/* Awards list */}
      <div className="flex flex-col gap-0">
        {awards.map((award, i) => (
          <motion.div
            key={award.id}
            {...fadeUp(i * 0.12)}
            className="grid grid-cols-12 gap-6 md:gap-10 items-center py-12 border-t border-black/10 group"
          >
            {/* Image */}
            <div className="col-span-12 md:col-span-4">
              <PlaceholderImage
                aspect="aspect-[4/3]"
                className="rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Counter */}
            <div className="col-span-2 md:col-span-1 hidden md:flex items-center justify-center">
              <span className="text-xs font-mono text-black/25 writing-mode-vertical rotate-90 tracking-widest">
                S / {award.index}
              </span>
            </div>

            {/* Content */}
            <div className="col-span-12 md:col-span-7">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
                {award.title}
              </h3>
              <p className="text-black/45 text-sm md:text-base leading-relaxed max-w-md mb-6">
                {award.desc}
              </p>
              <a
                href="#"
                className="inline-flex px-7 py-2.5 rounded-full border-2 border-black text-black text-sm font-semibold hover:bg-black hover:text-[#F5F5F5] transition-all duration-300 active:scale-95"
              >
                MORE
              </a>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-black/10" />
      </div>
    </section>
  );
}
