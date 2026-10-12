"use client";

import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const ProductFilters = ({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  material,
  onMaterialChange,
  sort,
  onSortChange,
  inStockOnly,
  onInStockOnlyChange,
  productCategories,
  productMaterials,
  resultCount,
  totalCount,
  hasActiveFilters,
  onClearFilters,
}) => {
  return (
    <aside
      className="!bg-white !rounded-[24px] !shadow-sm !border !border-gray-100 !overflow-hidden"
      aria-label="Product filters"
    >
      <div className="!flex !items-center !justify-between !gap-4 !px-6 !py-4 !border-b !border-gray-100 !bg-[#FAFAFA]">
        <div className="!flex !items-center !gap-2">
          <TuneOutlinedIcon className="!text-[#E58411] !text-[22px]" />
          <h2 className="!text-base !font-semibold !text-[#1E1E1E]">Filters</h2>
        </div>
        <p className="!text-sm !text-gray-500">
          <span className="!font-semibold !text-[#1E1E1E]">{resultCount}</span>
          <span className="!mx-1">/</span>
          {totalCount} items
        </p>
      </div>

      <div className="!p-6 !flex !flex-col !gap-6">
        <div>
          <label
            htmlFor="product-search"
            className="!block !text-xs !font-semibold !uppercase !tracking-wider !text-gray-500 !mb-2"
          >
            Search
          </label>
          <div className="!relative">
            <SearchOutlinedIcon className="!absolute !left-4 !top-1/2 !-translate-y-1/2 !text-gray-400 !text-[20px]" />
            <input
              id="product-search"
              type="search"
              placeholder="Table, chair, material..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="!w-full !pl-11 !pr-4 !py-2.5 !rounded-full !bg-[#F7F7F7] !border !border-transparent !text-sm !outline-none focus:!bg-white focus:!border-[#E58411] focus:!ring-2 focus:!ring-[rgba(229,132,17,0.12)]"
            />
          </div>
        </div>

        <div>
          <span className="!block !text-xs !font-semibold !uppercase !tracking-wider !text-gray-500 !mb-3">
            Category
          </span>
          <div className="!bg-[#EEEEEE] !rounded-full !p-1 !inline-flex !flex-wrap !gap-1 !w-full sm:!w-auto">
            {productCategories.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => onCategoryChange(value)}
                className={`!flex-1 sm:!flex-none !px-4 !py-2 !text-sm !rounded-full !transition !border-0 !cursor-pointer !whitespace-nowrap ${
                  category === value
                    ? "!bg-white !text-[#1E1E1E] !font-semibold !shadow-sm"
                    : "!bg-transparent !text-gray-500 hover:!text-[#E58411]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-4">
          <div>
            <label
              htmlFor="filter-material"
              className="!block !text-xs !font-semibold !uppercase !tracking-wider !text-gray-500 !mb-2"
            >
              Material
            </label>
            <div className="!relative">
              <FilterListOutlinedIcon className="!absolute !left-3 !top-1/2 !-translate-y-1/2 !text-gray-400 !text-[18px] !pointer-events-none" />
              <select
                id="filter-material"
                value={material}
                onChange={(e) => onMaterialChange(e.target.value)}
                className="!w-full !appearance-none !pl-10 !pr-8 !py-2.5 !rounded-xl !bg-[#F7F7F7] !border !border-gray-100 !text-sm !text-[#1E1E1E] !outline-none focus:!border-[#E58411] focus:!ring-2 focus:!ring-[rgba(229,132,17,0.12)]"
              >
                {productMaterials.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="filter-sort"
              className="!block !text-xs !font-semibold !uppercase !tracking-wider !text-gray-500 !mb-2"
            >
              Sort by
            </label>
            <select
              id="filter-sort"
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="!w-full !appearance-none !px-4 !py-2.5 !rounded-xl !bg-[#F7F7F7] !border !border-gray-100 !text-sm !text-[#1E1E1E] !outline-none focus:!border-[#E58411] focus:!ring-2 focus:!ring-[rgba(229,132,17,0.12)]"
            >
              <option value="default">Featured</option>
              <option value="asc">Price: low to high</option>
              <option value="desc">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
        </div>

        <div className="!flex !items-center !justify-between !gap-4 !py-3 !px-4 !rounded-xl !bg-[#F7F7F7]">
          <div>
            <p className="!text-sm !font-medium !text-[#1E1E1E]">In stock only</p>
            <p className="!text-xs !text-gray-500">Hide sold-out items</p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={inStockOnly}
            onClick={() => onInStockOnlyChange(!inStockOnly)}
            className={`!relative !w-12 !h-7 !rounded-full !transition-colors !border-0 !cursor-pointer !shrink-0 ${
              inStockOnly ? "!bg-[#E58411]" : "!bg-gray-300"
            }`}
          >
            <span
              className={`!absolute !top-1 !left-1 !w-5 !h-5 !rounded-full !bg-white !shadow !transition-transform ${
                inStockOnly ? "!translate-x-5" : "!translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="!px-6 !py-4 !border-t !border-gray-100 !flex !justify-end">
          <button
            type="button"
            onClick={onClearFilters}
            className="!text-sm !font-medium !text-[#ff8a00] !bg-transparent !border-0 !cursor-pointer hover:!underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </aside>
  );
};

export default ProductFilters;
