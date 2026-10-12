"use client";

import FavoritesPageHeader from "@/components/favorites/FavoritesPageHeader";
import {
  FadeInFromBottom,
  FadeInLeftWhenVisible,
} from "@/components/ui/animations";
import { useCart } from "@/context/CartProvider";
import { useFavorites } from "@/context/FavoritesProvider";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FavoritesView = () => {
  const { items, hydrated, itemCount, removeFavorite } = useFavorites();
  const { addItem } = useCart();
  const [imgFallback, setImgFallback] = useState({});

  return (
    <>
      <FavoritesPageHeader itemCount={hydrated ? itemCount : 0} />

      <section className="!w-full !bg-[#F7F7F7] !py-10 sm:!py-14 md:!py-16 !px-4 sm:!px-6 lg:!px-8 !min-h-[50vh]">
        <div className="!max-w-[1400px] !mx-auto">
          {!hydrated ? (
            <p className="!text-center !text-gray-500 !text-sm">
              Loading favorites…
            </p>
          ) : items.length === 0 ? (
            <FadeInFromBottom>
              <div className="!max-w-md !mx-auto !text-center !bg-white !rounded-[24px] !p-10 !shadow-sm">
                <div className="!w-16 !h-16 !mx-auto !mb-4 !rounded-full !bg-[#FFF0F0] !flex !items-center !justify-center">
                  <FavoriteBorderIcon className="!text-red-400 !text-[32px]" />
                </div>
                <h2 className="!text-xl !font-bold !text-[#1E1E1E] !mb-2">
                  No favorites yet
                </h2>
                <p className="!text-gray-500 !text-sm !mb-6">
                  Tap the heart on any product to save it here for later.
                </p>
                <Link
                  href="/products"
                  className="!inline-flex !items-center !justify-center !px-8 !py-3 !rounded-full !bg-[#E58411] !text-white !font-semibold !text-sm !no-underline hover:!bg-[#d0770f] !transition-colors"
                >
                  Browse products
                </Link>
              </div>
            </FadeInFromBottom>
          ) : (
            <ul className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !gap-4 sm:!gap-6">
              {items.map((line) => (
                <FadeInLeftWhenVisible key={line.id}>
                  <li className="!bg-white !rounded-[20px] sm:!rounded-[24px] !shadow-sm hover:!shadow-md !transition !overflow-hidden !flex !flex-col !h-full">
                    <div className="!relative !bg-[#F7F7F7] !p-6 !flex !items-center !justify-center !min-h-[180px]">
                      {!line.inStock && (
                        <span className="!absolute !top-3 !left-3 !text-[10px] !font-semibold !px-2.5 !py-1 !rounded-full !bg-gray-400 !text-white">
                          Sold out
                        </span>
                      )}
                      <Image
                        src={imgFallback[line.id] ? "/chair.png" : line.image}
                        alt=""
                        width={200}
                        height={160}
                        className="!max-h-[140px] !w-auto !object-contain"
                        onError={() =>
                          setImgFallback((prev) => ({ ...prev, [line.id]: true }))
                        }
                      />
                    </div>
                    <div className="!p-5 sm:!p-6 !flex !flex-col !gap-2 !flex-1">
                      <span className="!text-gray-400 !text-[10px] !uppercase !tracking-wider">
                        {line.category}
                        {line.material ? ` · ${line.material}` : ""}
                      </span>
                      <h2 className="!text-base sm:!text-lg !font-semibold !text-[#1E1E1E] !leading-snug">
                        {line.name}
                      </h2>
                      {line.description && (
                        <p className="!text-gray-500 !text-sm !line-clamp-2 !leading-relaxed">
                          {line.description}
                        </p>
                      )}
                      <p className="!text-xl !font-bold !text-[#1E1E1E] !mt-auto !pt-2">
                        ${line.price.toFixed(2)}
                      </p>
                      <div className="!flex !gap-2 !pt-2">
                        {line.inStock ? (
                          <button
                            type="button"
                            onClick={() =>
                              addItem({
                                id: line.id,
                                name: line.name,
                                price: line.price,
                                image: line.image,
                                material: line.material,
                                inStock: true,
                              })
                            }
                            className="!flex-1 !py-2.5 !rounded-full !bg-[#E58411] !text-white !text-sm !font-semibold !border-0 !cursor-pointer hover:!bg-[#d0770f] !transition-colors"
                          >
                            Add to basket
                          </button>
                        ) : (
                          <span className="!flex-1 !text-center !py-2.5 !text-sm !text-gray-400">
                            Unavailable
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => removeFavorite(line.id)}
                          className="!inline-flex !items-center !justify-center !gap-1 !px-4 !py-2.5 !rounded-full !border !border-gray-200 !bg-white !text-sm !text-gray-600 !cursor-pointer hover:!border-red-200 hover:!text-red-500 !transition"
                          aria-label={`Remove ${line.name} from favorites`}
                        >
                          <DeleteOutlineIcon className="!text-[18px]" />
                        </button>
                      </div>
                    </div>
                  </li>
                </FadeInLeftWhenVisible>
              ))}
            </ul>
          )}

          {hydrated && items.length > 0 && (
            <FadeInFromBottom>
              <p className="!text-center !mt-10 !text-sm !text-gray-500">
                <Link
                  href="/products"
                  className="!text-[rgb(255,174,0)] !no-underline hover:!opacity-80"
                >
                  Continue shopping →
                </Link>
              </p>
            </FadeInFromBottom>
          )}
        </div>
      </section>
    </>
  );
};

export default FavoritesView;
