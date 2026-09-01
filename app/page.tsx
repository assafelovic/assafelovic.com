import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { posts, investments, site } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-foreground underline decoration-muted/60 underline-offset-3 transition-colors hover:decoration-foreground"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <p className="mb-5 font-mono text-[15px] text-muted">$ whoami</p>
      <h1 className="mb-6 text-[30px] font-semibold leading-snug tracking-tight sm:text-[32px]">
        I like building things that think.
      </h1>
      <div className="space-y-4 text-[19px] leading-relaxed text-foreground/85">
        <p>
          I built my first agent in 2015 at{" "}
          <A href="https://patents.google.com/patent/US10303758B2">
            ServiceFriend
          </A>
          , which Meta acquired. Then I founded Tiv.ai, a WhatsApp
          assistant that grew to over 5 million users. Later I built Wix&apos;s
          first AI agent and led AI at monday.com.
        </p>
        <p>
          In 2023 I created{" "}
          <A href="https://github.com/assafelovic/gpt-researcher">
            GPT Researcher
          </A>
          , the first open source deep research agent. I then co-founded{" "}
          <A href="https://tavily.com">Tavily</A>, the search engine for AI
          agents, which Nebius acquired in 2026.
        </p>
        <p>
          Now I&apos;m building <A href="https://ora.ai">Ora</A>, working on
          how agents can use businesses autonomously.
        </p>
      </div>
      <Link
        href="/about"
        className="mt-6 inline-block font-mono text-[15px] text-muted transition-colors hover:text-foreground"
      >
        the full story →
      </Link>

      <SectionHeading>investing</SectionHeading>
      <p className="text-[18px] leading-relaxed text-foreground/85">
        I&apos;m also a scout for Sequoia, angel investing in early stage AI
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
        ))}{" "}
        If you&apos;re working on something exciting,{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-medium text-foreground underline decoration-muted/60 underline-offset-3 transition-colors hover:decoration-foreground"
        >
          reach out
        </a>
        .
      </p>

      <SectionHeading>writing</SectionHeading>
      <ul>
        {posts.filter((post) => post.featured).map((post) => (
          <li key={post.slug} className="border-b border-line">
            <a
              href={`/writing/${post.slug}`}
              className="group flex items-baseline gap-4 py-2.5"
            >
              <span className="w-[4ch] shrink-0 font-mono text-[15px] text-muted">
                {post.year}
              </span>
              <span className="text-[18px] font-[450] decoration-muted/60 underline-offset-3 group-hover:underline">
                {post.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <Link
        href="/writing"
        className="mt-4 inline-block font-mono text-[15px] text-muted transition-colors hover:text-foreground"
      >
        all writing →
      </Link>
    </>
  );
}
