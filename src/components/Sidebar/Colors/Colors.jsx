import React from 'react'

export default function Colors() {
  return (
    <div className='pr-8'>
      <h2 className='text-2xl mb-1 mt-3'>Color</h2>
      <div className='flex flex-col'>
        <label htmlFor="" className='label'>
          <input type="radio" name="color"/>
          <span>All</span>
        </label>

        <label htmlFor="" className='label'>
          <input type="radio" name="color"/>
          <span>Black</span>
        </label>

        <label htmlFor="" className='label'>
          <input type="radio" name="color"/>
          <span>Blue</span>
        </label>

        <label htmlFor="" className='label'>
          <input type="radio" name="color"/>
          <span>Green</span>
        </label>

        <label htmlFor="" className='label'>
          <input type="radio" name="color"/>
          <span>Red</span>
        </label>
        <label htmlFor="" className='label'>
          <input type="radio" name="color"/>
          <span>White</span>
        </label>
      </div>
    </div>
  )
}
