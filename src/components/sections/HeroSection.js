"use client";

import {
  FadeInFromBottom,
  FadeInLeftWhenVisible,
} from "@/components/ui/animations";
import { siteDescription, siteName } from "@/lib/site";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const heroStats = [
  { value: "200+", label: "Design pieces" },
  { value: "4.9", label: "Avg. rating" },
  { value: "48h", label: "Fast dispatch" },
];

const HeroSection = () => {
  return (
    <section
      className="!relative !w-full !min-w-0 !min-h-[480px] md:!min-h-[540px] lg:!min-h-[580px] !max-h-[780px] !flex !items-center !overflow-x-clip !pt-[96px] sm:!pt-[104px] !pb-10 md:!pb-14"
      aria-labelledby="home-hero-title"
    >
      <div
        className="!absolute !inset-0 !bg-cover !bg-center !bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
        aria-hidden
      />
      <div
        className="!absolute !inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 17, 20, 0.58) 0%, rgba(15, 17, 20, 0.45) 100%)",
        }}
        aria-hidden
      />
      <div
        className="!absolute !inset-x-0 !bottom-0 !h-16 sm:!h-20 md:!h-24 !pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.5) 40%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="!relative !w-full !max-w-[1400px] !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <div className="!flex !flex-col !items-center !text-center !gap-4 sm:!gap-5 md:!gap-6 !w-full !max-w-[min(100%,920px)] lg:!max-w-[980px] !mx-auto">
          <FadeInFromBottom>
            <span className="!inline-flex !items-center !gap-2 !px-3 !py-1.5 !rounded-full !bg-white/10 !border !border-white/20 !backdrop-blur-md !text-[11px] sm:!text-xs !font-semibold !uppercase !tracking-[0.18em] !text-[#ffcc80]">
              {siteName} · Spring collection
            </span>
          </FadeInFromBottom>

          <h1
            id="home-hero-title"
            className="!text-[1.875rem] sm:!text-[2.5rem] md:!text-[3rem] lg:!text-[3.25rem] !font-bold !leading-[1.08] !text-white !text-balance"
          >
            <FadeInFromBottom>
              Minimal furniture for spaces that breathe.
            </FadeInFromBottom>
          </h1>

          <p className="!text-sm sm:!text-base md:!text-lg !text-white/85 !leading-relaxed !w-full !max-w-[760px]">
            <FadeInFromBottom>{siteDescription}</FadeInFromBottom>
          </p>

          <FadeInLeftWhenVisible>
            <div className="!flex !flex-row !flex-wrap !gap-3 !justify-center !w-full">
              <Link
                href="/products"
                className="!inline-flex !items-center !justify-center !gap-2 !px-6 !py-3 !rounded-full !bg-[#E58411] !text-white !font-semibold !text-sm sm:!text-base !no-underline hover:!bg-[#d0770f] !transition-colors"
              >
                Shop collection
                <ArrowForwardIcon className="!text-[18px]" />
              </Link>
              <Link
                href="/about"
                className="!inline-flex !items-center !justify-center !px-6 !py-3 !rounded-full !border !border-white/35 !text-white !font-medium !text-sm sm:!text-base !no-underline hover:!bg-white/10 !transition-colors"
              >
                Our story
              </Link>
            </div>
          </FadeInLeftWhenVisible>

          <FadeInFromBottom>
            <ul className="!grid !grid-cols-3 !gap-3 sm:!gap-8 md:!gap-12 !w-full !max-w-[min(100%,520px)] sm:!max-w-xl md:!max-w-2xl !pt-1">
              {heroStats.map((stat) => (
                <li key={stat.label} className="!min-w-0 !px-1">
                  <p className="!text-lg sm:!text-xl !font-bold !text-white !whitespace-nowrap">
                    {stat.value}
                  </p>
                  <p className="!text-[10px] sm:!text-xs !text-white/60 !uppercase !tracking-wide !leading-snug">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </FadeInFromBottom>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
