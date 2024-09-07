import React, { useState } from 'react'
import Input from '../../../Input'
export default function Category({handleChange}) {
  

    return (
      <div className='pl-1'>
        <h2 className="text-2xl mb-1 mt-3">Category</h2>
        <div className="flex flex-col">
        <label>
          <input 
          onClick={handleChange}
          type="radio" 
          value=""
          name='cate'
          />
          <span> All</span>
        </label>
        <Input
        handleChange={handleChange}
        value= "sneakers"
        title = "Sneakers"
        name="cate"
        />

        <Input
        handleChange={handleChange}
        value= "flats"
        title = "Flats"
        name="cate"
        />

        <Input
        handleChange={handleChange}
        value= "sandals"
        title = "Sandals"
        name="cate"
        />
        <Input
        handleChange={handleChange}
        value= "sneakers"
        title = "sneakers"
        name="cate"
        />

    
      </div>
    </div>
    )
  }
  
