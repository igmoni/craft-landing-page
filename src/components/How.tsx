import { steps } from "@/data/common";

const How = () => {
  return (
    <section
      id="how"
      className="relative overflow-hidden bg-[#050505] px-4 py-24 text-white sm:px-6 sm:py-32"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 left-1/2 h-72 w-160 -translate-x-1/2 rounded-full bg-violet-600/6 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">
            How it works
          </span>

          <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Three steps.
            <span className="block text-neutral-500">
              Then you're building.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
            From choosing your stack to generating your project, Craft brings
            the repetitive setup steps into one workflow.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex flex-col rounded-2xl border border-white/8 bg-[#0a0a0a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-[#0d0c11] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-violet-400">
                  {step.number}
                </span>

                <span className="text-lg text-neutral-700 transition-colors group-hover:text-violet-400">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-xl font-medium tracking-tight text-neutral-100">
                {step.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-neutral-400">
                {step.description}
              </p>

              <div className="mt-7 border-t border-white/8 pt-4">
                <p className="text-xs text-neutral-500">{step.detail}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Command panel */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/8 bg-[#090909]">
          <div className="flex items-center gap-2 border-b border-white/[0.07] px-5 py-3">
            <span className="size-2 rounded-full bg-red-400/70" />
            <span className="size-2 rounded-full bg-yellow-400/70" />
            <span className="size-2 rounded-full bg-emerald-400/70" />
            <span className="ml-2 text-xs text-neutral-500">Terminal</span>
          </div>

          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
            <div>
              <p className="text-sm font-medium text-neutral-200">
                Ready to skip the repetitive setup?
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Install Craft and create your next project.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <code className="rounded-lg border border-white/8 bg-white/3 px-4 py-3 text-sm text-violet-300">
                craft init my-app
              </code>

              <a
                href="https://www.npmjs.com/package/@igmoni/craft"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Get Craft <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { How };
