export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen  overflow-hidden">
      {/* Tilted solar-panel field */}

      <div
        className="absolute inset-0 panels opacity-55"
        style={{
          transform: "perspective(700px) rotateX(38deg) scale(1.8)",
          transformOrigin: "bottom",
        }}
      />
      {/* Sun */}
      {/* <div
        className="sun absolute rounded-full"
        style={{
          width: "70vmin",
          height: "70vmin",
          top: "8%",
          right: "-10vmin",
        }}
      /> */}
      <div className="hero-image absolute inset-0" />
      <div className="hero-shade absolute inset-0" />
      {/* Fade into page */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-bg from-[8%] to-transparent to-60%" /> */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-60 min-h-screen fade-in">
        <p className="flex items-center gap-3 text-xs tracking-[.3em] uppercase mb-6 text-lime font-serif italic">
          <span className="h-px w-10 bg-lime" />
          Solar Engineer · Nigeria
        </p>
        <h1 className="max-w-3xl text-white text-xl font-light font-serif leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-8xl">
          A Brighter way to
          <br />
          power the <span className="font-serif">world.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-gray-300">
          Clean energy systems designed around people, place, and the way we use
          power.
        </p>
        <a
          href="#projects"
          className="inline-block mt-10 px-6 py-3 text-sm font-semibold bg-white text-black hover:bg-gray-400 transition"
        >
          Explore my work →
        </a>
        <div className="mt-14 flex items-center justify-between border-t border-white/25 pt-5 text-xs uppercase tracking-[0.18em] text-white/65 md:mt-20 pb-10">
          <span>Thoughtful design. Measurable impact.</span>
          <span className="hidden sm:inline">
            Based in Awka, Nigeria · Working everywhere
          </span>
        </div>
      </div>
    </section>
  );
}
