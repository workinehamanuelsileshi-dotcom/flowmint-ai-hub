import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site/site-chrome";

export const Route = createFileRoute("/creators/apply")({
  head: () => ({
    meta: [
      { title: "Apply as a Flowmint Creator — List your AI automations" },
      {
        name: "description",
        content:
          "Apply to publish your AI automations on Flowmint. Tell us what you build, get verified, and start earning from every deployment.",
      },
      { property: "og:title", content: "Apply as a Flowmint Creator" },
      {
        property: "og:description",
        content:
          "Tell us what you build. Get verified. Publish AI automations to businesses on Flowmint.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApplyPage,
});

const FIELDS = [
  { id: "name", label: "Full name", placeholder: "Amara Osei", type: "text" },
  { id: "email", label: "Work email", placeholder: "you@studio.com", type: "email" },
  { id: "profile", label: "Portfolio or profile URL", placeholder: "https://", type: "url" },
];

function ApplyPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav active="Creators" />
      <section className="mx-auto max-w-[760px] px-6 pb-16 pt-36 lg:px-8">
        <Link
          to="/creators"
          className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to creators
        </Link>

        <h1 className="mt-6 text-balance text-[clamp(2.1rem,5vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
          Apply to become a Flowmint creator
        </h1>
        <p className="mt-4 max-w-[540px] text-[16px] leading-[1.65] text-muted-foreground">
          Tell us what you build and where you build it. Verification usually takes
          a few days, and there's no cost to list.
        </p>

        {sent ? (
          <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-8">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="h-4 w-4" />
            </span>
            <h2 className="mt-4 text-[18px] font-medium tracking-tight">
              Application received
            </h2>
            <p className="mt-2 text-[14px] leading-[1.65] text-muted-foreground">
              This is a preview form — no data was submitted. Connect a backend to
              start collecting real creator applications.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-10 space-y-5 rounded-2xl border border-border bg-background p-6 sm:p-8"
          >
            {FIELDS.map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={f.id}
                  className="text-[12.5px] font-medium text-muted-foreground"
                >
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required
                  placeholder={f.placeholder}
                  className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-3.5 text-[14px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="about"
                className="text-[12.5px] font-medium text-muted-foreground"
              >
                What automations do you build?
              </label>
              <textarea
                id="about"
                name="about"
                required
                rows={5}
                placeholder="e.g. AI lead qualification into HubSpot, built on n8n with OpenAI agents."
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-3.5 py-3 text-[14px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-[14.5px] font-medium text-background transition-all duration-300 hover:bg-primary active:scale-[0.98]"
            >
              Submit application
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </section>
      <SiteFooter />
    </main>
  );
}
