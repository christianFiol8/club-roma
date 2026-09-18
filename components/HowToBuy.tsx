const steps = [
  {
    number: "01",
    title: "Selección de referencia",
    description: "Identifica el código (ej. REF: CR-001) y la talla deseada (S, M, L o XL).",
  },
  {
    number: "02",
    title: "Inquiry directo a WhatsApp",
    description: "Haz click en el enlace de la prenda o escribe directo a nuestra línea de concierge. Confirmamos stock en tiempo real.",
  },
  {
    number: "03",
    title: "Pago & logística de entrega",
    description: "Transferencia SPEI o pago contra entrega local en La Paz. Envíos foráneos a toda la república vía DHL Express.",
  },
];

export default function HowToBuy() {
  return (
    <div className="border border-[#2A2A28] p-6 text-[#EDEAE3]">
      <div className="flex justify-between items-baseline mb-6">
        <p className="text-xs text-teal-400 uppercase">// Order protocol</p>
        <p className="text-xs text-black-400 uppercase">Direct line only</p>
      </div>

      <p className="text-xs text-[#8A8378] mb-6 leading-relaxed">
        Club Roma no opera como una tienda transaccional masiva. Todas las piezas se coordinan
        de persona a persona para asegurar la talla exacta y disponibilidad en bodega La Paz.
      </p>

      <div className="flex flex-col">
        {steps.map((step) => (
          <div key={step.number} className="border-t border-[#2A2A28] py-3">
            <p className="text-xs text-teal-400 mb-1">{step.number}/</p>
            <h4 className="text-xs uppercase font-bold mb-1">{step.title}</h4>
            <p className="text-xs text-[#8A8378]">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-[#2A2A28] pt-3 mt-3 flex justify-between text-xs">
        <span className="text-[#8A8378] uppercase">Tiempo de respuesta:</span>
        <span className="text-black-400">&lt; 15 minutos</span>
      </div>
    </div>
  );
}