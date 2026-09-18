const bgImages = [
  "/images/clubRoma-socialMedia1.jpeg",
  "/images/clubRoma-socialMedia2.jpeg",
  "/images/clubRoma-socialMedia3.jpeg",
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end p-8 relative overflow-hidden">
      {/* Capa 1: fondo estático, 3 fotos fijas lado a lado */}
      <div className="absolute inset-0 flex">
        {bgImages.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className="w-1/3 h-full object-cover"
          />
        ))}
      </div>

      {/* Capa 2: oscurecedor */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Capa 3: header — logo, nav, whatsapp */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center text-xs uppercase z-10">
        <span>
          Club Roma
        </span>
        <nav className="flex gap-4">
          <a href="#archivo">Archivo</a>
          <a href="#tallas">Tallas</a>
          <a href="#lookbook">Lookbook</a>
        </nav>
        <a href="https://wa.me/52XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
          WhatsApp ↗
        </a>
      </div>

      {/* Capa 3: bloque de fecha/temporada */}
      <div className="absolute top-20 right-8 text-right text-xs z-10">
        <p>[Drop 01 // 2026]</p>
        <p className="text-[#8A8378]">La Paz B.C.S.</p>
      </div>

      {/* Capa 3: contenido principal */}
      <div className="relative z-10">
        <p className="text-xs text-orange-400 uppercase">Cultura independiente</p>
        <p className="text-xs uppercase mb-4">Autonomous Streetwear Dept.</p>

        <span className="inline-flex items-center gap-2 border border-[#2A2A28] px-2 py-1 text-xs uppercase mb-4">
          <span className="w-2 h-2 border border-current" />
          No season, just substance
        </span>

        <h1 className="text-7xl font-bold leading-none">CLUB</h1>
        <p className="text-5xl italic mb-6">
          roma <span className="text-2xl not-italic">// 01</span>
        </p>
        <div className="flex justify-between items-end">
          <p className="text-sm text-[#8A8378] max-w-md">
            Prendas formuladas en el aislamiento desértico y el asfalto nocturno de La Paz.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="#archivo"
              className="border border-current px-4 py-2 text-xs uppercase text-center"
            >
              Explorar catálogo [5 piezas] ↓
            </a>
            <a href="#" className="text-xs uppercase text-center">
              Ver campaña
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}