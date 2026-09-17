export default function Footer() {
  const whatsappNumber = "52XXXXXXXXXX"; // pendiente: número real de Club Roma

  return (
    <footer className="px-8 py-16 border-t border-[#2A2A28] text-[#EDEAE3]">
      <p className="text-xs text-[#8A8378] uppercase mb-2">// Línea directa</p>
      <h2 className="text-3xl uppercase mb-8">
        Hablemos con
        <br />
        el club.
      </h2>
      <p className="text-sm text-[#8A8378] max-w-md mb-8">
        Para órdenes de compra, dudas de patronaje o retiro directo en La Paz, comunícate
        al canal oficial vía WhatsApp o mensaje directo en Instagram.
      </p>
      <div className="flex flex-col gap-4 mb-12">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center border-t border-[#2A2A28] pt-3 text-sm"
        >
          <span>01 · WhatsApp Direct Concierge — respuesta inmediata para pedidos y pagos</span>
          <span>→</span>
        </a>
        <a
          href="https://www.instagram.com/club.romamx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center border-t border-[#2A2A28] pt-3 text-sm"
        >
          <span>02 · Instagram Archive — campañas, visuales inéditos y drops futuras</span>
          <span>→</span>
        </a>
      </div>
      <div className="flex justify-between items-center text-xs text-[#8A8378] border-t border-[#2A2A28] pt-4">
        <span>© 2026 Club Roma Studios. Todos los derechos reservados.</span>
        <span>Hecho en La Paz, Baja California Sur · Drop 01 Archive</span>
      </div>
    </footer>
  );
}