export interface Product {
  id: string;
  look: string; // e.g. "01"
  name: string;
  price: number;
  currency?: string;
  image: string;
  hoverImage?: string;
}

export const featuredProducts: Product[] = [
  {
    id: "p1",
    look: "01",
    name: "Ink Wool Overcoat",
    price: 8499,
    image: "/products/look-01.jpg",
    hoverImage: "/products/look-01-alt.jpg",
  },
  {
    id: "p2",
    look: "02",
    name: "Bone Silk Shirt",
    price: 3299,
    image: "/products/look-02.jpg",
    hoverImage: "/products/look-02-alt.jpg",
  },
  {
    id: "p3",
    look: "03",
    name: "Oxblood Tailored Trouser",
    price: 4799,
    image: "/products/look-03.jpg",
    hoverImage: "/products/look-03-alt.jpg",
  },
  {
    id: "p4",
    look: "04",
    name: "Stone Knit Vest",
    price: 3999,
    image: "/products/look-04.jpg",
    hoverImage: "/products/look-04-alt.jpg",
  },
];
