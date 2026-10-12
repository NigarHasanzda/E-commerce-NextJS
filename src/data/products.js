/** Product catalog — used on /products and can power home highlights later */
export const products = [
  {
    id: 1,
    name: "Modern Wooden Table",
    category: "wood",
    price: 120,
    image: "/tables/wood1.png",
    material: "Oak",
    inStock: true,
  },
  {
    id: 2,
    name: "Classic Glass Table",
    category: "glass",
    price: 200,
    image: "/tables/glass1.png",
    material: "Glass",
    inStock: true,
  },
  {
    id: 3,
    name: "Metallic Dining Table",
    category: "metal",
    price: 180,
    image: "/tables/metal1.png",
    material: "Steel",
    inStock: false,
  },
  {
    id: 4,
    name: "Round Wooden Table",
    category: "wood",
    price: 150,
    image: "/tables/wood2.png",
    material: "Teak",
    inStock: true,
  },
  {
    id: 5,
    name: "Glass Coffee Table",
    category: "glass",
    price: 90,
    image: "/tables/glass2.png",
    material: "Glass",
    inStock: true,
  },
];

export const productCategories = [
  { value: "all", label: "All Categories" },
  { value: "wood", label: "Wood" },
  { value: "glass", label: "Glass" },
  { value: "metal", label: "Metal" },
];

export const productMaterials = [
  { value: "all", label: "All Materials" },
  { value: "Oak", label: "Oak" },
  { value: "Teak", label: "Teak" },
  { value: "Glass", label: "Glass" },
  { value: "Steel", label: "Steel" },
];
