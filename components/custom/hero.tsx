import React from 'react'
import {FaArrowDown} from "react-icons/fa"

const hero = () => {
  return (
    <div className="w-screen pt-24 px-5 flex flex-col items-center justify-center h-[110vh]">
      <div className="h-[260px] lg:h-[622px] lg:w-[500px] w-[239px] lg:max-w-[30%] relative">
        <div className="absolute inset-0">
          <img
            decoding="async"
            sizes="min(239.4px, min(100vw - 48px, 1400px) * 0.7)"
            src="/1756164257327_lvuw9v_2_0.jpg"
            alt=""
            className="w-full aspect-square rounded-full object-cover object-center"
          />
        </div>
      </div>

      <div className="w-full h-min gap-[48px] flex-nowrap flex flex-col items-center justify-center">
        <div className="w-full h-min gap-[16px] flex-nowrap flex flex-col items-center">
          <div>
            <p className="text-[64px] font-mono text-center lg:text-[128px] leading-[110%]">
              Web Designer
            </p>
            <p className="text-[64px] font-cursive text-center lg:text-[128px] leading-[110%]">
              & Developer
            </p>
          </div>
          <div className="flex items-center shrink-0 max-w-[600px] whitespace-pre-wrap break-words">
            <p className="text-[18px] font-sans text-center lg:text-[24px]">
              Premium Web Design,<br className='lg:hidden' /> Development, and SEO services to help your
              business stand out.
            </p>
          </div>
        </div>
        <div className="flex gap-[16px] items-center justify-center">
          <span className="flex size-[40px] rounded-full border-[1.2px] border-white items-center justify-center">
            <FaArrowDown />
          </span>
          <p className="whitespace-pre shrink-0 font-framer uppercase">My services</p>
        </div>
      </div>
    </div>
  );
}

export default hero