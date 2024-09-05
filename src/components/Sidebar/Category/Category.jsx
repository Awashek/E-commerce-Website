import React from 'react'

export default function Category() {
  return (
    <div className='items-start bg-red-200 mr-20'>
      <h2>Category</h2>
      <div className='flex flex-col pt-3'>
        <label htmlFor="">
          <input type="radio" name="test"/>
          <span>All</span>
        </label>

        <label htmlFor="">
          <input type="radio" name="test"/>
          <span>Sneaker</span>
        </label>

        <label htmlFor="">
          <input type="radio" name="test"/>
          <span>Flats</span>
        </label>

        <label htmlFor="">
          <input type="radio" name="test"/>
          <span>Sandals</span>
        </label>

        <label htmlFor="">
          <input type="radio" name="test"/>
          <span>Heels</span>
        </label>
      </div>
    </div>
  )
}
