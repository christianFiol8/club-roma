import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const whatsappLink = `https://wa.me/52XXXXXXXXXX?text=${encodeURIComponent(
    `Hola, me interesa: ${product.name} (${product.ref})`
  )}`;

  return (
    <div className="bg-[#0F0E0D] border border-[#2A2A28] rounded-md overflow-hidden flex flex-col text-[#EDEAE3]">
      <div className="flex justify-between items-center px-3 pt-3">
        <span className="text-xs px-2 py-1 border border-current rounded-sm">
          REF: {product.ref}
        </span>
        <span className="text-xs">${product.price} MXN</span>
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-square object-cover mt-3"
      />
    
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-mono uppercase text-sm tracking-wide">{product.name}</h3>
        <p className="text-xs text-[#8A8378] italic">{product.description}</p>

        <dl className="text-xs mt-2 space-y-1">
          <div className="flex justify-between">
            <dt className="text-[#8A8378]">Composición</dt>
            <dd>{product.composition}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[#8A8378]">Corte</dt>
            <dd>{product.fit}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[#8A8378]">Colorway</dt>
            <dd>{product.colorway}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[#8A8378]">Tallas</dt>
            <dd>{product.sizes.join(" / ")}</dd>
          </div>
        </dl>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-center border border-[#EDEAE3] py-2 text-xs uppercase tracking-wide hover:bg-[#EDEAE3] hover:text-[#0F0E0D] transition-colors"
        >
          Pedir vía WhatsApp
        </a>
      </div>
    </div>
  );
}