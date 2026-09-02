import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { SocialIcons } from "@/components/social-icons";
import { timeline, investments, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Building AI agents since 2015: ServiceFriend, Tiv.ai, Wix, monday.com, GPT Researcher, Tavily, and now Ora.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <p className="mb-5 font-mono text-[15px] text-muted">$ cat about.md</p>
      <h1 className="mb-6 text-[30px] font-semibold leading-snug tracking-tight">
        About
      </h1>
      <div className="space-y-4 text-[19px] leading-relaxed text-foreground/85">
        <p>
          I&apos;m Assaf. I&apos;ve been building AI agents since 2015,
          since before anyone called them agents. Back then we called them
          bots, and people asked why.
        </p>
        <p>
          When I&apos;m not building, I&apos;m usually helping others build. I
          angel invest in early stage AI startups as a scout for Sequoia.
        </p>
      </div>
      <SocialIcons />

      <SectionHeading>thinking about</SectionHeading>
      <p className="mb-4 text-[18px] leading-relaxed text-foreground/85">
        The last mile of autonomy. Models stopped being the bottleneck, the
        world is: AGI will only be as capable as what the web and the physical
        world let agents do without a human stepping in. Questions I keep
        coming back to:
      </p>
      <ul className="space-y-3 text-[18px] leading-relaxed text-foreground/85">
        <li className="flex gap-4">
          <span className="shrink-0 font-mono text-[15px] text-muted">?</span>
          How much of the world has to be rebuilt before agents can act on our
          behalf, on their own?
        </li>
        <li className="flex gap-4">
          <span className="shrink-0 font-mono text-[15px] text-muted">?</span>
          What does human–agent interaction look like when it empowers people
          and gives agents real autonomy, instead of trading one for the
          other?
        </li>
        <li className="flex gap-4">
          <span className="shrink-0 font-mono text-[15px] text-muted">?</span>
          How much do we delegate, what do we keep, and where does that
          equilibrium settle?
        </li>
      </ul>

      <SectionHeading>the story so far</SectionHeading>
      <ol className="space-y-6">
        {timeline.map((entry) => (
          <li key={entry.title} className="flex gap-5">
            <span className="w-[5ch] shrink-0 pt-0.5 font-mono text-[15px] text-muted">
              {entry.period}
            </span>
            <div>
              <h3 className="text-[18px] font-semibold">{entry.title}</h3>
              <p className="mt-1 text-[18px] leading-relaxed text-foreground/80">
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
                      className="font-mono text-[14px] text-muted underline decoration-muted/40 underline-offset-3 transition-colors hover:text-foreground"
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
      <p className="text-[18px] leading-relaxed text-foreground/85">
        I&apos;m also a scout for Sequoia, investing in early stage AI
        startups. Some investments:{" "}
        {investments.map((inv, i) => (
          <span key={inv.name}>
            {inv.name}
            {inv.note && (
              <span className="font-mono text-[14px] text-muted">
                {" "}
                ({inv.note})
              </span>
            )}
            {i < investments.length - 1 ? ", " : "."}
          </span>
        ))}
      </p>

      <SectionHeading>contact</SectionHeading>
      <p className="text-[18px] leading-relaxed text-foreground/85">
        The fastest way to reach me is{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-medium underline decoration-muted/60 underline-offset-3 transition-colors hover:decoration-foreground"
        >
          email
        </a>{" "}
        or a DM on{" "}
        <a
          href="https://x.com/assaf_elovic"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline decoration-muted/60 underline-offset-3 transition-colors hover:decoration-foreground"
        >
          X
        </a>
        . If you&apos;re building agents, I probably want to hear about it.
      </p>
    </>
  );
}
