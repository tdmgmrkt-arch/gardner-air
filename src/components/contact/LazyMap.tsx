"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

const MAP_SRC =
  "https://maps.google.com/maps?q=30714+Wealth+St+Murrieta+CA+92563&z=15&output=embed";
const ADDRESS = "30714 Wealth St, Murrieta, CA 92563";

export function LazyMap() {
  const [loaded, setLoaded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full h-[400px] lg:h-[520px] bg-[#1F2937]"
    >
      {loaded ? (
        <iframe
          src={MAP_SRC}
          title="Map showing Gardner Air office at 30714 Wealth St, Murrieta, CA 92563"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full h-full border-0"
          allowFullScreen
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full gap-4 px-6 text-center">
          <MapPin className="w-10 h-10 text-[#6B7280]" aria-hidden="true" />
          <p className="text-[#D1D5DB] text-sm font-medium">{ADDRESS}</p>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="mt-1 inline-flex items-center gap-2 rounded border border-[#374151] bg-[#111827] px-4 py-2 text-sm font-semibold text-[#D1D5DB] hover:bg-[#1F2937] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D42027]/60 min-h-[44px]"
          >
            Load interactive map
          </button>
        </div>
      )}
    </div>
  );
}
