import React from 'react'

export default function Price() {
  return (
    <div className='pl-2'>
    <h2 className='text-2xl mb-1 mt-3'>Price</h2>
    <div className='flex flex-col'>
      <label htmlFor="" className='label'>
        <input type="radio" name="price"/>
        <span>All</span>
      </label>

      <label htmlFor="" className='label'>
        <input type="radio" name="price"/>
        <span>$0-$50</span>
      </label>

      <label htmlFor="" className='label'>
        <input type="radio" name="price"/>
        <span>$50-$100</span>
      </label>

      <label htmlFor="" className='label'>
        <input type="radio" name="price"/>
        <span>$100-$150</span>
      </label>

      <label htmlFor="" className='label'>
        <input type="radio" name="price"/>
        <span>Above $150</span>
      </label>
    </div>
  </div>
  )
}
