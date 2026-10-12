"use client";

import {
  FadeInLeftWhenVisible,
  FadeInRightWhenVisible,
} from "@/components/ui/animations";
import { whyChoosingItems } from "@/data/home";

const WhyChoosing = () => {
  return (
    <section
      id="why-choosing"
      className="!w-full !flex !justify-center !py-10 sm:!py-14 md:!py-16 lg:!py-20 !px-4 sm:!px-6"
    >
      <div className="!w-full !max-w-[1400px] !grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 !gap-6 md:!gap-8">
        <FadeInLeftWhenVisible>
          <div className="!flex !flex-col !justify-center !gap-4 sm:!col-span-2 lg:!col-span-1 lg:!min-h-[280px]">
            <h2 className="!text-[1.75rem] sm:!text-[2rem] md:!text-[2.25rem] lg:!text-[2.375rem] !font-bold !leading-[1.15]">
              Why <br className="max-sm:!hidden" /> Choosing Us
            </h2>
          </div>
        </FadeInLeftWhenVisible>
        {whyChoosingItems.map((item, index) => (
          <FadeInRightWhenVisible key={index}>
            <div className="!flex !flex-col !justify-center !gap-3 md:!gap-4 !py-2 lg:!min-h-[280px]">
              <h3 className="!text-lg sm:!text-xl md:!text-[1.35rem] !font-medium">
                {item.title}
              </h3>
              <p className="!text-gray-500 !text-sm sm:!text-base !leading-[1.6] !max-w-full">
                {item.desc}
              </p>
              <span className="!text-[rgb(255,174,0)] !cursor-pointer !inline-flex !items-center !gap-[6px] !text-sm sm:!text-base">
                More Info <span className="!text-[18px]">→</span>
              </span>
            </div>
          </FadeInRightWhenVisible>
        ))}
      </div>
    </section>
  );
};

export default WhyChoosing;
