import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Import all 6 reel videos
import bhiwandiReel2 from "@/source/bhiwandi reel 2.mp4";
import litewoodReel1 from "@/source/litewood reel 1.mp4";
import medicosReel1 from "@/source/medicos reel 1.mp4";
import medicosReel2 from "@/source/medicos reel 2.mp4";
import tridaReel1 from "@/source/trida reel 1.mp4";
import tridaReel2 from "@/source/trida reel 2.mp4";

// Import 6 BTS videos
import bhiwandiBts from "@/source/bhiwandi bts .mov";
import ownBts from "@/source/own bts.mov";
import tridaBts from "@/source/trida bts.mov";
import bts4 from "@/source/bts 4.MP4";
import bts5 from "@/source/bts 5.MP4";
import bts6 from "@/source/bts 6.MP4";

// Import 6 Grid images
import gridCafe from "@/source/grid/Cafe.jpg";
import gridDoctor from "@/source/grid/Doctor.jpg";
import gridFashion from "@/source/grid/Fashion.jpg";
import gridInterior from "@/source/grid/Interior.jpg";
import gridResturant from "@/source/grid/Resturant.jpg";
import gridShowroom from "@/source/grid/Showroom.jpg";

const ease = [0.25, 0.1, 0.25, 1] as const;

type TabKey = "videos" | "grid" | "bts";

interface TabConfig {
  key: TabKey;
  label: string;
  sideLabel: string;
}

const tabs: TabConfig[] = [
  { key: "videos", label: "Videos", sideLabel: "Videos" },
  { key: "grid", label: "Grid", sideLabel: "Grid" },
  { key: "bts", label: "BTS", sideLabel: "Behind\nThe\nScenes" },
];

interface ReelItem {
  id: number;
  src: string;
  title: string;
  link?: string;
}

const reelsData: Record<TabKey, ReelItem[]> = {
  videos: [
    { id: 1, src: bhiwandiReel2, title: "Bhiwandi", link: "https://www.instagram.com/p/DS7IXdXD0V2/" },
    { id: 2, src: litewoodReel1, title: "Litewood", link: "https://www.instagram.com/p/DTfvBzSjBCZ/" },
    { id: 3, src: medicosReel1, title: "Medicos", link: "https://www.instagram.com/p/DV3plQIjgN1/" },
    { id: 4, src: medicosReel2, title: "Medicos", link: "https://www.instagram.com/p/DVGJEJNkhlT/" },
    { id: 5, src: tridaReel1, title: "Trida", link: "https://www.instagram.com/p/DUDXnE5iA-U/" },
    { id: 6, src: tridaReel2, title: "Trida", link: "https://www.instagram.com/p/DT15f2jk_I0/" },
  ],
  grid: [
    { id: 1, src: gridCafe, title: "Cafe" },
    { id: 2, src: gridDoctor, title: "Doctor" },
    { id: 3, src: gridFashion, title: "Fashion" },
    { id: 4, src: gridInterior, title: "Interior" },
    { id: 5, src: gridResturant, title: "Restaurant" },
    { id: 6, src: gridShowroom, title: "Showroom" },
  ],
  bts: [
    { id: 1, src: bhiwandiBts, title: "Bhiwandi BTS" },
    { id: 2, src: ownBts, title: "Own BTS" },
    { id: 3, src: tridaBts, title: "Trida BTS" },
    { id: 4, src: bts4, title: "BTS 4" },
    { id: 5, src: bts5, title: "BTS 5" },
    { id: 6, src: bts6, title: "BTS 6" },
  ],
};

/* ── Individual Reel Card ── */
function ReelCard({
  reel,
  index,
  tabLabel,
  tabKey,
}: {
  reel: ReelItem;
  index: number;
  tabLabel: string;
  tabKey: TabKey;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(false);

  const handleTap = useCallback(() => {
    setShowControls((prev) => !prev);
  }, []);

  return (
    <motion.div
      key={`${tabKey}-${reel.id}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease, delay: index * 0.06 }}
      className="relative group rounded-2xl overflow-hidden bg-black aspect-[9/16] cursor-pointer"
      onClick={handleTap}
    >
      {tabKey === "grid" ? (
        <img
          src={reel.src}
          alt={reel.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : reel.src ? (
        <video
          ref={videoRef}
          src={reel.src}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={showControls}
        />
      ) : (
        /* Placeholder for empty reels */
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-black/[0.03] to-black/[0.08]">
          <div className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-black/20 ml-0.5" />
          </div>
          <span className="text-xs font-medium text-black/25 tracking-widest uppercase">
            {tabLabel} {reel.id}
          </span>
        </div>
      )}

      {/* Visit link icon */}
      {reel.link && (
        <a
          href={reel.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-14 right-3 z-20 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 transition-all duration-300 hover:scale-110"
          title="Visit on Instagram"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      )}

      {/* Title overlay (bottom) — only when controls hidden */}
      {reel.src && (tabKey === "grid" || !showControls) && (
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
          <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">
            {reel.title}
          </span>
        </div>
      )}
    </motion.div>
  );
}

/* ── Main Component ── */
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabKey>("videos");

  const currentTab = tabs.find((t) => t.key === activeTab)!;
  const reels = reelsData[activeTab];

  return (
    <section className="py-24 md:py-36 bg-[#F5F5F5] px-6 md:px-10 overflow-hidden">
      {/* ── Tab slider ── */}
      <div className="flex justify-center mb-12">
        <div className="relative inline-flex items-center bg-black/[0.06] rounded-full p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative z-10 px-6 md:px-8 py-2.5 text-sm font-semibold tracking-wide rounded-full transition-colors duration-300 ${activeTab === tab.key
                ? "text-white"
                : "text-black/40 hover:text-black/70"
                }`}
            >
              {tab.label}
            </button>
          ))}

          {/* Animated pill indicator */}
          <motion.div
            layoutId="tab-pill"
            className="absolute top-1 bottom-1 rounded-full bg-black"
            style={{
              left: `${tabs.findIndex((t) => t.key === activeTab) * (100 / tabs.length)}%`,
              width: `${100 / tabs.length}%`,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          />
        </div>
      </div>

      {/* ── Main layout ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease }}
          className="grid grid-cols-12 gap-6 md:gap-8 items-stretch min-h-[70vh]"
        >
          {/* Left — label box */}
          <div className="col-span-12 lg:col-span-3 flex items-center justify-center rounded-2xl bg-black min-h-[300px] lg:min-h-0">
            <h2
              className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-black tracking-[-0.04em] text-white text-center lg:text-left whitespace-pre-line"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              {currentTab.sideLabel}
            </h2>
          </div>

          {/* Right — Reels grid */}
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-full">
              {reels.map((reel, i) => (
                <ReelCard
                  key={`${activeTab}-${reel.id}`}
                  reel={reel}
                  index={i}
                  tabLabel={currentTab.label}
                  tabKey={activeTab}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
