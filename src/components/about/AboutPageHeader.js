import Link from "next/link";
import { siteFooterBlurb, siteName } from "@/lib/site";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AboutPageHeader = () => {
  return (
    <section className="!relative !w-full !overflow-hidden !min-h-[280px] sm:!min-h-[320px] md:!min-h-[360px]">
      <div
        className="!absolute !inset-0 !bg-cover !bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
        aria-hidden
      />
      <div
        className="!absolute !inset-0"
        style={{
          background: `
            linear-gradient(
              125deg,
              rgba(229, 132, 17, 0.92) 0%,
              rgba(255, 138, 0, 0.85) 28%,
              rgba(255, 174, 0, 0.75) 52%,
              rgba(255, 107, 74, 0.7) 78%,
              rgba(31, 33, 36, 0.88) 100%
            )
          `,
        }}
        aria-hidden
      />

      <div
        className="!absolute !-top-16 !-right-16 !w-56 !h-56 !rounded-full !bg-[#ffcc80]/40 !blur-2xl"
        aria-hidden
      />
      <div
        className="!absolute !bottom-10 !left-[10%] !w-40 !h-40 !rounded-full !bg-white/20 !blur-xl"
        aria-hidden
      />
      <div
        className="!absolute !top-1/3 !right-[20%] !w-24 !h-24 !rounded-full !bg-[#ff6b4a]/50 !blur-lg !hidden sm:!block"
        aria-hidden
      />

      <div className="!absolute !inset-x-0 !bottom-0 !h-20 !bg-gradient-to-t !from-white !to-transparent !pointer-events-none" />

      <div className="!relative !max-w-[1400px] !mx-auto !px-4 sm:!px-6 !pt-[108px] !pb-10 md:!pb-12">
        <nav
          aria-label="Breadcrumb"
          className="!flex !items-center !gap-1 !text-xs !text-white/80 !mb-4"
        >
          <Link
            href="/"
            className="!text-white !font-medium hover:!text-[#1F2124] !no-underline !transition"
          >
            Home
          </Link>
          <ChevronRightIcon className="!text-[16px] !text-white/60" aria-hidden />
          <span className="!text-white !font-semibold">About</span>
        </nav>

        <div className="!grid !grid-cols-1 lg:!grid-cols-[1.2fr_0.8fr] !gap-8 !items-end">
          <div>
            <p className="!inline-block !px-3 !py-1 !rounded-full !bg-white/25 !backdrop-blur-sm !text-white !uppercase !tracking-[0.2em] !text-[10px] sm:!text-xs !font-bold !mb-3 !border !border-white/30">
              About {siteName}
            </p>
            <h1 className="!text-[1.75rem] sm:!text-[2.25rem] md:!text-[2.75rem] !font-bold !text-white !leading-[1.12] !mb-3 !drop-shadow-sm">
              We help you build rooms that feel{" "}
              <span className="!text-[#1F2124] !bg-white/90 !px-2 !py-0.5 !rounded-lg !inline-block">
                quiet & modern
              </span>
            </h1>
            <p className="!text-white/90 !leading-relaxed !text-sm sm:!text-base !max-w-[560px]">
              {siteFooterBlurb}
            </p>
          </div>

          <div className="!hidden lg:!flex !justify-end !pb-2">
            <div className="!flex !gap-3">
              {["#1F2124", "#ffffff", "#ffcc80"].map((color) => (
                <div
                  key={color}
                  className="!w-14 !h-14 !rounded-2xl !shadow-lg !border-2 !border-white/40"
                  style={{ backgroundColor: color }}
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHeader;
