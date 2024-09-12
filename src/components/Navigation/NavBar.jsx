import {Link, NavLink} from 'react-router-dom'
import useHandleCart from '../Products/UseAddToCart'
import { useState } from 'react';
export default function NavBar({search, handleInputChange}) {

    const [cartCount, setCartCount] = useState(0);
    const {handleAddToCart,handleDecrement,handleRemoveFromCart} = useHandleCart(cartCount, setCartCount)

    return (
    <header className='bg-slate-100 shadow sticky z-50 top-0'>
    <nav className='flex justify-between items-center w-[92%] mx-auto sticky z-50'>
        <Link>
            <img className='w-16'
            src="/images/logo.png" alt="logo" 
            />    
        </Link>
        <div className=''>
            <ul className='flex items-center gap-16'>
                <li>
                    <NavLink to="/"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-slate-800 underline underline-offset-4" : "text-gray-500"} 
                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-slate-800 lg:p-0`}
                            >Home
                    </NavLink>
                </li>
                <li>
                <NavLink to="/Products"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-slate-800 underline underline-offset-4" : "text-gray-500"} 
                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-slate-800 lg:p-0`}
                            >Product
                    </NavLink>
                </li>
                <li>
                <NavLink to="/about"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-slate-800 underline underline-offset-4" : "text-gray-500"} 
                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-slate-800 lg:p-0`}
                            >About
                    </NavLink>
                </li>
                <li>
                <NavLink to="/login"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-slate-800 underline underline-offset-4" : "text-gray-500"} 
                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-slate-800 lg:p-0`}
                            >Login
                    </NavLink>
                </li>
            </ul>
        
        </div>              
        <div className='flex items-center'>
        <input 
            type="text" 
            placeholder="Search..." 
            onChange={handleInputChange}
            value={search}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <Link
            to ="/cart"
            >
            <i className="fa-solid fa-cart-shopping text-2xl items-center mx-6 text-slate-800"></i>
            <span>{cartCount}</span>
            </Link>
        
            <button className='bg-slate-800 text-white 
                px-5 py-2 rounded-md hover:bg-slate-900'>
                Sign in
            </button>
        </div>
        
    </nav>
    </header>
)
}
