'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Hero component with no SSR to prevent hydration errors
const HeroClient = dynamic(() => import('./HeroClient'), {
  ssr: false,
  loading: () => (
    <section className="mt-8 sm:mt-16 min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
      <div className="max-w-4xl text-center relative z-10 w-full">
        <p className="text-xs sm:text-sm md:text-base tracking-widest text-purple-400 mb-3 sm:mb-4 font-medium uppercase opacity-100">
          Web Engineer
        </p>
        <h1 className="font-extrabold text-white mb-4 sm:mb-6 relative inline-block drop-shadow-[0_0_10px_rgba(139,75,236,0.5)] opacity-100">
          <span className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-100">
            Samra Shafiq
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 opacity-100">
          I help{' '}
          <span className="font-semibold text-[#FDBE79] ">
            startups and businesses
          </span>{' '}
          build fast, scalable web products focused on clarity, performance, and
          growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 mt-4 sm:mt-0 opacity-100">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-purple-400/30 bg-indigo-900/40 text-white hover:bg-purple-900/40 hover:border-purple-400/60 focus:ring-purple-400/40 text-sm sm:text-base"
          >
            Hire Me
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-orange-200/40 bg-transparent text-orange-200 hover:bg-orange-200/10 hover:border-orange-200/70 focus:ring-orange-200/40 text-sm sm:text-base"
          >
            View Work
          </a>
        </div>
        <div className="flex items-center justify-center gap-5 sm:gap-6 text-purple-400 opacity-100">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-purple-400/30"
          >
            <svg className="sm:w-5 sm:h-5 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-purple-400/30"
          >
            <svg className="sm:w-5 sm:h-5 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="https://behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-purple-400/30"
          >
            <svg className="sm:w-5 sm:h-5 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.26 22.994h-.005c-.802 0-1.454-.651-1.454-1.453v-5.805H2.094c-.802 0-1.453-.651-1.453-1.454V9.74c0-.802.651-1.453 1.453-1.453h4.707V2.48c0-.802.651-1.453 1.453-1.453h5.385c.802 0 1.453.651 1.453 1.453v5.807h3.496c.802 0 1.453.651 1.453 1.453v4.542c0 .802-.651 1.454-1.453 1.454h-3.496v5.805c0 .802-.651 1.454-1.453 1.454h-5.385zM22.51 9.74h-1.454V4.69c0-.565-.458-1.023-1.023-1.023H3.967c-.565 0-1.023.458-1.023 1.023v5.051c0 .564.458 1.022 1.023 1.022h16.066c.565 0 1.023-.458 1.023-1.022v-.001c0-.564-.458-1.022-1.023-1.022h-1.454V9.74z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  ),
});

export default HeroClient;
