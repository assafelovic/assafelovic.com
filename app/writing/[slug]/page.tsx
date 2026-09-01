import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost, getPostSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/writing/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const dateLabel = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <p className="mb-5 font-mono text-[15px] text-muted">
        <Link href="/writing" className="transition-colors hover:text-foreground">
          $ cd ../writing
        </Link>
      </p>
      <h1 className="mb-3 text-[28px] font-semibold leading-snug tracking-tight sm:text-[30px]">
        {post.title}
      </h1>
      {post.description ? (
        <p className="mb-3 text-[18px] leading-relaxed text-muted">
          {post.description}
        </p>
      ) : null}
      <p className="mb-10 font-mono text-[14px] text-muted">{dateLabel}</p>

      <div className="post-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="mb-4 mt-10 text-[22px] font-semibold leading-snug tracking-tight">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mb-3 mt-8 text-[19px] font-semibold leading-snug">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="mb-5 text-[17px] leading-relaxed text-foreground/90">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="mb-5 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-foreground/90">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="mb-5 list-decimal space-y-2 pl-6 text-[17px] leading-relaxed text-foreground/90">
                {children}
              </ol>
            ),
            li: ({ children }) => <li>{children}</li>,
            a: ({ href, children }) => (
              <a
                href={href}
                target={href?.startsWith("/") ? undefined : "_blank"}
                rel={href?.startsWith("/") ? undefined : "noopener noreferrer"}
                className="underline decoration-muted/60 underline-offset-3 transition-colors hover:decoration-foreground"
              >
                {children}
              </a>
            ),
            blockquote: ({ children }) => (
              <blockquote className="mb-5 border-l-2 border-line pl-4 text-[17px] italic text-muted">
                {children}
              </blockquote>
            ),
            code: ({ children, className }) => {
              const isBlock = className?.includes("language-");
              if (isBlock) {
                return <code className={className}>{children}</code>;
              }
              return (
                <code className="rounded bg-foreground/[0.06] px-1.5 py-0.5 font-mono text-[15px]">
                  {children}
                </code>
              );
            },
            pre: ({ children }) => (
              <pre className="mb-5 overflow-x-auto rounded-md border border-line bg-foreground/[0.03] p-4 font-mono text-[14px] leading-relaxed">
                {children}
              </pre>
            ),
            img: ({ src, alt }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={typeof src === "string" ? src : undefined}
                alt={alt ?? ""}
                loading="lazy"
                className="my-2 w-full rounded-md border border-line"
              />
            ),
            em: ({ children, node }) => {
              // captions: an em that is the only content of its paragraph after an image
              void node;
              return <em>{children}</em>;
            },
            hr: () => <hr className="my-10 border-line" />,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <p className="mt-12 border-t border-line pt-6 font-mono text-[14px] text-muted">
        <Link href="/writing" className="transition-colors hover:text-foreground">
          ← all writing
        </Link>
      </p>
    </article>
  );
}
