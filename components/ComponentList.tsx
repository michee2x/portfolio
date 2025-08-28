import { ComponentSchema } from '@/lib/types';
import React from 'react'
import ComponentRenderer from './componentRenderer';

const ComponentList = ({components}: {components:ComponentSchema[]}) => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
      {
        components.map((comp) => (
          <ComponentRenderer key={comp.id} comp={comp} />
        ))
      }
    </ul>
  );
}

export default ComponentList