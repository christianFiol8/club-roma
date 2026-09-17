export default function BrandManifesto() {
  return (
    <section className="px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-[#EDEAE3]">
      <div>
        <p className="text-xs text-[#8A8378] uppercase mb-2">// Raíces & autonomía</p>
        <h2 className="text-3xl uppercase leading-tight">
          Lejos del ruido.
          <br />
          Cerca del mar de Cortés.
        </h2>
        <p className="text-sm text-[#8A8378] mt-4 max-w-md">
          Club Roma no responde a calendarios de moda corporativa. Operamos desde el extremo
          de la península de Baja California Sur, con una visión independiente influenciada
          por la arquitectura brutalista costera y la vida nocturna solitaria de La Paz.
        </p>
      </div>

      <div className="border border-[#2A2A28] p-6">
        <div className="flex justify-between text-xs text-[#8A8378] mb-4">
          <span>Club Roma manifesto // 01</span>
          <span>BCS, México</span>
        </div>
        <p className="italic text-lg">
          &quot;Diseñamos prendas con el peso del desierto y la solidez de las rocas
          costeras. Hecho para quien prefiere hablar poco y vestir con precisión.&quot;
        </p>
        <p className="text-xs text-[#8A8378] mt-4">Coordenadas de origen: 24°08&apos;32&quot;N 110°18&apos;39&quot;W</p>
      </div>
    </section>
  );
}