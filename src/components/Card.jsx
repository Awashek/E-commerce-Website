import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useHandleCart from './Products/UseAddToCart';
import CartContext from '../contex/CartContex';

export default function Card({ id, img, title, star, reviews, prevPrice, newPrice}) {

  const [cartCount, setCartCount] = useState(0);
  const {handleAddToCart,handleDecrement,handleRemoveFromCart} = useHandleCart(cartCount, setCartCount)

  // const productObject = { id, img, title, star, reviews, prevPrice, newPrice}
  // const {cart, addToCart, removeFromCart} = useContext(CartContext)
  
  return (
    <div
    className="m-4 p-4 bg-white shadow-lg rounded-lg w-60 grid grid-rows-[auto_1fr_auto]">
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-contain rounded-t-lg" 
        loading="lazy" 
      />
      <div className="mt-2 flex-grow">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center mt-1">
          {star}
          <span className="ml-2 text-sm text-gray-500">{reviews}</span>
        </div>
        <p className="text-gray-700 mt-1 line-through">{prevPrice}</p>
        <p className="text-gray-900 font-bold">${newPrice}</p>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center ">
        <Link>
        {cartCount === 0 ? (
        <button
          onClick={handleAddToCart}
          className="bg-white text-black py-1 px-5 rounded-md border border-solid transition hover:text-white hover:bg-slate-800 flex items-center"
        >
          <i className="fa-solid fa-cart-plus pr-2"></i>
          Cart
        </button>
      ) : (
        <div className="flex items-center"> 
          {cartCount === 1 ? (
            <button 
              onClick={handleRemoveFromCart} 
              className="text-xs border px-3 py-2 bg-gray-300 rounded-l-md"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          ) : (
            <button 
              onClick={handleDecrement} 
              className="px-3 py-1 bg-gray-300 rounded-l-md text-lg"
            >
              -
            </button>
          )}
          
            <input
            value={cartCount}
            onChange={(e)=>setCartCount(Number(e.target.value))}
            className='className="px-2 py-1 border-t-1 border-gray-300 bg-white w-6 text-sm text-center'
            />
          <button 
            onClick={handleAddToCart}
            className="px-3 py-1 bg-gray-300 rounded-r-md"
          >
            +
          </button>
        </div>
      )}
        </Link>
          <Link
          to={`/products/${id}`}
          >
            <button
            className="bg-white text-black py-1 px-3 rounded-md border border-solid transition hover:text-white hover:bg-slate-800"
          >
            Show More
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}