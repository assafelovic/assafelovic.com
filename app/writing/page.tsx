import type { Metadata } from "next";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on building AI agents and AI products people actually use.",
};

export default function Writing() {
  const years = [...new Set(posts.map((p) => p.year))];

  return (
    <>
      <p className="mb-5 font-mono text-[13px] text-muted">
        <span className="text-accent">$</span> ls writing/
      </p>
      <h1 className="mb-6 text-[26px] font-semibold leading-snug tracking-tight">
        Writing
      </h1>
      <p className="mb-10 text-[16px] leading-relaxed text-foreground/85">
        Essays on building AI agents and products people actually use. Written
        along the way — from the chatbot era to deep research agents.
      </p>

      {years.map((year, idx) => (
        <section key={year}>
          <h2
            className={`mb-2 font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-muted ${idx === 0 ? "" : "mt-10"}`}
          >
            <span className="text-accent">## </span>
            {year}
          </h2>
          <ul>
            {posts
              .filter((p) => p.year === year)
              .map((post) => (
                <li key={post.href} className="border-b border-line">
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-4 py-2.5"
                  >
                    <span className="w-[6ch] shrink-0 font-mono text-[13px] text-muted">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </span>
                    <span className="text-[15px] font-[450] transition-colors group-hover:text-accent">
                      {post.title}
                    </span>
                  </a>
                </li>
              ))}
          </ul>
        </section>
      ))}

      <a
        href="https://medium.com/@assafelovic"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block font-mono text-[13px] text-muted transition-colors hover:text-foreground"
      >
        earlier posts on medium →
      </a>
    </>
  );
}
