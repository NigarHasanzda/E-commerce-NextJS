import Link from "next/link";
import { aboutValues } from "@/data/about";
import { siteFooterBlurb, siteName } from "@/lib/site";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const valueIcons = [
  VerifiedOutlinedIcon,
  ReplayOutlinedIcon,
  LocalShippingOutlinedIcon,
];

const AboutPageHeader = () => {
  return (
    <section
      className="!relative !w-full !min-h-[300px] md:!min-h-[340px] lg:!min-h-[360px] !bg-cover !bg-center !bg-no-repeat !overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            105deg,
            rgba(31, 33, 36, 0.9) 0%,
            rgba(31, 33, 36, 0.6) 48%,
            rgba(31, 33, 36, 0.4) 100%
          ),
          url('/hero.png')
        `,
      }}
    >
      <div className="!absolute !inset-x-0 !bottom-0 !h-16 sm:!h-20 !bg-gradient-to-t !from-white !to-transparent !pointer-events-none" />

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
          <span className="!text-white !font-medium">About</span>
        </nav>

        <div className="!grid !grid-cols-1 lg:!grid-cols-[1.15fr_0.85fr] !gap-6 !items-center">
          <div>
            <p className="!text-[#ff8a00] !uppercase !tracking-[0.2em] !text-[10px] sm:!text-xs !font-bold !mb-2">
              {siteName} · Our story
            </p>
            <h1 className="!text-[1.75rem] sm:!text-[2.25rem] md:!text-[2.5rem] !font-bold !text-white !leading-[1.12] !mb-3">
              Rooms that feel{" "}
              <span className="!text-[#ffcc80]">quiet & modern</span>
            </h1>
            <p className="!text-[#d1d3d6] !max-w-[520px] !leading-relaxed !text-sm sm:!text-base">
              {siteFooterBlurb}
            </p>
          </div>

          <div className="!hidden lg:!flex !justify-end !relative !-my-2">
            <div className="!absolute !inset-4 !max-w-[240px] !ml-auto !bg-[#EEEEEE]/10 !rounded-[20px] !border !border-white/10" />
            <img
              src="/Rectangle.png"
              alt=""
              className="!relative !z-[1] !max-w-[220px] !w-full !object-cover !rounded-[16px] !shadow-[0_16px_32px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>

        <div className="!mt-5 md:!mt-6 !grid !grid-cols-1 sm:!grid-cols-3 !gap-2">
          {aboutValues.map(({ title, desc }, index) => {
            const Icon = valueIcons[index] || VerifiedOutlinedIcon;
            return (
              <div
                key={title}
                className="!flex !items-center !gap-2 !px-3 !py-2.5 !rounded-xl !bg-white/10 !backdrop-blur-md !border !border-white/10"
              >
                <div className="!w-8 !h-8 !rounded-full !bg-[#FFF4E5] !flex !items-center !justify-center !shrink-0">
                  <Icon className="!text-[#E58411] !text-[17px]" />
                </div>
                <div className="!min-w-0">
                  <p className="!text-white !text-xs !font-semibold !truncate">
                    {title}
                  </p>
                  <p className="!text-[#b0b3b8] !text-[10px] !leading-snug !line-clamp-2">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPageHeader;
