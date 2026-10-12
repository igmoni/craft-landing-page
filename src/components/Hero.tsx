"use client";

import { framworks } from "@/config/common";

import { Badge } from "./common/Badge";
import { Container } from "./common/Container";
import { Navbar } from "./common/Navbar";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen w-full overflow-hidden bg-[#050505] bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/55" />

      {/* Bottom fade */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/20 via-black/10 to-[#050505]" />

      <Container className="relative z-10">
        <Navbar />

        <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-5xl flex-col items-center justify-center pt-16 pb-24 text-center">
          <Badge className="mb-7 border border-white/10 bg-white/6 px-4 py-2 text-xs font-medium tracking-wide text-neutral-300 backdrop-blur-md">
            BUILT FOR DEVELOPERS · OPEN SOURCE
          </Badge>

          <h1 className="max-w-4xl text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Stop setting up.
            <span className="mt-2 block bg-linear-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
              Start building.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-neutral-400">
            Your next project shouldn't start with the same setup routine. Craft
            scaffolds your web projects and configures the tools you choose, so
            you can spend less time on boilerplate and more time building.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-900/80 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <span className="text-neutral-500 select-none">$</span>
              <code className="text-sm text-neutral-200 sm:text-base">
                npm install -g @igmoni/craft
              </code>
              <button
                type="button"
                aria-label="Copy install command"
                onClick={() =>
                  navigator.clipboard.writeText("npm install -g @igmoni/craft")
                }
                className="ml-2 rounded-md p-1.5 text-neutral-500 transition hover:bg-white/10 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="8" y="8" width="13" height="13" rx="2" />
                  <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
                </svg>
              </button>
            </div>

            <a
              href="https://github.com/igmoni/craft"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white px-5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Explore on GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-14 flex flex-col items-center gap-4">
            <p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase">
              Your stack. Your choice.
            </p>

            <ul className="flex flex-wrap items-center justify-center gap-2">
              {framworks.map((item) => (
                <li key={item}>
                  <Badge className="border border-white/8 bg-white/4 px-4 py-2 text-sm text-neutral-300 backdrop-blur-sm">
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Hero };
