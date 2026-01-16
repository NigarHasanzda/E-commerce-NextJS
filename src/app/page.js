import Image from "next/image";
import "./globals.css";
import WhyChoosing from "@/components/Sections/ChoosingSection/WhyChoosing";
import SellingSection from "@/components/Sections/SellingSection/SellingSection";
import Expierences from "@/components/Sections/Expierences/Expierences";
import Materials from "@/components/Sections/Materials/Materials";
import Testimonials from "@/components/Sections/Testimonials/Testimonials";

export default function Home() {
  return (
<>
  <section id="hero-section">
    <div className="container">
      <div className="hero-text">
        <h1 className="hero-header">Make your interior more
minimalistic & modern</h1>
        <p className="hero-description">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        <input type="text" placeholder="Search for products..." className="search-bar" />
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
