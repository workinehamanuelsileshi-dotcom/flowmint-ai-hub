// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

"use client";

import type { MouseEvent } from "react";
import TextSphere from "@/components/originkit/ui/hero-09/text-sphere";

/** Asset root — flat files in package assets/. */
const A = "/originkit/hero-09";

const NAV_ITEMS = ["Home", "Pricing", "About", "Tools"] as const;

/** Non-navigating click handler for iframe-safe preview anchors. */
const noopNav = (e: MouseEvent) => {
  e.preventDefault();
};

export function WordGlobeHero() {
  return (
    <section className="h09-hero-shell" aria-label="Word globe hero">
      <header className="h09-top-nav">
        <a
          className="h09-logo"
          aria-label="Origin home"
          role="link"
          onClick={noopNav}
        >
          <img
            src={`${A}/logo-wordglobe.svg`}
            alt=""
            width={40}
            height={28}
          />
        </a>
        <nav aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item} role="link" onClick={noopNav}>
              {item}
            </a>
          ))}
        </nav>
        <a
          className="h09-button h09-button-dark h09-nav-cta"
          role="link"
          onClick={noopNav}
        >
          Get started
        </a>
      </header>

      <div className="h09-content-rails" aria-hidden="true" />
      <div className="h09-wave-pattern" aria-hidden="true" />

      <div className="h09-globe-stage">
        <TextSphere
          word="###"
          color="#d77d84"
          font={{
            fontFamily: "Arial, Helvetica, sans-serif",
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
          <h1>
            Building the Economy
            <br />
            of Tomorrow
          </h1>
          <div className="h09-actions">
            <a
              className="h09-button h09-button-dark"
              role="link"
              onClick={noopNav}
            >
              Get started
            </a>
            <a
              className="h09-button h09-button-light"
              role="link"
              onClick={noopNav}
            >
              Book a call
            </a>
          </div>
        </div>

        <div className="h09-details-block">
          <p>
            Empowering governments, & enterprises, with the insights,
            frameworks, and technology needed to build resilient economies.
          </p>
          <div className="h09-stats">
            <div>
              <strong>150+</strong>
              <span>Countries engaged</span>
            </div>
            <div>
              <strong>$4.8T</strong>
              <span>Investment tracked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
