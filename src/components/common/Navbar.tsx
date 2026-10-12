import Link from "next/link";

import { navItems } from "@/config/common";

const Navbar = () => {
  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-3 pt-4 sm:px-0">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full items-center justify-between rounded-full border border-white/10 bg-black/65 p-2 pl-5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl"
      >
        <Link
          href="#hero"
          className="shrink-0 text-xl font-bold tracking-tight"
        >
          craft<span className="text-neutral-500">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.value}
                className="block rounded-full px-4 py-2 text-sm text-neutral-400 transition hover:bg-white/[0.07] hover:text-white"
              >
                {item.item}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#how"
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
        >
          How it works
          <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
};

export { Navbar };