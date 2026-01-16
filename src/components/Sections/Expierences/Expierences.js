import FadeInLeftWhenVisible from '@/components/FadeInWhenVisible/FadeInLeftWhenVisible'
import FadeInRightWhenVisible from '@/components/FadeInWhenVisible/FadeInWhenVisible'
import React from 'react'

const Expierences = () => {
  return (
<section className="!w-full !min-h-[90vh] !flex !items-center !justify-center !bg-white">
  <div className="!w-[90%] !flex !items-center !justify-between !gap-[80px] !h-fit">
    <div className="!relative !w-[45%] !h-fit">
      <div className="!absolute !top-[40px] !left-[40px] !w-full !h-full 
                      !bg-[#f4f4f4] !rounded-[24px] !z-[0]">
      </div>
      <FadeInLeftWhenVisible>
        <img
        src="/Rectangle.png"
        className="!relative !z-[2] !w-full !rounded-[24px] 
                   !shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
      />
      </FadeInLeftWhenVisible>
    </div>
    <div className="!w-[45%] !flex !flex-col !gap-[20px]">

      <FadeInRightWhenVisible>
        <span className="!text-[#ff8a00] !uppercase !tracking-[3px] !text-[14px]">
        Experiences
      </span>

      <h2 className="!text-[42px] !font-bold !leading-[1.2] !my-[15px] !text-[#1e1e1e]">
        We Provide You The <br /> Best Experience
      </h2>

      <p className="!text-[#6b6b6b] !text-[16px] !my-[15px] !leading-[1.8] !max-w-[520px]">
        You don’t have to worry about the result because all of these interiors
        are made by people who are professionals in their fields with an elegant
        and luxurious style and with premium quality materials.
      </p>

      <button className="!mt-[10px] !flex !items-center !gap-[10px] 
                         !text-[#ff8a00] !font-semibold">
        More Info
        <span className="!text-[20px]">→</span>
      
      </button>
      </FadeInRightWhenVisible>

    </div>
  </div>
</section>

  )
}

export default Expierences