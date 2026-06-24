"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface HeroProps {
  eyebrow?: string;
  headline?: string;
  subhead?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  eyebrow = "AURELLE — COLLECTION 2026",
  headline = "Stillness, Tailored.",
  subhead = "Considered pieces for a wardrobe that doesn't shout. Cut in small batches, made to outlast the season.",
  ctaLabel = "Shop the Collection",
  ctaHref = "#collection",
  imageSrc = "/hero.jpg",
  imageAlt = "AURELLE Collection 2026 lookbook image",
}: HeroProps) {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-bone pt-24 md:flex-row md:pt-0">
      {/* Signature vertical spine — desktop only */}
      <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 md:block">
        <span
          className="block whitespace-nowrap text-xs uppercase tracking-[0.35em] text-ink/50"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {eyebrow}
        </span>
      </div>

      {/* Text block */}
      <div className="z-10 flex flex-1 flex-col justify-center px-6 pb-12 pt-8 md:max-w-xl md:px-16 md:pb-0">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl leading-[1.05] text-ink md:text-7xl"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md text-base leading-relaxed text-graphite md:text-lg"
        >
          {subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9"
        >
          <a
            href={ctaHref}
            className="inline-flex items-center gap-3 bg-oxblood px-8 py-4 text-sm uppercase tracking-[0.1em] text-bone transition-transform hover:-translate-y-0.5"
          >
            {ctaLabel}
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>

      {/* Image block — dominant, asymmetric */}
      <div className="relative h-[55vh] flex-1 md:h-screen">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
      </div>
    </section>
  );
}
