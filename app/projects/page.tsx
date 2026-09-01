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
      <p className="mb-5 font-mono text-[13px] text-muted">
        <span className="text-accent">$</span> ls projects/
      </p>
      <h1 className="mb-6 text-[26px] font-semibold leading-snug tracking-tight">
        Projects
      </h1>
      <p className="mb-10 text-[16px] leading-relaxed text-foreground/85">
        A decade of building agents — open source, startups, and a couple of
        acquisitions along the way.
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
                <span className="text-[16px] font-medium transition-colors group-hover:text-accent">
                  {project.name}
                  {project.active && (
                    <span
                      className="ml-2 inline-block h-[7px] w-[7px] rounded-full bg-accent align-baseline"
                      title="active"
                    />
                  )}
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
