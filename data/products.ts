export type Product = {
    id: string;
    name: string;
    price: number;
    category: "T-Shirts" | "Hoodies" | "Nueva Coleccion";
    image: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Club Roma Brickell Avenue",
    category: "Nueva Coleccion",
    price: 0,
    image: "/images/clubRoma-brickellAvenue.jpeg",
  },
  {
    id: "2",
    name: "Club Roma Friends&Family",
    category: "Nueva Coleccion",
    price: 0,
    image: "/images/clubRoma-friends&family.jpeg",
  },
  {
    id: "3",
    name: "Club Roma Man Essentials",
    category: "Nueva Coleccion",
    price: 0,
    image: "/images/clubRoma-manEssential.jpeg",
  },
  {
    id: "4",
    name: "Club Roma Members Only",
    category: "Nueva Coleccion",
    price: 0,
    image: "/images/clubRoma-membersOnly.jpeg",
  },
  {
    id: "5",
    name: "Club Roma No Risk No Story",
    category: "Nueva Coleccion",
    price: 0,
    image: "/images/clubRoma-noRiskNoStory.jpeg",
  },
];