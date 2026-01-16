"use client";
import FadeInFromBottom from "@/components/FadeInWhenVisible/FadeFromBottom";
import FadeInLeftWhenVisible from "@/components/FadeInWhenVisible/FadeInLeftWhenVisible";
import FadeInRightWhenVisible from "@/components/FadeInWhenVisible/FadeInWhenVisible";
import React from "react";

const data = [
  { title: "Luxury facilities", desc: "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities." },
  { title: "Luxury facilities", desc: "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities." },
  { title: "Luxury facilities", desc: "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities." },
];

const WhyChoosing = () => {
  return (
    <section id="four" className="!w-full !flex !justify-center !py-[80px] max-[1024px]:!py-[60px] max-[640px]:!py-[40px]">
      <div className="!w-[90%] !max-w-[1500px] !grid !grid-cols-[1.2fr_1fr_1fr_1fr] !gap-[24px] max-[1200px]:!grid-cols-[1fr_1fr] max-[1200px]:!grid-rows-[auto_auto] max-[640px]:!grid-cols-1">
        <FadeInLeftWhenVisible>
            <div className="!min-h-[350px] !flex !flex-col !justify-center !px-[20px] !gap-[24px] max-[1200px]:!min-h-[260px] max-[640px]:!min-h-fit">
          <h1 className="!max-w-[280px] !text-[38px] !font-bold !leading-[1.15] max-[1024px]:!text-[32px] max-[640px]:!text-[28px]">
            Why <br /> Choosing Us
          </h1>
        </div>
        </FadeInLeftWhenVisible>
        {data.map((item, index) => (
          <FadeInRightWhenVisible key={index} >
            <div className="!min-h-[350px] !flex !flex-col !justify-center !px-[20px] !gap-[22px] max-[1200px]:!min-h-[260px] max-[640px]:!min-h-fit">
            <h3 className="!text-[23px] !font-[500]">{item.title}</h3>
            <p className="!max-w-[300px] !text-gray-500 !leading-[1.6] max-[640px]:!max-w-full">{item.desc}</p>
            <span className="!text-[rgb(255,174,0)] !cursor-pointer !inline-flex !items-center !gap-[6px]">
              More Info <span className="!text-[18px]">→</span>
            </span>
          </div>
          </FadeInRightWhenVisible>
        ))}

      </div>
    </section>
  );
};

export default WhyChoosing;
