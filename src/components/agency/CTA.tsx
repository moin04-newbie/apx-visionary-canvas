import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-[#F5F5F5] px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-black mb-6"
        >
          Let's Collaborate And Create Something Amazing!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-black/45 text-lg mb-10"
        >
          Join us in transforming your project from concept to completion
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a
            href="mailto:hello@apx.co"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-black text-[#F5F5F5] text-base font-semibold hover:bg-black/80 transition-all duration-300 active:scale-95"
          >
            <Mail size={16} />
            LET'S TALK
          </a>
        </motion.div>
      </div>
    </section>
  );
}
