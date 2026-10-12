import {
  FadeInLeftWhenVisible,
  FadeInRightWhenVisible,
} from "@/components/ui/animations";
import { siteName } from "@/lib/site";

const Materials = () => {
  return (
    <section className="!w-full !py-[120px] !bg-white !flex !align-center !justify-center">
      <div className="!w-[90%] !mx-auto !px-4 !grid !grid-cols-1 lg:!grid-cols-2 !gap-[80px] !items-center">
        <div>
          <FadeInLeftWhenVisible>
            <p className="!text-[#E58411] !tracking-[0.2em] !uppercase !text-[14px] !font-medium !mb-4">
              Materials
            </p>

            <h2 className="!text-[40px] !leading-[1.2] !font-bold !text-[#1E1E1E] !mb-6">
              Very Serious <br />
              Materials For Making <br />
              Furniture
            </h2>

            <p className="!text-[#7C7C7C] !max-w-[420px] !mb-6">
              {siteName} takes material choice seriously—premium woods and
              finishes selected for lasting quality, offered at a fair price for
              modern homes.
            </p>

            <a
              href="#"
              className="!inline-flex !items-center !gap-2 !text-[#E58411] !font-medium hover:!gap-4 !transition-all"
            >
              More Info
              <span className="!text-[18px]">→</span>
            </a>
          </FadeInLeftWhenVisible>
        </div>

        <div className=" !relative !flex !gap-6 max-lg:!flex-col !items-center">
          <div className="!flex !flex-col !gap-[10px]">
            <FadeInLeftWhenVisible>
              <img
                src="/img1.png"
                alt="Premium furniture material sample"
                className="!w-[300px] !h-[260px] !object-cover !rounded-[20px]"
              />
            </FadeInLeftWhenVisible>

            <FadeInLeftWhenVisible>
              <img
                src="/img2.png"
                alt="Wood texture for furniture"
                className="!w-[300px] !h-[290px] !object-cover !rounded-[20px]"
              />
            </FadeInLeftWhenVisible>
          </div>

          <FadeInRightWhenVisible>
            <img
              src="/img3.png"
              alt="Finished furniture material detail"
              className="!w-full !max-w-[550px] !h-[560px] !object-cover !rounded-[24px] !self-end !shadow-xl"
            />
          </FadeInRightWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default Materials;
