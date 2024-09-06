import React from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
export default function Sidebar() {
  return (
    <>
      <section className='flex flex-col p-4 w-[15%] min-h-screen border-r-2 border-solid 
            border-[#e5e5e5] items-center'>
        <div>
            <h1 className='text-4xl pt-3 pb-20'>🛒</h1>
        </div>
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  )
}
