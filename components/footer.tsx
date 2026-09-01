import { socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-20 flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-line pt-8 sm:mt-24">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[15px] text-muted transition-colors hover:text-foreground"
        >
          {s.label}
        </a>
      ))}
      <span className="ml-auto font-mono text-[14px] text-muted">
        © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
