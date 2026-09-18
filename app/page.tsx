"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGrid from "@/components/ProductGrid";
import HowToBuy from "@/components/HowToBuy";
import SizeGuide from "@/components/SizeGuide";
import BrandStory from "@/components/BrandStory";
import BrandManifesto from "@/components/BrandManifesto";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import TickerBar from "@/components/Tickerbar";

export default function Home() {
  const [visibleProducts, setVisibleProducts] = useState(products);

  return (
    <main>
      <Hero />
      <TickerBar />
      <section id="archivo" className="px-8 py-16">
        <p className="text-xs text-[#8A8378] uppercase mb-1">// Catálogo de piezas disponibles</p>
        <h2 className="text-2xl uppercase mb-8">Archive Releases — drop 01</h2>
        <CategoryTabs products={products} onFilter={setVisibleProducts} />
        <ProductGrid products={visibleProducts} />
      </section>
      <section id="tallas" className="px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <HowToBuy />
        <SizeGuide />
      </section>
      <section id="lookbook" className="px-8 py-16">
        <BrandStory />
      </section>
      <BrandManifesto />
      <Footer />
    </main>
  );
}