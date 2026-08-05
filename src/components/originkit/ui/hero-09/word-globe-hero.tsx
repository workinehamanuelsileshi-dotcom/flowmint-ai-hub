// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import TextSphere from "@/components/originkit/ui/hero-09/text-sphere";

export function WordGlobeHero() {
  return (
    <section className="h09-hero-shell" aria-label="Flowmint hero">
      <div className="h09-content-rails" aria-hidden="true" />
      <div className="h09-wave-pattern" aria-hidden="true" />

      <div className="h09-globe-stage">
        <TextSphere
          word="FLOWMINT · AUTOMATE ·"
          color="#2563EB"
          font={{
            fontFamily:
              "Geist, Inter, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 500,
            fontSize: 15,
          }}
          speed={7}
          rotationSide="counterclockwise"
          twist={50}
          letterSpacing={240}
        />
      </div>

      <div className="h09-hero-content">
        <div className="h09-headline-block">
          <span className="h09-eyebrow">The AI Automation Marketplace</span>
          <h1>
            Automations that
            <br />
            run your business
          </h1>
          <div className="h09-actions">
            <a className="h09-button h09-button-dark" href="#marketplace">
              Explore marketplace
            </a>
            <a className="h09-button h09-button-light" href="#creators">
              Become a creator
            </a>
          </div>
        </div>

        <div className="h09-details-block">
          <p>
            Flowmint helps businesses discover, compare, customize and deploy AI
            automations built by verified creators — matched to your stack, live
            in minutes.
          </p>
          <div className="h09-stats">
            <div>
              <strong>1,200+</strong>
              <span>Automations listed</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Avg. creator rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
