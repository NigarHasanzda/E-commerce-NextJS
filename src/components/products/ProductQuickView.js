"use client";

import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductQuickView = ({ product, onClose }) => {
  const [imgSrc, setImgSrc] = useState(product?.image || "/chair.png");

  useEffect(() => {
    setImgSrc(product?.image || "/chair.png");
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="!fixed !inset-0 !z-[2000] !flex !items-center !justify-center !p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      <button
        type="button"
        aria-label="Close quick view"
        className="!absolute !inset-0 !bg-black/50 !border-0 !cursor-pointer"
        onClick={onClose}
      />
      <div className="!relative !z-[1] !w-full !max-w-[900px] !bg-white !rounded-[24px] !shadow-2xl !overflow-hidden !grid !grid-cols-1 md:!grid-cols-2">
        <div className="!bg-[#F7F7F7] !p-8 !flex !items-center !justify-center !min-h-[280px]">
          <Image
            src={imgSrc}
            alt={product.name}
            width={400}
            height={320}
            className="!max-h-[320px] !w-auto !object-contain"
            onError={() => setImgSrc("/chair.png")}
          />
        </div>
        <div className="!p-8 !flex !flex-col !gap-4">
          <button
            type="button"
            onClick={onClose}
            className="!self-end !border-0 !bg-transparent !cursor-pointer !p-1"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
          <span className="!text-[#ff8a00] !text-xs !uppercase !tracking-[0.2em]">
            {product.category}
          </span>
          <h2 id="quick-view-title" className="!text-2xl !font-bold !text-[#1E1E1E]">
            {product.name}
          </h2>
          <p className="!text-gray-500 !leading-relaxed">{product.description}</p>
          <p className="!text-sm !text-gray-500">
            Material: <strong className="!text-gray-800">{product.material}</strong>
          </p>
          <p className="!text-3xl !font-bold !text-[#E58411]">${product.price}</p>
          {product.inStock ? (
            <button
              type="button"
              className="!mt-2 !w-full !py-3 !rounded-full !bg-[#1F2124] !text-white !font-semibold hover:!bg-[#E58411] !transition !border-0 !cursor-pointer"
            >
              Add to cart
            </button>
          ) : (
            <p className="!text-center !py-3 !rounded-full !bg-gray-100 !text-gray-500 !font-medium">
              Currently out of stock
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
