import React from 'react'
import { products } from '../../db/Products'

export default function CartInfo() {

  return (
    <>
    <div className='flex flex-row p-5 border-b-4 border-slate-800 '>
        <i className="fa-solid fa-cart-shopping text-4xl items-center mx-6 text-slate-800"></i>
        <h2 className='text-4xl'>SHOPPING CART</h2>  
    </div>
    
      <div className='flex flex-row p-5 bg-blue-100 '>
        <div>
            <img 
            src={products[0].img} 
            alt={products[0].title}
            className='w-28 h-28 object-contain border-2 border-solid border-slate-800'
            />
        </div>
        <div className='pl-8 bg-yellow-100 w-[50%]'>
        <div className='flex flex-row bg-red-100 justify-between'>
        <h3 className='text-2xl'>{products[0].title}</h3>
        <i class="fa-solid fa-trash text-2xl "></i>
        </div>
        </div>
        
      </div>
    </>
  )
}
