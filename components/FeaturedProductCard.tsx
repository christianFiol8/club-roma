import { Product } from "@/data/products";

export default function FeaturedProductCard({
  product,
  photo,
  photoCaption,
  photoDescription,
  ctaLabel,
}: {
  product: Product;
  photo: string;
  photoCaption: string;
  photoDescription: string;
  ctaLabel: string;
}) {
  const whatsappLink = `https://wa.me/52XXXXXXXXXX?text=${encodeURIComponent(
    `Hola, me interesa: ${product.name} (${product.ref})`
  )}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 border border-[#2A2A28] p-6 text-[#EDEAE3]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 items-center">
            <span className="text-xs text-[#8A8378]">REF. {product.ref}</span>
            <span className="text-xs border border-current px-2 py-1">
              {product.availability === "Disponibilidad inmediata" ? "FLAGSHIP GRAPHIC" : product.availability}
            </span>
          </div>
          <span className="text-sm">${product.price} MXN</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative bg-[#EFE9DD]">
            <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
            <span className="absolute bottom-2 left-2 text-xs bg-[#0F0E0D] text-[#EDEAE3] px-2 py-1">
              Front & back print
            </span>
          </div>

          <div>
            <h3 className="text-xl uppercase mb-2">{product.name}</h3>
            <p className="text-sm italic text-[#8A8378] mb-4">{product.description}</p>

            <dl className="text-xs space-y-2 mb-6">
              <div className="flex justify-between border-t border-[#2A2A28] pt-2">
                <dt className="text-[#8A8378]">Composición</dt>
                <dd>{product.composition}</dd>
              </div>
              <div className="flex justify-between border-t border-[#2A2A28] pt-2">
                <dt className="text-[#8A8378]">Corte / Silueta</dt>
                <dd>{product.fit}</dd>
              </div>
              <div className="flex justify-between border-t border-[#2A2A28] pt-2">
                <dt className="text-[#8A8378]">Colorway</dt>
                <dd>{product.colorway}</dd>
              </div>
              <div className="flex justify-between border-t border-[#2A2A28] pt-2">
                <dt className="text-[#8A8378]">Estado run</dt>
                <dd className="text-green-400">{product.availability}</dd>
              </div>
            </dl>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center border border-[#EDEAE3] px-4 py-2 text-xs uppercase"
            >
              {ctaLabel} <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border border-[#2A2A28] p-4 text-[#EDEAE3]">
        <div className="flex justify-between text-xs text-[#8A8378] mb-3">
          <span>{photoCaption}</span>
        </div>
        <img src={photo} alt={photoCaption} className="w-full aspect-[3/4] object-cover mb-3" />
        <p className="text-xs uppercase font-bold mb-1">{photoCaption}</p>
        <p className="text-xs text-[#8A8378]">{photoDescription}</p>
      </div>
    </div>
  );
}