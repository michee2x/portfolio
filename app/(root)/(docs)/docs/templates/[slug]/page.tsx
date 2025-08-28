import React from 'react'



const page =  async ({params}:{params:Promise<{slug:string}>}) => {
  const {slug} = await params
  return (
    <div>template page. showing {slug} template</div>
  )
}

export default page