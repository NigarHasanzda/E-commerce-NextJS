"use client";

import CheckoutModal from "@/components/basket/CheckoutModal";
import BasketPageHeader from "@/components/basket/BasketPageHeader";
import {
  FadeInFromBottom,
  FadeInLeftWhenVisible,
} from "@/components/ui/animations";
import { useCart } from "@/context/CartProvider";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FREE_SHIPPING_MIN = 150;
const SHIPPING_FEE = 12;
const TAX_RATE = 0.08;

const BasketView = () => {
  const { items, hydrated, itemCount, subtotal, updateQuantity, removeItem } =
    useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [imgFallback, setImgFallback] = useState({});

  const shipping =
    subtotal >= FREE_SHIPPING_MIN || subtotal === 0 ? 0 : SHIPPING_FEE;
  const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
  const total = subtotal + shipping + tax;

  const openCheckout = () => {
    if (items.length === 0) return;
    setCheckoutOpen(true);
  };

  return (
    <>
      <BasketPageHeader itemCount={hydrated ? itemCount : 0} />

      <section className="!w-full !bg-[#F7F7F7] !py-10 sm:!py-14 md:!py-16 !px-4 sm:!px-6 lg:!px-8 !min-h-[50vh]">
        <div className="!max-w-[1400px] !mx-auto">
          {!hydrated ? (
            <p className="!text-center !text-gray-500 !text-sm">Loading basket…</p>
          ) : items.length === 0 ? (
            <FadeInFromBottom>
              <div className="!max-w-md !mx-auto !text-center !bg-white !rounded-[24px] !p-10 !shadow-sm">
                <div className="!w-16 !h-16 !mx-auto !mb-4 !rounded-full !bg-[#F7F7F7] !flex !items-center !justify-center">
                  <ShoppingBagOutlinedIcon className="!text-[#E58411] !text-[32px]" />
                </div>
                <h2 className="!text-xl !font-bold !text-[#1E1E1E] !mb-2">
                  Your basket is empty
                </h2>
                <p className="!text-gray-500 !text-sm !mb-6">
                  Explore our curated furniture and add what fits your space.
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
            <div className="!grid !grid-cols-1 lg:!grid-cols-[1fr_360px] !gap-6 lg:!gap-8 !items-start">
              <FadeInLeftWhenVisible>
                <ul className="!flex !flex-col !gap-4">
                  {items.map((line) => (
                    <li
                      key={line.id}
                      className="!bg-white !rounded-[20px] sm:!rounded-[24px] !p-4 sm:!p-5 !shadow-sm !flex !gap-4 sm:!gap-5"
                    >
                      <div className="!relative !shrink-0 !w-[88px] sm:!w-[100px] !h-[88px] sm:!h-[100px] !bg-[#F7F7F7] !rounded-2xl !flex !items-center !justify-center !overflow-hidden">
                        <Image
                          src={imgFallback[line.id] ? "/chair.png" : line.image}
                          alt=""
                          width={100}
                          height={100}
                          className="!object-contain !max-h-[80px] !w-auto"
                          onError={() =>
                            setImgFallback((prev) => ({ ...prev, [line.id]: true }))
                          }
                        />
                      </div>
                      <div className="!flex-1 !min-w-0 !flex !flex-col !gap-2">
                        <div className="!flex !justify-between !gap-2 !items-start">
                          <div>
                            <h2 className="!text-base sm:!text-lg !font-semibold !text-[#1E1E1E] !leading-snug">
                              {line.name}
                            </h2>
                            {line.material && (
                              <p className="!text-xs !text-gray-400 !mt-0.5">
                                {line.material}
                              </p>
                            )}
                          </div>
                          <p className="!font-bold !text-[#1E1E1E] !shrink-0">
                            ${(line.price * line.quantity).toFixed(2)}
                          </p>
                        </div>
                        <p className="!text-xs !text-gray-500">
                          ${line.price.toFixed(2)} each
                        </p>
                        <div className="!flex !items-center !justify-between !mt-auto !pt-1">
                          <div className="!inline-flex !items-center !rounded-full !border !border-gray-200 !overflow-hidden">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() =>
                                line.quantity <= 1
                                  ? removeItem(line.id)
                                  : updateQuantity(line.id, line.quantity - 1)
                              }
                              className="!w-9 !h-9 !flex !items-center !justify-center !border-0 !bg-transparent !cursor-pointer hover:!bg-[#F7F7F7] !transition"
                            >
                              <RemoveIcon className="!text-[18px]" />
                            </button>
                            <span className="!w-10 !text-center !text-sm !font-semibold">
                              {line.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() =>
                                updateQuantity(line.id, line.quantity + 1)
                              }
                              className="!w-9 !h-9 !flex !items-center !justify-center !border-0 !bg-transparent !cursor-pointer hover:!bg-[#F7F7F7] !transition"
                            >
                              <AddIcon className="!text-[18px]" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(line.id)}
                            className="!inline-flex !items-center !gap-1 !text-xs !text-gray-500 hover:!text-red-500 !border-0 !bg-transparent !cursor-pointer !transition"
                          >
                            <DeleteOutlineIcon className="!text-[18px]" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeInLeftWhenVisible>

              <FadeInFromBottom>
                <aside className="!bg-white !rounded-[20px] sm:!rounded-[24px] !p-6 sm:!p-8 !shadow-sm lg:!sticky lg:!top-[100px]">
                  <h2 className="!text-lg !font-bold !text-[#1E1E1E] !mb-4">
                    Order summary
                  </h2>
                  <dl className="!space-y-3 !text-sm !mb-6">
                    <div className="!flex !justify-between !text-gray-600">
                      <dt>Subtotal ({itemCount} items)</dt>
                      <dd className="!font-medium !text-[#1E1E1E]">
                        ${subtotal.toFixed(2)}
                      </dd>
                    </div>
                    <div className="!flex !justify-between !text-gray-600">
                      <dt>Shipping</dt>
                      <dd className="!font-medium !text-[#1E1E1E]">
                        {shipping === 0 ? (
                          <span className="!text-green-600">Free</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </dd>
                    </div>
                    {subtotal > 0 && subtotal < FREE_SHIPPING_MIN && (
                      <p className="!text-xs !text-[#ff8a00]">
                        Add ${(FREE_SHIPPING_MIN - subtotal).toFixed(2)} more for
                        free shipping
                      </p>
                    )}
                    <div className="!flex !justify-between !text-gray-600">
                      <dt>Tax (est.)</dt>
                      <dd className="!font-medium !text-[#1E1E1E]">
                        ${tax.toFixed(2)}
                      </dd>
                    </div>
                    <div className="!flex !justify-between !pt-3 !border-t !border-gray-100 !text-base !font-bold !text-[#1E1E1E]">
                      <dt>Total</dt>
                      <dd className="!text-[#E58411]">${total.toFixed(2)}</dd>
                    </div>
                  </dl>

                  <button
                    type="button"
                    onClick={openCheckout}
                    className="!w-full !py-3.5 !rounded-full !bg-[#E58411] !text-white !font-semibold !text-sm sm:!text-base !border-0 !cursor-pointer hover:!bg-[#d0770f] !transition-colors !mb-3"
                  >
                    Proceed to payment
                  </button>
                  <p className="!flex !items-center !justify-center !gap-1.5 !text-xs !text-gray-500">
                    <LockOutlinedIcon className="!text-[14px]" />
                    Secure demo checkout
                  </p>
                  <Link
                    href="/products"
                    className="!block !text-center !mt-4 !text-sm !text-[rgb(255,174,0)] !no-underline hover:!opacity-80"
                  >
                    Continue shopping →
                  </Link>
                </aside>
              </FadeInFromBottom>
            </div>
          )}
        </div>
      </section>

      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </>
  );
};

export default BasketView;
