import {
  FadeInFromBottom,
  FadeInLeftWhenVisible,
} from "@/components/ui/animations";
import { siteName } from "@/lib/site";

const HeroSection = () => {
  return (
    <section
      className="!w-full !min-h-[100svh] !flex !items-center !bg-cover !bg-center !bg-no-repeat !border-none !pt-24 !pb-12 sm:!pt-28 md:!pb-16"
      style={{
        backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(255,255,255,0) 85%,
        rgb(255,255,255) 100%
      ),
      url('/hero.png')
    `,
      }}
    >
      <div className="!w-full !max-w-[1400px] !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <div className="!w-full !max-w-4xl !mx-auto !flex !flex-col !items-center !justify-center !gap-4 sm:!gap-5 md:!gap-6 !text-center">
          <h1 className="!text-[1.75rem] min-[480px]:!text-[2rem] !leading-[1.15] !font-extrabold !text-[var(--text-color)] sm:!text-[2.75rem] md:!text-[3.5rem] lg:!text-[4rem] xl:!text-[4.5rem]">
            <FadeInFromBottom>
              Make your interior more minimalistic & modern
            </FadeInFromBottom>
          </h1>

          <p className="!text-base sm:!text-lg md:!text-xl lg:!text-2xl !w-full sm:!w-[90%] md:!w-[75%] lg:!w-[60%] !font-light !text-[var(--description-color)]">
            <FadeInFromBottom>
              Turn your room with {siteName} into a lot more minimalist and modern
              with ease and speed
            </FadeInFromBottom>
          </p>
          <FadeInLeftWhenVisible>
            <input
              type="text"
              placeholder="🔍  Search for products..."
              className="!w-full !max-w-[280px] sm:!max-w-[320px] !px-4 sm:!px-5 !py-2.5 sm:!py-3 !rounded-[25px] !text-sm sm:!text-base !outline-none !transition-all !duration-300 !bg-[var(--blur-inherit)] focus:!border-[#96999c] focus:!ring-[3px] focus:!ring-[rgba(25,118,210,0.15)] placeholder:!text-[var(--description-color)]"
            />
          </FadeInLeftWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
