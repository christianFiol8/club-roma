"use client";

import { useState } from "react";
import { Product } from "@/data/products";

type Category = Product["category"] | "Todas";

export default function CategoryTabs({
  products,
  onFilter,
}: {
  products: Product[];
  onFilter: (filtered: Product[]) => void;
}) {
  const [active, setActive] = useState<Category>("Todas");

  const categories: Category[] = ["Todas", "Playeras", "Hoodies", "Nueva colección"];

  const handleClick = (cat: Category) => {
    setActive(cat);
    const filtered = cat === "Todas" ? products : products.filter((p) => p.category === cat);
    onFilter(filtered);
  };

  return (
    <div className="flex gap-4 text-xs uppercase border-b border-[#2A2A28] pb-3 mb-6">
      {categories.map((cat) => {
        const count = cat === "Todas" ? products.length : products.filter((p) => p.category === cat).length;
        return (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={active === cat ? "text-[#EDEAE3] border-b border-current pb-1" : "text-[#8A8378]"}
          >
            {cat} ({count})
          </button>
        );
      })}
    </div>
  );
}