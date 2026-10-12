"use client";

import ProductCard from "@/components/products/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import ProductQuickView from "@/components/products/ProductQuickView";
import ProductsPageHeader from "@/components/products/ProductsPageHeader";
import {
  productCategories,
  productMaterials,
  products,
} from "@/data/products";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const sortLabels = {
  default: "Featured",
  asc: "Price: low to high",
  desc: "Price: high to low",
  rating: "Top rated",
};

const ProductCatalog = () => {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") ?? "";
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("default");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .filter((p) => (category === "all" ? true : p.category === category))
      .filter((p) => (material === "all" ? true : p.material === material))
      .filter((p) => (inStockOnly ? p.inStock : true))
      .sort((a, b) => {
        if (sort === "asc") return a.price - b.price;
        if (sort === "desc") return b.price - a.price;
        if (sort === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [search, category, material, sort, inStockOnly]);

  const hasActiveFilters =
    search || category !== "all" || material !== "all" || inStockOnly;

  const activeFilterChips = useMemo(() => {
    const chips = [];
    if (search) chips.push({ key: "search", label: `Search: “${search}”` });
    if (category !== "all") {
      const cat = productCategories.find((c) => c.value === category);
      chips.push({ key: "category", label: cat?.label ?? category });
    }
    if (material !== "all") {
      const mat = productMaterials.find((m) => m.value === material);
      chips.push({ key: "material", label: mat?.label ?? material });
    }
    if (inStockOnly) chips.push({ key: "stock", label: "In stock" });
    if (sort !== "default")
      chips.push({ key: "sort", label: sortLabels[sort] ?? sort });
    return chips;
  }, [search, category, material, inStockOnly, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setMaterial("all");
    setInStockOnly(false);
    setSort("default");
  };

  return (
    <>
      <ProductsPageHeader />

      <section className="!w-full !min-h-[60vh] !bg-[#F7F7F7] !py-10 !px-4 sm:!px-6">
        <div className="!w-full !max-w-[1400px] !mx-auto !grid !grid-cols-1 lg:!grid-cols-[300px_1fr] xl:!grid-cols-[320px_1fr] !gap-8 !items-start">
          <ProductFilters
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            material={material}
            onMaterialChange={setMaterial}
            sort={sort}
            onSortChange={setSort}
            inStockOnly={inStockOnly}
            onInStockOnlyChange={setInStockOnly}
            productCategories={productCategories}
            productMaterials={productMaterials}
            resultCount={filteredProducts.length}
            totalCount={products.length}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearFilters}
          />

          <div className="!flex !flex-col !gap-5 !min-w-0">
            {activeFilterChips.length > 0 && (
              <div className="!flex !flex-wrap !items-center !gap-2">
                <span className="!text-xs !font-semibold !uppercase !tracking-wider !text-gray-500 !mr-1">
                  Active:
                </span>
                {activeFilterChips.map((chip) => (
                  <span
                    key={chip.key}
                    className="!text-xs !px-3 !py-1.5 !rounded-full !bg-white !border !border-gray-200 !text-gray-700"
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="!text-center !py-16 !bg-white !rounded-[24px] !shadow-sm !border !border-gray-100">
                <p className="!text-xl !font-semibold !text-[#1E1E1E] !mb-2">
                  No products found
                </p>
                <p className="!text-gray-500 !text-sm !mb-6">
                  Adjust filters or search for something else.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="!px-6 !py-2.5 !rounded-full !bg-[#E58411] !text-white !text-sm !font-medium !border-0 !cursor-pointer hover:!bg-[#d0770f] !transition"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="!grid !grid-cols-1 sm:!grid-cols-2 xl:!grid-cols-3 !gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {quickViewProduct && (
        <ProductQuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </>
  );
};

export default ProductCatalog;
