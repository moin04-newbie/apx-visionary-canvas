import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-8 h-px bg-black/30" />
    <span className="text-xs font-semibold tracking-label uppercase text-black/40">
      {children}
    </span>
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5] pt-28 pb-0 overflow-hidden flex flex-col">
      {/* Top metadata row */}
      <div className="flex justify-between items-start px-6 md:px-10 mb-12">
        <motion.span {...fadeUp(0.1)} className="text-xs font-medium text-black/30 tracking-widest">
          1950
        </motion.span>
        <motion.span {...fadeUp(0.15)} className="text-xs font-medium text-black/30 tracking-widest">
          08–08
        </motion.span>
      </div>

      {/* Main content — centered hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 text-center">
        <motion.h1
          {...fadeUp(0.25)}
          className="text-display-hero font-bold tracking-agency leading-[0.88] text-black"
        >
          Tired of switching
          <br />
          agencies?
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="mt-4 text-[clamp(1.5rem,4vw,3.5rem)] font-medium tracking-agency leading-tight text-black/60 italic"
        >
          We get you.
        </motion.p>

        <motion.div {...fadeUp(0.55)} className="mt-10 flex items-center gap-4">
          {/* Minimal avatar/icon cluster */}
          <div className="flex -space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-black/10 border-2 border-[#F5F5F5]"
              />
            ))}
          </div>
          <p className="text-sm text-black/50 leading-snug max-w-xs text-left">
            lorem ipsum con sectetur
            <br />
            lorem ipsum consec
          </p>
        </motion.div>
      </div>

      {/* Brand stamp — full-width massive type */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease, delay: 0.3 }}
        className="w-full px-4 md:px-6 mt-12 leading-none overflow-hidden"
      >
        <h2 className="text-brand-stamp font-black tracking-agency leading-none text-black select-none whitespace-nowrap">
          ASTER.CO
        </h2>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-black/30">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-black/20"
        />
      </motion.div>
    </section>
  );
}
