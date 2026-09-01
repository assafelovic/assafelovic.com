import type { Metadata } from "next";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A decade of AI agents: GPT Researcher, Tavily, Ora, and everything before.",
};

export default function Projects() {
  return (
    <>
      <p className="mb-5 font-mono text-[13px] text-muted">$ ls projects/</p>
      <h1 className="mb-6 text-[26px] font-semibold leading-snug tracking-tight">
        Projects
      </h1>
      <p className="mb-10 text-[16px] leading-relaxed text-foreground/85">
        Things I&apos;ve built over the past decade. Some open source, some
        startups. A few got acquired.
      </p>

      <ul>
        {projects.map((project) => (
          <li key={project.name} className="border-b border-line">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-4"
            >
              <span className="flex items-baseline gap-4">
                <span className="text-[16px] font-medium decoration-muted/60 underline-offset-3 group-hover:underline">
                  {project.name}
                </span>
                <span className="ml-auto shrink-0 font-mono text-[12px] text-muted">
                  {project.meta}
                </span>
              </span>
              <span className="mt-1 block text-[14px] leading-relaxed text-muted">
                {project.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
