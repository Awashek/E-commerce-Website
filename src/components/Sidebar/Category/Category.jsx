import React, { useState } from 'react'
import Input from '../../../Input'
export default function Category() {
  const [selectedCategory, setselectedCategory] =useState(null)
    return (
      <div className='pl-1'>
        <h2 className="text-2xl mb-1 mt-3">Category</h2>
        <div className="flex flex-col">
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
    )
  }
  
