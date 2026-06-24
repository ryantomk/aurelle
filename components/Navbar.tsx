"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  brandName?: string;
  links?: NavLink[];
  cartCount?: number;
}

const defaultLinks: NavLink[] = [
  { label: "Shop", href: "#collection" },
  { label: "Lookbook", href: "#" },
  { label: "About", href: "#" },
];

export default function Navbar({
  brandName = "AURELLE",
  links = defaultLinks,
  cartCount = 0,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bone/95 backdrop-blur-md border-b border-stone/40"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="/"
          className="font-display text-xl tracking-[0.18em] text-ink"
        >
          {brandName}
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-[0.08em] text-ink/80 transition-colors hover:text-oxblood"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <button
            aria-label="Account"
            className="hidden text-sm uppercase tracking-[0.08em] text-ink/80 transition-colors hover:text-oxblood md:inline"
          >
            Account
          </button>
          <button aria-label="Cart" className="relative">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-ink"
            >
              <path d="M6 8h12l-1 12H7L6 8Z" />
              <path d="M9 8a3 3 0 0 1 6 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-oxblood text-[10px] text-bone">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
