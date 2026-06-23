"use client";

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
  <span style={{ width: size, height: size, display: 'inline-flex', borderRadius: '50%', overflow: 'hidden' }}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ display: 'block' }}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  </span>
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
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M52.63 60.28s10.5-.78 10.5-13.09-8.59-18.32-19.47-18.32H7.86v68.8h35.8s21.85.69 21.85-20.31c0 0 .96-17.08-12.88-17.08zm-29-19.18h20s4.87 0 4.87 7.16-2.86 8.2-6.11 8.2H23.64zm19.1 44.34H23.64V67.06h20s7.25-.1 7.25 9.45c.02 7.95-5.28 8.85-8.15 8.93zM94.66 46.38c-26.46 0-26.43 26.43-26.43 26.43s-1.82 26.3 26.43 26.3c0 0 23.54 1.34 23.54-18.29h-12.1s.4 7.4-11 7.4c0 0-12.11.81-12.11-12h35.65s3.87-29.84-23.98-29.84zm10.76 20.68h-22.6s1.48-10.6 12.11-10.6 10.49 10.6 10.49 10.6zM79.86 32.93h28.38v8.47H79.86z" />
  </svg>
);

const SOCIALS: Readonly<Social[]> = Object.freeze([
  {
    href: "https://github.com/samra82",
    label: "GitHub profile",
    icon: <GithubIcon size={22} />,
  },
  {
    href: "https://www.linkedin.com/in/samrashafiq-webengineer/",
    label: "LinkedIn profile",
    icon: <LinkedinIcon size={22} />,
  },
  {
    href: "https://www.behance.net/samrashafiq1",
    label: "Behance portfolio",
    icon: <BehanceIcon size={22} aria-hidden="true" />,
  },
]);

const HeroClient = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh", backgroundColor: "#080612" }}
    >


      {/* ── LIGHTING LAYERS (desktop) — combined ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 hidden lg:block"
        style={{
          background:
            "radial-gradient(ellipse 90% 110% at 75% 55%, rgba(88,28,199,0.40) 0%, rgba(59,7,100,0.20) 50%, transparent 78%)," +
            "radial-gradient(ellipse 40% 65% at 68% 48%, rgba(124,58,237,0.45) 0%, rgba(109,40,217,0.20) 50%, transparent 72%)," +
            "radial-gradient(ellipse 28% 45% at 80% 42%, rgba(167,139,250,0.38) 0%, rgba(139,92,246,0.18) 45%, transparent 70%)," +
            "radial-gradient(ellipse 50% 30% at 70% 92%, rgba(88,28,199,0.28) 0%, transparent 65%)," +
            "radial-gradient(ellipse 55% 70% at 0% 50%, rgba(59,7,100,0.18) 0%, transparent 60%)",
        }}
      />

      {/* ── LIGHTING LAYERS (mobile) — combined ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 lg:hidden"
        style={{
          background:
            "radial-gradient(ellipse 100% 70% at 50% 40%, rgba(109,40,217,0.50) 0%, rgba(76,29,149,0.28) 50%, transparent 80%)," +
            "radial-gradient(ellipse 75% 55% at 60% 35%, rgba(147,51,234,0.50) 0%, rgba(124,58,237,0.25) 45%, transparent 72%)," +
            "radial-gradient(ellipse 55% 40% at 72% 25%, rgba(192,132,252,0.55) 0%, rgba(168,85,247,0.30) 40%, transparent 72%)," +
            "radial-gradient(ellipse 80% 40% at 50% 95%, rgba(109,40,217,0.30) 0%, transparent 70%)," +
            "radial-gradient(ellipse 45% 55% at 0% 45%, rgba(76,29,149,0.18) 0%, transparent 65%)",
        }}
      />

      {/* ── PORTRAIT — desktop only ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none z-10 hidden lg:block"
        style={{ overflow: "hidden" }}
      >
        <div className="absolute bottom-0 right-0 h-full flex items-end justify-end">
          <img
            src="/Hero.avif"
            alt=""
            fetchPriority="high"
            decoding="sync"
            loading="eager"
            style={{
              height: "clamp(60vh, 85vh, 96vh)",
              width: "auto",
              objectFit: "contain",
              objectPosition: "bottom",
              filter: "contrast(1.04) brightness(0.96)",
              maskImage:
                "linear-gradient(to top, transparent 0%, black 10%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, black 10%, black 88%, transparent 100%)",
            }}
          />
        </div>

        {/* Bottom fog */}
        <div
          className="absolute bottom-0 inset-x-0 z-20"
          style={{
            height: "clamp(80px, 14vh, 180px)",
            background:
              "linear-gradient(to top, #080612 0%, rgba(8,6,18,0.6) 55%, transparent 100%)",
          }}
        />

        {/* Right edge softener */}
        <div
          className="absolute top-0 right-0 h-full z-20"
          style={{
            width: "clamp(30px, 6vw, 100px)",
            background: "linear-gradient(to left, #080612 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ── CONTENT — untouched ── */}
      <div
        className="relative z-20 w-full max-w-7xl mx-auto flex items-center"
        style={{
          minHeight: "100svh",
          padding:
            "clamp(90px, 12vh, 140px) clamp(20px, 5vw, 72px) clamp(40px, 6vh, 80px)",
        }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT COPY — completely untouched */}
          <div className="lg:col-span-5 flex flex-col items-start">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-md border text-xs font-bold tracking-widest uppercase"
              style={{
                background: "rgba(31,20,61,0.85)",
                backdropFilter: "blur(8px)",
                borderColor: "rgba(210,180,255,0.20)",
                color: "#D2B4FF",
              }}
            >
              <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#a855f7] shrink-0 animate-heroPulse" aria-hidden="true" />
              Open For Freelance Works
            </div>

            {/* Headline */}
            <h1
              className="font-black text-white uppercase flex flex-col mb-6"
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                gap: "0.05em",
              }}
            >
              <span>Design Web</span>
              <span
                style={{
                  color: "#9E47FF",
                  textShadow:
                    "0 0 50px rgba(158,71,255,0.65), 0 0 100px rgba(158,71,255,0.30)",
                }}
              >
                Products
              </span>
              <span>Users Trust.</span>
            </h1>

            {/* Body copy */}
            <p
              className="mb-8 leading-relaxed"
              style={{
                color: "#C3BCDB",
                fontSize: "clamp(0.875rem, 1.4vw, 1rem)",
                maxWidth: "26rem",
              }}
            >
              I help{" "}
              <span style={{ color: "#D2B4FF", fontWeight: 500 }}>
                startups and scaling brands
              </span>{" "}
              build high-performance web applications focused on extreme speed,
              flawless interactions, and real business results.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 mb-8">
              <a href="#contact" className="btn-primary">
                Let&apos;s talk{" "}
                <span style={{ marginLeft: 6 }}><ArrowUpRightIcon size={15} /></span>
              </a>
              <a href="#portfolio" className="group inline-flex items-center gap-2.5 text-[#c3bcdb] text-sm font-medium no-underline transition-colors duration-200 whitespace-nowrap hover:text-white">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[rgba(210,180,255,0.35)] bg-[rgba(31,20,61,0.7)] shrink-0 transition-all duration-200 group-hover:border-[rgba(210,180,255,0.7)] group-hover:bg-[rgba(55,30,90,0.85)]" aria-hidden="true">
                  <PlayIcon size={14} />
                </span>
                View Works
              </a>
            </div>

            {/* Socials */}
            <nav
              aria-label="Social media links"
              className="flex justify-around items-center gap-4 pt-1 [&_svg]:block [&_svg]:fill-current [&_svg[stroke]]:fill-none [&_svg[stroke]]:stroke-current"
            >
              {SOCIALS.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[rgba(210,180,255,0.18)] text-[rgba(210,180,255,0.65)] bg-transparent no-underline transition-all duration-200 shrink-0 mr-3 last:mr-0 hover:text-white hover:border-[rgba(210,180,255,0.55)] hover:bg-[rgba(158,71,255,0.15)] focus-visible:outline-2 focus-visible:outline-[#9e47ff] focus-visible:outline-offset-2"
                >
                  {icon}
                </a>
              ))}
            </nav>
          </div>

          {/* Spacer — portrait shows through on desktop */}
          <div className="hidden lg:block lg:col-span-7" aria-hidden="true" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.8); }
        }
        .animate-heroPulse {
          animation: heroPulse 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-heroPulse {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroClient;