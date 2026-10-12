import { problems } from "@/data/common";

const Problem = () => {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#050505] px-4 py-24 text-white sm:px-6 sm:py-32"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 z-0 h-80 w-160 -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.22em] text-violet-400 uppercase">
            Why Craft exists
          </span>

          <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl">
            You&apos;re not short on ideas.
            <br className="hidden sm:block" />
            <span className="text-neutral-500">
              You&apos;re stuck setting things up.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
            New project, same commands. Same dependencies. Same configuration.
            Before the real work even begins.
          </p>
        </div>

        {/* Problem cards */}
        <div className="mt-12 grid overflow-hidden rounded-3xl border border-white/8 bg-[#0a0a0a] md:grid-cols-3">
          {problems.map((problem, index) => (
            <article
              key={problem.number}
              className={`group p-6 transition-colors duration-300 hover:bg-white/2.5 sm:p-7 ${
                index !== 0
                  ? "border-t border-white/8 md:border-t-0 md:border-l"
                  : ""
              }`}
            >
              <span className="font-mono text-xs text-violet-400">
                {problem.number}
              </span>

              <h3 className="mt-5 text-lg font-medium tracking-tight text-neutral-100">
                {problem.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-400">
                {problem.description}
              </p>

              <div className="mt-6 h-px w-10 bg-violet-500/50 transition-all duration-300 group-hover:w-16 group-hover:bg-violet-400" />
            </article>
          ))}
        </div>

        {/* Founder story */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-violet-400/10 bg-linear-to-br from-[#111019] via-[#0d0d12] to-[#090909] p-6 sm:p-10 md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-violet-600/8 blur-[100px]"
          />

          <div className="relative max-w-4xl">
            <span className="text-xs font-medium tracking-[0.18em] text-violet-400 uppercase">
              The story behind Craft
            </span>

            <h3 className="mt-5 text-xl leading-relaxed font-medium tracking-tight text-white sm:text-2xl">
              I built Craft because I was tired of setting up the same things
              over and over.
            </h3>

            <p className="mt-5 text-sm leading-7 text-neutral-400 sm:text-base">
              Every new project came with another round of scaffolding,
              dependencies, configuration files, and tooling. I wanted to spend
              more time building products and less time repeating the setup
              process.
            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
              So I started building Craft — a CLI that brings those repetitive
              steps into one workflow, letting me choose a stack and get a
              project ready for development.
            </p>

            <p className="mt-7 text-sm font-medium text-violet-300">
              Mohan, engineer & creator of Craft
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Problem };
