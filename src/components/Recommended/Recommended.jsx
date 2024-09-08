import React from 'react'
import Button from '../Button'
export default function Recommended({handleClick}) {
  return (
    <div className='mt-6 flex-grow border-b-2 border-solid 
    border-[#e5e5e5]'>
      <h2 className='text-3xl text-gray-500 text-center pb-2'>Recommended</h2>
      <div className='flex pl-[32%] mb-6'>
      <button
      onClick={handleClick} 
      className='btns'>All Products</button>
      <Button handleClick={handleClick} title="Nike" value="Nike"/>
      <Button handleClick={handleClick} title="Adidas" value="Adidas"/>
      <Button handleClick={handleClick} title="Puma" value="Puma"/>
      <Button handleClick={handleClick} title="Vans" value="Vans"/>
      </div>
    </div>
  )
}
