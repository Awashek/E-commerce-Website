import React from 'react'

export default function Category() {
  return (
    <div>
      <h2 className='text-2xl mb-1'>Category</h2>
      <div className='flex flex-col'>
        <label htmlFor="" className='label'>
          <input type="radio" name="test"/>
          <span>All</span>
        </label>

        <label htmlFor="" className='label'>
          <input type="radio" name="test"/>
          <span>Sneaker</span>
        </label>

        <label htmlFor="" className='label'>
          <input type="radio" name="test"/>
          <span>Flats</span>
        </label>

        <label htmlFor="" className='label'>
          <input type="radio" name="test"/>
          <span>Sandals</span>
        </label>

        <label htmlFor="" className='label'>
          <input type="radio" className="bg-cyan-500" name="test"/>
          <span>Heels</span>
        </label>
      </div>
    </div>
  )
}
