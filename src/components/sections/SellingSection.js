import { FadeInFromBottom } from "@/components/ui/animations";
import {
  bestSellingCategories,
  bestSellingProducts,
} from "@/data/home";

const SellingSection = () => {
  const activeCategory = "Chair";

  return (
    <section className="!bg-[#F7F7F7] !py-20 !px-4 sm:!px-6 lg:!px-10">
      <div className="!max-w-[80%] !mx-auto">
        <h2 className="!text-center !text-[22px] sm:!text-[26px] lg:!text-[30px] !font-bold !mb-8">
          Best Selling Product
        </h2>
        <div className="!flex !justify-center !mb-14">
          <div className="!bg-[#EEEEEE] !rounded-full !p-1 !flex !gap-2">
            {bestSellingCategories.map((item) => (
              <button
                key={item}
                type="button"
                className={`!px-5 !py-2 !text-sm !rounded-full ${
                  item === activeCategory
                    ? "!bg-white !font-semibold"
                    : "!text-gray-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 !gap-8">
          {bestSellingProducts.map((item) => (
            <FadeInFromBottom key={item.name}>
              <div className="!rounded-[24px] !shadow-sm hover:!shadow-md !transition">
                <div className="!flex !justify-center !mb-6 !p-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="!w-[160px] !h-[180px] !object-contain"
                  />
                </div>

                <div className="!bg-[#ffffff] !p-6 !rounded-b-[24px]">
                  <span className="!text-gray-400 !text-sm">{item.category}</span>

                  <h3 className="!font-semibold !text-[16px] !mt-1 !mb-2">
                    {item.name}
                  </h3>
                  <div className="!flex !gap-1 !mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="!text-orange-400">
                          ★
                        </span>
                      ))}
                  </div>
                  <div className="!flex !items-center !justify-between">
                    <span className="!font-bold !text-[18px]">${item.price}</span>

                    <button
                      type="button"
                      className="!w-[40px] !h-[40px] !rounded-full !bg-[#0b132b] !text-white !flex !items-center !justify-center !text-xl hover:!scale-105 !transition"
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
      <span className="!block !mx-auto !my-[20px] !text-center !text-[16px] !text-orange-500">
        View All
        <span className="!text-[18px]">→</span>
      </span>
    </section>
  );
};

export default SellingSection;
