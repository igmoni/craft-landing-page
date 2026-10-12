"use client";

import { useState } from "react";

import { faqs } from "@/data/common";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#050505] px-4 py-24 text-white sm:px-6 sm:py-32"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-72 w-xl -translate-x-1/2 rounded-full bg-violet-600/6 blur-[120px]"
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase">
            FAQ
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions before you install.
          </h2>

          <p className="mt-3 text-sm text-neutral-400 sm:text-base">
            Straight answers. No fluff.
          </p>
        </div>

        {/* Accordion */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className={index !== 0 ? "border-t border-white/8" : ""}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-6 ${
                    isOpen ? "bg-white/2.5" : "hover:bg-white/2"
                  }`}
                >
                  <span
                    className={`text-sm font-medium sm:text-base ${
                      isOpen ? "text-white" : "text-neutral-300"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className={`size-4 shrink-0 text-neutral-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-violet-400" : ""
                    }`}
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div id={answerId} className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="max-w-2xl text-sm leading-7 text-neutral-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500">
            Still curious? Explore the source or try Craft yourself.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/igmoni/craft"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-neutral-200 transition hover:border-white/20 hover:bg-white/5"
            >
              View on GitHub ↗
            </a>

            <a
              href="https://www.npmjs.com/package/@igmoni/craft"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Get Craft ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FAQ };
