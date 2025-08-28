import Footer from '@/components/footer';
import Header from '@/components/Header';
import { AppSidebar } from '@/components/Side-Bar';
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <div className='h-auto w-auto lg:hidden'>
        <AppSidebar />
      </div>
      <Header />
      <div className="mt-20 bg-[#e9e9e9] pb-20 px-3 lg:px-8 w-screen">
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default layout