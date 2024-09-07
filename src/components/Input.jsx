import React from 'react'

export default function Input({handleChange,value,title,name}) {
  return (
      <label className='label'>
          <input 
          onChange={handleChange}
          type="radio" 
          value={value}
          name={name} 
          // color={color}
          className='cursor-pointer bg-red-300'/>
          <span>{title}</span>
        </label>
  )
}
