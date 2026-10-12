"use client";

import {
  FadeInFromBottom,
  FadeInLeftWhenVisible,
  FadeInRightWhenVisible,
} from "@/components/ui/animations";
import { newsletterPerks } from "@/data/home";
import { siteName } from "@/lib/site";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="!w-full !py-12 sm:!py-16 md:!py-20 !bg-white !px-4 sm:!px-6 lg:!px-8">
      <div className="!w-full !max-w-[1400px] !mx-auto">
        <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-10 md:!gap-12 lg:!gap-16 !items-center">
          <FadeInLeftWhenVisible>
            <div className="!flex !flex-col !gap-4 md:!gap-5 !text-center lg:!text-left">
              <span className="!text-[#ff8a00] !uppercase !tracking-[0.12em] sm:!tracking-[3px] !text-xs sm:!text-sm">
                Newsletter
              </span>
              <h2 className="!text-[1.625rem] sm:!text-[2rem] md:!text-[2.375rem] lg:!text-[2.625rem] !font-bold !leading-[1.2] !text-[#1e1e1e]">
                Stay inspired with {siteName} updates
              </h2>
              <p className="!text-[#6b6b6b] !text-sm sm:!text-base !leading-[1.75] !max-w-[480px] !mx-auto lg:!mx-0">
                Get styling ideas and early access to collections—delivered quietly
                to your inbox, the same calm tone as our interiors.
              </p>
              <ul className="!flex !flex-wrap !gap-2 sm:!gap-3 !mt-1 !justify-center lg:!justify-start">
                {newsletterPerks.map((item) => (
                  <li
                    key={item}
                    className="!px-3 sm:!px-4 !py-1.5 sm:!py-2 !rounded-full !bg-[#EEEEEE] !text-gray-600 !text-xs sm:!text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInLeftWhenVisible>

          <FadeInRightWhenVisible>
            <div className="!relative !w-full !max-w-lg !mx-auto lg:!max-w-none !overflow-hidden !rounded-[20px] sm:!rounded-[24px]">
              <div className="!absolute !inset-2 sm:!inset-3 !translate-x-2 !translate-y-2 !bg-[#f4f4f4] !rounded-[20px] sm:!rounded-[24px] !z-0 !hidden sm:!block" />
              <div className="!relative !z-[1] !bg-[#F7F7F7] !rounded-[20px] sm:!rounded-[24px] !p-6 sm:!p-8 md:!p-10 !shadow-sm">
                <FadeInFromBottom>
                  {submitted ? (
                    <div className="!text-center lg:!text-left">
                      <p className="!text-[#1E1E1E] !font-semibold !text-base sm:!text-lg !mb-2">
                        You&apos;re on the list
                      </p>
                      <p className="!text-gray-500 !text-sm !leading-relaxed">
                        Thanks for subscribing—we&apos;ll share new pieces and offers
                        soon.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="!mt-5 sm:!mt-6 !flex !items-center !gap-2 !text-[#ff8a00] !font-semibold !bg-transparent !border-0 !p-0 !cursor-pointer !mx-auto lg:!mx-0 !text-sm sm:!text-base"
                      >
                        Subscribe another email
                        <span className="!text-lg sm:!text-xl">→</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="!text-gray-500 !text-xs sm:!text-sm !mb-4 sm:!mb-6 !text-center lg:!text-left">
                        Join our community—unsubscribe anytime.
                      </p>
                      <form
                        onSubmit={handleSubmit}
                        className="!flex !flex-col !gap-3 sm:!gap-4"
                      >
                        <label htmlFor="newsletter-email" className="!sr-only">
                          Email address
                        </label>
                        <input
                          id="newsletter-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="🔍  Your email address..."
                          className="!w-full !px-4 !py-2.5 sm:!py-3 !rounded-[25px] !text-sm sm:!text-base !outline-none !transition-all !duration-300 !bg-[rgba(124,124,124,0.15)] focus:!border-[#96999c] focus:!ring-[3px] focus:!ring-[rgba(229,132,17,0.15)] placeholder:!text-[var(--description-color)] !border !border-transparent"
                        />
                        <button
                          type="submit"
                          className="!self-center lg:!self-start !flex !items-center !gap-2 !text-[#ff8a00] !font-semibold !bg-transparent !border-0 !p-0 !cursor-pointer hover:!gap-3 !transition-all !text-sm sm:!text-base"
                        >
                          Subscribe
                          <span className="!text-lg sm:!text-xl">→</span>
                        </button>
                      </form>
                    </>
                  )}
                </FadeInFromBottom>
              </div>
            </div>
          </FadeInRightWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
