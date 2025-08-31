// Ucique — Preview Homepage (from scratch)
// Single‑file React component using Tailwind classes (no external deps)
// Brand tone: grotesque‑beautiful, sacred sarcasm, dark but uplifting.
// Sections: Hero, Art & Apparel, Discussion, Artwork, Newsletter, Footer.
// NOTE: Replace placeholder images/links with your own later.

import React, { useMemo } from "react";

// Brand palette (from memory)
const palette = {
  1: "#0B0B0F", // Obsidian (bg)
  2: "#F2EFE9", // Bone White
  3: "#7A4CCF", // Light‑Spectrum Violet
  4: "#421C3A", // Bruised Plum
  5: "#A05B6A", // Ash Rose
  6: "#2B6F6A", // Verdigris
  7: "#C2A85A", // Rust Gold
  8: "#C0C0C0", // Silver
  9: "#F9F7FF", // Spirit Light
};

const products = [
  { name: "Signal: 3·6·9 Spiral Tee", subtitle: "Eco / organic cotton", price: "€29" },
  { name: "Ritual Scar Hoodie", subtitle: "Organic / recycled", price: "€59" },
  { name: "Ghost‑Field Print (A3)", subtitle: "Museum‑grade giclée", price: "€39" },
  { name: "Silver‑8 Ancestral Cap", subtitle: "Recycled polyester", price: "€28" },
  { name: "Fifth Age Poster", subtitle: "Matte 200gsm", price: "€24" },
];

const posts = [
  {
    title: "How to Heal Without Becoming a Liar",
    excerpt:
      "Radical honesty with baroque chiaroscuro. Notes from the edge of recovery—no glitter, just gold leaf.",
  },
  {
    title: "Gifted & Gaslit",
    excerpt:
      "For the beautiful misfits who learned to shrink. Unlearn it here. Bring your scars; we use them as portals.",
  },
  {
    title: "Insane Stepmothers (a field guide)",
    excerpt:
      "A grotesque‑educational tour through boundary‑setting. Dark humor included, refunds not.",
  },
];

function ParticleBG() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Oil‑slick fog */}
      <div
        className="absolute -inset-1 blur-3xl opacity-40 animate-pulse"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(122,76,207,.25), transparent 60%), radial-gradient(50% 50% at 70% 60%, rgba(43,111,106,.25), transparent 60%), radial-gradient(40% 40% at 30% 70%, rgba(162,120,120,.20), transparent 60%)",
        }}
      />
      {/* Subtle moving specks */}
      <div className="absolute inset-0 [background-image:radial-gradient(1px_1px_at_20%_30%,rgba(255,255,255,.25),transparent),radial-gradient(1px_1px_at_70%_60%,rgba(255,255,255,.2),transparent)] animate-[pulse_9s_ease-in-out_infinite]" />
    </div>
  );
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="uppercase tracking-[0.25em] text-sm text-slate-300/80">{kicker}</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-300/90 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

function ProductCard({ p }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/[.08] transition shadow-[0_0_0_1px_rgba(255,255,255,.05)]">
      <div className="aspect-[1/1] w-full rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] grid place-items-center overflow-hidden">
        <div className="w-4/5 h-4/5 rounded-xl border border-white/15 grid place-items-center text-center">
          <span className="text-sm text-white/80">Artwork / Mock</span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg text-white font-medium">{p.name}</h3>
        <p className="text-sm text-slate-300/90">{p.subtitle}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-white/90 font-semibold">{p.price}</span>
        <button className="px-3 py-1.5 text-sm rounded-xl bg-white/10 hover:bg-white/20 text-white">View</button>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
    </div>
  );
}

function PostCard({ post }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[.08] transition">
      <h3 className="text-white text-xl font-medium">{post.title}</h3>
      <p className="mt-2 text-slate-300/90">{post.excerpt}</p>
      <button className="mt-4 px-3 py-1.5 text-sm rounded-xl bg-white/10 hover:bg-white/20 text-white">Read</button>
    </div>
  );
}

export default function UciqueHome() {
  const rootVars = useMemo(
    () => ({
      "--ucq-bg": palette[1],
      "--ucq-accent": palette[3],
      "--ucq-rose": palette[5],
      "--ucq-verd": palette[6],
      "--ucq-silver": palette[8],
    }),
    []
  );

  return (
    <div style={rootVars as React.CSSProperties} className="min-h-screen text-[var(--ucq-silver)] bg-[var(--ucq-bg)] relative">
      <ParticleBG />

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 grid place-items-center text-xs">U</div>
            <span className="tracking-wide text-white/90">Ucique</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#shop" className="hover:text-white">Art & Apparel</a>
            <a href="#discussion" className="hover:text-white">Discussion</a>
            <a href="#artwork" className="hover:text-white">Artwork</a>
            <a href="#newsletter" className="hover:text-white">Newsletter</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative isolate">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-white/70">Grotesque • Beautiful • Honest</p>
          <h1 className="mt-4 text-4xl md:text-6xl leading-tight font-semibold text-[var(--ucq-silver)]">
            Wearable Wounds & Sacred Sarcasm
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            A healing‑through‑art project. Ritual clothing, discussion for misfits, and an archive of recovery notes. No kitsch. Elegance within menace.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#shop" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white">Shop the Rituals</a>
            <a href="#discussion" className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 text-white">Join the Talk</a>
          </div>
        </div>
      </section>

      {/* Featured strip */}
      <div className="border-y border-white/10 bg-white/[.03]">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/80 whitespace-nowrap overflow-x-auto">
          <span className="mr-6">3 • 6 • 9</span>
          <span className="mr-6">Baroque chiaroscuro</span>
          <span className="mr-6">Oil‑slick iridescence</span>
          <span className="mr-6">Rainbow‑scar accents</span>
          <span className="">Elegance within menace</span>
        </div>
      </div>

      {/* Shop */}
      <section id="shop" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Art & Apparel"
            title="Ritual pieces for beautiful misfits"
            subtitle="Minimalist, eco‑minded, and saturated with story."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ProductCard key={i} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Discussion */}
      <section id="discussion" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Discussion"
            title="A clean room for messy truths"
            subtitle="Bring your edges. We speak in scars and solutions."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <PostCard key={i} post={post} />
            ))}
          </div>
          {/* giscus placeholder */}
          <div className="mt-10 rounded-2xl border border-white/10 p-6 text-sm text-white/80">
            <p className="opacity-80">
              Comments area (giscus). Your build will inject the live widget.
            </p>
          </div>
        </div>
      </section>

      {/* Artwork */}
      <section id="artwork" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Artwork"
            title="Grotesque‑beautiful studies"
            subtitle="Cracked porcelain, charred lace, and hopeful spectra."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="aspect-[16/9] bg-[linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] grid place-items-center">
                  <span className="text-white/70">Artwork Placeholder {n}</span>
                </div>
                <div className="p-4 text-sm text-white/85">Series #{n} — Elegance within menace.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Newsletter"
            title="Free Guide • Moon Phases • Growth Notes"
            subtitle="Sign up for non‑cringey updates. Education with teeth."
          />
          <form className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
            <input
              type="email"
              placeholder="you@domain.com"
              className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-white/60">
            By subscribing, you agree to receive occasional emails. No spam, only signal.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/70 grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-semibold text-white">Ucique</div>
            <p className="mt-2 max-w-sm">A cosmic‑recovery atelier. Dark humor precise, elegance inside the menace.</p>
          </div>
          <div>
            <div className="font-semibold text-white">Explore</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#shop" className="hover:text-white">Shop</a></li>
              <li><a href="#discussion" className="hover:text-white">Discussion</a></li>
              <li><a href="#artwork" className="hover:text-white">Artwork</a></li>
              <li><a href="#newsletter" className="hover:text-white">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white">Legal</div>
            <ul className="mt-2 space-y-1">
              <li><span className="opacity-70">Impressum / Privacy (add links)</span></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-white/50 pb-8">© {new Date().getFullYear()} Ucique — All rights reserved.</div>
      </footer>
    </div>
  );
}
