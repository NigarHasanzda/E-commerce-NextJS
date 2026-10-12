import {
  FadeInLeftWhenVisible,
  FadeInRightWhenVisible,
} from "@/components/ui/animations";

const Experiences = () => {
  return (
    <section className="!w-full !py-12 sm:!py-16 md:!py-20 lg:!py-24 !px-4 sm:!px-6 lg:!px-8 !bg-white">
      <div className="!w-full !max-w-[1400px] !mx-auto !flex !flex-col lg:!flex-row !items-center !justify-between !gap-10 md:!gap-12 lg:!gap-16">
        <div className="!relative !w-full lg:!w-[48%] !max-w-[560px] lg:!max-w-none !mx-auto lg:!mx-0">
          <div className="!absolute !top-3 !left-3 sm:!top-5 sm:!left-5 md:!top-8 md:!left-8 !w-full !h-full !bg-[#f4f4f4] !rounded-[16px] sm:!rounded-[24px] !z-[0]" />
          <FadeInLeftWhenVisible>
            <img
              src="/Rectangle.png"
              alt="Modern interior experience"
              className="!relative !z-[2] !w-full !rounded-[16px] sm:!rounded-[24px] !shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />
          </FadeInLeftWhenVisible>
        </div>
        <div className="!w-full lg:!w-[48%] !flex !flex-col !gap-4 md:!gap-5 !text-center lg:!text-left">
          <FadeInRightWhenVisible>
            <span className="!text-[#ff8a00] !uppercase !tracking-[0.15em] sm:!tracking-[3px] !text-xs sm:!text-sm">
              Experiences
            </span>

            <h2 className="!text-[1.625rem] sm:!text-[2rem] md:!text-[2.5rem] lg:!text-[2.625rem] !font-bold !leading-[1.2] !my-3 md:!my-4 !text-[#1e1e1e]">
              We Provide You The Best Experience
            </h2>

            <p className="!text-[#6b6b6b] !text-sm sm:!text-base !leading-[1.75] md:!leading-[1.8] !max-w-[520px] !mx-auto lg:!mx-0">
              You don’t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and luxurious style and with premium quality
              materials.
            </p>

            <button
              type="button"
              className="!mt-2 sm:!mt-4 !inline-flex !items-center !justify-center lg:!justify-start !gap-2 !text-[#ff8a00] !font-semibold !bg-transparent !border-0 !p-0 !cursor-pointer !mx-auto lg:!mx-0"
            >
              More Info
              <span className="!text-lg sm:!text-xl">→</span>
            </button>
          </FadeInRightWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
