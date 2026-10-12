"use client";

import {
  FadeInFromBottom,
  FadeInLeftWhenVisible,
  FadeInRightWhenVisible,
} from "@/components/ui/animations";
import { howItWorksSteps } from "@/data/home";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="!w-full !bg-[#F7F7F7] !py-12 sm:!py-16 md:!py-20 !px-4 sm:!px-6 lg:!px-8"
    >
      <div className="!w-full !max-w-[1400px] !mx-auto">
        <FadeInFromBottom>
          <div className="!text-center !mb-8 sm:!mb-12 md:!mb-16">
            <h4 className="!text-[#ff8a00] !uppercase !tracking-[0.2em] !text-xs sm:!text-sm !font-bold !mb-2">
              How It Works
            </h4>
            <h2 className="!text-xl sm:!text-2xl md:!text-[1.75rem] lg:!text-[30px] !font-bold !text-[#1E1E1E] !px-2">
              Simple steps to a better room
            </h2>
          </div>
        </FadeInFromBottom>

        <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-8 md:!gap-10 lg:!gap-14 !items-center !mb-8 sm:!mb-12 md:!mb-14">
          <FadeInLeftWhenVisible>
            <div className="!relative !w-full !max-w-[420px] !mx-auto lg:!max-w-none !overflow-hidden !rounded-[20px] sm:!rounded-[24px]">
              <div className="!absolute !inset-4 sm:!inset-6 md:!inset-8 !bg-[#EEEEEE] !rounded-[20px] sm:!rounded-[24px] !z-0" />
              <img
                src="/chair2.png"
                alt="Modern chair from Panto collection"
                className="!relative !z-[1] !w-full !max-w-[280px] sm:!max-w-[360px] md:!max-w-[420px] !mx-auto !object-contain !drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              />
            </div>
          </FadeInLeftWhenVisible>

          <div className="!flex !flex-col !gap-4 sm:!gap-5 md:!gap-6">
            {howItWorksSteps.map((step, index) => (
              <FadeInRightWhenVisible key={step.num}>
                <article className="!bg-white !rounded-[20px] sm:!rounded-[24px] !shadow-sm hover:!shadow-md !transition !p-4 sm:!p-6 md:!p-8 !flex !gap-4 sm:!gap-5 md:!gap-6 !items-start">
                  <span className="!text-[#E58411] !text-xl sm:!text-2xl md:!text-[28px] !font-bold !leading-none !shrink-0">
                    {step.num}
                  </span>
                  <div className="!flex !flex-col !gap-1.5 sm:!gap-2 !min-w-0">
                    <h3 className="!text-base sm:!text-lg md:!text-xl !font-semibold !text-[#1E1E1E]">
                      {step.title}
                    </h3>
                    <p className="!text-gray-500 !text-sm sm:!text-[15px] !leading-[1.65]">
                      {step.desc}
                    </p>
                    {index === howItWorksSteps.length - 1 && (
                      <Link
                        href="/products"
                        className="!mt-1 sm:!mt-2 !inline-flex !items-center !gap-[6px] !text-[rgb(255,174,0)] !font-medium !no-underline !text-sm hover:!gap-2 !transition-all"
                      >
                        Start shopping
                        <span className="!text-[18px]">→</span>
                      </Link>
                    )}
                  </div>
                </article>
              </FadeInRightWhenVisible>
            ))}
          </div>
        </div>

        <FadeInFromBottom>
          <p className="!text-center !text-sm sm:!text-base !text-[#ff8a00]">
            <Link
              href="/products"
              className="!text-inherit !no-underline hover:!opacity-80"
            >
              View All
              <span className="!text-[18px]">→</span>
            </Link>
          </p>
        </FadeInFromBottom>
      </div>
    </section>
  );
};

export default HowItWorks;
