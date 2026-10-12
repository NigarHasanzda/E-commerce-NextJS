"use client";

import { useCart } from "@/context/CartProvider";
import { useFavorites } from "@/context/FavoritesProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import { useState } from "react";

const FALLBACK_IMAGE = "/chair.png";

const badgeStyles = {
  "Best seller": "!bg-[#1F2124] !text-white",
  New: "!bg-[#E58411] !text-white",
  Popular: "!bg-[#ff8a00] !text-white",
  Sale: "!bg-red-500 !text-white",
};

const ProductCard = ({ product, onQuickView }) => {
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [imgSrc, setImgSrc] = useState(product.image);
  const [addedPulse, setAddedPulse] = useState(false);
  const wishlisted = isFavorite(product.id);

  const handleAddToCart = () => {
    addItem(product);
    setAddedPulse(true);
    window.setTimeout(() => setAddedPulse(false), 600);
  };

  return (
    <article className="!group !bg-white !rounded-[24px] !shadow-sm hover:!shadow-lg !transition-all !duration-300 !overflow-hidden !flex !flex-col">
      <div className="!relative !bg-[#F7F7F7] !p-6 !flex !items-center !justify-center !min-h-[220px]">
        {product.badge && (
          <span
            className={`!absolute !top-4 !left-4 !z-10 !text-[11px] !font-semibold !uppercase !tracking-wide !px-3 !py-1 !rounded-full ${badgeStyles[product.badge] || "!bg-gray-800 !text-white"}`}
          >
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <span className="!absolute !top-4 !right-4 !z-10 !text-[11px] !font-semibold !px-3 !py-1 !rounded-full !bg-gray-400 !text-white">
            Sold out
          </span>
        )}
        <button
          type="button"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggleFavorite(product)}
          className="!absolute !top-4 !right-4 !z-10 !w-9 !h-9 !rounded-full !bg-white/90 !shadow !flex !items-center !justify-center !border-0 !cursor-pointer hover:!scale-105 !transition"
          style={!product.inStock ? { top: "3.25rem" } : undefined}
        >
          {wishlisted ? (
            <FavoriteIcon className="!text-[20px] !text-red-500" />
          ) : (
            <FavoriteBorderIcon className="!text-[20px] !text-gray-600" />
          )}
        </button>

        <Image
          src={imgSrc}
          alt={product.name}
          width={280}
          height={200}
          className="!w-full !max-w-[240px] !h-[180px] !object-contain !transition-transform !duration-300 group-hover:!scale-105"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <button
          type="button"
          onClick={() => onQuickView?.(product)}
          className="!absolute !bottom-4 !left-1/2 !-translate-x-1/2 !px-4 !py-2 !rounded-full !bg-white !text-sm !font-medium !shadow-md !opacity-0 group-hover:!opacity-100 !transition !border-0 !cursor-pointer hover:!text-[#E58411] max-sm:!hidden"
        >
          Quick view
        </button>
      </div>

      <div className="!p-6 !flex !flex-col !gap-2 !flex-1">
        <span className="!text-gray-400 !text-xs !uppercase !tracking-wider">
          {product.category} · {product.material}
        </span>
        <h3 className="!text-[17px] !font-semibold !text-[#1E1E1E] !leading-snug">
          {product.name}
        </h3>
        <p className="!text-gray-500 !text-sm !line-clamp-2 !leading-relaxed">
          {product.description}
        </p>

        <div className="!flex !items-center !gap-2 !mt-1">
          <div className="!flex !gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.floor(product.rating)
                    ? "!text-orange-400 !text-sm"
                    : "!text-gray-200 !text-sm"
                }
              >
                ★
              </span>
            ))}
          </div>
          <span className="!text-gray-400 !text-xs">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="!mt-auto !pt-4 !flex !flex-col !gap-3">
          <span className="!font-bold !text-[20px] !text-[#1E1E1E]">
            ${product.price}
          </span>
          <div className="!flex !items-stretch !gap-2">
            <button
              type="button"
              onClick={() => toggleFavorite(product)}
              className={`!flex-1 !min-w-0 !inline-flex !items-center !justify-center !gap-1.5 !px-3 !py-2.5 !rounded-full !text-xs sm:!text-sm !font-semibold !border !cursor-pointer !transition ${
                wishlisted
                  ? "!border-red-200 !bg-[#FFF0F0] !text-red-600 hover:!bg-red-50"
                  : "!border-gray-200 !bg-white !text-[#1E1E1E] hover:!border-red-200 hover:!text-red-500"
              }`}
            >
              {wishlisted ? (
                <>
                  <FavoriteIcon className="!text-[18px]" />
                  Saved
                </>
              ) : (
                <>
                  <FavoriteBorderIcon className="!text-[18px]" />
                  Favorite
                </>
              )}
            </button>
            {product.inStock ? (
              <button
                type="button"
                onClick={handleAddToCart}
                className={`!shrink-0 !w-[42px] !h-[42px] !rounded-full !text-white !flex !items-center !justify-center !text-xl hover:!scale-105 !transition !border-0 !cursor-pointer ${
                  addedPulse
                    ? "!bg-[#E58411]"
                    : "!bg-[#0b132b] hover:!bg-[#E58411]"
                }`}
                aria-label={`Add ${product.name} to cart`}
              >
                +
              </button>
            ) : (
              <span className="!shrink-0 !flex !items-center !px-3 !text-xs !font-medium !text-gray-400">
                Sold out
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
