"use client";

import {
  FadeInFromBottom,
  FadeInLeftWhenVisible,
  FadeInRightWhenVisible,
} from "@/components/ui/animations";
import { newsletterPerks } from "@/data/home";
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
    <section className="!w-full !py-20 !bg-white !flex !justify-center !px-4 sm:!px-6 lg:!px-10">
      <div className="!w-full !max-w-[80%] !mx-auto">
        <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-[80px] !items-center">
          <FadeInLeftWhenVisible>
            <div className="!flex !flex-col !gap-[20px]">
              <span className="!text-[#ff8a00] !uppercase !tracking-[3px] !text-[14px]">
                Newsletter
              </span>
              <h2 className="!text-[32px] sm:!text-[38px] lg:!text-[42px] !font-bold !leading-[1.2] !text-[#1e1e1e]">
                Stay inspired with <br className="max-sm:!hidden" />
                Panto updates
              </h2>
              <p className="!text-[#6b6b6b] !text-[16px] !leading-[1.8] !max-w-[480px]">
                Get styling ideas and early access to collections—delivered quietly
                to your inbox, the same calm tone as our interiors.
              </p>
              <ul className="!flex !flex-wrap !gap-3 !mt-2">
                {newsletterPerks.map((item) => (
                  <li
                    key={item}
                    className="!px-4 !py-2 !rounded-full !bg-[#EEEEEE] !text-gray-600 !text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInLeftWhenVisible>

          <FadeInRightWhenVisible>
            <div className="!relative !w-full">
              <div className="!absolute !-top-4 !-right-4 !w-full !h-full !bg-[#f4f4f4] !rounded-[24px] !z-0 max-lg:!hidden" />
              <div className="!relative !z-[1] !bg-[#F7F7F7] !rounded-[24px] !p-8 sm:!p-10 !shadow-sm">
                <FadeInFromBottom>
                  {submitted ? (
                    <div className="!text-center lg:!text-left">
                      <p className="!text-[#1E1E1E] !font-semibold !text-lg !mb-2">
                        You&apos;re on the list
                      </p>
                      <p className="!text-gray-500 !text-sm !leading-relaxed">
                        Thanks for subscribing—we&apos;ll share new pieces and offers
                        soon.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="!mt-6 !flex !items-center !gap-[10px] !text-[#ff8a00] !font-semibold !bg-transparent !border-0 !p-0 !cursor-pointer !mx-auto lg:!mx-0"
                      >
                        Subscribe another email
                        <span className="!text-[20px]">→</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="!text-gray-500 !text-sm !mb-6">
                        Join our community—unsubscribe anytime.
                      </p>
                      <form
                        onSubmit={handleSubmit}
                        className="!flex !flex-col !gap-4"
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
                          className="!w-full !px-[1rem] !py-[0.65rem] !rounded-[25px] !text-[0.95rem] !outline-none !transition-all !duration-300 !bg-[rgba(124,124,124,0.15)] focus:!border-[#96999c] focus:!ring-[3px] focus:!ring-[rgba(229,132,17,0.15)] placeholder:!text-[var(--description-color)] placeholder:!text-[0.9rem] !border !border-transparent"
                        />
                        <button
                          type="submit"
                          className="!self-start !flex !items-center !gap-[10px] !text-[#ff8a00] !font-semibold !bg-transparent !border-0 !p-0 !cursor-pointer hover:!gap-3 !transition-all"
                        >
                          Subscribe
                          <span className="!text-[20px]">→</span>
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
