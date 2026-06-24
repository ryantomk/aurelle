"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Product, featuredProducts } from "@/data/products";

export interface FeaturedCollectionProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
  currencySymbol?: string;
}

const trustPoints = [
  "Free shipping over ₹4,999",
  "7-day easy exchange",
  "Authenticity guaranteed",
];

function ProductCard({ product, currencySymbol = "₹" }: { product: Product; currencySymbol?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone/20">
        <span className="absolute left-3 top-3 z-10 text-xs uppercase tracking-[0.15em] text-bone/90">
          Look {product.look}
        </span>
        <Image
          src={hovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <button
          className={`absolute inset-x-3 bottom-3 bg-bone py-3 text-xs uppercase tracking-[0.1em] text-ink transition-all duration-300 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          Quick Add
        </button>
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-sm text-ink">{product.name}</h3>
        <span className="text-sm text-graphite">
          {currencySymbol}
          {product.price.toLocaleString("en-IN")}
        </span>
      </div>
    </motion.article>
  );
}

export default function FeaturedCollection({
  title = "The Edit",
  subtitle = "Four looks from the current collection, chosen for versatility.",
  products = featuredProducts,
  currencySymbol = "₹",
}: FeaturedCollectionProps) {
  return (
    <section id="collection" className="bg-bone px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl text-ink md:text-5xl">{title}</h2>
            <p className="mt-3 max-w-md text-graphite">{subtitle}</p>
          </div>
          <a
            href="#"
            className="text-sm uppercase tracking-[0.08em] text-ink/80 underline-offset-4 hover:text-oxblood hover:underline"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} currencySymbol={currencySymbol} />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 border-t border-stone/40 pt-8 text-center sm:grid-cols-3">
          {trustPoints.map((point) => (
            <p key={point} className="text-xs uppercase tracking-[0.1em] text-graphite">
              {point}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
