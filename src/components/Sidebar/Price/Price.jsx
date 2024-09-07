import React from 'react'
import Input from '../../Input'

export default function Price({ handleChange }) {
  return (
    <div>
      <h2 className="text-2xl mb-1 mt-3">Price</h2>
      <div className="flex flex-col">
        <label>
          <input 
            onChange={handleChange}
            type="radio" 
            value=""
            name='price'
          />
          <span className='checkmark'></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0-50"
          name="price"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50-100"
          name="price"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100-150"
          name="price"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="price"
        />
      </div>
    </div>
  )
}