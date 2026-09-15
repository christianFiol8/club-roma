export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end p-8 relative">
      <div className="absolute top-8 left-8 right-8 flex justify-between text-xs uppercase">
        <span>Club Roma</span>
        <nav className="flex gap-4">
          <a href="#archivo">Archivo</a>
          <a href="#tallas">Tallas</a>
          <a href="#lookbook">Lookbook</a>
        </nav>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs text-orange-400 uppercase">Cultura independiente</p>
          <p className="text-xs uppercase mb-4">Autonomous Streetwear Dept.</p>
          <h1 className="text-7xl font-bold leading-none">CLUB</h1>
          <p className="text-5xl italic">ROMA <span className="text-2xl not-italic">// 01</span></p>
          <p className="text-sm text-[#8A8378] max-w-md mt-4">
            Prendas formuladas en el aislamiento desértico y el asfalto nocturno de La Paz.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <a href="#archivo" className="border border-current px-4 py-2 text-xs uppercase text-center">
            Explorar catálogo [5 piezas] ↓
          </a>
          <a href="#" className="text-xs uppercase text-center">Ver campaña</a>
        </div>
      </div>
    </section>
  );
}