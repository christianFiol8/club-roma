// data/products.ts
export type Product = {
  id: string;
  ref: string;
  name: string;
  category: "Playeras" | "Hoodies" | "Nueva colección";
  price: number;
  description: string;
  composition: string;
  fit: string;
  colorway: string;
  sizes: ("S" | "M" | "L" | "XL")[];
  availability: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    ref: "CR-001",
    name: "CLUB ROMA FAMILY TEE",
    category: "Playeras",
    price: 0, 
    description: "",
    composition: "",
    fit: "",
    colorway: "",
    sizes: [],
    availability: "Disponibilidad inmediata",
    image: "/images/clubRoma-friendsAndfamily.jpeg",
  },
  {
    id: "2",
    ref: "CR-002",
    name: "Studio TEE",
    category: "Playeras",
    price: 0,
    description: "",
    composition: "",
    fit: "",
    colorway: "",
    sizes: [],
    availability: "Disponibilidad inmediata",
    image: "/images/clubRoma-brickellAvenue.jpeg",
  },
  {
    id: "3",
    ref: "CR-003",
    name: "MAN ESSENTIAL TEE",
    category: "Playeras",
    price: 0,
    description: "",
    composition: "",
    fit: "",
    colorway: "",
    sizes: [],
    availability: "Disponibilidad inmediata",
    image: "/images/clubRoma-manEssential.jpeg",
  },
  {
    id: "4",
    ref: "CR-004",
    name: "MEMBERS ONLY 8-BALL",
    category: "Playeras",
    price: 0,
    description: "",
    composition: "",
    fit: "",
    colorway: "",
    sizes: [],
    availability: "Disponibilidad inmediata",
    image: "/images/clubRoma-membersOnly.jpeg",
  },
  {
    id: "5",
    ref: "CR-005",
    name: "Studio TEE",
    category: "Playeras",
    price: 0,
    description: "",
    composition: "",
    fit: "",
    colorway: "",
    sizes: [],
    availability: "Disponibilidad inmediata",
    image: "/images/clubRoma-noRiskNoStory.jpeg",
  },
];