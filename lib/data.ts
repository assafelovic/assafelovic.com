export const site = {
  name: "Assaf Elovic",
  url: "https://www.assafelovic.com",
  title: "Assaf Elovic",
  description:
    "I've been building AI agents for over a decade. Creator of GPT Researcher, co-founder of Tavily (acquired by Nebius), now building Ora. Angel investor and Sequoia scout.",
  email: "assaf.elovic@gmail.com",
};

export const socials = [
  { label: "github", href: "https://github.com/assafelovic" },
  { label: "x", href: "https://x.com/assaf_elovic" },
  { label: "medium", href: "https://medium.com/@assafelovic" },
  { label: "linkedin", href: "https://www.linkedin.com/in/assafelovic/" },
  { label: "email", href: "mailto:assaf.elovic@gmail.com" },
];

export type Post = {
  title: string;
  href: string;
  date: string; // ISO
  year: string;
};

export const posts: Post[] = [
  {
    title: "The Hidden Metric That Determines AI Product Success",
    href: "https://medium.com/@assafelovic/the-hidden-metric-that-determines-ai-product-success-799a98fd57aa",
    date: "2025-06-11",
    year: "2025",
  },
  {
    title: "Introducing GPT Researcher Deep Research",
    href: "https://medium.com/@assafelovic/introducing-gpt-researcher-deep-research-the-best-open-source-alternative-7675acdb782b",
    date: "2025-02-26",
    year: "2025",
  },
  {
    title: "The Future of AI Driven Research is Here",
    href: "https://medium.com/@assafelovic/the-future-of-ai-driven-research-is-here-27668b76b632",
    date: "2024-09-06",
    year: "2024",
  },
  {
    title: "How to Build the Ultimate AI Automation with Multi-Agent Collaboration",
    href: "https://medium.com/@assafelovic/how-to-build-the-ultimate-ai-automation-with-multi-agent-collaboration-ed61a1ea8f3b",
    date: "2024-05-10",
    year: "2024",
  },
  {
    title: "How to Build an OpenAI Assistant with Internet Browsing",
    href: "https://medium.com/@assafelovic/how-to-build-an-openai-assistant-with-internet-browsing-ee5ad7625661",
    date: "2023-11-12",
    year: "2023",
  },
  {
    title: "How I Built an Autonomous AI Agent for Online Research",
    href: "https://medium.com/better-programming/how-i-built-an-autonomous-ai-agent-for-online-research-93435a97c6c",
    date: "2023-07-24",
    year: "2023",
  },
  {
    title: "Why Open Source Models May Not Win The AI Race",
    href: "https://pub.towardsai.net/why-open-source-models-may-not-win-the-ai-race-88a3223a1df7",
    date: "2023-06-21",
    year: "2023",
  },
  {
    title: "The Ultimate Tech Stack for Building AI Products",
    href: "https://medium.com/@assafelovic/the-ultimate-tech-stack-for-building-ai-products-497cfa9139cb",
    date: "2023-06-20",
    year: "2023",
  },
  {
    title: "Action-Driven LLMs: The Future of Chatbot Development",
    href: "https://medium.com/better-programming/action-driven-llms-the-future-of-chatbot-development-is-here-80c0d07d278a",
    date: "2023-02-27",
    year: "2023",
  },
  {
    title: "Generative AI: The Ultimate Beginner's Guide",
    href: "https://medium.com/@assafelovic/gpt-3-the-ultimate-beginners-guide-681739cd371d",
    date: "2022-11-03",
    year: "2022",
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
      "The search engine for AI agents. Over 5 million users worldwide.",
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
    meta: "acq. by Facebook",
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
    body: "Where I started building conversational agents, years before anyone called them that. We built messaging systems where bots and humans worked together, and I was granted a US patent for real-time automated conversational agents. Facebook acquired the company.",
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
    body: "My own startup: a personal assistant that lived on WhatsApp and helped people get things done. It grew to over 5 million users worldwide. We went through Y Combinator's Startup School in 2019.",
  },
  {
    period: "then",
    title: "Wix",
    body: "Built Wix's first AI agent.",
  },
  {
    period: "then",
    title: "monday.com",
    body: "Head of AI.",
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
    body: "Co-founded Tavily, a search engine built for AI agents rather than people. It grew to over 5 million users worldwide, with Fortune 500 customers. Nebius acquired it in 2026.",
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
