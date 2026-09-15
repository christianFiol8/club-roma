"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import HowToBuy from "@/components/HowToBuy";
import SizeGuide from "@/components/SizeGuide";
import BrandStory from  "@/components/BrandStory";
export default function Home() {
  const [visibleProducts, setVisibleProducts] = useState(products);

  return (
    <main>
      <Hero />
      <section id="archivo" className="px-8 py-16">
        <p className="text-xs text-[#8A8378] uppercase mb-1">// Catálogo de piezas disponibles</p>
        <h2 className="text-2xl uppercase mb-8">Archive Releases — drop 01</h2>
        <CategoryTabs products={products} onFilter={setVisibleProducts} />
        <ProductGrid products={visibleProducts} />
      </section>
      <HowToBuy />
      <SizeGuide />
      <BrandStory />
    </main>
  );
}