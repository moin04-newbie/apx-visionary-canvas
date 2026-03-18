interface PlaceholderImageProps {
  className?: string;
  aspect?: string;
  dark?: boolean;
}

export default function PlaceholderImage({
  className = "",
  aspect = "aspect-video",
  dark = false,
}: PlaceholderImageProps) {
  return (
    <div
      className={`${aspect} ${dark ? "bg-[#111]" : "bg-[#E0E0E0]"} relative overflow-hidden group rounded-none ${className}`}
    >
      {/* Subtle crosshair center */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-300">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke={dark ? "#fff" : "#000"} strokeWidth="1" />
          <line x1="20" y1="0" x2="20" y2="40" stroke={dark ? "#fff" : "#000"} strokeWidth="0.5" />
          <line x1="0" y1="20" x2="40" y2="20" stroke={dark ? "#fff" : "#000"} strokeWidth="0.5" />
          <circle cx="20" cy="20" r="2" fill={dark ? "#fff" : "#000"} />
        </svg>
      </div>
      {/* Inset border */}
      <div className="absolute inset-0 outline outline-1 outline-black/5 -outline-offset-1 pointer-events-none" />
    </div>
  );
}
