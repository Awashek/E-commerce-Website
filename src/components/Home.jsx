import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link className='relative'>
            <img className="w-full h-auto object-cover"
            src="/public/images/logo.png" alt="logo" 
            />    
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to LaceUp!</h1>
        <p className="mb-6 text-center">Find the best shoes for your style.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Shop Now
        </button>
        </div>
        </Link>
    </div>
  )
}
