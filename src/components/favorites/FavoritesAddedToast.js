"use client";

import { useFavorites } from "@/context/FavoritesProvider";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";
import Link from "next/link";

const FavoritesAddedToast = () => {
  const { favoritesToast, dismissFavoritesToast } = useFavorites();

  if (!favoritesToast?.visible) return null;

  const { product } = favoritesToast;

  return (
    <div
      className="!fixed !z-[1490] !left-4 !right-4 sm:!right-auto sm:!left-6 !top-[88px] sm:!top-[92px] !max-w-[400px] !animate-[cartToastIn_0.35s_ease-out]"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="!bg-white !rounded-[20px] !shadow-[0_16px_48px_rgba(0,0,0,0.18)] !border !border-gray-100 !overflow-hidden">
        <div className="!flex !items-start !gap-3 !p-4">
          <div className="!relative !shrink-0 !w-16 !h-16 !bg-[#FFF0F0] !rounded-xl !flex !items-center !justify-center !overflow-hidden">
            <Image
              src={product.image || "/chair.png"}
              alt=""
              width={64}
              height={64}
              className="!object-contain !max-h-[52px] !w-auto"
            />
          </div>
          <div className="!flex-1 !min-w-0 !pt-0.5">
            <p className="!flex !items-center !gap-1.5 !text-red-500 !text-xs !font-bold !uppercase !tracking-wide !mb-1">
              <FavoriteIcon className="!text-[16px]" />
              Saved to favorites
            </p>
            <p className="!text-sm !font-semibold !text-[#1E1E1E] !truncate">
              {product.name}
            </p>
            <p className="!text-xs !text-gray-500 !mt-0.5">
              ${typeof product.price === "number" ? product.price.toFixed(2) : product.price}
            </p>
          </div>
          <button
            type="button"
            onClick={dismissFavoritesToast}
            className="!shrink-0 !w-8 !h-8 !rounded-full !border-0 !bg-[#F7F7F7] !flex !items-center !justify-center !cursor-pointer hover:!bg-gray-200 !transition"
            aria-label="Dismiss"
          >
            <CloseIcon className="!text-[18px] !text-gray-600" />
          </button>
        </div>
        <div className="!flex !gap-2 !px-4 !pb-4">
          <Link
            href="/favorites"
            onClick={dismissFavoritesToast}
            className="!flex-1 !text-center !py-2.5 !rounded-full !bg-[#1F2124] !text-white !text-sm !font-semibold !no-underline hover:!bg-[#E58411] !transition-colors"
          >
            View favorites
          </Link>
          <button
            type="button"
            onClick={dismissFavoritesToast}
            className="!flex-1 !py-2.5 !rounded-full !border !border-gray-200 !bg-white !text-sm !font-medium !text-[#1E1E1E] !cursor-pointer hover:!bg-gray-50 !transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoritesAddedToast;
