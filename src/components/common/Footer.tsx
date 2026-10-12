"use client";

import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/config/common";

const Footer = () => {
  return (
    <footer className="relative h-[95vh] overflow-hidden bg-[#050505] px-4 pt-20 pb-8 text-white sm:px-6 sm:pt-28">
      {/* Oversized background wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 text-[26vw] leading-none font-black whitespace-nowrap text-white/[0.035] select-none sm:top-8"
      >
        CRAFT
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-1/2 h-80 w-2xl -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[120px]"
      />

      <div className="relative top-24 mx-auto max-w-6xl">
        {/* Main footer panel */}
        <div className="rounded-4xl border border-white/9 bg-[#0b0b0d]/95 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10 md:p-14">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:gap-16">
            {/* Brand and CTA */}
            <div className="max-w-2xl">
              <Link href="#hero" className="inline-flex items-center gap-3">
                <Image
                  width={50}
                  height={50}
                  alt="Craft Logo"
                  src={"/logo.png"}
                   className="rounded-xl"
                />

                <span className="text-2xl font-semibold tracking-tight">
                  craft<span className="text-violet-400">.</span>
                </span>
              </Link>

              <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
                Your stack. Your workflow. Less repetitive setup. Build your
                next project with Craft.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.npmjs.com/package/@igmoni/craft"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-500"
                >
                  Get Craft
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="https://github.com/igmoni/craft"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 px-6 text-sm font-medium text-neutral-200 transition hover:border-white/20 hover:bg-white/5"
                >
                  Star on GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 text-sm text-neutral-500">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Open source · MIT License
              </div>
            </div>

            {/* Footer navigation */}
            <div className="min-w-40">
              <p className="text-xs font-semibold tracking-[0.18em] text-neutral-500 uppercase">
                Explore
              </p>

              <nav aria-label="Footer navigation" className="mt-5">
                <ul className="space-y-4">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-300 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}

                  <li>
                    <a
                      href="https://github.com/igmoni/craft/issues"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-neutral-300 transition hover:text-white"
                    >
                      Report an issue ↗
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} Craft. All rights reserved.{" "}
            </p>

            <p className="text-xs text-neutral-500">
              {" "}
              Built by{" "}
              <Link
                href={"https://monxdev.vercel.app/"}
                className="text-indigo-500 underline-offset-2 hover:underline"
              >
                Mohan
              </Link>
              , for developers.
            </p>
            <a
              href="https://github.com/igmoni/craft/blob/main/LICENSE"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-neutral-500 transition hover:text-neutral-300"
            >
              Released under the MIT License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
