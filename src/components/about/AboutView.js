"use client";

import {
  FadeInFromBottom,
  FadeInLeftWhenVisible,
  FadeInRightWhenVisible,
} from "@/components/ui/animations";
import AboutPageHeader from "@/components/about/AboutPageHeader";
import { aboutStats, aboutTimeline, aboutValues } from "@/data/about";
import { siteName } from "@/lib/site";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const AboutView = () => {
  return (
    <>
      <AboutPageHeader />

      <section className="!w-full !py-12 sm:!py-16 md:!py-20 !px-4 sm:!px-6 lg:!px-8 !bg-white">
        <div className="!max-w-[1400px] !mx-auto !grid !grid-cols-1 lg:!grid-cols-2 !gap-10 md:!gap-12 lg:!gap-14 !items-center">
          <FadeInLeftWhenVisible>
            <div className="!relative !w-full !max-w-[480px] !mx-auto lg:!max-w-none !overflow-hidden !rounded-[20px] sm:!rounded-[24px]">
              <div className="!absolute !inset-4 sm:!inset-6 md:!inset-8 !bg-[#EEEEEE] !rounded-[20px] sm:!rounded-[24px] !z-0" />
              <img
                src="/chair2.png"
                alt={`${siteName} furniture styling`}
                className="!relative !z-[1] !w-full !max-w-[320px] sm:!max-w-[400px] !mx-auto !object-contain !drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              />
            </div>
          </FadeInLeftWhenVisible>

          <FadeInRightWhenVisible>
            <p className="!text-[#ff8a00] !uppercase !tracking-[0.2em] !text-xs sm:!text-sm !font-bold !mb-2">
              Who we are
            </p>
            <h2 className="!text-[1.625rem] sm:!text-[2rem] md:!text-[2.25rem] !font-bold !text-[#1E1E1E] !mb-4 !leading-[1.2]">
              Less clutter, more intention
            </h2>
            <p className="!text-[#6b6b6b] !text-sm sm:!text-base !leading-[1.75] !mb-4">
              {siteName} started with a simple idea: most homes do not need more
              stuff—they need the right pieces. We work with makers and suppliers
              who share our taste for clean lines, durable materials, and honest
              pricing.
            </p>
            <p className="!text-[#6b6b6b] !text-sm sm:!text-base !leading-[1.75] !mb-6">
              From first browse to delivery, we keep the experience calm—clear
              filters, thoughtful packaging, and support when you need it.
            </p>
            <Link
              href="/products"
              className="!inline-flex !items-center !gap-2 !text-[rgb(255,174,0)] !font-medium !no-underline !text-sm sm:!text-base hover:!gap-3 !transition-all"
            >
              Explore the shop
              <span className="!text-[18px]">→</span>
            </Link>
          </FadeInRightWhenVisible>
        </div>
      </section>

      <section className="!w-full !py-12 sm:!py-16 md:!py-20 !px-4 sm:!px-6 lg:!px-8 !bg-[#F7F7F7]">
        <div className="!max-w-[1400px] !mx-auto">
          <FadeInFromBottom>
            <div className="!text-center !mb-8 sm:!mb-10 md:!mb-12">
              <p className="!text-[#ff8a00] !uppercase !tracking-[0.2em] !text-xs sm:!text-sm !font-bold !mb-2">
                By the numbers
              </p>
              <h2 className="!text-xl sm:!text-2xl md:!text-[1.75rem] !font-bold !text-[#1E1E1E]">
                Built for calm, modern living
              </h2>
            </div>
          </FadeInFromBottom>

          <div className="!grid !grid-cols-2 lg:!grid-cols-4 !gap-3 sm:!gap-4 md:!gap-6">
            {aboutStats.map((stat) => (
              <FadeInFromBottom key={stat.label}>
                <article className="!bg-white !rounded-[20px] sm:!rounded-[24px] !p-5 sm:!p-6 md:!p-8 !shadow-sm !text-center !h-full">
                  <p className="!text-[1.75rem] sm:!text-[2rem] md:!text-[2.25rem] !font-bold !text-[#E58411] !leading-none">
                    {stat.value}
                  </p>
                  <p className="!text-gray-500 !text-xs sm:!text-sm !mt-2 !leading-snug">
                    {stat.label}
                  </p>
                </article>
              </FadeInFromBottom>
            ))}
          </div>
        </div>
      </section>

      <section className="!w-full !py-12 sm:!py-16 md:!py-20 !px-4 sm:!px-6 lg:!px-8 !bg-white">
        <div className="!max-w-[1400px] !mx-auto">
          <FadeInFromBottom>
            <div className="!text-center !mb-8 sm:!mb-10 md:!mb-12">
              <p className="!text-[#ff8a00] !uppercase !tracking-[0.2em] !text-xs sm:!text-sm !font-bold !mb-2">
                Our values
              </p>
              <h2 className="!text-xl sm:!text-2xl md:!text-[1.75rem] !font-bold !text-[#1E1E1E]">
                What we stand for
              </h2>
            </div>
          </FadeInFromBottom>

          <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-4 sm:!gap-6">
            {aboutValues.map((item, index) => (
              <FadeInFromBottom key={item.title}>
                <article className="!bg-[#F7F7F7] !rounded-[20px] sm:!rounded-[24px] !p-6 sm:!p-8 !h-full !flex !flex-col !gap-3">
                  <span className="!text-[#E58411] !text-xl sm:!text-2xl !font-bold !leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="!text-lg sm:!text-xl !font-semibold !text-[#1E1E1E]">
                    {item.title}
                  </h3>
                  <p className="!text-gray-500 !text-sm sm:!text-[15px] !leading-[1.65] !flex-1">
                    {item.desc}
                  </p>
                </article>
              </FadeInFromBottom>
            ))}
          </div>
        </div>
      </section>

      <section className="!w-full !py-12 sm:!py-16 md:!py-20 !px-4 sm:!px-6 lg:!px-8 !bg-[#F7F7F7]">
        <div className="!max-w-[1400px] !mx-auto">
          <FadeInFromBottom>
            <div className="!text-center !mb-8 sm:!mb-10 md:!mb-12">
              <p className="!text-[#ff8a00] !uppercase !tracking-[0.2em] !text-xs sm:!text-sm !font-bold !mb-2">
                Timeline
              </p>
              <h2 className="!text-xl sm:!text-2xl md:!text-[1.75rem] !font-bold !text-[#1E1E1E]">
                Our journey
              </h2>
            </div>
          </FadeInFromBottom>

          <div className="!flex !flex-col !gap-4 sm:!gap-5 md:!gap-6 !max-w-[720px] !mx-auto">
            {aboutTimeline.map((item) => (
              <FadeInLeftWhenVisible key={item.year}>
                <article className="!bg-white !rounded-[20px] sm:!rounded-[24px] !shadow-sm hover:!shadow-md !transition !p-5 sm:!p-6 md:!p-8 !flex !gap-4 sm:!gap-6 !items-start">
                  <span className="!text-[#E58411] !text-lg sm:!text-xl !font-bold !leading-none !shrink-0 !min-w-[3.5rem] sm:!min-w-[4rem]">
                    {item.year}
                  </span>
                  <div className="!min-w-0">
                    <h3 className="!text-base sm:!text-lg !font-semibold !text-[#1E1E1E] !mb-2">
                      {item.title}
                    </h3>
                    <p className="!text-gray-500 !text-sm sm:!text-[15px] !leading-[1.65]">
                      {item.desc}
                    </p>
                  </div>
                </article>
              </FadeInLeftWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="!w-full !py-12 sm:!py-16 md:!py-20 !px-4 sm:!px-6 lg:!px-8 !bg-white">
        <FadeInFromBottom>
          <div className="!max-w-[1400px] !mx-auto !grid !grid-cols-1 md:!grid-cols-[1fr_auto] !gap-6 md:!gap-10 !items-center !bg-[#1F2124] !rounded-[20px] sm:!rounded-[24px] !px-6 sm:!px-10 md:!px-12 !py-10 sm:!py-12 md:!py-14 !overflow-hidden !relative">
            <div
              className="!absolute !-top-20 !-right-16 !w-56 !h-56 !rounded-full !bg-[#E58411]/20 !blur-3xl !pointer-events-none"
              aria-hidden
            />
            <div className="!relative !text-center md:!text-left">
              <h2 className="!text-[1.375rem] sm:!text-[1.625rem] md:!text-[1.875rem] !font-bold !text-white !mb-3 !leading-snug">
                Ready to refresh your space?
              </h2>
              <p className="!text-[#b0b3b8] !text-sm sm:!text-base !leading-relaxed !max-w-[480px] !mx-auto md:!mx-0">
                Browse tables, chairs, and more—filtered by material and price.
              </p>
            </div>
            <div className="!relative !flex !flex-col sm:!flex-row !gap-3 !justify-center md:!justify-end">
              <Link
                href="/products"
                className="!inline-flex !items-center !justify-center !gap-2 !px-6 !py-3 !rounded-full !bg-[#E58411] !text-white !font-semibold !text-sm sm:!text-base !no-underline hover:!bg-[#d0770f] !transition-colors"
              >
                View products
                <ArrowForwardIcon className="!text-[18px]" />
              </Link>
              <Link
                href="/"
                className="!inline-flex !items-center !justify-center !px-6 !py-3 !rounded-full !border !border-white/30 !text-white !font-medium !text-sm sm:!text-base !no-underline hover:!bg-white/10 !transition-colors"
              >
                Back to home
              </Link>
            </div>
          </div>
        </FadeInFromBottom>
      </section>
    </>
  );
};

export default AboutView;
