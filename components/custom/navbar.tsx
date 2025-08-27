import Link from 'next/link';
import React from 'react'
import {MdMenu} from "react-icons/md"

const NavBar = () => {
  return (
    <div className="w-full h-min fixed top-0 left-0 z-10 px-[24px] pt-[16px]">
      <div className="z-10 w-full relative h-auto">
        <header className="w-full bg-white/5 border-[1.2px] border-zinc-700 backdrop-blur-[28px] h-full flex items-center flex-nowrap p-[12px] relative">
          <div className="flex-1 flex gap-[unset] items-center justify-between">
            <Link href={"/"} className="font-sans text-2xl">
              Metryx.
            </Link>

            <div className="w-min flex gap-5 items-center h-min">
              <button className="w-fit bg-zinc-700 h-fit">
                <Link
                  href={"/"}
                  className="px-[16px] py-[10px] flex items-center justify-center flex-nowrap"
                >
                  <p className='tracking-[1.5px] text-[12px] uppercase leading-[150%] whitespace-pre'>Lets Talk</p>
                </Link>
              </button>

                <MdMenu className="text-3xl" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default NavBar