const galleryPhotos = [
  { src: "/images/clubRoma-socialMedia1.jpeg", caption: "01. [describe la foto]", tag: "35MM C41 PROCESS", ratio: "aspect-[4/3]" },
  { src: "/images/clubRoma-socialMedia2.jpeg", caption: "02. [describe la foto]", tag: "LA PAZ B.C.S.", ratio: "aspect-[3/4]" },
  { src: "/images/clubRoma-socialMedia3.jpeg", caption: "03. [describe la foto]", tag: "BOX CUT OVERSIZED", ratio: "aspect-[3/4]" },
  { src: "/images/clubRoma-socialMedia4.jpeg", caption: "04. [describe la foto]", tag: "MEMBERS ONLY PRINT", ratio: "aspect-[3/4]" },
  { src: "/images/clubRoma-socialMedia5.jpeg", caption: "05. [describe la foto]", tag: "SERIE FINAL DROP 01", ratio: "aspect-[3/4]" },
];

function GalleryPhoto({ photo }: { photo: (typeof galleryPhotos)[number] }) {
  return (
    <figure className={`relative ${photo.ratio} overflow-hidden`}>
      <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" />
      <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent pt-8 pb-2 px-3 flex justify-between text-[10px] uppercase">
        <span className="text-teal-400">{photo.caption}</span>
        <span className="text-orange-300">{photo.tag}</span>
      </figcaption>
    </figure>
  );
}

export default function BrandStory() {
  return (
    <div className="text-[#EDEAE3]">
      <div className="flex justify-between items-baseline mb-6">
        <div>
          <p className="text-xs text-teal-400 uppercase mb-1">// Fotografía editorial</p>
          <h2 className="text-4xl font-serif uppercase">
            La Paz Archive <em className="italic normal-case">after dark</em>
          </h2>
        </div>
        <p className="text-xs text-[#8A8378] text-right uppercase">
          Serie nocturna 2026 · registro urbano Baja Sur
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-start">
        <GalleryPhoto photo={galleryPhotos[0]} />
        <GalleryPhoto photo={galleryPhotos[1]} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GalleryPhoto photo={galleryPhotos[2]} />
        <GalleryPhoto photo={galleryPhotos[3]} />
        <GalleryPhoto photo={galleryPhotos[4]} />
      </div>
    </div>
  );
}