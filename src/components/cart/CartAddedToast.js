"use client";

import { useCart } from "@/context/CartProvider";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";

const CartAddedToast = () => {
  const { cartToast, dismissCartToast } = useCart();

  if (!cartToast?.visible) return null;

  const { product } = cartToast;

  return (
    <div
      className="!fixed !z-[1500] !left-4 !right-4 sm:!left-auto sm:!right-6 !top-[88px] sm:!top-[92px] !max-w-[400px] sm:!ml-auto !animate-[cartToastIn_0.35s_ease-out]"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="!bg-white !rounded-[20px] !shadow-[0_16px_48px_rgba(0,0,0,0.18)] !border !border-gray-100 !overflow-hidden">
        <div className="!flex !items-start !gap-3 !p-4">
          <div className="!relative !shrink-0 !w-16 !h-16 !bg-[#F7F7F7] !rounded-xl !flex !items-center !justify-center !overflow-hidden">
            <Image
              src={product.image || "/chair.png"}
              alt=""
              width={64}
              height={64}
              className="!object-contain !max-h-[52px] !w-auto"
            />
          </div>
          <div className="!flex-1 !min-w-0 !pt-0.5">
            <p className="!flex !items-center !gap-1.5 !text-[#E58411] !text-xs !font-bold !uppercase !tracking-wide !mb-1">
              <CheckCircleOutlineIcon className="!text-[18px]" />
              Added to basket
            </p>
            <p className="!text-sm !font-semibold !text-[#1E1E1E] !truncate">
              {product.name}
            </p>
            <p className="!text-xs !text-gray-500 !mt-0.5">
              ${product.price?.toFixed?.(2) ?? product.price}
            </p>
          </div>
          <button
            type="button"
            onClick={dismissCartToast}
            className="!shrink-0 !w-8 !h-8 !rounded-full !border-0 !bg-[#F7F7F7] !flex !items-center !justify-center !cursor-pointer hover:!bg-gray-200 !transition"
            aria-label="Dismiss"
          >
            <CloseIcon className="!text-[18px] !text-gray-600" />
          </button>
        </div>
        <div className="!flex !gap-2 !px-4 !pb-4">
          <Link
            href="/basket"
            onClick={dismissCartToast}
            className="!flex-1 !text-center !py-2.5 !rounded-full !bg-[#E58411] !text-white !text-sm !font-semibold !no-underline hover:!bg-[#d0770f] !transition-colors"
          >
            View basket
          </Link>
          <button
            type="button"
            onClick={dismissCartToast}
            className="!flex-1 !py-2.5 !rounded-full !border !border-gray-200 !bg-white !text-sm !font-medium !text-[#1E1E1E] !cursor-pointer hover:!bg-gray-50 !transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartAddedToast;
