"use client";

import { useCart } from "@/context/CartProvider";
import CloseIcon from "@mui/icons-material/Close";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useEffect, useId, useState } from "react";

const FREE_SHIPPING_MIN = 150;
const SHIPPING_FEE = 12;
const TAX_RATE = 0.08;

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zip: "",
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
};

function formatCardNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

const CheckoutModal = ({ open, onClose }) => {
  const { items, subtotal, clearCart } = useCart();
  const formId = useId();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [orderId, setOrderId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const shipping = subtotal >= FREE_SHIPPING_MIN || subtotal === 0 ? 0 : SHIPPING_FEE;
  const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
  const total = subtotal + shipping + tax;

  useEffect(() => {
    if (!open) return;
    setStep(1);
    setForm(emptyForm);
    setErrors({});
    setOrderId(null);
    setSubmitting(false);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validateDelivery = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Valid email required";
    if (!form.phone.trim()) next.phone = "Required";
    if (!form.address.trim()) next.address = "Required";
    if (!form.city.trim()) next.city = "Required";
    if (!form.zip.trim()) next.zip = "Required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const validatePayment = () => {
    const next = {};
    if (!form.cardName.trim()) next.cardName = "Required";
    const digits = form.cardNumber.replace(/\s/g, "");
    if (digits.length < 16) next.cardNumber = "Enter 16 digits";
    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) next.expiry = "Use MM/YY";
    if (form.cvv.replace(/\D/g, "").length < 3) next.cvv = "3–4 digits";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleContinue = () => {
    if (step === 1 && validateDelivery()) setStep(2);
  };

  const handlePay = async (e) => {
    e.preventDefault();
    if (!validatePayment()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setOrderId(`PN-${Date.now().toString().slice(-8)}`);
    clearCart();
    setSubmitting(false);
    setStep(3);
  };

  const inputClass = (field) =>
    `!w-full !px-4 !py-2.5 !rounded-xl !bg-[#F7F7F7] !border !text-sm !text-[#1E1E1E] !outline-none focus:!bg-white focus:!border-[#E58411] focus:!ring-2 focus:!ring-[rgba(229,132,17,0.12)] ${
      errors[field] ? "!border-red-400" : "!border-gray-100"
    }`;

  return (
    <div
      className="!fixed !inset-0 !z-[2000] !flex !items-end sm:!items-center !justify-center !p-0 sm:!p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <button
        type="button"
        aria-label="Close checkout"
        className="!absolute !inset-0 !bg-black/55 !border-0 !cursor-pointer"
        onClick={onClose}
      />

      <div className="!relative !z-[1] !w-full !max-w-[520px] sm:!max-h-[90vh] !bg-white !rounded-t-[24px] sm:!rounded-[24px] !shadow-2xl !overflow-hidden !flex !flex-col !max-h-[92vh]">
        <div className="!flex !items-center !justify-between !px-5 sm:!px-6 !py-4 !border-b !border-gray-100 !shrink-0">
          <div>
            <p className="!text-[10px] !uppercase !tracking-[0.2em] !text-[#ff8a00] !font-bold">
              Secure checkout
            </p>
            <h2 id="checkout-modal-title" className="!text-lg !font-bold !text-[#1E1E1E]">
              {step === 3 ? "Order confirmed" : "Complete your order"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="!border-0 !bg-[#F7F7F7] !rounded-full !w-9 !h-9 !flex !items-center !justify-center !cursor-pointer hover:!bg-gray-200 !transition"
            aria-label="Close"
          >
            <CloseIcon className="!text-[20px]" />
          </button>
        </div>

        {step < 3 && (
          <div className="!flex !gap-2 !px-5 sm:!px-6 !py-3 !bg-[#FAFAFA] !shrink-0">
            {[
              { n: 1, label: "Delivery", Icon: LocalShippingOutlinedIcon },
              { n: 2, label: "Payment", Icon: CreditCardOutlinedIcon },
            ].map(({ n, label, Icon }) => (
              <div
                key={n}
                className={`!flex-1 !flex !items-center !gap-2 !px-3 !py-2 !rounded-xl !text-xs !font-medium ${
                  step === n
                    ? "!bg-white !text-[#1E1E1E] !shadow-sm"
                    : "!text-gray-400"
                }`}
              >
                <Icon className="!text-[18px] !text-[#E58411]" />
                {label}
              </div>
            ))}
          </div>
        )}

        <div className="!overflow-y-auto !flex-1 !px-5 sm:!px-6 !py-5">
          {step === 1 && (
            <form
              id={`${formId}-delivery`}
              className="!flex !flex-col !gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleContinue();
              }}
            >
              <p className="!text-sm !text-gray-500 !-mt-1">
                {items.length} item{items.length !== 1 ? "s" : ""} · Total ${total.toFixed(2)}
              </p>
              <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-3">
                <div className="sm:!col-span-2">
                  <label className="!block !text-xs !font-medium !text-gray-600 !mb-1">
                    Full name
                  </label>
                  <input
                    className={inputClass("fullName")}
                    value={form.fullName}
                    onChange={(e) => setField("fullName", e.target.value)}
                    autoComplete="name"
                  />
                  {errors.fullName && (
                    <p className="!text-red-500 !text-xs !mt-1">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="!block !text-xs !font-medium !text-gray-600 !mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className={inputClass("email")}
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="!text-red-500 !text-xs !mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="!block !text-xs !font-medium !text-gray-600 !mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className={inputClass("phone")}
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <p className="!text-red-500 !text-xs !mt-1">{errors.phone}</p>
                  )}
                </div>
                <div className="sm:!col-span-2">
                  <label className="!block !text-xs !font-medium !text-gray-600 !mb-1">
                    Street address
                  </label>
                  <input
                    className={inputClass("address")}
                    value={form.address}
                    onChange={(e) => setField("address", e.target.value)}
                    autoComplete="street-address"
                  />
                  {errors.address && (
                    <p className="!text-red-500 !text-xs !mt-1">{errors.address}</p>
                  )}
                </div>
                <div>
                  <label className="!block !text-xs !font-medium !text-gray-600 !mb-1">
                    City
                  </label>
                  <input
                    className={inputClass("city")}
                    value={form.city}
                    onChange={(e) => setField("city", e.target.value)}
                    autoComplete="address-level2"
                  />
                  {errors.city && (
                    <p className="!text-red-500 !text-xs !mt-1">{errors.city}</p>
                  )}
                </div>
                <div>
                  <label className="!block !text-xs !font-medium !text-gray-600 !mb-1">
                    ZIP / Postal
                  </label>
                  <input
                    className={inputClass("zip")}
                    value={form.zip}
                    onChange={(e) => setField("zip", e.target.value)}
                    autoComplete="postal-code"
                  />
                  {errors.zip && (
                    <p className="!text-red-500 !text-xs !mt-1">{errors.zip}</p>
                  )}
                </div>
              </div>
            </form>
          )}

          {step === 2 && (
            <form
              id={`${formId}-payment`}
              className="!flex !flex-col !gap-4"
              onSubmit={handlePay}
            >
              <div className="!flex !items-center !gap-2 !text-xs !text-gray-500 !bg-[#FFF4E5] !rounded-xl !px-3 !py-2">
                <LockOutlinedIcon className="!text-[#E58411] !text-[16px]" />
                Demo only — no real charges. Use any test card details.
              </div>
              <div>
                <label className="!block !text-xs !font-medium !text-gray-600 !mb-1">
                  Name on card
                </label>
                <input
                  className={inputClass("cardName")}
                  value={form.cardName}
                  onChange={(e) => setField("cardName", e.target.value)}
                  autoComplete="cc-name"
                />
                {errors.cardName && (
                  <p className="!text-red-500 !text-xs !mt-1">{errors.cardName}</p>
                )}
              </div>
              <div>
                <label className="!block !text-xs !font-medium !text-gray-600 !mb-1">
                  Card number
                </label>
                <input
                  className={inputClass("cardNumber")}
                  value={form.cardNumber}
                  onChange={(e) => setField("cardNumber", formatCardNumber(e.target.value))}
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="4242 4242 4242 4242"
                />
                {errors.cardNumber && (
                  <p className="!text-red-500 !text-xs !mt-1">{errors.cardNumber}</p>
                )}
              </div>
              <div className="!grid !grid-cols-2 !gap-3">
                <div>
                  <label className="!block !text-xs !font-medium !text-gray-600 !mb-1">
                    Expiry
                  </label>
                  <input
                    className={inputClass("expiry")}
                    value={form.expiry}
                    onChange={(e) => setField("expiry", formatExpiry(e.target.value))}
                    placeholder="MM/YY"
                    autoComplete="cc-exp"
                  />
                  {errors.expiry && (
                    <p className="!text-red-500 !text-xs !mt-1">{errors.expiry}</p>
                  )}
                </div>
                <div>
                  <label className="!block !text-xs !font-medium !text-gray-600 !mb-1">
                    CVV
                  </label>
                  <input
                    className={inputClass("cvv")}
                    value={form.cvv}
                    onChange={(e) =>
                      setField("cvv", e.target.value.replace(/\D/g, "").slice(0, 4))
                    }
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder="123"
                  />
                  {errors.cvv && (
                    <p className="!text-red-500 !text-xs !mt-1">{errors.cvv}</p>
                  )}
                </div>
              </div>
              <div className="!rounded-xl !bg-[#F7F7F7] !p-4 !text-sm !space-y-2">
                <div className="!flex !justify-between !text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="!flex !justify-between !text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="!flex !justify-between !text-gray-600">
                  <span>Tax (est.)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="!flex !justify-between !font-bold !text-[#1E1E1E] !pt-2 !border-t !border-gray-200">
                  <span>Total</span>
                  <span className="!text-[#E58411]">${total.toFixed(2)}</span>
                </div>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="!text-center !py-4">
              <div className="!w-16 !h-16 !mx-auto !mb-4 !rounded-full !bg-[#FFF4E5] !flex !items-center !justify-center !text-3xl">
                ✓
              </div>
              <p className="!text-[#1E1E1E] !font-semibold !text-lg !mb-2">
                Thank you for your order
              </p>
              <p className="!text-gray-500 !text-sm !mb-4">
                Confirmation sent to{" "}
                <span className="!text-[#1E1E1E] !font-medium">{form.email}</span>
              </p>
              <p className="!inline-block !px-4 !py-2 !rounded-full !bg-[#F7F7F7] !text-sm !font-mono">
                {orderId}
              </p>
            </div>
          )}
        </div>

        <div className="!shrink-0 !px-5 sm:!px-6 !py-4 !border-t !border-gray-100 !flex !gap-3">
          {step === 1 && (
            <>
              <button
                type="button"
                onClick={onClose}
                className="!flex-1 !py-3 !rounded-full !border !border-gray-200 !bg-white !font-medium !text-sm !cursor-pointer hover:!bg-gray-50 !transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                form={`${formId}-delivery`}
                className="!flex-1 !py-3 !rounded-full !bg-[#E58411] !text-white !font-semibold !text-sm !border-0 !cursor-pointer hover:!bg-[#d0770f] !transition"
              >
                Continue to payment
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="!flex-1 !py-3 !rounded-full !border !border-gray-200 !bg-white !font-medium !text-sm !cursor-pointer hover:!bg-gray-50 !transition"
              >
                Back
              </button>
              <button
                type="submit"
                form={`${formId}-payment`}
                disabled={submitting}
                className="!flex-1 !py-3 !rounded-full !bg-[#1F2124] !text-white !font-semibold !text-sm !border-0 !cursor-pointer hover:!bg-[#E58411] !transition disabled:!opacity-60"
              >
                {submitting ? "Processing…" : `Pay $${total.toFixed(2)}`}
              </button>
            </>
          )}
          {step === 3 && (
            <button
              type="button"
              onClick={onClose}
              className="!w-full !py-3 !rounded-full !bg-[#E58411] !text-white !font-semibold !text-sm !border-0 !cursor-pointer hover:!bg-[#d0770f] !transition"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
