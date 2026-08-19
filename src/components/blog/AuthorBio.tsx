import Link from "next/link";
import type { Author } from "@/data/authors";

export function AuthorBio({ author }: { author: Author }) {
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <aside
      aria-label={`About the author, ${author.name}`}
      className="my-16 rounded-2xl border border-[#D8D4CC] bg-[#F7F6F3] p-8 lg:p-10"
    >
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B7280] mb-6">
        About the Author
      </p>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 items-start">
        <div
          aria-hidden="true"
          className="flex-shrink-0 w-16 h-16 rounded-full bg-[#111318] text-white flex items-center justify-center font-bold text-lg"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {initials}
        </div>
        <div className="flex-1">
          <h3
            className="font-bold text-[#111318] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1.25rem" }}
          >
            {author.name}
          </h3>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D42027] mt-1 mb-4">
            {author.role}
          </p>
          <p className="text-[15.5px] text-[#2A2D33] leading-relaxed">
            {author.bio}
          </p>
          <Link
            href="/about/leadership-team/"
            className="inline-flex items-center gap-1.5 mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111318] hover:text-[#D42027] transition-colors"
          >
            Meet the full leadership team
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
