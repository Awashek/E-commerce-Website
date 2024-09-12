import React from 'react'
import { products } from '../../db/Products'
export default function CartInfo() {

  return (
    <>
    
    <h2 className='text-4xl p-5 border-b-4 border-slate-800 '>SHOPPING CART</h2>
      <div>
        <h3>{products[0].title}</h3> 
      </div>
    </>
  )
}
