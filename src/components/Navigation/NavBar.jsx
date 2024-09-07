import {Link, NavLink} from 'react-router-dom'
export default function NavBar(props) {
    const {query, handleInputChange} = props
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
                    <NavLink to="/"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline underline-offset-4" : "text-gray-700"} 
                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                            >Home
                    </NavLink>
                </li>
                <li>
                <NavLink to="/Products"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline underline-offset-4" : "text-gray-700"} 
                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                            >Product
                    </NavLink>
                </li>
                <li>
                <NavLink to="/About"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline underline-offset-4" : "text-gray-700"} 
                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                            >About
                    </NavLink>
                </li>
                <li>
                <NavLink to="/Login"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline underline-offset-4" : "text-gray-700"} 
                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
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
            value={query}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
        <i className="fa-solid fa-cart-shopping text-2xl items-center mx-6 text-slate-800"></i>
            <button className='bg-slate-800 text-white 
                px-5 py-2 rounded-full hover:bg-slate-900'>
                Sign in
            </button>
        </div>
        
    </nav>
    </header>
)
}
