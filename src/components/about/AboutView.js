"use client";

import {
  FadeInFromBottom,
  FadeInLeftWhenVisible,
  FadeInRightWhenVisible,
} from "@/components/ui/animations";
import AboutPageHeader from "@/components/about/AboutPageHeader";
import { aboutStats, aboutTimeline, aboutValues } from "@/data/about";
import { siteName } from "@/lib/site";
import Link from "next/link";

const AboutView = () => {
  return (
    <>
      <AboutPageHeader />

      <section className="!w-full !py-12 md:!py-16 !px-4 !bg-white">
        <div className="!max-w-[1400px] !mx-auto !grid !grid-cols-1 lg:!grid-cols-2 !gap-12 !items-center">
          <FadeInLeftWhenVisible>
            <div className="!relative !overflow-hidden !rounded-[24px]">
              <div className="!absolute !inset-4 sm:!inset-5 !bg-[#f4f4f4] !rounded-[24px]" />
              <img
                src="/Rectangle.png"
                alt="Panto interior styling"
                className="!relative !z-[1] !w-full !rounded-[24px] !shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
              />
            </div>
          </FadeInLeftWhenVisible>

          <FadeInRightWhenVisible>
            <p className="!text-[#E58411] !uppercase !tracking-[0.2em] !text-sm !font-medium !mb-3">
              Our story
            </p>
            <h2 className="!text-[1.75rem] md:!text-[2rem] !font-bold !text-[#1E1E1E] !mb-4 !leading-snug">
              Less clutter, more intention
            </h2>
            <p className="!text-[#6b6b6b] !leading-[1.8] !mb-4">
              {siteName} started with a simple idea: most homes do not need more
              stuff—they need the right pieces. We work with makers and suppliers
              who share our taste for clean lines, durable materials, and honest
              pricing.
            </p>
            <p className="!text-[#6b6b6b] !leading-[1.8] !mb-6">
              From first browse to delivery, we keep the experience calm—clear
              filters, thoughtful packaging, and support when you need it.
            </p>
            <Link
              href="/products"
              className="!inline-flex !items-center !gap-2 !text-[#ff8a00] !font-semibold !no-underline hover:!gap-3 !transition-all"
            >
              Explore the shop
              <span className="!text-lg">→</span>
            </Link>
          </FadeInRightWhenVisible>
        </div>
      </section>

      <section className="!w-full !py-12 !px-4 !bg-[#1F2124]">
        <div className="!max-w-[1400px] !mx-auto !grid !grid-cols-2 md:!grid-cols-4 !gap-6">
          {aboutStats.map((stat) => (
            <FadeInFromBottom key={stat.label}>
              <div className="!text-center !py-4">
                <p className="!text-[2rem] md:!text-[2.5rem] !font-bold !text-[#ffcc80]">
                  {stat.value}
                </p>
                <p className="!text-[#b0b3b8] !text-sm !mt-1">{stat.label}</p>
              </div>
            </FadeInFromBottom>
          ))}
        </div>
      </section>

      <section className="!w-full !py-14 md:!py-16 !px-4 !bg-[#F7F7F7]">
        <div className="!max-w-[1400px] !mx-auto">
          <FadeInFromBottom>
            <div className="!text-center !mb-10">
              <h2 className="!text-[1.5rem] md:!text-[1.875rem] !font-bold !text-[#1E1E1E]">
                What we stand for
              </h2>
            </div>
          </FadeInFromBottom>
          <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-6">
            {aboutValues.map((item) => (
              <FadeInFromBottom key={item.title}>
                <article className="!bg-white !rounded-[24px] !p-6 md:!p-8 !shadow-sm !h-full">
                  <h3 className="!text-lg !font-semibold !text-[#1E1E1E] !mb-3">
                    {item.title}
                  </h3>
                  <p className="!text-gray-500 !text-sm !leading-relaxed">
                    {item.desc}
                  </p>
                </article>
              </FadeInFromBottom>
            ))}
          </div>
        </div>
      </section>

      <section className="!w-full !py-14 !px-4 !bg-white">
        <div className="!max-w-[800px] !mx-auto">
          <FadeInFromBottom>
            <h2 className="!text-center !text-[1.5rem] !font-bold !text-[#1E1E1E] !mb-10">
              Our journey
            </h2>
          </FadeInFromBottom>
          <div className="!flex !flex-col !gap-8">
            {aboutTimeline.map((item, index) => (
              <FadeInLeftWhenVisible key={item.year}>
                <div className="!flex !gap-6 !items-start">
                  <span className="!text-[#E58411] !font-bold !text-lg !shrink-0 !w-16">
                    {item.year}
                  </span>
                  <div
                    className={`!flex-1 !pb-8 ${index < aboutTimeline.length - 1 ? "!border-b !border-gray-100" : ""}`}
                  >
                    <h3 className="!font-semibold !text-[#1E1E1E] !mb-2">
                      {item.title}
                    </h3>
                    <p className="!text-gray-500 !text-sm !leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeInLeftWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="!w-full !py-12 !px-4 !bg-[#F7F7F7]">
        <FadeInFromBottom>
          <div className="!max-w-[640px] !mx-auto !text-center !bg-white !rounded-[24px] !p-8 md:!p-10 !shadow-sm">
            <h2 className="!text-xl !font-bold !text-[#1E1E1E] !mb-3">
              Ready to refresh your space?
            </h2>
            <p className="!text-gray-500 !text-sm !mb-6">
              Browse tables, chairs, and more—filtered by material and price.
            </p>
            <Link
              href="/products"
              className="!inline-flex !items-center !justify-center !px-8 !py-3 !rounded-full !bg-[#1F2124] !text-white !font-medium !no-underline hover:!bg-[#E58411] !transition-colors"
            >
              View products
            </Link>
          </div>
        </FadeInFromBottom>
      </section>
    </>
  );
};

export default AboutView;
