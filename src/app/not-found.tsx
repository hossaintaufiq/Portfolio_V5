import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grade-hero flex min-h-screen items-center text-paper">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <p className="text-sm text-[#aab4cf]">Error 404</p>
        <h1 className="mt-4 max-w-[16ch] font-serif text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
          That page does not exist.
        </h1>
        <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-[#b5bed3]">
          The link may be old or mistyped. The portfolio is a single page, so
          everything you need is on the home page.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block bg-white px-6 py-3 text-sm font-medium text-[#16213a] hover:bg-[#dfe5ff]"
        >
          Go to the home page
        </Link>
      </div>
    </main>
  );
}
