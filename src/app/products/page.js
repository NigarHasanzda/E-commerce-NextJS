"use client";
import React, { useState } from "react";

const ProductPage = () => {
  // --- DATA ---
  const productsData = [
    { id: 1, name: "Modern Wooden Table", category: "wood", price: 120, image: "/tables/wood1.png", material: "Oak", inStock: true },
    { id: 2, name: "Classic Glass Table", category: "glass", price: 200, image: "/tables/glass1.png", material: "Glass", inStock: true },
    { id: 3, name: "Metallic Dining Table", category: "metal", price: 180, image: "/tables/metal1.png", material: "Steel", inStock: false },
    { id: 4, name: "Round Wooden Table", category: "wood", price: 150, image: "/tables/wood2.png", material: "Teak", inStock: true },
    { id: 5, name: "Glass Coffee Table", category: "glass", price: 90, image: "/tables/glass2.png", material: "Glass", inStock: true }
  ];

  // --- STATES ---
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("default");

  // --- FILTERED & SORTED PRODUCTS ---
  const filteredProducts = productsData
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => category === "all" ? true : p.category === category)
    .filter(p => material === "all" ? true : p.material === material)
    .sort((a,b) => {
      if(sort === "asc") return a.price - b.price;
      if(sort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <section className="!w-full !min-h-[100vh] !bg-[#F7F7F7] !py-[200px]">
      <div className="!w-[90%] !max-w-[1400px] !mx-auto !flex !flex-col !gap-[30px]">

        {/* Search & Filters */}
        <div className="!flex !flex-col sm:!flex-row !items-start sm:!items-center !justify-between !gap-[15px]">
          <input
            type="text"
            placeholder="Search tables..."
            className="!px-[12px] !py-[8px] !rounded !border !border-gray-300 !outline-none !flex-1"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <div className="!flex !flex-wrap !gap-[10px]">
            <select className="!px-[10px] !py-[6px] !border !border-gray-300 !rounded" value={category} onChange={e=>setCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="wood">Wood</option>
              <option value="glass">Glass</option>
              <option value="metal">Metal</option>
            </select>

            <select className="!px-[10px] !py-[6px] !border !border-gray-300 !rounded" value={material} onChange={e=>setMaterial(e.target.value)}>
              <option value="all">All Materials</option>
              <option value="Oak">Oak</option>
              <option value="Teak">Teak</option>
              <option value="Glass">Glass</option>
              <option value="Steel">Steel</option>
            </select>

            <select className="!px-[10px] !py-[6px] !border !border-gray-300 !rounded" value={sort} onChange={e=>setSort(e.target.value)}>
              <option value="default">Default</option>
              <option value="asc">Price Low → High</option>
              <option value="desc">Price High → Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !gap-[24px]">
          {filteredProducts.length === 0 && <p className="!text-gray-500">No products found.</p>}
          {filteredProducts.map(product => (
            <div key={product.id} className="!bg-white !rounded-[16px] !shadow-md !p-[16px] !flex !flex-col !gap-[10px]">
              <img src={product.image} alt={product.name} className="!w-full !h-[200px] !object-cover !rounded-[12px]" />
              <h3 className="!text-[18px] !font-semibold">{product.name}</h3>
              <p className="!text-gray-500 !text-[14px]">Material: {product.material}</p>
              <p className="!text-[#ff8a00] !font-bold !text-[16px]">${product.price}</p>
              {product.inStock ? (
                <button className="!mt-auto !px-[12px] !py-[8px] !bg-[#ff8a00] !text-white !rounded !font-semibold hover:!bg-[#e07b00] !transition">Add to Cart</button>
              ) : (
                <span className="!mt-auto !px-[12px] !py-[8px] !bg-gray-300 !text-white !rounded !font-semibold !text-center">Out of Stock</span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductPage;
