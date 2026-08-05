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
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Megaphone,
  Wallet,
  Settings2,
  Headphones,
  UserPlus,
  LineChart,
  Bot,
  Mic,
  HeartPulse,
  Scale,
  Home,
} from "lucide-react";
import businessDna from "../assets/business-dna.jpg";
import forBusinesses from "../assets/built-for-you.jpg";
import forCreators from "../assets/creator-flow.jpg";
import marketplaceCards from "../assets/marketplace-cards.png";
import ctaWaves from "../assets/cta-blue-wave.jpg";
import cardSales from "../assets/card-sales.jpg";
import cardSupport from "../assets/card-support.jpg";
import cardFinance from "../assets/card-finance.jpg";
import cardVoice from "../assets/card-voice.jpg";
import cardOps from "../assets/card-ops.jpg";
import creatorAmara from "../assets/creator-amara.jpg";
import creatorDiego from "../assets/creator-diego.jpg";
import creatorLena from "../assets/creator-lena.jpg";
import SpiralImages from "@/components/originkit/ui/spiralimages";



/* ── Shared helpers ──────────────────────────────────────────── */

/** Real brand logos via simpleicons CDN — monochrome, contextual */
function LogoIcon({
  slug,
  name,
  size = 14,
  tint = "737373",
  className = "",
}: {
  slug: string;
  name: string;
  size?: number;
  tint?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span
        aria-label={name}
        className={`inline-flex items-center justify-center font-semibold uppercase text-muted-foreground ${className}`}
        style={{ height: size, width: size, fontSize: Math.max(7, size * 0.62) }}
      >
        {name.charAt(0)}
      </span>
    );
  }
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${tint}`}
      alt={name}
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`inline-block object-contain ${className}`}
      style={{ height: size, width: size }}
    />
  );
}

/** Very-soft, blurred blueprint atmosphere for section backgrounds */
function BlueprintBg({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(70%_60%_at_50%_40%,#000_10%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute left-[10%] top-1/3 h-[380px] w-[380px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-[8%] bottom-1/4 h-[420px] w-[420px] rounded-full bg-foreground/[0.04] blur-[140px]" />
    </div>
  );
}

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
        <Hero09 />
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
        <Creators />

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
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
      setHidden(y > 240 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Marketplace", "Solutions", "Business", "Creators", "Resources"];

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-[transform,opacity] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
        hidden ? "-translate-y-[130%] opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <nav
        className={`relative flex w-full items-center justify-between overflow-hidden rounded-full border transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "h-14 max-w-[1000px] border-border/80 bg-background/70 px-4 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.18)] backdrop-blur-2xl backdrop-saturate-150"
            : "h-16 max-w-[1240px] border-border bg-background/60 px-5 shadow-none backdrop-blur-xl"
        }`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left bg-primary/70 transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
        <a href="#" className="group flex items-center gap-2">
          <FlowmintMark className={`transition-transform duration-500 ${scrolled ? "scale-90" : "scale-100"}`} />
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
        <div className="grid grid-cols-1">
          {/* sidebar */}
          <aside className="hidden border-r border-border p-4">

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

            <div className="relative w-full">
              <img
                src={marketplaceCards}
                alt="Flowmint marketplace feed of AI automation cards with workflow diagrams, ratings and pricing"
                loading="eager"
                width={1256}
                height={1256}
                className="block h-auto w-full object-contain"
              />
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
    cover: cardSales,
    flow: ["typeform", "openai", "hubspot", "slack"],
  },
  {
    title: "AI ticket triage & routing",
    creator: "Fielded",
    initials: "FD",
    rating: 4.8,
    hours: 120,
    price: "$249",
    tags: ["Support", "Zendesk"],
    cover: cardSupport,
    flow: ["zendesk", "anthropic", "notion", "slack"],
  },
  {
    title: "Invoice reconciliation agent",
    creator: "Ledger Labs",
    initials: "LL",
    rating: 5.0,
    hours: 68,
    price: "$199",
    tags: ["Finance", "Xero"],
    cover: cardFinance,
    flow: ["gmail", "openai", "xero", "googlesheets"],
  },
  {
    title: "Voice AI receptionist",
    creator: "Halo Voice",
    initials: "HV",
    rating: 4.7,
    hours: 30,
    price: "$99",
    tags: ["Voice", "Twilio"],
    cover: cardVoice,
    flow: ["twilio", "openai", "googlecalendar", "slack"],
  },
  {
    title: "Inventory forecasting",
    creator: "Warehouse OS",
    initials: "WO",
    rating: 4.8,
    hours: 90,
    price: "$179",
    tags: ["Ops", "Shopify"],
    cover: cardOps,
    flow: ["shopify", "openai", "googlesheets", "slack"],
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
  cover,
  flow,
}: (typeof FEED)[number]) {
  // map tags → real logo slugs where available
  const slugMap: Record<string, string> = {
    Sales: "hubspot",
    HubSpot: "hubspot",
    Slack: "slack",
    Support: "zendesk",
    Zendesk: "zendesk",
    Finance: "xero",
    Xero: "xero",
    Voice: "twilio",
    Twilio: "twilio",
    Ops: "shopify",
    Shopify: "shopify",
  };
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card/80 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-[0_18px_50px_-24px_rgba(15,23,42,0.35)]">
      <div className="flex gap-3 p-3.5">
        {/* contextual cover */}
        <div className="relative h-[58px] w-[72px] shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
          <img
            src={cover}
            alt=""
            aria-hidden
            loading="lazy"
            width={512}
            height={512}
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/50 to-transparent" />
          <div className="absolute bottom-1 left-1 flex h-5 w-5 items-center justify-center rounded-md border border-border bg-background/85 backdrop-blur-md">
            <LogoIcon slug={flow[0]} name={flow[0]} size={10} />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted text-[9.5px] font-semibold">
                {initials}
              </div>
              <div className="min-w-0">
                <p className="truncate text-[12.5px] font-medium leading-tight">{title}</p>
                <p className="text-[11px] text-muted-foreground">{creator}</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 text-[11px] text-muted-foreground">
              <WorkflowBadge category={tags[0]} />
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-foreground text-foreground" />
                {rating}
              </span>
            </div>
          </div>

          <MiniFlow steps={flow} />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border/70 bg-muted/30 px-3.5 py-2">
        <div className="flex items-center gap-1.5">
          {tags.slice(0, 3).map((t) =>
            slugMap[t] ? (
              <span
                key={t}
                title={t}
                className="flex h-5 w-5 items-center justify-center rounded-md border border-border bg-background"
              >
                <LogoIcon slug={slugMap[t]} name={t} size={10} />
              </span>
            ) : (
              <span
                key={t}
                className="rounded-full border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground"
              >
                {t}
              </span>
            ),
          )}
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="text-muted-foreground">{hours}h saved</span>
          <span className="font-medium">{price}</span>
        </div>
      </div>
    </div>
  );
}

function MiniFlow({ steps = ["typeform", "openai", "hubspot", "slack"] }: { steps?: string[] }) {
  return (
    <div className="mt-2.5 flex items-center gap-1">
      {steps.map((slug, i) => (
        <div key={slug + i} className="flex items-center gap-1">
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-md border transition-colors duration-300 ${
              i === 1
                ? "border-primary/40 bg-primary/[0.07]"
                : "border-border bg-background/70 backdrop-blur-sm"
            }`}
          >
            <LogoIcon slug={slug} name={slug} size={11} />
          </span>
          {i < steps.length - 1 && (
            <svg width="16" height="8" viewBox="0 0 16 8" className="text-muted-foreground/60">
              <line
                x1="0"
                y1="4"
                x2="16"
                y2="4"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 3"
                className="animate-flow-dash"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

const CATEGORY_META: Record<string, { slug: string; label: string }> = {
  Sales: { slug: "hubspot", label: "Sales" },
  Support: { slug: "zendesk", label: "Support" },
  Finance: { slug: "xero", label: "Finance" },
  Voice: { slug: "twilio", label: "Voice" },
  Ops: { slug: "shopify", label: "Ops" },
  sales: { slug: "hubspot", label: "Sales" },
  support: { slug: "zendesk", label: "Support" },
  finance: { slug: "xero", label: "Finance" },
  voice: { slug: "twilio", label: "Voice" },
};

/** Category pill that stays icon-only at rest and expands its label on card hover. */
function WorkflowBadge({
  category,
  className = "",
  size = "sm",
}: {
  category: string;
  className?: string;
  size?: "sm" | "md";
}) {
  const meta = CATEGORY_META[category] ?? { slug: "openai", label: category };
  const pad = size === "md" ? "h-7 px-2" : "h-6 px-1.5";
  const text = size === "md" ? "text-[11.5px]" : "text-[10.5px]";
  return (
    <span
      className={`pointer-events-none inline-flex ${pad} items-center gap-1.5 rounded-full border border-border bg-background/80 shadow-[0_6px_18px_-12px_rgba(15,23,42,0.5)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-primary/35 group-hover:bg-background/95 ${className}`}
    >
      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-primary/25 opacity-0 transition-opacity duration-500 group-hover:animate-ping group-hover:opacity-100" />
        <LogoIcon slug={meta.slug} name={meta.label} size={size === "md" ? 12 : 11} />
      </span>
      <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-cols-[1fr]">
        <span className="overflow-hidden">
          <span
            className={`block whitespace-nowrap ${text} font-medium tracking-tight opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          >
            {meta.label}
          </span>
        </span>
      </span>
    </span>
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
    <section className="border-y border-border py-12 md:py-14">
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
    <section className="py-14 md:py-16">
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
    <section className="relative py-14 md:py-16">
      <BlueprintBg />
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
    { label: "Typeform · Lead form", logo: "typeform", sub: "Trigger · new submission" },
    { label: "OpenAI · Qualification agent", logo: "openai", accent: true, sub: "Score · enrich · route" },
    { label: "HubSpot · CRM", logo: "hubspot", sub: "Create / update contact" },
    { label: "Slack · #sales-inbound", logo: "slack", sub: "Notify account owner" },
    { label: "Calendly · Discovery call", logo: "calendly", sub: "Auto-book based on tier" },
    { label: "Gmail · Follow-up", logo: "gmail", sub: "Personalized sequence" },
  ];
  return (
    <div className="relative rounded-2xl border border-border bg-card p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25),0_10px_30px_-20px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.02]">
      <div className="mb-6 flex items-center justify-between text-[11px] text-muted-foreground">
        <span className="font-mono">inbound-lead-agent.flowmint</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-success)] animate-pulse-dot" />
          Live
        </span>
      </div>
      <ul className="space-y-3">
        {nodes.map((n, i) => (
          <li key={n.label} className="flex items-center gap-4">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                n.accent
                  ? "border-primary bg-primary/5 shadow-[0_0_0_4px_rgba(37,99,235,0.06)]"
                  : "border-border bg-background"
              }`}
            >
              <LogoIcon slug={n.logo} name={n.label} size={18} tint={n.accent ? "2563EB" : "111111"} />
            </div>
            <div className="flex-1 rounded-xl border border-border px-4 py-2.5">
              <p className="text-[13.5px] font-medium">{n.label}</p>
              <p className="text-[11.5px] text-muted-foreground">{n.sub}</p>
            </div>
            {i === 1 && (
              <span className="hidden shrink-0 rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary md:inline-flex">
                AI
              </span>
            )}
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
    <section className="py-14 md:py-16">
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
    <section className="border-y border-border bg-muted/40 py-14 md:py-16">
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
    <section className="py-14 md:py-16">
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
    { name: "Sales", icon: TrendingUp, count: "312 automations", detail: "Pipeline, outbound, CRM hygiene", logos: ["hubspot", "salesforce"] },
    { name: "Marketing", icon: Megaphone, count: "248 automations", detail: "Campaigns, content, attribution", logos: ["mailchimp", "webflow"] },
    { name: "Finance", icon: Wallet, count: "164 automations", detail: "Invoices, reconciliation, payouts", logos: ["stripe", "xero"] },
    { name: "Operations", icon: Settings2, count: "201 automations", detail: "Approvals, routing, reporting", logos: ["notion", "n8n"] },
    { name: "Customer Support", icon: Headphones, count: "187 automations", detail: "Triage, replies, CSAT loops", logos: ["zendesk", "intercom"] },
    { name: "HR", icon: UserPlus, count: "96 automations", detail: "Onboarding, screening, docs", logos: ["slack", "googledrive"] },
    { name: "Analytics", icon: LineChart, count: "132 automations", detail: "Dashboards, alerts, digests", logos: ["googleanalytics", "looker"] },
    { name: "AI Agents", icon: Bot, count: "274 automations", detail: "Reasoning agents with tools", logos: ["openai", "anthropic"] },
    { name: "Voice AI", icon: Mic, count: "88 automations", detail: "Inbound calls, booking, notes", logos: ["twilio", "elevenlabs"] },
    { name: "Healthcare", icon: HeartPulse, count: "54 automations", detail: "Intake, scheduling, follow-up", logos: ["calendly", "gmail"] },
    { name: "Legal", icon: Scale, count: "61 automations", detail: "Review, clauses, redlines", logos: ["docusign", "notion"] },
    { name: "Real Estate", icon: Home, count: "47 automations", detail: "Leads, tours, listing ops", logos: ["airtable", "whatsapp"] },
  ];
  return (
    <section className="py-14 md:py-16">
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
          {cats.map((c) => {
            const Icon = c.icon;
            return (
              <li key={c.name}>
                <a
                  href="#"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border bg-background/70 px-5 py-2.5 text-[14px] text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background hover:pr-4 hover:shadow-[0_16px_40px_-20px_rgba(37,99,235,0.5)]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(120% 140% at 0% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)",
                    }}
                  />
                  <span className="flex h-6 w-0 items-center justify-center overflow-hidden opacity-0 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:w-6 group-hover:opacity-100">
                    <Icon className="h-[15px] w-[15px] text-primary" />
                  </span>
                  <span className="whitespace-nowrap transition-colors duration-300 group-hover:text-primary">
                    {c.name}
                  </span>
                  <span className="flex max-w-0 items-center gap-2 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:max-w-[560px] group-hover:opacity-100">
                    <span className="h-4 w-px bg-border" />
                    <span className="text-[12px] text-muted-foreground">{c.count}</span>
                    <span className="hidden text-[12px] text-muted-foreground/70 sm:inline">
                      · {c.detail}
                    </span>
                    <span className="flex items-center gap-1">
                      {c.logos.map((s) => (
                        <LogoIcon key={s} slug={s} name={s} size={13} />
                      ))}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ── Featured automations ────────────────────────────────────── */

const COVER_BY_KIND: Record<"sales" | "support" | "finance" | "voice", string> = {
  sales: cardSales,
  support: cardSupport,
  finance: cardFinance,
  voice: cardVoice,
};

function FeaturedAutomations() {
  const items = [
    {
      kind: "sales" as const,
      title: "Outbound SDR agent",
      problem: "Fill the top of funnel without hiring.",
      roi: "3.2x",
      hours: 180,
      platforms: [
        { label: "HubSpot", slug: "hubspot" },
        { label: "Gmail", slug: "gmail" },
        { label: "OpenAI", slug: "openai" },
      ],
      creator: "Northbeam",
      rating: 4.9,
      price: "$249",
    },
    {
      kind: "support" as const,
      title: "AI support triage",
      problem: "Route and resolve L1 tickets automatically.",
      roi: "41%",
      hours: 220,
      platforms: [
        { label: "Zendesk", slug: "zendesk" },
        { label: "Slack", slug: "slack" },
        { label: "Claude", slug: "anthropic" },
      ],
      creator: "Fielded",
      rating: 4.8,
      price: "$199",
    },
    {
      kind: "finance" as const,
      title: "Invoice reconciliation",
      problem: "Close books faster with fewer errors.",
      roi: "2.4x",
      hours: 96,
      platforms: [
        { label: "Xero", slug: "xero" },
        { label: "Gmail", slug: "gmail" },
        { label: "n8n", slug: "n8n" },
      ],
      creator: "Ledger Labs",
      rating: 5.0,
      price: "$179",
    },
    {
      kind: "voice" as const,
      title: "Voice AI receptionist",
      problem: "Answer, qualify and book — 24/7.",
      roi: "58%",
      hours: 320,
      platforms: [
        { label: "Twilio", slug: "twilio" },
        { label: "Calendly", slug: "calendly" },
        { label: "Gemini", slug: "googlegemini" },
      ],
      creator: "Halo Voice",
      rating: 4.7,
      price: "$99",
    },
  ];
  return (
    <section className="relative border-y border-border py-14 md:py-16">
      <BlueprintBg />
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
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.18)]"
              >
                <div className="relative overflow-hidden border-b border-border p-3">
                  <img
                    src={COVER_BY_KIND[it.kind]}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    width={512}
                    height={512}
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-70 blur-[2px] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.18]"
                  />
                  <div className="absolute inset-0 bg-background/55 backdrop-blur-xl" />
                  <div className="relative">
                    <AutomationPreview kind={it.kind} />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-card/70 to-transparent" />
                  <WorkflowBadge category={it.kind} size="md" className="absolute right-3 top-3 z-10" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[17px] font-medium tracking-tight">{it.title}</h3>
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

                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    {it.platforms.map((p) => (
                      <span
                        key={p.label}
                        title={p.label}
                        className="flex h-6 items-center gap-1 rounded-md border border-border bg-background px-1.5 text-[11px] text-muted-foreground"
                      >
                        <LogoIcon slug={p.slug} name={p.label} size={10} />
                        {p.label}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[9px] font-semibold">
                        {it.creator.slice(0, 2)}
                      </div>
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
                      className="inline-flex items-center gap-1 text-[13px] font-medium text-primary transition-all duration-200 hover:gap-2 hover:text-[color:var(--hover-blue)]"
                    >
                      View automation
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Contextual per-automation mini "product screens" — no generic visuals. */
function AutomationPreview({ kind }: { kind: "sales" | "support" | "finance" | "voice" }) {
  if (kind === "sales") {
    // CRM pipeline preview
    const stages = [
      { label: "New", count: 34, tone: "bg-muted" },
      { label: "Qualified", count: 18, tone: "bg-primary/10 ring-1 ring-primary/20" },
      { label: "Booked", count: 7, tone: "bg-muted" },
    ];
    return (
      <div className="rounded-lg border border-border bg-background p-3">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <LogoIcon slug="hubspot" name="HubSpot" size={11} />
            Inbound pipeline
          </span>
          <span className="font-mono">+12 today</span>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          {stages.map((s) => (
            <div key={s.label} className={`rounded-md px-2 py-2 text-[10px] ${s.tone}`}>
              <p className="text-muted-foreground">{s.label}</p>
              <p className="mt-1 text-[14px] font-medium leading-none text-foreground">{s.count}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1.5 text-[10px]">
          <LogoIcon slug="openai" name="OpenAI" size={10} />
          <span className="text-muted-foreground">Scored lead ·</span>
          <span className="font-medium">acme.io → 92</span>
        </div>
      </div>
    );
  }
  if (kind === "support") {
    // Ticket conversation preview
    return (
      <div className="rounded-lg border border-border bg-background p-3">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <LogoIcon slug="zendesk" name="Zendesk" size={11} />
            #4821 · Billing question
          </span>
          <span className="rounded-full bg-[color:var(--color-success)]/15 px-1.5 py-0.5 text-[9px] font-medium text-[color:var(--color-success)]">
            resolved
          </span>
        </div>
        <div className="mt-2.5 space-y-1.5">
          <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-muted px-2 py-1.5 text-[10.5px]">
            Where can I download my invoice?
          </div>
          <div className="ml-auto flex max-w-[85%] items-start gap-1.5">
            <div className="rounded-lg rounded-tr-sm bg-primary/10 px-2 py-1.5 text-[10.5px] text-foreground">
              I've emailed your March invoice and tagged the ticket #billing.
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <LogoIcon slug="anthropic" name="Claude" size={10} /> Claude · L1 agent
          </span>
          <span className="flex items-center gap-1">
            <LogoIcon slug="slack" name="Slack" size={10} /> routed #cx
          </span>
        </div>
      </div>
    );
  }
  if (kind === "finance") {
    // Invoice approval preview
    const rows = [
      { v: "AWS", a: "$1,284.10", ok: true },
      { v: "Figma", a: "$180.00", ok: true },
      { v: "Notion", a: "$96.00", ok: false },
    ];
    return (
      <div className="rounded-lg border border-border bg-background p-3">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <LogoIcon slug="xero" name="Xero" size={11} />
            March reconciliation
          </span>
          <span className="font-mono">3 · matched</span>
        </div>
        <ul className="mt-2 divide-y divide-border rounded-md border border-border">
          {rows.map((r) => (
            <li key={r.v} className="flex items-center justify-between px-2 py-1.5 text-[10.5px]">
              <span className="font-medium">{r.v}</span>
              <span className="flex items-center gap-1.5">
                <span className="text-muted-foreground">{r.a}</span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${r.ok ? "bg-[color:var(--color-success)]" : "bg-primary"}`}
                />
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <LogoIcon slug="n8n" name="n8n" size={10} /> categorized → GL 6400
        </div>
      </div>
    );
  }
  // voice
  return (
    <div className="rounded-lg border border-border bg-background p-3">
      <div className="flex items-center justify-between text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <LogoIcon slug="twilio" name="Twilio" size={11} />
          Incoming call · +1 (415) 555
        </span>
        <span className="flex items-center gap-1 text-[color:var(--color-success)]">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[color:var(--color-success)]" />
          live
        </span>
      </div>
      <div className="mt-2 flex items-end gap-[2px] rounded-md border border-border bg-muted/50 px-2 py-2">
        {[8, 14, 20, 12, 22, 16, 26, 18, 10, 22, 14, 20, 12, 24, 16].map((h, i) => (
          <span
            key={i}
            className="w-1 rounded-full bg-primary/70"
            style={{ height: h }}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1.5 text-[10px]">
        <LogoIcon slug="calendly" name="Calendly" size={10} />
        <span className="text-muted-foreground">Booked</span>
        <span className="font-medium">Tue 2:30 PM · Discovery</span>
      </div>
    </div>
  );
}

/* ── Why Flowmint (Bento) ────────────────────────────────────── */

function WhyFlowmint() {

  return (
    <section className="relative py-14 md:py-16">
      <BlueprintBg />
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
            <div className="mt-6 rounded-xl border border-border bg-background/60 p-4 backdrop-blur-xl">
              <div className="flex justify-between text-[11px] text-muted-foreground">
                <span>Match confidence</span>
                <span className="font-medium text-foreground">92%</span>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-primary/60 to-primary transition-[width] duration-700 ease-out" />
              </div>
              <ul className="mt-4 space-y-2 text-[12px] text-muted-foreground">
                <li className="flex justify-between"><span>Industry fit</span><span className="text-foreground">B2B SaaS</span></li>
                <li className="flex justify-between"><span>Stack fit</span><span className="text-foreground">HubSpot · Slack</span></li>
                <li className="flex justify-between"><span>Priority</span><span className="text-foreground">Lead ops</span></li>
              </ul>
            </div>
            <DnaOrbit />
          </BentoCard>
          <BentoCard className="md:col-span-3" icon={Compass} title="AI Recommendations" body="Personalized feed, not popularity contest.">
            <RecoVisual />
          </BentoCard>
          <BentoCard className="md:col-span-3" icon={Shield} title="Verified Creators" body="Every creator vetted for craft and reliability.">
            <VerifiedVisual />
          </BentoCard>
          <BentoCard className="md:col-span-2" icon={Layers} title="Workflow Previews" body="See the full workflow before you buy.">
            <ChainVisual />
          </BentoCard>
          <BentoCard className="md:col-span-2" icon={BarChart3} title="ROI Estimates" body="Hours saved and dollars back, upfront.">
            <RoiVisual />
          </BentoCard>
          <BentoCard className="md:col-span-2" icon={Building2} title="Enterprise Ready" body="SSO, audit logs and workspace controls.">
            <ChipRow items={["SSO", "SOC 2", "Audit logs", "RBAC"]} />
          </BentoCard>
          <BentoCard className="md:col-span-3" icon={Zap} title="Fast Deployment" body="Go from browse to live in days.">
            <DeployVisual />
          </BentoCard>
          <BentoCard className="md:col-span-3" icon={Bookmark} title="Secure Payments" body="Escrow, receipts and refund guarantees.">
            <PaymentsVisual />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

/* ── Creators ────────────────────────────────────────────────── */

const SPIRAL_IMAGES = [
  { src: creatorAmara },
  { src: cardSales },
  { src: creatorDiego },
  { src: cardSupport },
  { src: creatorLena },
  { src: cardFinance },
  { src: cardVoice },
  { src: cardOps },
  { src: marketplaceCards },
  { src: businessDna },
  { src: forBusinesses },
  { src: forCreators },
];

const CREATORS = [

  {
    name: "Amara Osei",
    handle: "@amara.builds",
    role: "RevOps automation",
    photo: creatorAmara,
    blurb:
      "Ex-HubSpot solutions architect. Builds lead routing and enrichment flows that cut response time to minutes.",
    stack: ["hubspot", "openai", "slack"],
    deploys: "1,240",
    rating: "4.9",
    tint: "from-primary/15",
  },
  {
    name: "Diego Marín",
    handle: "@diego.flows",
    role: "Support & CX",
    photo: creatorDiego,
    blurb:
      "Designs deflection systems for high-volume helpdesks. Ships tone-safe AI replies with human escalation built in.",
    stack: ["zendesk", "anthropic", "notion"],
    deploys: "860",
    rating: "4.8",
    tint: "from-indigo-500/15",
  },
  {
    name: "Lena Kowalski",
    handle: "@lena.ops",
    role: "Finance ops",
    photo: creatorLena,
    blurb:
      "Automates reconciliation, invoice capture and approvals for finance teams that still live in spreadsheets.",
    stack: ["xero", "stripe", "googlesheets"],
    deploys: "615",
    rating: "5.0",
    tint: "from-sky-500/15",
  },
];


function Creators() {
  return (
    <section id="creators" className="relative border-t border-border py-14 md:py-16">
      <BlueprintBg />
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              The creators
            </p>
            <h2 className="mt-5 text-balance text-[40px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[52px]">
              Built by the people who automate for a living.
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-[1.65] text-muted-foreground">
              Every automation on Flowmint is authored by a vetted operator — RevOps
              architects, support leads and finance engineers who have shipped these
              systems inside real companies.
            </p>
          </div>
          <div className="flex gap-10">
            {[
              { v: "2,400+", l: "Verified creators" },
              { v: "38", l: "Countries" },
              { v: "$4.1M", l: "Paid out" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-[26px] font-medium tracking-[-0.03em]">{s.v}</div>
                <div className="mt-1 text-[12px] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-16 h-[420px] overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-xl md:h-[520px]">
          <SpiralImages
            images={SPIRAL_IMAGES}
            turns={3.5}
            speed={1.6}
            imageSize={180}
            cornerRadius={12}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-8 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Live from the creator network
            </p>
            <p className="mt-2 text-[18px] font-medium tracking-[-0.02em]">
              Thousands of automations, published every week.
            </p>
          </div>
        </div>


        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {CREATORS.map((c) => (
            <article
              key={c.handle}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_40px_90px_-40px_rgba(15,23,42,0.25)]"
            >
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.tint} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="flex items-center gap-3">
                <img
                  src={c.photo}
                  alt={`Portrait of ${c.name}, ${c.role} creator on Flowmint`}
                  loading="lazy"
                  width={816}
                  height={816}
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-border transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />

                <div>
                  <div className="flex items-center gap-1.5 text-[15px] font-medium tracking-[-0.02em]">
                    {c.name}
                    <Check className="h-3.5 w-3.5 rounded-full bg-primary p-[2px] text-background" />
                  </div>
                  <div className="text-[12px] text-muted-foreground">{c.handle}</div>
                </div>
              </div>
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {c.role}
              </p>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-muted-foreground">{c.blurb}</p>
              <div className="mt-6 flex items-center gap-2">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-background"
                  >
                    <LogoIcon slug={s} name={s} size={13} />
                  </span>
                ))}
              </div>
              <div className="mt-7 flex items-center justify-between border-t border-border pt-5 text-[12px] text-muted-foreground">
                <span>{c.deploys} deploys</span>
                <span className="flex items-center gap-1 text-foreground">
                  <Star className="h-3.5 w-3.5 fill-current text-primary" />
                  {c.rating}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-[13.5px] font-medium text-background transition-colors hover:bg-primary"
          >
            Meet the creators
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}



/* Bento micro-visuals */

function DnaOrbit() {
  return (
    <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-70">
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-[60px]" />
      <div className="absolute inset-6 rounded-full border border-foreground/[0.08]" />
      <div className="absolute inset-12 rounded-full border border-foreground/[0.06]" />
      <div className="absolute inset-[72px] rounded-full border border-primary/20" />
    </div>
  );
}

function RecoVisual() {
  const rows = [
    { slug: "hubspot", name: "HubSpot", label: "Lead scoring", score: "98%" },
    { slug: "slack", name: "Slack", label: "Deal alerts", score: "94%" },
    { slug: "notion", name: "Notion", label: "Meeting notes", score: "89%" },
  ];
  return (
    <div className="mt-6 space-y-2">
      {rows.map((r, i) => (
        <div
          key={r.slug}
          className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-3 py-2 backdrop-blur-xl transition-all duration-500 group-hover:border-foreground/15"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-card">
            <LogoIcon slug={r.slug} name={r.name} size={12} />
          </span>
          <span className="text-[12px] text-foreground">{r.label}</span>
          <span className="ml-auto font-mono text-[11px] text-muted-foreground">{r.score}</span>
        </div>
      ))}
    </div>
  );
}

function VerifiedVisual() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex -space-x-2">
        {["A", "M", "R", "K"].map((c, i) => (
          <span
            key={c}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-background bg-muted text-[11px] font-medium text-muted-foreground transition-transform duration-500 group-hover:translate-x-0"
            style={{ transform: `translateX(${i * 2}px)` }}
          >
            {c}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary">
        <Check className="h-3 w-3" strokeWidth={2.5} /> Verified
      </span>
      <span className="ml-auto font-mono text-[11px] text-muted-foreground">1,284</span>
    </div>
  );
}

function ChainVisual() {
  const nodes = [
    { slug: "typeform", name: "Typeform" },
    { slug: "openai", name: "OpenAI" },
    { slug: "slack", name: "Slack" },
  ];
  return (
    <div className="mt-6 flex items-center">
      {nodes.map((n, i) => (
        <div key={n.slug} className="flex items-center">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background/70 backdrop-blur-xl">
            <LogoIcon slug={n.slug} name={n.name} size={14} />
          </span>
          {i < nodes.length - 1 && (
            <span className="mx-1.5 h-px w-8 bg-[linear-gradient(to_right,transparent,currentColor,transparent)] text-border" />
          )}
        </div>
      ))}
      <span className="ml-auto font-mono text-[11px] text-muted-foreground">6 steps</span>
    </div>
  );
}

function RoiVisual() {
  const bars = [34, 52, 46, 68, 80, 96];
  return (
    <div className="mt-6">
      <div className="flex h-16 items-end gap-1.5">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm bg-foreground/10 transition-all duration-500 ease-out group-hover:bg-primary/70"
            style={{ height: `${h}%`, transitionDelay: `${i * 45}ms` }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-[18px] font-medium tracking-tight">$14.2k</span>
        <span className="text-[11px] text-muted-foreground">saved / month</span>
      </div>
    </div>
  );
}

function ChipRow({ items }: { items: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span
          key={t}
          className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground backdrop-blur-xl transition-colors group-hover:border-foreground/15 group-hover:text-foreground"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function DeployVisual() {
  const steps = ["Browse", "Preview", "Connect", "Live"];
  return (
    <div className="mt-6 flex items-center gap-2">
      {steps.map((s, i) => (
        <div key={s} className="flex flex-1 items-center gap-2">
          <div className="min-w-0 flex-1">
            <div className="h-1 rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary/70 transition-[width] duration-700 ease-out"
                style={{ width: i < 3 ? "100%" : "45%", transitionDelay: `${i * 90}ms` }}
              />
            </div>
            <p className="mt-2 truncate text-[10.5px] text-muted-foreground">{s}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PaymentsVisual() {
  return (
    <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-background/60 px-3.5 py-3 backdrop-blur-xl">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
        <Wallet className="h-4 w-4 text-primary" strokeWidth={1.5} />
      </span>
      <div>
        <p className="text-[12px] font-medium">Escrow released</p>
        <p className="text-[11px] text-muted-foreground">After successful deployment</p>
      </div>
      <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground">
        <Check className="h-3 w-3" strokeWidth={2.5} /> Paid
      </span>
    </div>
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
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-7 backdrop-blur-xl transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_30px_70px_-35px_rgba(0,0,0,0.25)] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-[radial-gradient(60%_100%_at_50%_100%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/70 transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
        <Icon className="h-[18px] w-[18px] text-foreground transition-colors group-hover:text-primary" strokeWidth={1.5} />
      </span>
      <h3 className="relative mt-6 text-[18px] font-medium tracking-tight">{title}</h3>
      <p className="relative mt-2 max-w-md text-[14px] leading-[1.55] text-muted-foreground">{body}</p>
      <div className="relative">{children}</div>
    </div>
  );
}


/* ── For Businesses / Creators ───────────────────────────────── */

function ForBusinessesCreators() {
  return (
    <section className="border-t border-border py-14 md:py-16">
      <div className="mx-auto grid max-w-[1240px] gap-5 px-6 md:grid-cols-2 lg:px-8">
        {[
          {
            eyebrow: "For businesses",
            title: "Adopt AI without the guesswork.",
            body: "Discover, evaluate and deploy vetted automations aligned to your stack and goals.",
            bullets: ["Personalized marketplace", "Verified creators", "Escrow-secured payments", "Go live in days"],
            cta: "Explore Marketplace",
            image: forBusinesses,
            imageAlt: "Tailored automation system connecting Slack, Notion, Zapier and other tools",
          },
          {
            eyebrow: "For creators",
            title: "Publish once. Reach thousands of businesses.",
            body: "Turn your workflows into productized automations and get paid to deploy them.",
            bullets: ["Global distribution", "Owned pricing", "Business DNA matching", "Verified badge"],
            cta: "Become Creator",
            image: forCreators,
            imageAlt: "Creator mapping an automation userflow across design and development stages",
          },
        ].map((c) => (
          <article
            key={c.eyebrow}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-40px_rgba(15,23,42,0.18)] ring-1 ring-black/[0.02] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_40px_90px_-30px_rgba(15,23,42,0.22)]"
          >
            <div className="relative h-56 w-full overflow-hidden md:h-64">
              <img
                src={c.image}
                alt={c.imageAlt}
                loading="lazy"
                width={1280}
                height={900}
                className="h-full w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5" />
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
    <section className="border-y border-border bg-muted/40 py-14 md:py-16">
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
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-14 md:py-16">
      <div className="mx-auto grid max-w-[1240px] items-stretch gap-8 px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
        {/* Animated gradient CTA */}
        <div className="c5-animated-gradient relative flex flex-col items-center justify-center overflow-hidden rounded-[24px] px-10 py-20 text-center text-primary-foreground shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 backdrop-blur-[60px]"
          />
          <div className="relative">
            <h2 className="mb-4 text-[40px] font-normal leading-[1.05] tracking-[-0.03em] md:text-[56px]">
              Ready to automate
              <br />
              without limits?
            </h2>
            <p className="mb-8 text-[0.95rem] font-normal opacity-90">
              Deploy vetted AI automations built for your business DNA.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[12px] bg-foreground px-8 py-3.5 text-[0.95rem] font-semibold text-background shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.4)]"
            >
              Get started today
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="flex flex-col justify-center gap-3">
          {faqs.map((f, i) => {
            const active = activeIndex === i;
            return (
              <div
                key={f.q}
                onClick={() => setActiveIndex(active ? null : i)}
                className={`cursor-pointer rounded-[10px] border bg-card px-5 py-[18px] transition-all duration-200 ${
                  active
                    ? "border-border shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                    : "border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-border"
                }`}
              >
                <div className="flex items-center justify-between gap-4 text-[0.9rem] font-normal text-foreground">
                  <span>{f.q}</span>
                  {active ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                  )}
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    active ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="text-[0.9rem] leading-[1.6] text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ───────────────────────────────────────────────── */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-40 md:py-56">
      <img
        src={ctaWaves}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/10 to-background"
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
    <footer className="border-t border-border py-12">
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
              {[
                { label: "X", src: "https://cdn.simpleicons.org/x/000000" },
                { label: "LinkedIn", src: "https://cdn.simpleicons.org/linkedin/000000" },
                { label: "GitHub", src: "https://cdn.simpleicons.org/github/000000" },
                { label: "YouTube", src: "https://cdn.simpleicons.org/youtube/000000" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5"
                >
                  <img
                    src={s.src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 opacity-60 transition-opacity hover:opacity-100"
                  />
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
        <div className="mt-20 select-none overflow-hidden">
          <p className="whitespace-nowrap text-center text-[22vw] font-semibold leading-[0.8] tracking-[-0.06em] text-foreground/[0.06] md:text-[19vw]">
            Flowmint
          </p>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-[12.5px] text-muted-foreground md:flex-row md:items-center">

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
