import { FadeInFromBottom } from "@/components/ui/animations";
import {
  bestSellingCategories,
  bestSellingProducts,
} from "@/data/home";
import Link from "next/link";

const SellingSection = () => {
  const activeCategory = "Chair";

  return (
    <section className="!bg-[#F7F7F7] !py-12 sm:!py-16 md:!py-20 !px-4 sm:!px-6 lg:!px-8">
      <div className="!w-full !max-w-[1400px] !mx-auto">
        <h2 className="!text-center !text-xl sm:!text-2xl md:!text-[1.75rem] lg:!text-[30px] !font-bold !mb-6 sm:!mb-8">
          Best Selling Product
        </h2>
        <div className="!flex !justify-center !mb-8 sm:!mb-12 md:!mb-14 !-mx-1">
          <div className="!bg-[#EEEEEE] !rounded-full !p-1 !flex !gap-1 sm:!gap-2 !max-w-full !overflow-x-auto [&::-webkit-scrollbar]:!hidden">
            {bestSellingCategories.map((item) => (
              <button
                key={item}
                type="button"
                className={`!shrink-0 !px-3 sm:!px-5 !py-1.5 sm:!py-2 !text-xs sm:!text-sm !rounded-full !whitespace-nowrap ${
                  item === activeCategory
                    ? "!bg-white !font-semibold !text-[#1E1E1E]"
                    : "!text-gray-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="!grid !grid-cols-1 min-[480px]:!grid-cols-2 lg:!grid-cols-4 !gap-5 sm:!gap-6 md:!gap-8">
          {bestSellingProducts.map((item) => (
            <FadeInFromBottom key={item.name}>
              <div className="!rounded-[20px] sm:!rounded-[24px] !shadow-sm hover:!shadow-md !transition !h-full !flex !flex-col">
                <div className="!flex !justify-center !p-4 sm:!p-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="!w-full !max-w-[140px] sm:!max-w-[160px] !h-[140px] sm:!h-[180px] !object-contain"
                  />
                </div>

                <div className="!bg-[#ffffff] !p-4 sm:!p-6 !rounded-b-[20px] sm:!rounded-b-[24px] !flex-1 !flex !flex-col">
                  <span className="!text-gray-400 !text-xs sm:!text-sm">
                    {item.category}
                  </span>

                  <h3 className="!font-semibold !text-[15px] sm:!text-[16px] !mt-1 !mb-2">
                    {item.name}
                  </h3>
                  <div className="!flex !gap-1 !mb-3 sm:!mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="!text-orange-400 !text-sm">
                          ★
                        </span>
                      ))}
                  </div>
                  <div className="!flex !items-center !justify-between !mt-auto">
                    <span className="!font-bold !text-base sm:!text-lg">
                      ${item.price}
                    </span>

                    <button
                      type="button"
                      className="!w-9 !h-9 sm:!w-10 sm:!h-10 !rounded-full !bg-[#0b132b] !text-white !flex !items-center !justify-center !text-lg sm:!text-xl hover:!scale-105 !transition"
                      aria-label={`Add ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </FadeInFromBottom>
          ))}
        </div>
      </div>
      <Link
        href="/products"
        className="!block !mx-auto !mt-6 sm:!mt-8 !text-center !text-sm sm:!text-base !text-orange-500 !no-underline hover:!opacity-80"
      >
        View All
        <span className="!text-[18px]">→</span>
      </Link>
    </section>
  );
};

export default SellingSection;
