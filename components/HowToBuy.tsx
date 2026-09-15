const steps = [
  {
    number: "01",
    title: "Selección de referencia",
    description: "Identifica el código (ej. REF: CR-001) y la talla deseada (S, M, L o XL).",
  },
  {
    number: "02",
    title: "Inquiry directo a WhatsApp",
    description: "Haz click en el enlace de la prenda o escribe a nuestra línea de concierge. Confirmamos stock en tiempo real.",
  },
  {
    number: "03",
    title: "Pago & logística de entrega",
    description: "Transferencia SPEI o pago contra entrega local en La Paz. Envíos foráneos a toda la república vía DHL Express.",
  },
];

export default function ComoComprar() {
  return (
    <div className="border border-[#2A2A28] p-6 text-[#EDEAE3]">
      <p className="text-xs text-[#8A8378] uppercase mb-1">// Order protocol</p>
      <p className="text-xs text-[#8A8378] uppercase mb-6">Direct line only</p>

      <p className="text-sm text-[#8A8378] mb-8">
        Club Roma no opera como una tienda transaccional masiva. Todas las piezas se coordinan
        de persona a persona para asegurar la talla exacta y disponibilidad en bodega La Paz.
      </p>

      <div className="flex flex-col gap-6">
        {steps.map((step) => (
          <div key={step.number} className="border-t border-[#2A2A28] pt-4">
            <p className="text-xs text-[#8A8378] mb-1">{step.number}/</p>
            <h4 className="text-sm uppercase mb-1">{step.title}</h4>
            <p className="text-xs text-[#8A8378]">{step.description}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#8A8378] mt-8">Tiempo de respuesta: &lt; 15 minutos</p>
    </div>
  );
}