import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "writing", href: "/writing" },
  { label: "projects", href: "/projects" },
  { label: "about", href: "/about" },
];

export function Nav() {
  return (
    <nav className="mb-16 flex items-baseline justify-between sm:mb-20">
      <Link
        href="/"
        className="cursor-blink text-[18px] font-semibold tracking-tight"
      >
        Assaf Elovic
      </Link>
      <div className="flex items-baseline gap-4 sm:gap-5">
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
    </nav>
  );
}
