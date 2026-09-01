export const site = {
  name: "Assaf Elovic",
  url: "https://www.assafelovic.com",
  title: "Assaf Elovic",
  description:
    "Building AI agents since 2015. Creator of GPT Researcher, co-founder of Tavily (acquired by Nebius), now building Ora. Angel investor and Sequoia scout.",
  email: "assaf.elovic@gmail.com",
};

export const socials = [
  { label: "github", href: "https://github.com/assafelovic" },
  { label: "x", href: "https://x.com/assaf_elovic" },
  { label: "linkedin", href: "https://www.linkedin.com/in/assafelovic/" },
  { label: "medium", href: "https://medium.com/@assafelovic" },
] as const;

export type Social = (typeof socials)[number];

export type Post = {
  title: string;
  slug: string; // hosted on this site at /writing/[slug]
  date: string; // ISO
  year: string;
  featured?: boolean;
};

export const posts: Post[] = [
  {
    title: "The Hidden Metric That Determines AI Product Success",
    slug: "the-hidden-metric-that-determines-ai-product-success",
    date: "2025-06-11",
    year: "2025",
    featured: true,
  },
  {
    title: "You are Doing Research Wrong",
    slug: "you-are-doing-research-wrong",
    date: "2024-09-06",
    year: "2024",
  },
  {
    title: "How I Built an Autonomous AI Agent for Online Research",
    slug: "how-i-built-an-autonomous-ai-agent-for-online-research",
    date: "2023-07-24",
    year: "2023",
    featured: true,
  },
  {
    title: "Why Open Source Models May Not Win The AI Race",
    slug: "why-open-source-models-may-not-win-the-ai-race",
    date: "2023-06-22",
    year: "2023",
    featured: true,
  },
  {
    title: "Action-Driven LLMs: The Future of Chatbot Development",
    slug: "action-driven-llms-the-future-of-chatbot-development",
    date: "2023-02-27",
    year: "2023",
  },
  {
    title: "How to Evaluate Startup Ideas",
    slug: "how-to-evaluate-startup-ideas",
    date: "2019-10-06",
    year: "2019",
    featured: true,
  },
  {
    title: "What I've Learned as VP at a Large Startup",
    slug: "what-ive-learned-as-vp-at-a-large-startup",
    date: "2019-03-04",
    year: "2019",
  },
  {
    title: "How My Startup Grew by Over 1M Users in One Month",
    slug: "how-my-startup-grew-by-over-1m-users-in-one-month",
    date: "2018-06-09",
    year: "2018",
    featured: true,
  },
  {
    title: "Bots Are Here to Stay. Here Are 4 Reasons Why",
    slug: "bots-are-here-to-stay-here-are-4-reasons-why",
    date: "2017-09-08",
    year: "2017",
    featured: true,
  },
];

export type Project = {
  name: string;
  href: string;
  description: string;
  meta: string;
  active?: boolean;
};

export const projects: Project[] = [
  {
    name: "Ora",
    href: "https://ora.ai",
    description:
      "Enabling AI agents to use businesses autonomously. Backed by Sequoia and Index.",
    meta: "2026-now",
    active: true,
  },
  {
    name: "GPT Researcher",
    href: "https://github.com/assafelovic/gpt-researcher",
    description:
      "The first open source deep research agent. Cited in academic papers.",
    meta: "★ 29k+",
    active: true,
  },
  {
    name: "Tavily",
    href: "https://tavily.com",
    description:
      "The search engine for AI agents. Over a million developers worldwide.",
    meta: "acq. by Nebius",
  },
  {
    name: "Tiv.ai",
    href: "https://www.crunchbase.com/organization/tiv-ai",
    description: "Consumer productivity assistant on WhatsApp.",
    meta: "5M+ users",
  },
  {
    name: "ServiceFriend",
    href: "https://patents.google.com/patent/US10303758B2",
    description: "Bots and humans answering customers together. US patent granted.",
    meta: "acq. by Meta",
  },
];

export type TimelineEntry = {
  period: string;
  title: string;
  body: string;
  links?: { label: string; href: string }[];
};

export const timeline: TimelineEntry[] = [
  {
    period: "2015",
    title: "ServiceFriend",
    body: "Where I started building conversational agents, years before anyone called them that. We built messaging systems where bots and humans worked together, and I was granted a US patent for real-time automated conversational agents. Meta acquired the company.",
    links: [
      {
        label: "US10303758B2",
        href: "https://patents.google.com/patent/US10303758B2",
      },
    ],
  },
  {
    period: "then",
    title: "Tiv.ai",
    body: "My first startup: a personal assistant that lived on WhatsApp and helped people get things done. It grew to over 5 million users worldwide. We went through Y Combinator's Startup School in 2019.",
  },
  {
    period: "then",
    title: "Wix",
    body: "I came to build Wix's first AI agent, the chatbot supporting all Wix users, and grew the team from zero to 60 engineers across nine teams. Then LLMs arrived and disrupted everything we'd built, so we rebuilt around them.",
  },
  {
    period: "then",
    title: "monday.com",
    body: "Led the AI transformation across a company that runs a billion work tasks a year: launched AI Blocks, then a digital workforce of agents working inside boards. AI usage grew 100% month over month.",
  },
  {
    period: "2023",
    title: "GPT Researcher",
    body: "An open source agent that researches any topic online and writes a report with citations. I built it before deep research was a product category. It has 29k stars on GitHub and gets cited in academic papers.",
    links: [
      { label: "github", href: "https://github.com/assafelovic/gpt-researcher" },
      {
        label: "scholar",
        href: "https://scholar.google.com/scholar?q=%22GPT+Researcher%22",
      },
    ],
  },
  {
    period: "2024",
    title: "Tavily",
    body: "Co-founded Tavily, a search engine built for AI agents rather than people. It grew to over a million developers worldwide, with Fortune 500 customers. Nebius acquired it in 2026.",
    links: [{ label: "tavily.com", href: "https://tavily.com" }],
  },
  {
    period: "now",
    title: "Ora",
    body: "Working on how agents can use businesses autonomously. Backed by Sequoia and Index.",
    links: [{ label: "ora.ai", href: "https://ora.ai" }],
  },
];

export type MediaItem = {
  title: string;
  href: string;
  source: string;
  year: string;
};

export const videos: MediaItem[] = [
  {
    title:
      "How Monday.com Uses AI for SMBs: Assaf Elovic Takes on Agents, Workflows & Trust",
    href: "https://www.youtube.com/watch?v=ZT-qhfftx0o",
    source: "Aleph, Almost Human",
    year: "2025",
  },
  {
    title: "Learn How Monday.com Built Their AI Agent Workforce with LangGraph",
    href: "https://www.youtube.com/watch?v=P8ewpJrZVwo",
    source: "LangChain Interrupt",
    year: "2025",
  },
  {
    title: "Multi Agents | Assaf Elovic (GPT Researcher)",
    href: "https://www.youtube.com/watch?v=mLutiqfJxv0",
    source: "LangTalks",
    year: "2025",
  },
  {
    title: "Ctrl + AI + Delete: GenAI and the Disruption of Code Production",
    href: "https://www.youtube.com/watch?v=4dFGZqu0gGk",
    source: "Aideation",
    year: "2024",
  },
  {
    title: "From Single to Multi-Agents: GPT Researcher & Wix",
    href: "https://www.youtube.com/watch?v=J7wd-VtGVhM",
    source: "LangTalks",
    year: "2024",
  },
  {
    title: "Leveraging Generative AI to Build the Ultimate AI Chatbot",
    href: "https://www.youtube.com/watch?v=t7O-HU_Wa_k",
    source: "Wix Engineering",
    year: "2024",
  },
];

export const press: MediaItem[] = [
  {
    title:
      "Nebius to acquire one-year-old Israeli AI startup Tavily in deal worth up to $400 million",
    href: "https://www.calcalistech.com/ctechnews/article/r168bhodbe",
    source: "Calcalist Tech",
    year: "2026",
  },
  {
    title: "Tavily raises $25M to connect AI agents to the web",
    href: "https://techcrunch.com/2025/08/06/tavily-raises-25m-to-connect-ai-agents-to-the-web/",
    source: "TechCrunch",
    year: "2025",
  },
  {
    title: "Assaf Elovic on GPT Researcher Redefining AI-Driven Research",
    href: "https://aipressroom.com/assaf-gpt-researcher-ai-interview/",
    source: "AI Press Room",
    year: "2024",
  },
];

export const investments = [
  { name: "LangChain", note: "" },
  { name: "Anthropic", note: "" },
  { name: "Engram Labs", note: "" },
  { name: "Delphi", note: "" },
  { name: "PiLabs", note: "acq. by Microsoft" },
  { name: "Runhouse", note: "acq. by Anthropic" },
];
