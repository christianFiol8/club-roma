const galleryPhotos = [
  { src: "/images/clubRoma-socialMedia1.jpeg", caption: "01. [describe la foto]", tag: "LA PAZ B.C.S." },
  { src: "/images/clubRoma-socialMedia2.jpeg", caption: "02. [describe la foto]", tag: "LA PAZ B.C.S." },
  { src: "/images/clubRoma-socialMedia3.jpeg", caption: "03. [describe la foto]", tag: "LA PAZ B.C.S." },
  { src: "/images/clubRoma-socialMedia4.jpeg", caption: "04. [describe la foto]", tag: "LA PAZ B.C.S." },
  { src: "/images/clubRoma-socialMedia5.jpeg", caption: "05. [describe la foto]", tag: "LA PAZ B.C.S." },
];

export default function BrandStory() {
  return (
    <div className="text-[#EDEAE3]">
      <div className="flex justify-between items-baseline mb-6">
        <div>
          <p className="text-xs text-[#8A8378] uppercase">// Fotografía editorial</p>
          <h2 className="text-2xl uppercase">
            La Paz Archive <em className="italic">after dark</em>
          </h2>
        </div>
        <p className="text-xs text-[#8A8378] text-right">
          Serie nocturna 2024 · registro urbano Baja Sur
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {galleryPhotos.slice(0, 2).map((photo) => (
          <figure key={photo.src} className="relative">
            <img src={photo.src} alt={photo.caption} className="w-full aspect-[4/3] object-cover" />
            <figcaption className="flex justify-between text-xs text-[#8A8378] mt-2">
              <span>{photo.caption}</span>
              <span>{photo.tag}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryPhotos.slice(2, 5).map((photo) => (
          <figure key={photo.src} className="relative">
            <img src={photo.src} alt={photo.caption} className="w-full aspect-[3/4] object-cover" />
            <figcaption className="flex justify-between text-xs text-[#8A8378] mt-2">
              <span>{photo.caption}</span>
              <span>{photo.tag}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}