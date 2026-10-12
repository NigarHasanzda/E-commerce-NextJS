import Link from "next/link";
import { productHighlights, products } from "@/data/products";
import { siteName } from "@/lib/site";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const highlightIcons = {
  "Free delivery": LocalShippingOutlinedIcon,
  "2-year warranty": VerifiedOutlinedIcon,
  "Easy returns": ReplayOutlinedIcon,
};

const inStockCount = products.filter((p) => p.inStock).length;

const ProductsPageHeader = () => {
  return (
    <section
      className="!relative !w-full !min-h-[300px] md:!min-h-[340px] !bg-cover !bg-center !bg-no-repeat !overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            105deg,
            rgba(31, 33, 36, 0.88) 0%,
            rgba(31, 33, 36, 0.55) 45%,
            rgba(31, 33, 36, 0.35) 100%
          ),
          url('/hero.png')
        `,
      }}
    >
      <div className="!absolute !inset-x-0 !bottom-0 !h-16 !bg-gradient-to-t !from-[#F7F7F7] !to-transparent !pointer-events-none" />

      <div className="!relative !max-w-[1400px] !mx-auto !px-4 !pt-[108px] !pb-8 md:!pb-10">
        <nav
          aria-label="Breadcrumb"
          className="!flex !items-center !gap-1 !text-xs !text-[#b0b3b8] !mb-3"
        >
          <Link
            href="/"
            className="!text-[#ffcc80] hover:!text-white !no-underline !transition"
          >
            Home
          </Link>
          <ChevronRightIcon className="!text-[16px] !text-gray-500" aria-hidden />
          <span className="!text-white !font-medium">Products</span>
        </nav>

        <div className="!grid !grid-cols-1 lg:!grid-cols-[1.15fr_0.85fr] !gap-6 !items-center">
          <div>
            <p className="!text-[#ff8a00] !uppercase !tracking-[0.2em] !text-[10px] !font-bold !mb-2">
              {siteName} · Shop
            </p>
            <h1 className="!text-[1.75rem] md:!text-[2.25rem] !font-bold !text-white !leading-[1.15] !mb-2">
              Furniture for a{" "}
              <span className="!text-[#ffcc80]">minimal home</span>
            </h1>
            <p className="!text-[#d1d3d6] !max-w-[420px] !leading-relaxed !text-sm !mb-4">
              Filter by material and price to build a calm, modern room.
            </p>

            <div className="!flex !flex-wrap !gap-2">
              <div className="!px-3 !py-1 !rounded-full !bg-white/10 !backdrop-blur-sm !border !border-white/15">
                <span className="!text-white !font-semibold !text-xs">
                  {products.length}
                </span>
                <span className="!text-[#b0b3b8] !text-xs !ml-1">products</span>
              </div>
              <div className="!px-3 !py-1 !rounded-full !bg-white/10 !backdrop-blur-sm !border !border-white/15">
                <span className="!text-white !font-semibold !text-xs">
                  {inStockCount}
                </span>
                <span className="!text-[#b0b3b8] !text-xs !ml-1">in stock</span>
              </div>
            </div>
          </div>

          <div className="!hidden lg:!flex !justify-end !relative !-my-2">
            <div className="!absolute !inset-4 !max-w-[220px] !ml-auto !bg-white/5 !rounded-[20px] !border !border-white/10" />
            <img
              src="/chair2.png"
              alt=""
              className="!relative !z-[1] !max-w-[200px] !w-full !object-contain !drop-shadow-[0_16px_32px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>

        <div className="!mt-5 md:!mt-6 !grid !grid-cols-1 sm:!grid-cols-3 !gap-2">
          {productHighlights.map(({ title, desc }) => {
            const Icon = highlightIcons[title] || VerifiedOutlinedIcon;
            return (
              <div
                key={title}
                className="!flex !items-center !gap-2 !px-3 !py-2 !rounded-xl !bg-white/10 !backdrop-blur-md !border !border-white/10"
              >
                <div className="!w-8 !h-8 !rounded-full !bg-[#FFF4E5] !flex !items-center !justify-center !shrink-0">
                  <Icon className="!text-[#E58411] !text-[17px]" />
                </div>
                <div>
                  <p className="!text-white !text-xs !font-semibold">{title}</p>
                  <p className="!text-[#b0b3b8] !text-[10px] !leading-snug">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsPageHeader;
