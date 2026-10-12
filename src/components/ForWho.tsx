import { goodFit, notFor } from "@/data/common";

const ForWho = () => {
  return (
    <section
      id="for-you"
      className="relative overflow-hidden bg-[#050505] px-4 py-24 text-white sm:px-6 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-violet-600/6 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="max-w-xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">
            Is Craft for you?
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            The right tool for the right workflow.
          </h2>

          <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
            Craft is built for developers who repeat the same setup process.
            Here's where it helps—and where it doesn't.
          </p>
        </div>

        {/* Fit comparison */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Good fit */}
          <div className="rounded-3xl border border-emerald-400/20 bg-linear-to-br from-emerald-400/6 to-[#0a0a0a] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path
                    d="m5 12 4 4L19 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <h3 className="text-base font-semibold text-emerald-300">
                Craft is for you if...
              </h3>
            </div>

            <ul className="mt-7 space-y-6">
              {goodFit.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400" />

                  <div>
                    <h4 className="text-sm font-medium text-neutral-100">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 text-sm leading-6 text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Not a fit */}
          <div className="rounded-3xl border border-rose-400/20 bg-linear-to-br from-rose-400/4 to-[#0a0a0a] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-rose-400/10 text-rose-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path
                    d="m18 6-12 12M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <h3 className="text-base font-semibold text-rose-300">
                Craft may not be for you if...
              </h3>
            </div>

            <ul className="mt-7 space-y-6">
              {notFor.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-rose-400" />

                  <div>
                    <h4 className="text-sm font-medium text-neutral-100">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 text-sm leading-6 text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ForWho };
