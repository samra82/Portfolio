"use client";

import React from "react";

interface Social {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const GithubIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.399s2.046.133 3.003.399c2.293-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PlayIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#D2B4FF" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ArrowUpRightIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const BehanceIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="currentColor" aria-hidden="true">
    <path d="M52.63 60.28s10.5-.78 10.5-13.09-8.59-18.32-19.47-18.32H7.86v68.8h35.8s21.85.69 21.85-20.31c0 0 .96-17.08-12.88-17.08zm-29-19.18h20s4.87 0 4.87 7.16-2.86 8.2-6.11 8.2H23.64zm19.1 44.34H23.64V67.06h20s7.25-.1 7.25 9.45c.02 7.95-5.28 8.85-8.15 8.93zM94.66 46.38c-26.46 0-26.43 26.43-26.43 26.43s-1.82 26.3 26.43 26.3c0 0 23.54 1.34 23.54-18.29h-12.1s.4 7.4-11 7.4c0 0-12.11.81-12.11-12h35.65s3.87-29.84-23.98-29.84zm10.76 20.68h-22.6s1.48-10.6 12.11-10.6 10.49 10.6 10.49 10.6zM79.86 32.93h28.38v8.47H79.86z" />
  </svg>
);

const SOCIALS: Readonly<Social[]> = Object.freeze([
  { href: "https://github.com/samra82",                            label: "GitHub profile",    icon: <GithubIcon   size={22} /> },
  { href: "https://www.linkedin.com/in/samrashafiq-webengineer/", label: "LinkedIn profile",  icon: <LinkedinIcon size={22} /> },
  { href: "https://www.behance.net/samrashafiq1",                  label: "Behance portfolio", icon: <BehanceIcon  size={22} /> },
]);

const HeroClient = () => {
  return (
    <section style={{
      position: "relative",
      width: "100%",
      overflow: "hidden",
      minHeight: "100svh",
      backgroundColor: "#080612",
    }} aria-label="Hero">

      {/* ── LIGHTING desktop ── */}
      <div aria-hidden="true" className="hero-light-desktop" style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        background:
          "radial-gradient(ellipse 90% 110% at 75% 55%, rgba(88,28,199,0.40) 0%, rgba(59,7,100,0.20) 50%, transparent 78%)," +
          "radial-gradient(ellipse 40% 65% at 68% 48%, rgba(124,58,237,0.45) 0%, rgba(109,40,217,0.20) 50%, transparent 72%)," +
          "radial-gradient(ellipse 28% 45% at 80% 42%, rgba(167,139,250,0.38) 0%, rgba(139,92,246,0.18) 45%, transparent 70%)," +
          "radial-gradient(ellipse 50% 30% at 70% 92%, rgba(88,28,199,0.28) 0%, transparent 65%)," +
          "radial-gradient(ellipse 55% 70% at 0% 50%,  rgba(59,7,100,0.18)  0%, transparent 60%)",
      }} />

      {/* ── LIGHTING mobile ── */}
      <div aria-hidden="true" className="hero-light-mobile" style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        background:
          "radial-gradient(ellipse 100% 70% at 50% 40%, rgba(109,40,217,0.50) 0%, rgba(76,29,149,0.28) 50%, transparent 80%)," +
          "radial-gradient(ellipse 75%  55% at 60% 35%, rgba(147,51,234,0.50) 0%, rgba(124,58,237,0.25) 45%, transparent 72%)," +
          "radial-gradient(ellipse 55%  40% at 72% 25%, rgba(192,132,252,0.55) 0%, rgba(168,85,247,0.30) 40%, transparent 72%)," +
          "radial-gradient(ellipse 80%  40% at 50% 95%, rgba(109,40,217,0.30) 0%, transparent 70%)," +
          "radial-gradient(ellipse 45%  55% at 0%  45%, rgba(76,29,149,0.18)  0%, transparent 65%)",
      }} />

      {/*
        ── PORTRAIT (desktop only) ──────────────────────────────────────────
        Strategy: position:absolute anchored to BOTTOM of the section.
        The section is min-height:100svh so "bottom:0" = bottom of viewport.
        Height is set to 100% of the section — the image object-fits from
        the bottom up, so feet are always grounded and head may be cropped
        at the very top (which is fine and matches the reference design).

        The key insight: we set height on the WRAPPER to 100%, not the img.
        The img itself is height:100% width:auto inside that wrapper.
        This way the image never overflows horizontally and always fills
        the full vertical space of the section.
      ──────────────────────────────────────────────────────────────────── */}
      <div aria-hidden="true" className="hero-portrait-wrap">
        {/* wrapper that occupies the right 50% of the section, full height */}
        <div style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          /* take up the right half — adjust % to taste */
          width: "52%",
          /* match the section height exactly */
          height: "100%",
          display: "flex",
          alignItems: "flex-end",   /* image bottom = section bottom */
          justifyContent: "center",
          overflow: "hidden",       /* clip any horizontal overflow */
        }}>
          <img
            src="/Hero.avif"
            alt=""
            fetchPriority="high"
            decoding="sync"
            loading="eager"
            style={{
              height: "94%",
              width: "auto",
              maxWidth: "none",     /* allow it to be wider than container */
              objectFit: "contain",
              objectPosition: "bottom center",
              filter: "contrast(1.04) brightness(0.96)",
              /* Fade: bottom transparent (blends with bg), top transparent */
              maskImage:
                "linear-gradient(to top, transparent 0%, black 6%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, black 6%, black 85%, transparent 100%)",
              display: "block",
            }}
          />
          {/* right edge softener — blends portrait into background */}
          <div style={{
            position: "absolute",
            top: 0, right: 0,
            width: "clamp(40px, 8%, 120px)",
            height: "100%",
            background: "linear-gradient(to left, #080612 0%, transparent 100%)",
            pointerEvents: "none",
          }} />
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{
        position: "relative",
        zIndex: 20,
        width: "100%",
        maxWidth: "80rem",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        alignItems: "center",
        minHeight: "100svh",
        padding: "clamp(90px,12vh,140px) clamp(20px,5vw,72px) clamp(40px,6vh,80px)",
      }}>
        <div style={{ width: "100%" }}>

          {/* Badge */}
          <div role="status" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            marginBottom: "1.5rem", padding: "0.375rem 0.75rem",
            borderRadius: "0.375rem",
            border: "1px solid rgba(210,180,255,0.20)",
            background: "rgba(31,20,61,0.85)",
            backdropFilter: "blur(8px)",
            color: "#D2B4FF", fontSize: "0.7rem", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
          }}>
            <span aria-hidden="true" style={{
              display: "inline-block", width: 6, height: 6,
              borderRadius: "50%", background: "#a855f7", flexShrink: 0,
              animation: "heroPulse 2s ease-in-out infinite",
            }} />
            Open For Freelance Works
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            <span>Web apps that</span>
            <span>look like <span style={{
              color: "#9E47FF",
              textShadow: "0 0 40px rgba(158,71,255,0.7), 0 0 80px rgba(158,71,255,0.35)",
            }}>design.</span></span>
            <span>Built like engineering.</span>
          </h1>

          {/* Body */}
          <p style={{
            margin: "0 0 2rem 0", color: "#C3BCDB",
            fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
            lineHeight: 1.7,
            /* limit width so it doesn't bleed under the portrait */
            maxWidth: "min(26rem, 45vw)",
          }}>
            I help{" "}
            <strong style={{ color: "#D2B4FF", fontWeight: 500 }}>startups and scaling brands</strong>{" "}
            build high-performance web applications focused on extreme speed,
            flawless interactions, and real business results.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.25rem", marginBottom: "2rem" }}>
            <a href="#contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center" }}>
              Let&apos;s talk{" "}
              <span style={{ marginLeft: 6, display: "inline-flex", alignItems: "center" }}>
                <ArrowUpRightIcon size={15} />
              </span>
            </a>
            <a href="#portfolio" className="hero-secondary-cta" style={{
              display: "inline-flex", alignItems: "center", gap: "0.625rem",
              color: "#c3bcdb", fontSize: "0.875rem", fontWeight: 500,
              textDecoration: "none", transition: "color 0.2s", whiteSpace: "nowrap",
            }}>
              <span className="hero-play-btn">
                <PlayIcon size={14} />
              </span>
              View Works
            </a>
          </div>

          {/* Socials */}
          <nav aria-label="Social media links" style={{ display: "flex", alignItems: "center", gap: "1rem", paddingTop: "0.25rem" }}>
            {SOCIALS.map(({ href, label, icon }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer noopener"
                aria-label={label} className="hero-social-link"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: "3rem", height: "3rem", borderRadius: "50%",
                  border: "1px solid rgba(210,180,255,0.18)",
                  color: "rgba(210,180,255,0.65)", background: "transparent",
                  textDecoration: "none", flexShrink: 0,
                  transition: "color 0.2s, border-color 0.2s, background 0.2s",
                }}>
                {icon}
              </a>
            ))}
          </nav>

        </div>
      </div>

      {/* Bottom fog — full width, above portrait, below content */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        zIndex: 15, pointerEvents: "none",
        height: "clamp(60px, 12vh, 140px)",
        background: "linear-gradient(to top, #080612 0%, rgba(8,6,18,0.5) 55%, transparent 100%)",
      }} />

      <style>{`
        /* Lighting layers */
        .hero-light-desktop { display: none !important; }
        .hero-light-mobile  { display: block !important; }
        @media (min-width: 1024px) {
          .hero-light-desktop { display: block !important; }
          .hero-light-mobile  { display: none  !important; }
        }

        /* Portrait wrapper — hidden on mobile, shown on desktop */
        .hero-portrait-wrap {
          display: none;
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 10;
        }
        @media (min-width: 1024px) {
          .hero-portrait-wrap { display: block; }
        }

        /*
          HEADLINE font-size ladder.
          On mobile the copy is full-width → sizes can be bigger.
          On desktop the copy sits in the LEFT ~45% of the viewport
          because the portrait occupies the right 52%.
          "Built like engineering." is the longest line — at 1024px
          45% ≈ 461px. Inter Black at 40px renders that in ~460px. ✓
        */
        .hero-headline {
          display: flex;
          flex-direction: column;
          gap: 0.04em;
          margin: 0 0 clamp(1.5rem, 3vw, 2.5rem) 0;
          padding: 0;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-weight: 900;
          font-variation-settings: 'wght' 900;
          color: rgba(255,255,255,0.92);
          text-transform: uppercase;
          letter-spacing: -0.03em;
          line-height: 0.93;
          font-size: 36px;
        }
        @media (min-width: 480px)  { .hero-headline { font-size: 46px; } }
        @media (min-width: 640px)  { .hero-headline { font-size: 54px; } }
        @media (min-width: 768px)  { .hero-headline { font-size: 60px; } }
        /* Desktop: portrait eats right 52%, copy has ~45% → need smaller sizes */
        @media (min-width: 1024px) { .hero-headline { font-size: 38px; } }
        @media (min-width: 1152px) { .hero-headline { font-size: 42px; } }
        @media (min-width: 1280px) { .hero-headline { font-size: 46px; } }
        @media (min-width: 1400px) { .hero-headline { font-size: 52px; } }
        @media (min-width: 1536px) { .hero-headline { font-size: 58px; } }

        /* CTA secondary */
        .hero-secondary-cta:hover { color: #ffffff !important; }
        .hero-play-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem; height: 3rem;
          border-radius: 50%;
          border: 1px solid rgba(210,180,255,0.35);
          background: rgba(31,20,61,0.7);
          flex-shrink: 0;
          transition: border-color 0.2s, background 0.2s;
        }
        .hero-secondary-cta:hover .hero-play-btn {
          border-color: rgba(210,180,255,0.7);
          background: rgba(55,30,90,0.85);
        }

        /* Social links */
        .hero-social-link:hover {
          color: #ffffff !important;
          border-color: rgba(210,180,255,0.55) !important;
          background: rgba(158,71,255,0.15) !important;
        }
        .hero-social-link:focus-visible { outline: 2px solid #9e47ff; outline-offset: 2px; }
        .hero-social-link svg { display: block; fill: currentColor; }

        /* Pulse dot */
        @keyframes heroPulse {
          0%, 100% { opacity: 1;   transform: scale(1);   }
          50%       { opacity: 0.4; transform: scale(0.8); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="heroPulse"] { animation: none !important; opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroClient;