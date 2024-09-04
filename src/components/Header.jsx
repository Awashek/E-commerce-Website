import React, { createElement } from 'react'
import {Link, NavLink} from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-slate-100 shadow sticky z-50 top-0'>
      <nav className='flex justify-between items-center w-[92%] mx-auto sticky z-50'>
        <Link>
            <img className='w-16'
            src="/public/images/logo.png" alt="logo" 
            />    
        </Link>
        <div className=''>
            <ul className='flex items-center gap-16'>
                <li>
                    <Link className='hover:text-gray-500' to="/">Home</Link>
                </li>
                <li>
                    <Link className='hover:text-gray-500' to="/Login">Login</Link>
                </li>
                <li>
                    <Link className='hover:text-gray-500' to="/About">About</Link>
                </li>
                <li>
                    <Link className='hover:text-gray-500' to="#">Contact</Link>
                </li>
                
            </ul>
        
        </div>              
        <div className='flex items-center'>
            <i className="fa-solid fa-cart-shopping text-2xl items-center mx-6 "></i>

            <button className='bg-slate-800 text-white 
                px-5 py-2 rounded-full hover:bg-slate-600'>
                Sign in
            </button>
        </div>
        
      </nav>
    </header>
  )
}
