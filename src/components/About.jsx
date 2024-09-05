import React from 'react'
export default function About() {

  return (
    <div>

<div className='flex'>
    <div className='w-[30%] bg-blue-100'>
        <h1>Sidebar</h1>
    </div>
    <div className='w-[70%] bg-red-100'>
        <div className="flex flex-wrap justify-end p-4">
            <h1>Main Content</h1> {/* Example content */}
        </div>
    </div>
</div>
    </div>
  )
}
