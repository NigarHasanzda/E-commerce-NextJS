"use client";

import { FadeInFromBottom } from "@/components/ui/animations";
import { testimonials } from "@/data/home";

const Testimonials = () => {
  return (
    <section className="!py-12 sm:!py-16 md:!py-20 !bg-white !font-sans !px-4 sm:!px-6">
      <div className="!w-full !max-w-[1400px] !mx-auto">
        <div className="!text-center !mb-8 sm:!mb-12 md:!mb-16">
          <h4 className="!text-orange-500 !uppercase !tracking-widest !text-xs sm:!text-sm !font-bold !mb-2">
            Testimonials
          </h4>
          <h2 className="!text-2xl sm:!text-3xl md:!text-4xl !font-bold !text-gray-900">
            Our Client Reviews
          </h2>
        </div>
        <div className="!grid !grid-cols-1 md:!grid-cols-2 xl:!grid-cols-3 !gap-6 sm:!gap-8">
          {testimonials.map((item) => (
            <FadeInFromBottom key={item.id} block>
              <article className="!w-full !max-w-[370px] !mx-auto !flex !flex-col !rounded-[24px] sm:!rounded-[30px] !overflow-hidden !shadow-xl !bg-gray-100">
                <div
                  className="!w-full !min-h-[200px] sm:!min-h-[240px] !flex-1 !bg-gray-200 !bg-cover !bg-center"
                  style={{
                    backgroundImage: `url(${item.bgImage})`,
                  }}
                  role="img"
                  aria-label={`Review backdrop for ${item.name}`}
                />

                <div className="!relative !bg-white !mx-4 sm:!mx-5 !-mt-12 sm:!-mt-14 !mb-4 sm:!mb-5 !rounded-2xl !p-5 sm:!p-6 !pt-11 sm:!pt-12 !text-center !shadow-md">
                  <div className="!absolute !-top-9 sm:!-top-10 !left-1/2 !-translate-x-1/2 !w-16 !h-16 sm:!w-20 sm:!h-20 !rounded-full !border-4 !border-white !overflow-hidden !shadow-lg !bg-gray-200">
                    <img
                      src={item.profileImage}
                      alt={item.name}
                      className="!w-full !h-full !object-cover"
                    />
                  </div>

                  <h3 className="!text-lg sm:!text-xl !font-bold !text-gray-800 !mb-1">
                    {item.name}
                  </h3>
                  <p className="!text-gray-400 !text-xs !mb-3 sm:!mb-4">{item.job}</p>
                  <p className="!text-gray-600 !text-xs sm:!text-sm !italic !leading-relaxed !mb-3 sm:!mb-4">
                    &quot;{item.comment}&quot;
                  </p>

                  <div className="!flex !justify-center !gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < item.stars
                            ? "!text-orange-400 !text-sm"
                            : "!text-gray-200 !text-sm"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeInFromBottom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
