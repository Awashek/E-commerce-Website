import React from 'react'
import {  } from "../../components/Input";
export default function Category() {
  return (
    <div>
      <h2 className='text-2xl mb-1'>Category</h2>
      <div className='flex flex-col'>
       <Input />

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
