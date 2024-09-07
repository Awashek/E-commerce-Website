import React from 'react'

export default function Input({handleChange,value,title,name}) {
  return (
      <label htmlFor="" className='label'>
          <input 
          onClick={handleChange}
          type="radio" 
          value={value}
          name={name} 
          className='cursor-pointer'/>
          <span>{title}</span>
        </label>
  )
}
