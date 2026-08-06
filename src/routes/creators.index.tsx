import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Coins,
  Gauge,
  Globe2,
  LineChart,
  Lock,
  Rocket,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";
import { SiteNav, SiteFooter, LogoIcon } from "@/components/site/site-chrome";
import { CreatorsHero } from "@/components/creators/creators-hero";
import creatorFlow from "@/assets/creator-flow.jpg";
import ctaWave from "@/assets/cta-blue-wave.jpg";
import creatorAmara from "@/assets/creator-amara.jpg";
import creatorDiego from "@/assets/creator-diego.jpg";
import creatorLena from "@/assets/creator-lena.jpg";
import creatorP1 from "@/assets/creator-p1.jpg";
import creatorP2 from "@/assets/creator-p2.jpg";
import creatorP3 from "@/assets/creator-p3.jpg";

export const Route = createFileRoute("/creators/")({
  head: () => ({
    meta: [
      { title: "Flowmint for Creators — Build, publish & monetize AI automations" },
      {
        name: "description",
        content:
          "Publish the AI automations you build to the Flowmint marketplace, reach businesses worldwide, and earn recurring revenue from every deployment.",
      },
      {
        property: "og:title",
        content: "Flowmint for Creators — Build once, earn every time",
      },
      {
        property: "og:description",
        content:
          "Turn your automations into products. List on Flowmint, get discovered by businesses, and monetize every deployment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CreatorsPage,
});

function SectionHeading({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-[680px] text-center" : "max-w-[680px]"}>
      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-pretty text-[15.5px] leading-[1.65] text-muted-foreground">
          {sub}
        </p>
      )}
    </div>
  );
}

/* 1 — Why build on Flowmint */
const VALUE_PROPS = [
  {
    icon: Store,
    title: "Distribution, not cold outreach",
    body: "Your listing sits where businesses already search for automation — matched to their stack and industry.",
  },
  {
    icon: Coins,
    title: "Monetize every deployment",
    body: "One-time, subscription, or usage-based pricing. You set it, Flowmint handles billing and payouts.",
  },
  {
    icon: BadgeCheck,
    title: "Verification that builds trust",
    body: "Verified creator badges, review workflows, and quality scoring make buyers confident before they deploy.",
  },
  {
    icon: Gauge,
    title: "Analytics on real usage",
    body: "See views, deploys, retention, and where buyers drop off — then improve the automation that earns most.",
  },
  {
    icon: Lock,
    title: "You keep ownership",
    body: "Your logic stays yours. Licensing is transparent and you can unlist or version any time.",
  },
  {
    icon: Globe2,
    title: "Global reach, local fit",
    body: "Businesses across regions and sectors discover your work through Business DNA matching.",
  },
];

function ValueProps() {
  return (
    <section className="border-t border-border py-14">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why creators build here"
          title="A marketplace built for the people who build automations"
          sub="Flowmint handles discovery, trust, billing and deployment so you can spend your time on the workflow itself."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((v) => (
            <div
              key={v.title}
              className="group relative bg-background p-7 transition-colors duration-300 hover:bg-muted/40"
            >
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_50%_0%,rgba(37,99,235,0.07),transparent_70%)]" />
              <v.icon className="relative h-[18px] w-[18px] text-primary" />
              <h3 className="relative mt-5 text-[15.5px] font-medium tracking-tight">
                {v.title}
              </h3>
              <p className="relative mt-2 text-[13.5px] leading-[1.65] text-muted-foreground">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 2 — How it works */
const STEPS = [
  {
    n: "01",
    title: "Build your automation",
    body: "Use the tools you already know — n8n, Make, Zapier, custom agents or code. Bring a working flow.",
    logos: ["n8n", "zapier", "make", "openai"],
  },
  {
    n: "02",
    title: "Package it as a product",
    body: "Add a preview, integrations, setup guide and pricing. Flowmint generates the listing and demo.",
    logos: ["notion", "stripe"],
  },
  {
    n: "03",
    title: "Get verified & listed",
    body: "We review quality, security and setup accuracy, then publish it into the right categories.",
    logos: ["github"],
  },
  {
    n: "04",
    title: "Earn as businesses deploy",
    body: "Every deployment, subscription and upgrade pays out to you automatically.",
    logos: ["stripe", "slack"],
  },
];

function HowItWorks() {
  return (
    <section className="relative border-t border-border py-14">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From working flow to earning product"
          sub="Four steps, no gatekeeping, no upfront cost."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <ol className="relative space-y-3">
            {STEPS.map((s) => (
              <li
                key={s.n}
                className="group rounded-2xl border border-border bg-background p-5 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_24px_60px_-45px_rgba(37,99,235,0.7)]"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                    {s.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[15.5px] font-medium tracking-tight">{s.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-[1.65] text-muted-foreground">
                      {s.body}
                    </p>
                    <div className="mt-3 flex items-center gap-2.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                      {s.logos.map((l) => (
                        <span
                          key={l}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-muted/40"
                        >
                          <LogoIcon slug={l} name={l} size={13} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <figure className="overflow-hidden rounded-3xl border border-border bg-muted/30 p-2">
            <img
              src={creatorFlow}
              alt="Creator workflow: research, design and development stages connected in a Flowmint build"
              loading="lazy"
              className="h-full w-full rounded-2xl object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
            />
            <figcaption className="px-4 py-3 text-[12px] text-muted-foreground">
              A creator flow inside Flowmint Studio — build, preview, then publish.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* 3 — Monetization */
const PLANS = [
  {
    name: "One-time license",
    price: "$49 – $499",
    body: "Best for self-contained automations a business installs once.",
    points: ["Instant payout after clearing", "Version upgrades sold separately"],
  },
  {
    name: "Subscription",
    price: "$19 – $199 / mo",
    body: "Recurring revenue for automations you maintain and improve.",
    points: ["Monthly or annual", "Churn and retention analytics"],
    featured: true,
  },
  {
    name: "Usage-based",
    price: "Per run or per seat",
    body: "Scales with the value your automation creates for the business.",
    points: ["Metered runs", "Volume tiers you define"],
  },
];

function Monetization() {
  return (
    <section className="border-t border-border py-14">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <SectionHeading
          eyebrow="Monetization"
          title="Price it the way your automation creates value"
          sub="Pricing models are illustrative ranges — you set your own numbers on every listing."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-6 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
                p.featured
                  ? "border-foreground/80 bg-foreground text-background shadow-[0_40px_90px_-55px_rgba(0,0,0,0.8)]"
                  : "border-border bg-background hover:border-foreground/25"
              }`}
            >
              {p.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-primary-foreground">
                  Most used
                </span>
              )}
              <h3 className="text-[15.5px] font-medium tracking-tight">{p.name}</h3>
              <p
                className={`mt-3 text-[26px] font-semibold tracking-[-0.03em] ${
                  p.featured ? "" : "text-foreground"
                }`}
              >
                {p.price}
              </p>
              <p
                className={`mt-2 text-[13.5px] leading-[1.65] ${
                  p.featured ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {p.body}
              </p>
              <ul className="mt-5 space-y-2 text-[13px]">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <Sparkles
                      className={`h-3.5 w-3.5 ${p.featured ? "text-primary" : "text-primary"}`}
                    />
                    <span className={p.featured ? "text-background/85" : "text-muted-foreground"}>
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-[12px] text-muted-foreground">
          Flowmint takes a transparent platform fee per transaction. No listing fees, no lock-in.
        </p>
      </div>
    </section>
  );
}

/* 4 — Creator dashboard preview */
const DASH_ROWS = [
  { name: "AI Lead Qualifier → HubSpot", deploys: "312", mrr: "$4,180", trend: "+12%" },
  { name: "Support Triage Agent", deploys: "268", mrr: "$3,240", trend: "+8%" },
  { name: "Invoice Reconciliation Bot", deploys: "154", mrr: "$2,110", trend: "+5%" },
  { name: "Voice AI Appointment Setter", deploys: "97", mrr: "$1,460", trend: "+21%" },
];

function DashboardPreview() {
  return (
    <section className="relative overflow-hidden border-t border-border py-14">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_0%,rgba(37,99,235,0.07),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
        <SectionHeading
          eyebrow="Creator dashboard"
          title="Know exactly how your automations perform"
          sub="Deployments, revenue, retention and buyer feedback in one view. Figures shown are an illustrative preview."
        />
        <div className="mt-12 overflow-hidden rounded-[22px] border border-border bg-background/80 shadow-[0_50px_120px_-70px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
            <span className="ml-3 rounded-md bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
              flowmint.com/studio/analytics
            </span>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-4">
            {[
              { label: "Active deploys", value: "831", icon: Rocket },
              { label: "Monthly revenue", value: "$10,990", icon: LineChart },
              { label: "Avg. rating", value: "4.9 / 5", icon: BadgeCheck },
              { label: "Retention", value: "94%", icon: Gauge },
            ].map((s) => (
              <div key={s.label} className="bg-background px-5 py-5">
                <s.icon className="h-4 w-4 text-primary" />
                <p className="mt-3 text-[22px] font-semibold tracking-[-0.03em]">{s.value}</p>
                <p className="text-[12px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="p-5">
            <div className="grid grid-cols-[1.7fr_repeat(3,0.6fr)] gap-3 border-b border-border pb-2 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              <span>Automation</span>
              <span>Deploys</span>
              <span>MRR</span>
              <span>Trend</span>
            </div>
            {DASH_ROWS.map((r) => (
              <div
                key={r.name}
                className="grid grid-cols-[1.7fr_repeat(3,0.6fr)] items-center gap-3 border-b border-border/60 py-3 text-[13.5px] transition-colors hover:bg-muted/40"
              >
                <span className="truncate font-medium">{r.name}</span>
                <span className="text-muted-foreground">{r.deploys}</span>
                <span className="text-muted-foreground">{r.mrr}</span>
                <span className="text-primary">{r.trend}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 5 — Featured creators */
const CREATORS = [
  {
    img: creatorAmara,
    name: "Amara Osei",
    handle: "@amara.builds",
    role: "Revenue automation",
    stat: "38 automations · 4.9★",
  },
  {
    img: creatorDiego,
    name: "Diego Ferrer",
    handle: "@dferrer",
    role: "Support & CX agents",
    stat: "24 automations · 4.8★",
  },
  {
    img: creatorLena,
    name: "Lena Brandt",
    handle: "@lenab",
    role: "Finance ops",
    stat: "19 automations · 5.0★",
  },
  {
    img: creatorP1,
    name: "Noah Adeyemi",
    handle: "@noahflows",
    role: "Voice AI",
    stat: "12 automations · 4.9★",
  },
  {
    img: creatorP2,
    name: "Sofia Marin",
    handle: "@sofia.ai",
    role: "Marketing ops",
    stat: "27 automations · 4.8★",
  },
  {
    img: creatorP3,
    name: "Ravi Kapoor",
    handle: "@ravik",
    role: "Data & reporting",
    stat: "21 automations · 4.9★",
  },
];

function FeaturedCreators() {
  return (
    <section className="border-t border-border py-14">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <SectionHeading
          eyebrow="The network"
          title="Creators shipping automations businesses actually run"
          sub="Independent builders, agencies and automation engineers — each verified before listing."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CREATORS.map((c) => (
            <article
              key={c.name}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_70px_-55px_rgba(0,0,0,0.6)]"
            >
              <img
                src={c.img}
                alt={`${c.name}, Flowmint verified creator`}
                loading="lazy"
                className="h-16 w-16 shrink-0 rounded-full object-cover ring-1 ring-border transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="truncate text-[15px] font-medium tracking-tight">{c.name}</h3>
                  <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
                </div>
                <p className="text-[12.5px] text-muted-foreground">{c.handle} · {c.role}</p>
                <p className="mt-1 text-[12px] text-muted-foreground">{c.stat}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6 — Tools you can build with */
const TOOLS = [
  "n8n", "zapier", "make", "openai", "anthropic", "slack", "hubspot", "notion",
  "airtable", "stripe", "twilio", "shopify", "gmail", "googlesheets",
];

function Toolbelt() {
  return (
    <section className="border-t border-border py-14">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading
            center={false}
            eyebrow="Build with what you know"
            title="Bring your stack. We handle the storefront."
            sub="Flowmint listings support the platforms creators already build on — plus custom code and agent frameworks."
          />
          <div className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-7">
            {TOOLS.map((t) => (
              <div
                key={t}
                className="group flex aspect-square items-center justify-center bg-background transition-colors duration-300 hover:bg-muted/50"
                title={t}
              >
                <LogoIcon
                  slug={t}
                  name={t}
                  size={20}
                  className="opacity-55 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 7 — Testimonials */
const QUOTES = [
  {
    quote:
      "I stopped selling one-off builds. The same automation now runs for 200+ companies and pays me every month.",
    name: "Amara Osei",
    role: "Revenue automation creator",
    img: creatorAmara,
  },
  {
    quote:
      "Verification was the unlock. Buyers trust the listing before they ever talk to me, so my sales cycle is basically zero.",
    name: "Diego Ferrer",
    role: "Support agents creator",
    img: creatorDiego,
  },
];

function Testimonials() {
  return (
    <section className="border-t border-border py-14">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              className="rounded-2xl border border-border bg-muted/30 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-muted/50"
            >
              <blockquote className="text-pretty text-[17px] leading-[1.55] tracking-[-0.015em]">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={q.img}
                  alt={q.name}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover ring-1 ring-border"
                />
                <span className="text-[13px]">
                  <span className="font-medium">{q.name}</span>
                  <span className="block text-muted-foreground">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8 — FAQ */
const FAQS = [
  {
    q: "Who can become a Flowmint creator?",
    a: "Anyone shipping working AI automations — freelancers, agencies, automation engineers and product teams. You need a working flow and the ability to support it.",
  },
  {
    q: "Does it cost anything to list?",
    a: "No listing fees. Flowmint charges a transparent platform fee only when your automation earns.",
  },
  {
    q: "Do I keep ownership of my automation?",
    a: "Yes. You keep the IP, choose the license terms shown to buyers, and can unlist or version any time.",
  },
  {
    q: "How and when do I get paid?",
    a: "Payouts run on a regular cycle to your connected account, with revenue, refunds and fees itemized in your dashboard.",
  },
  {
    q: "What does verification review?",
    a: "Setup accuracy, security practices, integration handling, documentation quality and whether the automation delivers what the listing promises.",
  },
  {
    q: "Can I offer support or customization?",
    a: "Yes. You can attach setup help, customization tiers or ongoing support to any listing.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-border py-14">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            center={false}
            eyebrow="FAQ"
            title="Everything creators ask before listing"
            sub="Still unsure? Talk to the creator team before you apply."
          />
          <div className="divide-y divide-border border-y border-border">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium tracking-tight">{f.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden pr-10 text-[14px] leading-[1.7] text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 9 — Final CTA */
function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border">
      <img
        src={ctaWave}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      <div className="relative mx-auto max-w-[1240px] px-6 py-20 lg:px-8">
        <div className="max-w-[620px]">
          <h2 className="text-balance text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            Start earning from the automations you already build.
          </h2>
          <p className="mt-5 max-w-[480px] text-[16px] leading-[1.65] text-muted-foreground">
            Apply in minutes. Get verified. Publish to businesses actively looking
            for what you've built.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/creators/apply"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-[14.5px] font-medium text-background transition-all duration-300 hover:bg-primary active:scale-[0.98]"
            >
              Become a Creator
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-6 text-[14.5px] font-medium backdrop-blur-md transition-all duration-300 hover:border-foreground/30"
            >
              <Wrench className="h-4 w-4" />
              Read the creator docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreatorsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav active="Creators" />
      <h1 className="sr-only">Flowmint for Creators</h1>
      <CreatorsHero />
      <ValueProps />
      <HowItWorks />
      <Monetization />
      <DashboardPreview />
      <FeaturedCreators />
      <Toolbelt />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}
