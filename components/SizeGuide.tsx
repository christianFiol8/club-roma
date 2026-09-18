const sizes = [
  { talla: "S // 01", ancho: "50 cm (19.6\")", largo: "70 cm (27.5\")", manga: "Drop Shoulder 22cm" },
  { talla: "M // 02", ancho: "53 cm (20.8\")", largo: "72 cm (28.3\")", manga: "Drop Shoulder 23cm" },
  { talla: "L // 03", ancho: "56 cm (22.0\")", largo: "74 cm (29.1\")", manga: "Drop Shoulder 24cm" },
  { talla: "XL // 04", ancho: "60 cm (23.6\")", largo: "77 cm (30.3\")", manga: "Drop Shoulder 25.5cm" },
];

export default function SizeGuide() {
  return (
    <div className="border border-[#2A2A28] p-6 text-[#EDEAE3]">
      <div className="flex justify-between items-start mb-2">
        <p className="text-xs text-teal-400 uppercase">// Patronaje & medidas en plano</p>
        <span className="text-xs border border-current px-2 py-1 uppercase">Boxy / Oversized cut</span>
      </div>
      <h3 className="text-lg uppercase font-bold mb-4">Technical Sizing Spec</h3>

      <p className="text-xs text-[#8A8378] mb-4 leading-relaxed">
        *Medidas tomadas con la prenda extendida horizontalmente sobre mesa de patronaje.
        Tolerancia dimensional: +/- 1.0 cm. Si prefieres un ajuste regular estándar, te
        sugerimos ordenar una talla menos a tu habitual.
      </p>

      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-[#2A2A28] text-teal-400 uppercase text-left">
            <th className="py-2 font-normal">Talla</th>
            <th className="py-2 font-normal">Ancho pecho (pit-to-pit)</th>
            <th className="py-2 font-normal">Largo total (hsp)</th>
            <th className="py-2 font-normal">Manga / caída</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((row) => (
            <tr key={row.talla} className="border-b border-[#2A2A28]">
              <td className="py-2 text-orange-400">{row.talla}</td>
              <td className="py-2">{row.ancho}</td>
              <td className="py-2">{row.largo}</td>
              <td className="py-2">{row.manga}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-6 text-xs uppercase">
        <p className="text-[#8A8378]">Prendas pre-encogidas al vapor</p>
        <a href="#" className="text-teal-400 underline">¿Dudas sobre tu fit? Asesoría directa →</a>
      </div>
    </div>
  );
}