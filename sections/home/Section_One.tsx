import { CodeBlockDemo } from '@/components/CodeBlockDemo';
import ComponentList from '@/components/ComponentList'
import ComponentOverview from '@/components/ComponentOverview'
import { ComponentsDB } from '@/lib/constant';
import React from 'react'

const Section_One = () => {
  return (
    <div className="w-full h-auto">
      <ComponentOverview />
      <div className="w-full mt-16 lg:mt-24 min-h-screen">
        <span>Collections</span>
        <div className="text-3xl mt-4 font-semibold">
          <h1>Explore more</h1>
          <h1>great collections.</h1>
        </div>

        <ComponentList components={ComponentsDB} />
      </div>
    </div>
  );
}

export default Section_One