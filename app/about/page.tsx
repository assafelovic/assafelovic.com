import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { timeline, investments, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Building AI agents since 2015: ServiceFriend, Tiv.ai, Wix, monday.com, GPT Researcher, Tavily, and now Ora.",
};

export default function About() {
  return (
    <>
      <p className="mb-5 font-mono text-[13px] text-muted">
        <span className="text-accent">$</span> cat about.md
      </p>
      <h1 className="mb-6 text-[26px] font-semibold leading-snug tracking-tight">
        About
      </h1>
      <div className="space-y-4 text-[16px] leading-relaxed text-foreground/85">
        <p>
          I&apos;m Assaf. I&apos;ve spent the last decade building AI agents —
          starting years before the term existed, back when we called them
          bots and everyone asked why.
        </p>
        <p>
          The thread through all of it: making machines genuinely useful to
          people, and lately, making the web genuinely usable by machines.
        </p>
      </div>

      <SectionHeading>the story so far</SectionHeading>
      <ol className="space-y-6">
        {timeline.map((entry) => (
          <li key={entry.title} className="flex gap-5">
            <span className="w-[5ch] shrink-0 pt-0.5 font-mono text-[13px] text-muted">
              {entry.period}
            </span>
            <div>
              <h3 className="text-[15px] font-semibold">{entry.title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-foreground/80">
                {entry.body}
              </p>
              {entry.links && (
                <p className="mt-1.5 flex gap-4">
                  {entry.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[12px] text-accent transition-opacity hover:opacity-70"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <SectionHeading>investing</SectionHeading>
      <p className="text-[15px] leading-relaxed text-foreground/85">
        I&apos;m a scout for Sequoia Capital, backing early-stage AI startups.
        Investments include{" "}
        {investments.map((inv, i) => (
          <span key={inv.name}>
            {inv.name}
            {inv.note && (
              <span className="font-mono text-[12px] text-muted">
                {" "}
                ({inv.note})
              </span>
            )}
            {i < investments.length - 1 ? ", " : "."}
          </span>
        ))}
      </p>

      <SectionHeading>contact</SectionHeading>
      <p className="text-[15px] leading-relaxed text-foreground/85">
        The fastest way to reach me is{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-medium underline decoration-muted/60 underline-offset-3 transition-colors hover:decoration-accent"
        >
          email
        </a>{" "}
        or a DM on{" "}
        <a
          href="https://x.com/assaf_elovic"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline decoration-muted/60 underline-offset-3 transition-colors hover:decoration-accent"
        >
          X
        </a>
        . If you&apos;re building agents, I probably want to hear about it.
      </p>
    </>
  );
}
