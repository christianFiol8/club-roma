const tickerItems = [
  "CLUB ROMA LA PAZ BCS",
  "BOX CUT OVERSIZED SILHOUETTES",
  "DROP 01 LIMITED ARCHIVE",
  "CONTACTO DIRECTO VÍA WHATSAPP",
];

export default function TickerBar() {
  return (
    <div className="border-y border-[#2A2A28] overflow-hidden bg-[#0F0E0D]">
      <div className="flex whitespace-nowrap ticker">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} className="text-xs uppercase text-[#8A8378] px-4 py-2">
            {item} <span className="mx-4">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}