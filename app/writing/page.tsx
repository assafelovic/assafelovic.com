import type { Metadata } from "next";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on building AI agents and AI products people actually use.",
  alternates: { canonical: "/writing" },
};

export default function Writing() {
  const years = [...new Set(posts.map((p) => p.year))];

  return (
    <>
      <p className="mb-5 font-mono text-[15px] text-muted">$ ls writing/</p>
      <h1 className="mb-6 text-[30px] font-semibold leading-snug tracking-tight">
        Writing
      </h1>
      <p className="mb-10 text-[19px] leading-relaxed text-foreground/85">
        I write about building AI products and agents. I&apos;ve been doing it
        since the chatbot days, so some of these have aged better than others.
        Every word here is mine, not AI&apos;s.
      </p>

      {years.map((year, idx) => (
        <section key={year}>
          <h2
            className={`mb-2 font-mono text-[14px] font-medium uppercase tracking-[0.14em] text-muted ${idx === 0 ? "" : "mt-10"}`}
          >
            ## {year}
          </h2>
          <ul>
            {posts
              .filter((p) => p.year === year)
              .map((post) => (
                <li key={post.slug} className="border-b border-line">
                  <a
                    href={`/writing/${post.slug}`}
                    className="group flex items-baseline gap-4 py-2.5"
                  >
                    <span className="w-[6ch] shrink-0 font-mono text-[15px] text-muted">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </span>
                    <span className="text-[18px] font-[450] decoration-muted/60 underline-offset-3 group-hover:underline">
                      {post.title}
                    </span>
                  </a>
                </li>
              ))}
          </ul>
        </section>
      ))}

    </>
  );
}
