import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";

/** Real brand logos via simpleicons CDN — monochrome, contextual */
export function LogoIcon({
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

export function FlowmintMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} fill="none" aria-hidden="true">
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

const NAV_LINKS: { label: string; to?: string }[] = [
  { label: "Marketplace" },
  { label: "Solutions" },
  { label: "Business" },
  { label: "Creators", to: "/creators" },
  { label: "Resources" },
];

export function SiteNav({ active }: { active?: string }) {
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
        <Link to="/" className="group flex items-center gap-2">
          <FlowmintMark
            className={`transition-transform duration-500 ${scrolled ? "scale-90" : "scale-100"}`}
          />
          <span className="text-[15px] font-semibold tracking-tight">Flowmint</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => {
            const isActive = active === l.label;
            const cls = `rounded-full px-3 py-1.5 text-[13.5px] transition-colors duration-200 ${
              isActive
                ? "bg-primary/8 font-medium text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`;
            return (
              <li key={l.label}>
                {l.to ? (
                  <Link to={l.to} className={cls}>
                    {l.label}
                  </Link>
                ) : (
                  <a href="#" className={cls}>
                    {l.label}
                  </a>
                )}
              </li>
            );
          })}
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
          <Link
            to="/creators/apply"
            className="hidden text-[13.5px] text-muted-foreground transition-colors hover:text-foreground lg:inline-block"
          >
            Become Creator
          </Link>
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

export function SiteFooter() {
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
