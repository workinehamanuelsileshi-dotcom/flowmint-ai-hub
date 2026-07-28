import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Search,
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Zap,
  Shield,
  Rocket,
  Users,
  BarChart3,
  Building2,
  Compass,
  MessagesSquare,
  Layers,
  Plus,
  Minus,
  Star,
  Bookmark,
  Filter,
  Bell,
  Grid,
  Command,
} from "lucide-react";
import dnaWorkspace from "../assets/dna-workspace.jpg";
import forBusinesses from "../assets/for-businesses.jpg";
import forCreators from "../assets/for-creators.jpg";
import finalCtaBg from "../assets/final-cta-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flowmint — The AI Automation Marketplace" },
      {
        name: "description",
        content:
          "Discover, compare, customize and deploy AI automations built by trusted creators — all in one intelligent marketplace.",
      },
      { property: "og:title", content: "Flowmint — The AI Automation Marketplace" },
      {
        property: "og:description",
        content:
          "Discover, compare, customize and deploy AI automations built by trusted creators — all in one intelligent marketplace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

/* ────────────────────────────────────────────────────────────── */

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/15 selection:text-primary">
      <Nav />
      <main>
        <Hero />
        <Ecosystem />
        <Problem />
        <Solution />
        <MarketplacePreview />
        <BusinessDNA />
        <HowItWorks />
        <Categories />
        <FeaturedAutomations />
        <WhyFlowmint />
        <ForBusinessesCreators />
        <Outcomes />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ── Nav ─────────────────────────────────────────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Marketplace", "Solutions", "Business", "Creators", "Resources"];

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`flex w-full max-w-[1240px] items-center justify-between rounded-full border border-border bg-background/80 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "h-14 px-4 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]" : "h-16 px-5"
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <FlowmintMark />
          <span className="text-[15px] font-semibold tracking-tight">Flowmint</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href="#"
                className="rounded-full px-3 py-1.5 text-[13.5px] text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:flex"
          >
            <Search className="h-[15px] w-[15px]" />
          </button>
          <a
            href="#"
            className="hidden text-[13.5px] text-muted-foreground transition-colors hover:text-foreground md:inline-block"
          >
            Sign In
          </a>
          <a
            href="#"
            className="hidden text-[13.5px] text-muted-foreground transition-colors hover:text-foreground lg:inline-block"
          >
            Become Creator
          </a>
          <a
            href="#"
            className="group inline-flex h-9 items-center gap-1.5 rounded-full bg-foreground px-4 text-[13px] font-medium text-background transition-all duration-200 hover:bg-primary"
          >
            Explore Marketplace
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function FlowmintMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="22" height="22" rx="6" fill="#000" />
      <path
        d="M7 16.5c1.6-3.2 3.2-6.4 5-6.4 1.8 0 3.4 3.2 5 6.4"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="8.3" r="1.5" fill="#2563EB" />
    </svg>
  );
}

/* ── Hero ────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-28 md:pt-40 md:pb-32">
      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(60%_60%_at_50%_20%,#000_20%,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[45fr_55fr] lg:gap-14 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-primary/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            The AI Automation Marketplace
          </span>

          <h1 className="mt-7 text-balance text-[44px] font-medium leading-[1.02] tracking-[-0.04em] sm:text-[56px] lg:text-[72px] xl:text-[80px]">
            Discover AI automations that actually{" "}
            <span className="italic font-normal text-muted-foreground">grow</span> your business.
          </h1>

          <p className="mt-7 max-w-[520px] text-[17px] leading-[1.6] text-muted-foreground md:text-[18px]">
            Flowmint helps businesses discover, compare, customize and deploy AI automations
            built by trusted creators — all in one intelligent marketplace.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-[14px] font-medium text-primary-foreground transition-all duration-200 hover:bg-[color:var(--hover-blue)]"
            >
              Explore Marketplace
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-[14px] font-medium text-foreground transition-colors hover:bg-muted"
            >
              Become Creator
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-muted-foreground">
            {["No subscriptions", "Verified creators", "Business-first"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-[color:var(--color-success)]" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <BrowserMock />
        </div>
      </div>
    </section>
  );
}

/* Browser mock (compact hero version) */
function BrowserMock({ tall = false }: { tall?: boolean }) {
  return (
    <div className="relative">
      <div className="absolute -inset-x-6 -inset-y-8 -z-10 rounded-[32px] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(37,99,235,0.06),transparent_70%)]" />
      <div className="rounded-2xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(15,23,42,0.18),0_10px_30px_-15px_rgba(15,23,42,0.08)] animate-float-soft">
        {/* chrome */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.9_0_0)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.9_0_0)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.9_0_0)]" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-md bg-muted px-3 py-1 text-[11px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-success)]" />
            flowmint.com/marketplace
          </div>
          <div className="w-12" />
        </div>

        {/* body */}
        <div className={`grid grid-cols-[168px_1fr] ${tall ? "h-[620px]" : "h-[500px]"}`}>
          {/* sidebar */}
          <aside className="border-r border-border p-4">
            <div className="flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-[11px] text-muted-foreground">
              <Search className="h-3 w-3" />
              <span>Search</span>
              <span className="ml-auto animate-blink-caret">|</span>
            </div>
            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Collections
            </p>
            <ul className="mt-2 space-y-1 text-[12.5px]">
              {[
                ["For You", true],
                ["Sales stack", false],
                ["Support agents", false],
                ["Ops toolkit", false],
                ["Finance", false],
              ].map(([label, active]) => (
                <li
                  key={String(label)}
                  className={`flex items-center justify-between rounded-md px-2 py-1.5 ${
                    active ? "bg-muted text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <span>{label as string}</span>
                  {active && <span className="h-1 w-1 rounded-full bg-primary" />}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Business DNA
            </p>
            <div className="mt-2 rounded-lg border border-border p-2.5">
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                <Sparkles className="h-3 w-3 text-primary" /> Match
              </div>
              <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[86%] rounded-full bg-primary" />
              </div>
              <p className="mt-1.5 text-[11px] font-medium">86% aligned</p>
            </div>
          </aside>

          {/* content */}
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <div className="flex items-center gap-2 text-[12px] font-medium">
                <span>Personalized for Acme Co.</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Filter className="h-3.5 w-3.5" />
                <Bell className="h-3.5 w-3.5" />
                <Grid className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="relative">
              <div className="animate-[marquee_28s_linear_infinite] space-y-3 p-4 will-change-transform">
                {[...FEED, ...FEED].map((c, i) => (
                  <FeedCard key={i} {...c} />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-background to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* floating message */}
      <div className="pointer-events-none absolute -left-6 bottom-16 hidden rounded-xl border border-border bg-card p-3 shadow-lg md:block">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-[11px] font-medium">
            LN
          </div>
          <div className="text-[11px]">
            <p className="font-medium">Lena · Creator</p>
            <p className="text-muted-foreground">Can customize for HubSpot ✓</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-4 top-24 hidden rounded-xl border border-border bg-card px-3 py-2 text-[11px] shadow-lg md:block">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>3 new matches for your DNA</span>
        </div>
      </div>
    </div>
  );
}

const FEED = [
  {
    title: "Inbound lead qualifier",
    creator: "Northbeam Studio",
    initials: "NS",
    rating: 4.9,
    hours: 42,
    price: "$149",
    tags: ["Sales", "HubSpot", "Slack"],
  },
  {
    title: "AI ticket triage & routing",
    creator: "Fielded",
    initials: "FD",
    rating: 4.8,
    hours: 120,
    price: "$249",
    tags: ["Support", "Zendesk"],
  },
  {
    title: "Invoice reconciliation agent",
    creator: "Ledger Labs",
    initials: "LL",
    rating: 5.0,
    hours: 68,
    price: "$199",
    tags: ["Finance", "Xero"],
  },
  {
    title: "Voice AI receptionist",
    creator: "Halo Voice",
    initials: "HV",
    rating: 4.7,
    hours: 30,
    price: "$99",
    tags: ["Voice", "Twilio"],
  },
  {
    title: "Inventory forecasting",
    creator: "Warehouse OS",
    initials: "WO",
    rating: 4.8,
    hours: 90,
    price: "$179",
    tags: ["Ops", "Shopify"],
  },
];

function FeedCard({
  title,
  creator,
  initials,
  rating,
  hours,
  price,
  tags,
}: (typeof FEED)[number]) {
  return (
    <div className="group rounded-xl border border-border bg-card p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-muted text-[10px] font-semibold">
            {initials}
          </div>
          <div>
            <p className="text-[12.5px] font-medium leading-tight">{title}</p>
            <p className="text-[11px] text-muted-foreground">{creator}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
          <Star className="h-3 w-3 fill-foreground text-foreground" />
          {rating}
        </div>
      </div>

      <MiniFlow />

      <div className="mt-2.5 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="text-muted-foreground">{hours}h saved</span>
          <span className="font-medium">{price}</span>
        </div>
      </div>
    </div>
  );
}

function MiniFlow() {
  return (
    <svg viewBox="0 0 240 32" className="mt-2.5 h-6 w-full text-muted-foreground">
      {[10, 70, 130, 190].map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y="8"
            width="40"
            height="16"
            rx="4"
            className={i === 1 ? "fill-primary/10 stroke-primary" : "fill-background stroke-current"}
            strokeWidth="1"
          />
          {i < 3 && (
            <line
              x1={x + 40}
              y1="16"
              x2={x + 60}
              y2="16"
              stroke="currentColor"
              strokeDasharray="3 3"
              className="animate-flow-dash"
            />
          )}
        </g>
      ))}
    </svg>
  );
}

/* ── Ecosystem ───────────────────────────────────────────────── */

function Ecosystem() {
  const logos = [
    { name: "OpenAI", slug: "openai" },
    { name: "Anthropic", slug: "anthropic" },
    { name: "Google Gemini", slug: "googlegemini" },
    { name: "n8n", slug: "n8n" },
    { name: "Zapier", slug: "zapier" },
    { name: "Make", slug: "make" },
    { name: "Slack", slug: "slack" },
    { name: "HubSpot", slug: "hubspot" },
    { name: "Shopify", slug: "shopify" },
    { name: "Notion", slug: "notion" },
  ];
  return (
    <section className="border-y border-border py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Trusted ecosystem
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-center text-[28px] font-medium tracking-tight md:text-[36px]">
          Built on the world's leading AI ecosystem.
        </h2>
        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-2 items-center gap-x-10 gap-y-12 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((l) => (
            <li
              key={l.name}
              className="flex items-center justify-center"
              title={l.name}
            >
              <img
                src={`https://cdn.simpleicons.org/${l.slug}/737373`}
                alt={`${l.name} logo`}
                loading="lazy"
                width={96}
                height={28}
                className="h-7 w-auto max-w-[110px] object-contain opacity-60 transition-all duration-300 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Problem ─────────────────────────────────────────────────── */

function Problem() {
  const cards = [
    {
      k: "01",
      title: "Searching Google",
      body: "Endless research across scattered blog posts, tutorials and threads that never quite match your stack.",
    },
    {
      k: "02",
      title: "Freelance platforms",
      body: "Too many proposals from strangers. Hours of screening for a single half-fitting solution.",
    },
    {
      k: "03",
      title: "AI agencies",
      body: "Six-figure engagements and month-long timelines for automations you could deploy in days.",
    },
  ];
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            The problem
          </p>
          <h2 className="mt-5 text-balance text-[40px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[56px]">
            Finding the right AI solution shouldn't feel like hiring a freelancer.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.k}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground">{c.k}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-border transition-colors group-hover:bg-primary" />
              </div>
              <h3 className="mt-8 text-[22px] font-medium tracking-tight">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-28 border-t border-border pt-16 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            A new approach
          </p>
          <p className="mt-4 text-balance text-[44px] font-medium tracking-[-0.035em] md:text-[64px]">
            Meet <span className="italic text-primary">Flowmint</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Solution ────────────────────────────────────────────────── */

function Solution() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto grid max-w-[1240px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <WorkflowDiagram />
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            The solution
          </p>
          <h2 className="mt-5 text-balance text-[40px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[52px]">
            Discover. Compare. Customize. Deploy.
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-[1.6] text-muted-foreground">
            Every automation on Flowmint is a real, working workflow — visualized end-to-end so
            you know exactly what happens before you deploy it into your business.
          </p>
          <ul className="mt-10 space-y-5">
            {[
              ["Discover", "AI-matched automations based on your stack and goals."],
              ["Compare", "See workflow diagrams, ROI and platforms side by side."],
              ["Customize", "Chat directly with the creator to tailor to your business."],
              ["Deploy", "One-click handoff to your workspace, live in days not months."],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-4">
                <span className="mt-1 h-6 w-6 shrink-0 rounded-md border border-border text-center text-[12px] font-medium leading-6">
                  ✓
                </span>
                <div>
                  <p className="text-[15px] font-medium">{k}</p>
                  <p className="text-[14px] text-muted-foreground">{v}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function WorkflowDiagram() {
  const nodes = [
    { label: "Lead form", icon: Layers },
    { label: "AI agent", icon: Sparkles, accent: true },
    { label: "CRM", icon: Building2 },
    { label: "Slack", icon: MessagesSquare },
    { label: "Calendar", icon: Bell },
    { label: "Customer", icon: Users },
  ];
  return (
    <div className="relative rounded-2xl border border-border bg-card p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]">
      <div className="mb-6 flex items-center justify-between text-[11px] text-muted-foreground">
        <span className="font-mono">workflow.flowmint</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-success)] animate-pulse-dot" />
          Live
        </span>
      </div>
      <ul className="space-y-3">
        {nodes.map((n, i) => (
          <li key={n.label} className="flex items-center gap-4">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all ${
                n.accent
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-background text-foreground"
              }`}
            >
              <n.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
            </div>
            <div className="flex-1 rounded-xl border border-border px-4 py-2.5">
              <p className="text-[13.5px] font-medium">{n.label}</p>
              <p className="text-[11.5px] text-muted-foreground">
                {i === 0 && "Trigger · new submission"}
                {i === 1 && "Qualify · enrich · route"}
                {i === 2 && "Create/update contact"}
                {i === 3 && "Notify sales channel"}
                {i === 4 && "Book discovery call"}
                {i === 5 && "Follow-up automation"}
              </p>
            </div>
            {i < nodes.length - 1 && null}
          </li>
        ))}
      </ul>
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-y-14 left-[52px] w-px"
        viewBox="0 0 2 380"
        preserveAspectRatio="none"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="380"
          stroke="currentColor"
          strokeDasharray="3 4"
          className="animate-flow-dash text-border"
        />
      </svg>
    </div>
  );
}

/* ── Marketplace preview ─────────────────────────────────────── */

function MarketplacePreview() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            A real marketplace
          </p>
          <h2 className="mt-5 text-balance text-[40px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[56px]">
            A marketplace built for how businesses actually buy.
          </h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-muted-foreground">
            Personalized feed, workflow-first cards, creator previews and side-by-side comparisons —
            engineered around your Business DNA.
          </p>
        </div>
        <div className="mt-16">
          <BrowserMock tall />
        </div>
      </div>
    </section>
  );
}

/* ── Business DNA ────────────────────────────────────────────── */

function BusinessDNA() {
  const steps = [
    "Business",
    "Industry",
    "Goals",
    "Software",
    "Challenges",
    "AI analysis",
    "Business DNA",
    "Personalized marketplace",
  ];
  return (
    <section className="border-y border-border bg-muted/40 py-32 md:py-40">
      <div className="mx-auto grid max-w-[1240px] items-center gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-8">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Business DNA
          </p>
          <h2 className="mt-5 text-balance text-[40px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[52px]">
            Every business gets its own AI Business DNA.
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-[1.6] text-muted-foreground">
            Flowmint builds a living profile of your business — industry, stack, goals and
            challenges — and continuously refines it with every interaction to surface the
            automations that will actually move the needle.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-[13px]">
            <span className="flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Learns from every click
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Private by default
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={dnaWorkspace}
              alt="Workspace with laptop showing analytics dashboard and hand-drawn workflow diagrams in a notebook"
              loading="lazy"
              width={1280}
              height={960}
              className="h-56 w-full object-cover md:h-64"
            />
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <ol className="space-y-2">
              {steps.map((s, i) => {
                const highlight = i === 5 || i === 6 || i === 7;
                return (
                  <li key={s}>
                    <div
                      className={`flex items-center justify-between rounded-xl border px-4 py-3 transition-colors ${
                        highlight
                          ? "border-primary/30 bg-primary/5"
                          : "border-border bg-background"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[14px] font-medium">{s}</span>
                      </div>
                      {highlight && <Sparkles className="h-3.5 w-3.5 text-primary" />}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="ml-6 h-4 w-px bg-border" />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── How it works ────────────────────────────────────────────── */

function HowItWorks() {
  const steps = [
    { icon: Building2, title: "Describe your business", body: "Share your stack, goals and challenges." },
    { icon: Compass, title: "Discover AI automations", body: "Get a personalized marketplace feed." },
    { icon: MessagesSquare, title: "Chat with creators", body: "Customize the workflow to your business." },
    { icon: Rocket, title: "Deploy automation", body: "Go live in days, not months." },
  ];
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              How Flowmint works
            </p>
            <h2 className="mt-5 max-w-2xl text-balance text-[40px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[52px]">
              From first click to deployed automation.
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-primary hover:text-[color:var(--hover-blue)]"
          >
            See a live walkthrough
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.12)]"
            >
              <span className="font-mono text-[11px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <s.icon
                className="mt-8 h-6 w-6 text-foreground transition-colors group-hover:text-primary"
                strokeWidth={1.5}
              />
              <h3 className="mt-6 text-[17px] font-medium tracking-tight">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Categories ──────────────────────────────────────────────── */

function Categories() {
  const cats = [
    "Sales",
    "Marketing",
    "Finance",
    "Operations",
    "Customer Support",
    "HR",
    "Analytics",
    "AI Agents",
    "Voice AI",
    "Healthcare",
    "Legal",
    "Real Estate",
  ];
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Marketplace categories
          </p>
          <h2 className="mt-5 text-balance text-[40px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[52px]">
            Every corner of the business, covered.
          </h2>
        </div>
        <ul className="mt-14 flex flex-wrap gap-3">
          {cats.map((c) => (
            <li key={c}>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-[14px] text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
              >
                {c}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Featured automations ────────────────────────────────────── */

function FeaturedAutomations() {
  const items = [
    {
      title: "Outbound SDR agent",
      problem: "Fill the top of funnel without hiring.",
      roi: "3.2x",
      hours: 180,
      platforms: ["HubSpot", "Gmail", "OpenAI"],
      creator: "Northbeam",
      rating: 4.9,
      price: "$249",
    },
    {
      title: "AI support triage",
      problem: "Route and resolve L1 tickets automatically.",
      roi: "41%",
      hours: 220,
      platforms: ["Zendesk", "Slack", "Claude"],
      creator: "Fielded",
      rating: 4.8,
      price: "$199",
    },
    {
      title: "Invoice reconciliation",
      problem: "Close books faster with fewer errors.",
      roi: "2.4x",
      hours: 96,
      platforms: ["Xero", "Gmail", "n8n"],
      creator: "Ledger Labs",
      rating: 5.0,
      price: "$179",
    },
    {
      title: "Voice AI receptionist",
      problem: "Answer, qualify and book — 24/7.",
      roi: "58%",
      hours: 320,
      platforms: ["Twilio", "Calendar", "Gemini"],
      creator: "Halo Voice",
      rating: 4.7,
      price: "$99",
    },
  ];
  return (
    <section className="border-y border-border py-32 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Featured automations
            </p>
            <h2 className="mt-5 max-w-2xl text-balance text-[40px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[52px]">
              Real workflows. Real outcomes.
            </h2>
          </div>
          <a
            href="#"
            className="hidden text-[13.5px] font-medium text-primary hover:text-[color:var(--hover-blue)] md:inline-flex"
          >
            View all →
          </a>
        </div>

        <div className="mt-14 -mx-6 overflow-x-auto px-6 lg:mx-0 lg:overflow-visible lg:px-0">
          <div className="grid min-w-[900px] grid-cols-4 gap-5 lg:min-w-0">
            {items.map((it) => (
              <article
                key={it.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)]"
              >
                <MiniFlow />
                <h3 className="mt-5 text-[17px] font-medium tracking-tight">{it.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-[1.5] text-muted-foreground">
                  {it.problem}
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-3 border-y border-border py-4 text-[12px]">
                  <div>
                    <dt className="text-muted-foreground">ROI</dt>
                    <dd className="mt-0.5 font-medium">{it.roi}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Hours saved</dt>
                    <dd className="mt-0.5 font-medium">{it.hours}h</dd>
                  </div>
                </dl>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {it.platforms.map((p) => (
                    <span
                      key={p}
                      className="rounded-md border border-border px-1.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between text-[12px]">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-muted" />
                    <span>{it.creator}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="h-3 w-3 fill-foreground text-foreground" />
                    {it.rating}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[15px] font-medium">{it.price}</span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-[13px] font-medium text-primary transition-colors hover:text-[color:var(--hover-blue)]"
                  >
                    View automation
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Why Flowmint (Bento) ────────────────────────────────────── */

function WhyFlowmint() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Why Flowmint
          </p>
          <h2 className="mt-5 text-balance text-[40px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[52px]">
            The infrastructure for how businesses adopt AI.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6 md:grid-rows-3">
          <BentoCard className="md:col-span-3 md:row-span-2" icon={Sparkles} title="Business DNA" body="A living profile that gets sharper with every interaction.">
            <div className="mt-6 rounded-xl border border-border p-4">
              <div className="flex justify-between text-[11px] text-muted-foreground">
                <span>Match confidence</span>
                <span>92%</span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-muted">
                <div className="h-full w-[92%] rounded-full bg-primary" />
              </div>
              <ul className="mt-4 space-y-2 text-[12px] text-muted-foreground">
                <li className="flex justify-between"><span>Industry fit</span><span className="text-foreground">B2B SaaS</span></li>
                <li className="flex justify-between"><span>Stack fit</span><span className="text-foreground">HubSpot · Slack</span></li>
                <li className="flex justify-between"><span>Priority</span><span className="text-foreground">Lead ops</span></li>
              </ul>
            </div>
          </BentoCard>
          <BentoCard className="md:col-span-3" icon={Compass} title="AI Recommendations" body="Personalized feed, not popularity contest." />
          <BentoCard className="md:col-span-3" icon={Shield} title="Verified Creators" body="Every creator vetted for craft and reliability." />
          <BentoCard className="md:col-span-2" icon={Layers} title="Workflow Previews" body="See the full workflow before you buy." />
          <BentoCard className="md:col-span-2" icon={BarChart3} title="ROI Estimates" body="Hours saved and dollars back, upfront." />
          <BentoCard className="md:col-span-2" icon={Building2} title="Enterprise Ready" body="SSO, audit logs and workspace controls." />
          <BentoCard className="md:col-span-3" icon={Zap} title="Fast Deployment" body="Go from browse to live in days." />
          <BentoCard className="md:col-span-3" icon={Bookmark} title="Secure Payments" body="Escrow, receipts and refund guarantees." />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon: Icon,
  title,
  body,
  className = "",
  children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.12)] ${className}`}
    >
      <Icon className="h-5 w-5 text-foreground transition-colors group-hover:text-primary" strokeWidth={1.5} />
      <h3 className="mt-6 text-[18px] font-medium tracking-tight">{title}</h3>
      <p className="mt-2 max-w-md text-[14px] leading-[1.55] text-muted-foreground">{body}</p>
      {children}
    </div>
  );
}

/* ── For Businesses / Creators ───────────────────────────────── */

function ForBusinessesCreators() {
  return (
    <section className="border-t border-border py-32 md:py-40">
      <div className="mx-auto grid max-w-[1240px] gap-5 px-6 md:grid-cols-2 lg:px-8">
        {[
          {
            eyebrow: "For businesses",
            title: "Adopt AI without the guesswork.",
            body: "Discover, evaluate and deploy vetted automations aligned to your stack and goals.",
            bullets: ["Personalized marketplace", "Verified creators", "Escrow-secured payments", "Go live in days"],
            cta: "Explore Marketplace",
            image: forBusinesses,
            imageAlt: "Business team reviewing analytics and workflow dashboards in a bright modern office",
          },
          {
            eyebrow: "For creators",
            title: "Publish once. Reach thousands of businesses.",
            body: "Turn your workflows into productized automations and get paid to deploy them.",
            bullets: ["Global distribution", "Owned pricing", "Business DNA matching", "Verified badge"],
            cta: "Become Creator",
            image: forCreators,
            imageAlt: "Independent creator building an automation workflow on a laptop at a minimal wooden desk",
          },
        ].map((c) => (
          <article
            key={c.eyebrow}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="relative h-56 w-full overflow-hidden md:h-64">
              <img
                src={c.image}
                alt={c.imageAlt}
                loading="lazy"
                width={1280}
                height={900}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {c.eyebrow}
              </p>
              <h3 className="mt-5 text-balance text-[32px] font-medium leading-[1.1] tracking-[-0.03em] md:text-[40px]">
                {c.title}
              </h3>
              <p className="mt-4 text-[15.5px] leading-[1.6] text-muted-foreground">{c.body}</p>
              <ul className="mt-8 space-y-3 text-[14.5px]">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href="#"
                  className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-[13.5px] font-medium text-background transition-colors hover:bg-primary"
                >
                  {c.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── Outcomes ────────────────────────────────────────────────── */

function Outcomes() {
  const metrics = [
    { v: "180", u: "hours", label: "Saved on RevOps per quarter" },
    { v: "41", u: "%", label: "Reduction in support costs" },
    { v: "3×", u: "", label: "More qualified leads generated" },
    { v: "4", u: "days", label: "From discovery to deployment" },
  ];
  return (
    <section className="border-y border-border bg-muted/40 py-32 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Customer outcomes
          </p>
          <h2 className="mt-5 text-balance text-[40px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[52px]">
            Measured, not marketed.
          </h2>
        </div>
        <dl className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="border-t border-border pt-8">
              <dt className="text-[13px] text-muted-foreground">{m.label}</dt>
              <dd className="mt-6 flex items-baseline gap-1 text-[64px] font-medium leading-none tracking-[-0.04em] md:text-[80px]">
                {m.v}
                <span className="text-[24px] font-normal text-muted-foreground">{m.u}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}


/* ── FAQ ─────────────────────────────────────────────────────── */

function FAQ() {
  const faqs = [
    {
      q: "How is Flowmint different from a freelance marketplace?",
      a: "Freelance marketplaces sell hours. Flowmint sells outcomes — productized automations you can preview, compare and deploy without hiring anyone.",
    },
    {
      q: "What is Business DNA?",
      a: "A living profile of your business — industry, stack, goals and challenges — that continuously improves the marketplace we show you.",
    },
    {
      q: "How are creators verified?",
      a: "Every creator is reviewed for craft, reliability and support quality. Verified badges are earned and revocable.",
    },
    {
      q: "Do I own the automations I deploy?",
      a: "Yes. Deployments run in your own workspace and remain fully yours to customize.",
    },
    {
      q: "Do I need technical skills to use Flowmint?",
      a: "No. Every automation has a visual workflow and creators handle setup end-to-end.",
    },
    {
      q: "Is there a free tier?",
      a: "Yes. You can explore the marketplace, preview workflows and chat with creators for free.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto grid max-w-[1240px] gap-16 px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-24 lg:px-8">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-5 text-balance text-[40px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[48px]">
            Answers, calmly.
          </h2>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-8 py-6 text-left transition-colors hover:text-primary"
                >
                  <span className="text-[16px] font-medium tracking-tight">{f.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl pr-12 text-[15px] leading-[1.65] text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ── Final CTA ───────────────────────────────────────────────── */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-40 md:py-56">
      <img
        src={finalCtaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={900}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/10 to-background"
      />
      <div className="mx-auto max-w-[1240px] px-6 text-center lg:px-8">
        <h2 className="mx-auto max-w-4xl text-balance text-[52px] font-medium leading-[1.02] tracking-[-0.04em] md:text-[88px]">
          Ready to automate your business?
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-[17px] leading-[1.6] text-muted-foreground">
          Discover, compare and deploy AI automations built by trusted creators —
          all in one marketplace.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-[14px] font-medium text-primary-foreground transition-colors hover:bg-[color:var(--hover-blue)]"
          >
            Explore Marketplace
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-[14px] font-medium text-foreground transition-colors hover:bg-muted"
          >
            Become Creator
          </a>
        </div>
        <div className="mt-16 flex items-center justify-center gap-2 text-[12px] text-muted-foreground">
          <Command className="h-3.5 w-3.5" />
          <span>Press ⌘K anywhere to search the marketplace</span>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────── */

function Footer() {
  const cols = [
    {
      title: "Marketplace",
      links: ["Browse", "Categories", "Collections", "Featured", "Business DNA"],
    },
    {
      title: "Creators",
      links: ["Become Creator", "Creator Docs", "Verification", "Payouts", "Community"],
    },
    {
      title: "Resources",
      links: ["Guides", "Blog", "Case studies", "Templates", "Changelog"],
    },
    { title: "Company", links: ["About", "Careers", "Press", "Contact", "Legal"] },
  ];
  return (
    <footer className="border-t border-border py-20">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <FlowmintMark />
              <span className="text-[15px] font-semibold tracking-tight">Flowmint</span>
            </div>
            <p className="mt-4 max-w-xs text-[13.5px] leading-[1.6] text-muted-foreground">
              The AI Automation Marketplace. Built for businesses that ship.
            </p>
            <div className="mt-6 flex items-center gap-3 text-muted-foreground">
              {["X", "in", "GH", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-[10.5px] font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-foreground">
                {c.title}
              </p>
              <ul className="mt-5 space-y-3 text-[13.5px] text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-[12.5px] text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Flowmint, Inc. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground">Terms</a></li>
            <li><a href="#" className="hover:text-foreground">Security</a></li>
            <li><a href="#" className="hover:text-foreground">Status</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
