import { socials, type Social } from "@/lib/data";

function Icon({ label }: { label: Social["label"] }) {
  const className = "h-[20px] w-[20px]";
  switch (label) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"
          />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-4.71-6.23-5.4 6.23H2.74l7.73-8.84L1.25 2.25H8.08l4.25 5.62 5.91-5.62zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0h.01z"
          />
        </svg>
      );
    case "medium":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M13.54 12a6.82 6.82 0 0 1-3.77 6.16 6.82 6.82 0 0 1 0-12.32A6.82 6.82 0 0 1 13.54 12zm7.36 0c0 2.1-.87 3.8-1.94 3.8s-1.94-1.7-1.94-3.8.87-3.8 1.94-3.8 1.94 1.7 1.94 3.8zM24 12c0 1.72-.3 3.12-.68 3.12S22.64 13.72 22.64 12s.3-3.12.68-3.12S24 10.28 24 12z"
          />
        </svg>
      );
  }
}

export function SocialIcons() {
  return (
    <div className="mt-7 flex items-center gap-4">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="text-muted transition-colors hover:text-foreground"
        >
          <Icon label={s.label} />
        </a>
      ))}
    </div>
  );
}
