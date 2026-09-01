"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "writing", href: "/writing" },
  { label: "projects", href: "/projects" },
  { label: "media", href: "/media" },
  { label: "about", href: "/about" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mb-16 sm:mb-20">
      <div className="flex items-baseline justify-between">
        <Link
          href="/"
          className="cursor-blink text-[18px] font-semibold tracking-tight"
        >
          Assaf Elovic
        </Link>

        <div className="hidden items-baseline gap-5 sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[15px] text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-baseline gap-5 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="cursor-pointer font-mono text-[15px] text-muted transition-colors hover:text-foreground"
          >
            [{open ? "x" : "menu"}]
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-6 flex flex-col border-y border-line py-2 sm:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 font-mono text-[15px] text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
