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
      className="!w-full !bg-[#F7F7F7] !py-20 !px-4 sm:!px-6 lg:!px-10 !flex !justify-center"
    >
      <div className="!w-full !max-w-[80%] !mx-auto">
        <FadeInFromBottom>
          <div className="!text-center !mb-16">
            <h4 className="!text-[#ff8a00] !uppercase !tracking-[0.2em] !text-sm !font-bold !mb-2">
              How It Works
            </h4>
            <h2 className="!text-[22px] sm:!text-[26px] lg:!text-[30px] !font-bold !text-[#1E1E1E]">
              Simple steps to a better room
            </h2>
          </div>
        </FadeInFromBottom>

        <div className="!grid !grid-cols-1 lg:!grid-cols-[1fr_1.1fr] !gap-[60px] !items-center !mb-14">
          <FadeInLeftWhenVisible>
            <div className="!relative !w-full !max-w-[520px] !mx-auto lg:!mx-0">
              <div className="!absolute !top-[32px] !left-[32px] !w-full !h-full !bg-[#EEEEEE] !rounded-[24px] !z-0" />
              <img
                src="/chair2.png"
                alt="Modern chair from Panto collection"
                className="!relative !z-[1] !w-full !max-w-[420px] !mx-auto !object-contain !drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              />
            </div>
          </FadeInLeftWhenVisible>

          <div className="!flex !flex-col !gap-6">
            {howItWorksSteps.map((step, index) => (
              <FadeInRightWhenVisible key={step.num}>
                <article className="!bg-white !rounded-[24px] !shadow-sm hover:!shadow-md !transition !p-6 sm:!p-8 !flex !gap-5 sm:!gap-6 !items-start">
                  <span className="!text-[#E58411] !text-[28px] !font-bold !leading-none !shrink-0">
                    {step.num}
                  </span>
                  <div className="!flex !flex-col !gap-2">
                    <h3 className="!text-[18px] sm:!text-[20px] !font-semibold !text-[#1E1E1E]">
                      {step.title}
                    </h3>
                    <p className="!text-gray-500 !text-sm sm:!text-[15px] !leading-[1.65] !max-w-[400px]">
                      {step.desc}
                    </p>
                    {index === howItWorksSteps.length - 1 && (
                      <Link
                        href="/products"
                        className="!mt-2 !inline-flex !items-center !gap-[6px] !text-[rgb(255,174,0)] !font-medium !no-underline !text-sm hover:!gap-2 !transition-all"
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
          <p className="!text-center !text-[16px] !text-[#ff8a00]">
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
