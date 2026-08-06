"use client";

import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import GalleryTunnel from "@/components/originkit/ui/hero-03/gallery-tunnel";
import { useTunnelConfig } from "@/components/originkit/ui/hero-03/use-tunnel-size";
import { LogoIcon } from "@/components/site/site-chrome";
import marketplaceCards from "@/assets/marketplace-cards.png";
import cardSales from "@/assets/card-sales.jpg";
import cardSupport from "@/assets/card-support.jpg";
import cardFinance from "@/assets/card-finance.jpg";
import cardVoice from "@/assets/card-voice.jpg";
import cardOps from "@/assets/card-ops.jpg";

const TUNNEL_IMAGES = [
  { src: marketplaceCards, alt: "Flowmint marketplace listings" },
  { src: cardSales, alt: "Sales automation" },
  { src: cardSupport, alt: "Support automation" },
  { src: cardFinance, alt: "Finance automation" },
  { src: cardVoice, alt: "Voice AI automation" },
  { src: cardOps, alt: "Operations automation" },
];

const PROOF = [
  "No upfront listing fee",
  "Reach businesses worldwide",
  "Keep ownership of your work",
];

export function CreatorsHero() {
  const { tunnelSize, fade, boost } = useTunnelConfig();
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      aria-label="Flowmint creators hero"
      className="relative isolate w-full overflow-hidden bg-background"
    >
      <div className="relative mx-auto flex min-h-[100svh] w-full flex-col">
        {/* Perspective tunnel of real Flowmint marketplace visuals */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <GalleryTunnel
            background="#FFFFFF"
            lineColor="#C7D2FE"
            lineOpacity={45}
            grid={4}
            tunnelSize={tunnelSize}
            speed={reduce ? 0 : 7}
            boost={reduce ? 0 : boost}
            fade={fade}
            label={false}
            images={TUNNEL_IMAGES}
            style={{ width: "100%", height: "100%" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_42%,rgba(255,255,255,0.15)_70%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="pointer-events-none relative z-20 flex flex-1 flex-col items-center justify-center px-5 pb-16 pt-32 sm:px-8 md:pt-36">
          <div className="flex w-full max-w-[860px] flex-col items-center text-center">
            <span className="pointer-events-auto inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-md">
              The creator economy for AI automation
            </span>

            <h1 className="mt-6 text-balance text-[clamp(2.6rem,7.4vw,5.2rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-foreground">
              Build once.
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-[color-mix(in_oklab,var(--primary)_55%,#000)] bg-clip-text text-transparent">
                Earn every time.
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-pretty text-[15.5px] leading-[1.65] text-muted-foreground sm:text-[17px]">
              Turn the automations you build into products that businesses can
              discover, deploy, and pay for — all through Flowmint.
            </p>

            <div className="pointer-events-auto mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/creators/apply"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-[14.5px] font-medium text-background transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:bg-primary active:scale-[0.98] sm:w-auto"
              >
                Become a Creator
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="/"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-background/70 px-6 text-[14.5px] font-medium text-foreground backdrop-blur-md transition-all duration-300 hover:border-foreground/30 hover:bg-background active:scale-[0.98] sm:w-auto"
              >
                Explore Marketplace
              </a>
            </div>

            <ul className="pointer-events-auto mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
              {PROOF.map((p) => (
                <li key={p} className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contextual product visual: workflow → publish → marketplace */}
          <div className="pointer-events-auto mt-14 w-full max-w-[1080px]">
            <PublishFlowVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

const HERO_NODES = [
  { slug: "zapier", name: "Automation Builder", sub: "Trigger · logic" },
  { slug: "openai", name: "AI Agent", sub: "Reason · decide" },
  { slug: "hubspot", name: "CRM", sub: "Create · update" },
  { slug: "gmail", name: "Email", sub: "Personalized reply" },
  { slug: "slack", name: "Slack", sub: "Notify the team" },
];

function PublishFlowVisual() {
  return (
    <div className="overflow-hidden rounded-[22px] border border-border bg-background/75 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-border/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
        <span className="ml-3 rounded-md bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
          flowmint.com/studio/publish
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
          Demo preview
        </span>
      </div>

      <div className="grid gap-6 p-5 md:grid-cols-[1.35fr_1fr] md:p-7">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Your automation
          </p>
          <div className="mt-4 flex snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {HERO_NODES.map((n, i) => (
              <div key={n.name} className="flex shrink-0 items-center gap-2">
                <div className="w-[132px] snap-start rounded-xl border border-border bg-background px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_14px_30px_-20px_rgba(37,99,235,0.6)]">
                  <div className="flex items-center gap-2">
                    <LogoIcon slug={n.slug} name={n.name} size={13} />
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  </div>
                  <p className="mt-2 text-[12.5px] font-medium leading-tight">{n.name}</p>
                  <p className="mt-0.5 text-[10.5px] text-muted-foreground">{n.sub}</p>
                </div>
                {i < HERO_NODES.length - 1 && (
                  <span className="h-px w-5 bg-[repeating-linear-gradient(90deg,var(--color-border)_0_4px,transparent_4px_8px)] animate-flow-dash" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="inline-flex h-8 items-center rounded-full bg-primary px-3.5 text-[12px] font-medium text-primary-foreground">
              Publish to marketplace
            </span>
            <span className="text-[12px] text-muted-foreground">
              Adds pricing, preview, integrations & setup guide
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-muted/40 p-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Marketplace listing
          </p>
          <div className="mt-3 overflow-hidden rounded-xl border border-border bg-background">
            <img
              src={cardSales}
              alt="Preview of a Flowmint automation listing"
              loading="lazy"
              className="h-24 w-full object-cover"
            />
            <div className="p-3.5">
              <p className="text-[13.5px] font-medium leading-tight">
                AI Lead Qualifier → HubSpot
              </p>
              <p className="mt-1 text-[11.5px] text-muted-foreground">
                Sales · by your creator profile
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[13px] font-medium">$149</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background">
                  Deploy <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-[10.5px] text-muted-foreground">
            Illustrative example — not real sales data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreatorsHero;
