"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { IoLogoBuffer } from "react-icons/io";
import { MdMenu } from 'react-icons/md';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navItems } from '@/lib/constant';
import { useSidebar } from "@/components/ui/sidebar";

export function InputSearch() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit" variant="outline">
        Subscribe
      </Button>
    </div>
  );
}



const Header = () => {
    const pathname = usePathname();
    const {
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
      } = useSidebar();
  return (
    <header className="fixed px-4 gap-4 lg:px-10 top-0 left-0 w-full h-16 bg-white/90 backdrop-blur-md border-b border-gray-200 flex items-center justify-between z-50">
      <div className='flex items-center gap-10'>
        <div className="flex items-center h-full">
          <MdMenu onClick={() => setOpenMobile(true)} className="text-3xl mr-4 lg:hidden cursor-pointer" />
          <Link href={"/"}>
            <IoLogoBuffer className="text-3xl" />
          </Link>
        </div>

        <ul className='hidden lg:flex gap-4'>
          {
            navItems.map(i => {
                return (
                  <li key={i.id}>
                    <Link
                      href={`${i.path}`}
                      className={cn(
                        "text-base cursor-pointer capitalize",
                        pathname === `${i.path}`
                          ? "text-blue-500"
                          : "text-gray-700 hover:text-blue-500"
                      )}
                    >
                      {i.label}
                    </Link>
                  </li>
                );
            })
          }
        </ul>
      </div>

      <div className="flex w-full max-w-sm items-center gap-2">
        <Input
          type="search"
          className="bg-zinc-100 p-5 text-white-200"
          placeholder="Search Components"
        />
        <Button type="submit" className="border-black hidden lg:block" variant="outline">
          login
        </Button>
        <Button type="submit" className='hidden lg:block'>Signup</Button>
      </div>
    </header>
  );
}

export default Header