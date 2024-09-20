import React from 'react'
import Recommended from '../Recommended/Recommended'
import Sidebar from '../Sidebar/Sidebar'
import { useOutletContext } from 'react-router-dom'

export default function Products() {
    const {result, handleChange, handleClick} = useOutletContext() 
  return (
  <>
    <div className='flex min-h-screen'>
                <Sidebar handleChange={handleChange}/>
            <div className='flex flex-col w-full'>
                    <Recommended handleClick= {handleClick}/>
                <div className='w-full flex-grow min-h-screen'> 
                    {result}
                </div>
            </div>
        </div>
    </>
  )
}
