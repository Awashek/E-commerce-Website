import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-slate-100'>
      <nav className='flex justify-between items-center w-[92%] mx-auto'>
        <div>
            <img className='w-16'
            src="/public/images/logo.png" alt="logo" 
            />    
        </div>
        <div className=''>
            <ul className='flex items-center gap-16'>
                <li>
                    <a className='hover:text-gray-500' href="#">Home</a>
                </li>
                <li>
                    <a className='hover:text-gray-500' href="#">Product</a>
                </li>
                <li>
                    <a className='hover:text-gray-500' href="#">About</a>
                </li>
                <li>
                    <a className='hover:text-gray-500' href="#">Contact</a>
                </li>
                <li>
                    <a className='hover:text-gray-500' href="#">Hello</a>
                </li>
            </ul>
        
        </div>              
        <div>
            <button className='bg-slate-800 text-white 
                px-5 py-2 rounded-full hover:bg-slate-600'>
                Sign in
            </button>
        </div>
        
      </nav>
    </header>
  )
}
