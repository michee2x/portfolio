import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const ComponentOverview = () => {
  return (
    <section className="w-full flex flex-col pt-5 items-center h-auto">
      <div className="flex gap-4 text-[12.5px] lg:text-[16px]">
        <p>Latest component</p>
        <div>Aug 27, 2025</div>
        <div>Rating 7.32 of 10</div>
      </div>

      <h1 className="font-framer-Serif text-center text-slate-900 mt-10 text-3xl">
        Resolving Component Extra
      </h1>

      <div className="flex gap-3 items-end">
        <div className="size-10 mt-3 rounded-full bg-black"></div>
        <div className="flex flex-col">
          <Link
            href={"/profile"}
            className="flex text-[16px] lg:text-2xl font-framer-Cursive font-bold"
          >
            michee3x
          </Link>
          <span className="flex w-full h-[1.2px] bg-black" />
        </div>
      </div>

      <div className="w-full lg:w-[70%] relative aspect-[255/180] bg-secondary-foreground mt-10">
        <Image src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8fDI%3D" className='w-full h-full object-cover object-center' alt="latest component banner image" fill />
      </div>
    </section>
  );
}

export default ComponentOverview