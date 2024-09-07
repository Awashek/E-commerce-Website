import React from 'react'
import Recommended from '../Recommended/Recommended'
import Sidebar from '../Sidebar/Sidebar'
import { useOutletContext } from 'react-router-dom'
export default function Products() {
    const {result, handleChange} = useOutletContext() 
  return (
  <>
    <div className='flex min-h-screen'>
                <Sidebar handleChange={handleChange}/>
            <div className='flex flex-col w-full'>
                    <Recommended />
                <div className='w-full flex-grow'> 
                    {result}
                </div>
            </div>
        </div>
    </>
  )
}
