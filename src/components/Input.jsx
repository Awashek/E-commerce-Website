import React from 'react'

export default function Input({handleChange,value,title,name}) {
  return (
      <label className='label'>
          <input 
          onChange={handleChange}
          type="radio" 
          value={value}
          name={name} 
          className='cursor-pointer'/>
          <span>{title}</span>
        </label>
  )
}
