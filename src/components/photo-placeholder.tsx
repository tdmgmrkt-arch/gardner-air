/**
 * PhotoPlaceholder — editorial brief card for client photography sourcing.
 * Drop where a future <Image> will live. Shows filename, dimensions, and
 * a written brief so the client knows exactly what to shoot or generate.
 */
interface PhotoPlaceholderProps {
  /** Short title shown in the box header */
  label: string;
  /** 1–3 sentence editorial brief: what's in frame, mood, light */
  subject: string;
  /** Suggested kebab-case .webp filename */
  filename: string;
  /** Human-readable size + aspect ratio, e.g. "1200 × 1500 px (4:5)" */
  dimensions: string;
  /** CSS aspect-ratio string, e.g. "4 / 5" */
  aspect: string;
  /** Placement on light or dark backgrounds */
  variant?: "light" | "dark";
  className?: string;
}

export function PhotoPlaceholder({
  label,
  subject,
  filename,
  dimensions,
  aspect,
  variant = "light",
  className = "",
}: PhotoPlaceholderProps) {
  const bg = variant === "dark" ? "bg-white/5 border-white/20" : "bg-[#F4F5F6] border-[#D1D5DB]";
  const textPrimary = variant === "dark" ? "text-white" : "text-[#0A0A0A]";
  const textSecondary = variant === "dark" ? "text-white/60" : "text-[#6B7280]";
  const codeBlock = variant === "dark" ? "bg-white/10 text-white/80" : "bg-white text-[#374151] border border-[#E5E7EB]";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[6px] border-2 border-dashed ${bg} ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={`Photo placeholder: ${label}`}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
        {/* Header */}
        <div>
          <p className={`text-[10px] font-mono font-semibold uppercase tracking-widest mb-1 ${textSecondary}`}>
            Photo Placeholder
          </p>
          <p className={`text-sm font-semibold leading-snug ${textPrimary}`}>{label}</p>
        </div>

        {/* Brief */}
        <p className={`text-xs leading-relaxed flex-1 py-3 ${textSecondary}`}>{subject}</p>

        {/* File spec */}
        <div className={`rounded px-3 py-2 font-mono text-[10px] leading-relaxed ${codeBlock}`}>
          <span className="font-bold">/{filename}</span>
          <br />
          {dimensions}
        </div>
      </div>
    </div>
  );
}
