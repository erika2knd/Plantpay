"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="mt-4 h-16 rounded-full bg-black/70 backdrop-blur border border-white/10
                        flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/icons/monstera-logo.png"
              alt="MonsteraMood"
              className="h-32 w-32 md:h-32 md:w-32" 
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <li><Link href="#benefits" className="hover:text-white">Benefits</Link></li>
            <li><Link href="#care" className="hover:text-white">Care</Link></li>
            <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
          </ul>

          <a
  href="#buy"
  className="btn-effect px-8 py-2 text-sm font-medium hidden md:inline-flex items-center gap-2"
>
  <span className="btn-effect__fill" aria-hidden />
  <span className="btn-effect__label">Buy</span>
</a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full h-9 w-9
                       border border-white/20 text-white hover:bg-white/10 focus:outline-none
                       focus:ring-2 focus:ring-white/50"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className={`h-5 w-5 transition-transform ${open ? "rotate-90 opacity-0" : "opacity-100"}`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg
              className={`absolute h-5 w-5 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </nav>

        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300
                     ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur px-4 py-4">
            <ul className="flex flex-col gap-3 text-sm text-zinc-200">
              <li><Link onClick={() => setOpen(false)} href="#benefits" className="block py-2">Benefits</Link></li>
              <li><Link onClick={() => setOpen(false)} href="#care" className="block py-2">Care</Link></li>
              <li><Link onClick={() => setOpen(false)} href="#faq" className="block py-2">FAQ</Link></li>
            </ul>
            <Link
              href="#buy"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full
                         border border-white px-5 py-2 text-white font-semibold
                         transition-transform hover:scale-105"
            >
              Buy
            </Link>
          </div>
        </div>

        {open && (
          <button
            aria-hidden
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 md:hidden"
          />
        )}
      </div>
    </header>
  );
}
