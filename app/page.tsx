import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { posts, projects, investments } from "@/lib/data";

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-foreground underline decoration-muted/60 underline-offset-3 transition-colors hover:decoration-accent"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <p className="mb-5 font-mono text-[13px] text-muted">
        <span className="text-accent">$</span> whoami
      </p>
      <h1 className="mb-6 text-[26px] font-semibold leading-snug tracking-tight sm:text-[28px]">
        I&apos;ve been building AI agents for over a decade.
      </h1>
      <div className="space-y-4 text-[16px] leading-relaxed text-foreground/85">
        <p>
          Long before they were called agents — from{" "}
          <A href="https://patents.google.com/patent/US10303758B2">
            ServiceFriend
          </A>{" "}
          (acquired by Facebook) and Tiv.ai, a WhatsApp assistant used by 5M+
          people, to Wix&apos;s first AI agent and Head of AI at monday.com.
        </p>
        <p>
          I created{" "}
          <A href="https://github.com/assafelovic/gpt-researcher">
            GPT Researcher
          </A>
          , the OG open deep research agent (29k+ stars), and co-founded{" "}
          <A href="https://tavily.com">Tavily</A>, the search engine for AI
          agents, acquired by Nebius in 2026. Now I&apos;m building{" "}
          <A href="https://ora.ai">Ora</A> — working on how agents can use
          businesses autonomously.
        </p>
      </div>

      <SectionHeading>writing</SectionHeading>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.href} className="border-b border-line">
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline gap-4 py-2.5"
            >
              <span className="w-[4ch] shrink-0 font-mono text-[13px] text-muted">
                {post.year}
              </span>
              <span className="text-[15px] font-[450] transition-colors group-hover:text-accent">
                {post.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <Link
        href="/writing"
        className="mt-4 inline-block font-mono text-[13px] text-muted transition-colors hover:text-foreground"
      >
        all writing →
      </Link>

      <SectionHeading>projects</SectionHeading>
      <ul>
        {projects.slice(0, 4).map((project) => (
          <li key={project.name} className="border-b border-line">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline gap-4 py-2.5"
            >
              <span className="text-[15px] font-[450] transition-colors group-hover:text-accent">
                {project.name}
              </span>
              <span className="ml-auto shrink-0 font-mono text-[12px] text-muted">
                {project.meta}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <Link
        href="/projects"
        className="mt-4 inline-block font-mono text-[13px] text-muted transition-colors hover:text-foreground"
      >
        all projects →
      </Link>

      <SectionHeading>investing</SectionHeading>
      <p className="text-[15px] leading-relaxed text-foreground/85">
        I&apos;m a scout for{" "}
        <span className="font-medium">Sequoia Capital</span>, investing in
        early-stage AI startups —{" "}
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
    </>
  );
}
