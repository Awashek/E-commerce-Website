import React from 'react'
import { products } from '../../db/Products'
export default function CartInfo() {

  return (
    <>
    <div className='flex flex-row p-5 border-b-4 border-slate-800 '>
        <i className="fa-solid fa-cart-shopping text-4xl items-center mx-6 text-slate-800"></i>
        <h2 className='text-4xl'>SHOPPING CART</h2>  
    </div>
    
      <div className='flex flex-row p-5'>
        <div>
            <img 
            src={products[0].img} 
            alt={products[0].title}
            className='w-28 h-28 object-contain border-2 border-solid border-slate-800'
            />
        </div>
        <div className='pl-5'>
        <div className='flex flex-row'>
        <h3 className='text-3xl'>{products[0].title}</h3>
        <i class="fa-solid fa-trash text-3xl"></i>
        </div>

        </div>
        
      </div>
    </>
  )
}
