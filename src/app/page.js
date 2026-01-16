import Image from "next/image";
import "./globals.css";
import WhyChoosing from "@/components/Sections/ChoosingSection/WhyChoosing";
import SellingSection from "@/components/Sections/SellingSection/SellingSection";
import Expierences from "@/components/Sections/Expierences/Expierences";
import Materials from "@/components/Sections/Materials/Materials";
import Testimonials from "@/components/Sections/Testimonials/Testimonials";
import FadeInFromBottom from "@/components/FadeInWhenVisible/FadeFromBottom";
import FadeInLeftWhenVisible from "@/components/FadeInWhenVisible/FadeInLeftWhenVisible";

export default function Home() {
  return (
<>
  <section
  className="!w-full !h-[110vh] !bg-cover !bg-center !bg-no-repeat !border-none"
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
  <div className="!max-w-[1400px] !min-h-[800px] !h-auto !flex !flex-col !items-center !justify-center !mx-auto !px-[1rem] !bg-inherit">
    <div className="!w-[80%] !flex !flex-col !items-center !justify-center !gap-[15px]">
      
      <h1 className="!text-[4.5rem] !font-extrabold !text-center !text-[var(--text-color)]">
        <FadeInFromBottom>
          Make your interior more minimalistic & modern
        </FadeInFromBottom>
      </h1>

      <p className="!text-[1.5rem] !w-[60%] !text-center !mx-auto !font-light !text-[var(--description-color)]">
        <FadeInFromBottom>
          Turn your room with panto into a lot more minimalist and modern with ease and speed
        </FadeInFromBottom>
      </p>
      <FadeInLeftWhenVisible>

      <input
        type="text"
        placeholder="🔍  Search for products..."
        className="!w-[260px] max-[768px]:!w-[180px] !px-[1rem] max-[768px]:!px-[0.9rem] !py-[0.5rem] max-[768px]:!py-[0.45rem] !rounded-[25px] !text-[0.95rem] !outline-none !transition-all !duration-300 !bg-[var(--blur-inherit)] focus:!border-[#96999c] focus:!ring-[3px] focus:!ring-[rgba(25,118,210,0.15)] placeholder:!text-[var(--description-color)] placeholder:!text-[0.9rem]"
      />

      </FadeInLeftWhenVisible>
    </div>
  </div>
</section>

  <WhyChoosing/>
  <SellingSection/>
  <Expierences/>
  <Materials/>
  <Testimonials/>
  </>
  );
}
