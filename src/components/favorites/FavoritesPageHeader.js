import Link from "next/link";
import { siteName } from "@/lib/site";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const FavoritesPageHeader = ({ itemCount }) => {
  return (
    <section
      className="!relative !w-full !min-h-[260px] md:!min-h-[300px] !bg-cover !bg-center !bg-no-repeat !overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            105deg,
            rgba(31, 33, 36, 0.92) 0%,
            rgba(31, 33, 36, 0.55) 55%,
            rgba(229, 132, 17, 0.35) 100%
          ),
          url('/hero.png')
        `,
      }}
    >
      <div className="!absolute !inset-x-0 !bottom-0 !h-16 !bg-gradient-to-t !from-[#F7F7F7] !to-transparent !pointer-events-none" />

      <div className="!relative !max-w-[1400px] !mx-auto !px-4 sm:!px-6 lg:!px-8 !pt-[108px] !pb-8 md:!pb-10">
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
          <span className="!text-white !font-medium">Favorites</span>
        </nav>

        <p className="!text-[#ff8a00] !uppercase !tracking-[0.2em] !text-[10px] sm:!text-xs !font-bold !mb-2">
          {siteName} · Wishlist
        </p>
        <h1 className="!text-[1.75rem] sm:!text-[2.25rem] md:!text-[2.5rem] !font-bold !text-white !leading-[1.12] !mb-2">
          Your <span className="!text-[#ffcc80]">favorites</span>
        </h1>
        <p className="!text-[#d1d3d6] !text-sm sm:!text-base !max-w-[520px]">
          {itemCount > 0
            ? `${itemCount} saved piece${itemCount !== 1 ? "s" : ""}—come back anytime or move them to your basket.`
            : "Save pieces you love with the heart icon while you browse the shop."}
        </p>
      </div>
    </section>
  );
};

export default FavoritesPageHeader;
