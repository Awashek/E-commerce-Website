import React from 'react'

export default function Category() {
  return (
    <div>
      <h2 className='text-2xl mb-1'>Category</h2>
      <div className='flex flex-col'>
        <label htmlFor="" className='label'>
          <input type="radio" name="category"/>
          <span>All</span>
        </label>

        <label htmlFor="" className='label'>
          <input type="radio" name="category"/>
          <span>Sneaker</span>
        </label>

        <label htmlFor="" className='label'>
          <input type="radio" name="category"/>
          <span>Flats</span>
        </label>

        <label htmlFor="" className='label'>
          <input type="radio" name="category"/>
          <span>Sandals</span>
        </label>

        <label htmlFor="" className='label'>
          <input type="radio" name="category"/>
          <span>Heels</span>
        </label>
      </div>
    </div>
  )
}
