import React from 'react'
import Button from '../Button'
export default function Recommended({handleClick}) {
  console.log(handleClick)
  return (
    <div className='mt-6 flex-grow border-b-2 border-solid 
    border-[#e5e5e5]'>
      <h2 className='text-3xl text-gray-500 text-center pb-2'>Recommended</h2>
      <div className='flex pl-[32%] mb-6'>
     
      <button 
    
      className='btns'>All Products</button>
      <button className='btns'>Nike</button>
      <button className='btns'>Adidas</button>
      <button className='btns'>Puma</button>
      <button className='btns'>Vans</button>
      </div>
    </div>
  )
}
