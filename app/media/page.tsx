import type { Metadata } from "next";
import { videos, press } from "@/lib/data";
import type { MediaItem } from "@/lib/data";

export const metadata: Metadata = {
  title: "Media",
  description: "Talks, interviews, and press from around the web.",
  alternates: { canonical: "/media" },
};

function youtubeId(href: string): string | null {
  return new URL(href).searchParams.get("v");
}

function VideoList({ items }: { items: MediaItem[] }) {
  return (
    <ul>
      {items.map((item) => {
        const id = youtubeId(item.href);
        return (
          <li key={item.href} className="border-b border-line">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 py-3.5"
            >
              {id && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="w-28 shrink-0 rounded-[3px] border border-line object-cover aspect-video"
                />
              )}
              <span>
                <span className="block text-[17px] font-[450] leading-snug decoration-muted/60 underline-offset-3 group-hover:underline">
                  {item.title}
                </span>
                <span className="mt-1 block font-mono text-[13px] text-muted">
                  {item.year} · {item.source}
                </span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function ResultList({ items }: { items: MediaItem[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.href} className="border-b border-line">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-baseline gap-4 py-2.5"
          >
            <span className="w-[4ch] shrink-0 font-mono text-[14px] text-muted">
              {item.year}
            </span>
            <span className="text-[17px] font-[450] decoration-muted/60 underline-offset-3 group-hover:underline">
              {item.title}
            </span>
            <span className="ml-auto hidden shrink-0 font-mono text-[13px] text-muted sm:inline">
              {item.source}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Media() {
  const total = videos.length + press.length;

  return (
    <>
      <h1 className="mb-6 text-[30px] font-semibold leading-snug tracking-tight">
        Around the web
      </h1>
      <p className="mb-8 text-[19px] leading-relaxed text-foreground/85">
        Talks I&apos;ve given and press about things I&apos;ve built, from
        around the web.
      </p>
      <div className="mb-10 rounded-md border border-line bg-foreground/[0.03] px-4 py-3 font-mono text-[14px]">
        <p className="text-foreground/80">
          $ tavily search &quot;assaf elovic&quot;
        </p>
        <p className="mt-1 text-muted">{total} results (0.38s)</p>
      </div>

      <h2 className="mb-2 font-mono text-[14px] font-medium uppercase tracking-[0.14em] text-muted">
        ## videos
      </h2>
      <VideoList items={videos} />

      <h2 className="mb-2 mt-10 font-mono text-[14px] font-medium uppercase tracking-[0.14em] text-muted">
        ## press
      </h2>
      <ResultList items={press} />
    </>
  );
}
