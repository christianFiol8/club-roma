import { Product } from "@/data/products";
import FeaturedProductCard from "./FeaturedProductCard";
import CompactProductCard from "./CompactProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  const [first, ...rest] = products;
  const middleThree = rest.slice(0, 3);
  const last = rest[3];

  return (
    <div className="flex flex-col gap-4">
      {first && (
        <FeaturedProductCard
          product={first}
          photo="/images/clubRoma-socialMedia3.jpeg"
          photoCaption="DROP 01 VISTO EN CALLE"
          photoDescription="Silueta relajada en modelo 1.74m utilizando talla L. Estructura rígida de cuello de 3cm acanalado."
          ctaLabel="Consultar talla & ordenar"
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {middleThree.map((p) => (
          <CompactProductCard key={p.id} product={p} />
        ))}
      </div>

      {last && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CompactProductCard product={last} />
          <div className="border border-[#2A2A28] p-4 text-[#EDEAE3]">
            <img
              src="/images/clubRoma-socialMedia4.jpeg"
              alt="Prenda en calle"
              className="w-full aspect-[4/3] object-cover mb-3"
            />
            <p className="text-xs uppercase font-bold mb-1">Prenda en calle</p>
            <p className="text-xs text-[#8A8378]">La Paz nocturno — mockup vs real fit</p>
          </div>
        </div>
      )}
    </div>
  );
}