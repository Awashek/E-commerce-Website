import React from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
export default function Sidebar() {
  return (
    <>
      <section>
        <div>
            <h1 className='text-5xl pt-3 pb-3'>🛒</h1>
        </div>
        <Category />
        <Colors />
        <Price />
      </section>
    </>
  )
}
