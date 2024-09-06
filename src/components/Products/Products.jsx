import React from 'react'
import { products } from '../../db/Products'
import Recommended from '../Recommended/Recommended'
import Sidebar from '../Sidebar/Sidebar'
import { useOutletContext } from 'react-router-dom'
export default function Products() {
    const {result} = useOutletContext() 
  return (
  <>
    <div className='flex min-h-screen'>
                <Sidebar />
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
