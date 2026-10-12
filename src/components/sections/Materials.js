import {
  FadeInLeftWhenVisible,
  FadeInRightWhenVisible,
} from "@/components/ui/animations";
import { siteName } from "@/lib/site";

const Materials = () => {
  return (
    <section className="!w-full !min-w-0 !py-12 sm:!py-16 md:!py-20 lg:!py-28 !px-4 sm:!px-6 lg:!px-8 !bg-white !overflow-x-clip">
      <div className="!w-full !max-w-[1400px] !mx-auto !grid !grid-cols-1 lg:!grid-cols-2 !gap-10 md:!gap-12 lg:!gap-16 !items-center !min-w-0">
        <div className="!text-center lg:!text-left">
          <FadeInLeftWhenVisible>
            <p className="!text-[#E58411] !tracking-[0.2em] !uppercase !text-xs sm:!text-sm !font-medium !mb-3 sm:!mb-4">
              Materials
            </p>

            <h2 className="!text-[1.75rem] sm:!text-[2rem] md:!text-[2.25rem] lg:!text-[2.5rem] !leading-[1.2] !font-bold !text-[#1E1E1E] !mb-4 sm:!mb-6">
              Very Serious Materials For Making Furniture
            </h2>

            <p className="!text-[#7C7C7C] !text-sm sm:!text-base !max-w-[420px] !mx-auto lg:!mx-0 !mb-5 sm:!mb-6">
              {siteName} takes material choice seriously—premium woods and
              finishes selected for lasting quality, offered at a fair price for
              modern homes.
            </p>

            <a
              href="#"
              className="!inline-flex !items-center !gap-2 !text-[#E58411] !font-medium hover:!gap-4 !transition-all !text-sm sm:!text-base"
            >
              More Info
              <span className="!text-[18px]">→</span>
            </a>
          </FadeInLeftWhenVisible>
        </div>

        <div className="!relative !flex !flex-col md:!flex-row !gap-4 sm:!gap-6 !items-center !w-full !min-w-0 !max-w-full">
          <div className="!flex !flex-row md:!flex-col !gap-3 sm:!gap-4 !w-full !min-w-0 md:!w-auto">
            <FadeInLeftWhenVisible>
              <img
                src="/img1.png"
                alt="Premium furniture material sample"
                className="!w-1/2 md:!w-[min(100%,280px)] lg:!w-[300px] !aspect-[4/3] sm:!aspect-auto sm:!h-[200px] md:!h-[260px] !object-cover !rounded-[16px] sm:!rounded-[20px]"
              />
            </FadeInLeftWhenVisible>

            <FadeInLeftWhenVisible>
              <img
                src="/img2.png"
                alt="Wood texture for furniture"
                className="!w-1/2 md:!w-[min(100%,280px)] lg:!w-[300px] !aspect-[4/3] sm:!aspect-auto sm:!h-[220px] md:!h-[290px] !object-cover !rounded-[16px] sm:!rounded-[20px]"
              />
            </FadeInLeftWhenVisible>
          </div>

          <FadeInRightWhenVisible>
            <img
              src="/img3.png"
              alt="Finished furniture material detail"
              className="!w-full !max-w-[550px] !aspect-[4/5] sm:!aspect-auto sm:!h-[320px] md:!h-[420px] lg:!h-[560px] !object-cover !rounded-[20px] sm:!rounded-[24px] !shadow-xl"
            />
          </FadeInRightWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default Materials;
