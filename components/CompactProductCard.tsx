import { Product } from "@/data/products";

export default function CompactProductCard({ product }: { product: Product }) {
  const whatsappLink = `https://wa.me/52XXXXXXXXXX?text=${encodeURIComponent(
    `Hola, me interesa: ${product.name} (${product.ref})`
  )}`;

  const bullets = [product.composition, product.fit, `Tallas: ${product.sizes.join(" / ")}`];

  return (
    <div className="border border-[#2A2A28] p-4 text-[#EDEAE3] flex flex-col">
      <div className="flex justify-between text-xs mb-3">
        <span className="text-[#8A8378]">REF. {product.ref}</span>
        <span>${product.price} MXN</span>
      </div>

      <div className="bg-[#EFE9DD] mb-3">
        <img src={product.image} alt={product.name} className="w-full aspect-square object-contain" />
      </div>

      <h4 className="text-sm uppercase mb-1">{product.name}</h4>
      <p className="text-xs italic text-[#8A8378] mb-3">{product.description}</p>

      <ul className="text-xs text-[#8A8378] space-y-1 mb-4 flex-1">
        {bullets.map((b) => (
          <li key={b}>· {b}</li>
        ))}
      </ul>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center border border-[#EDEAE3] py-2 text-xs uppercase"
      >
        Pedir vía WhatsApp
      </a>
    </div>
  );
}