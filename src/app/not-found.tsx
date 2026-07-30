import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 bg-white">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#D42027] mb-4">
        404
      </p>
      <h1
        className="font-display text-4xl font-bold text-[#0A0A0A] mb-4 text-center"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Page not found.
      </h1>
      <p className="text-[#6B7280] text-base mb-8 text-center max-w-md">
        The page you are looking for does not exist yet.
        Inner pages are in development.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center h-11 px-6 rounded text-sm font-semibold bg-[#D42027] text-white hover:bg-[#B01C22] transition-colors"
      >
        Return to Homepage
      </Link>
    </main>
  );
}
