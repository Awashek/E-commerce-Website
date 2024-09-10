import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ id, img, title, star, reviews, prevPrice, newPrice, handleAddToCart }) {
  
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
          <Link >
            <button
            className='px-6 py-2 items-center border border-gray-300 rounded-md bg-slate-700 hover:bg-slate-800 text-white'
            > 
            <i className="fa-solid fa-cart-plus text-white"></i> 
            Cart
            </button>
          </Link>
          <Link
          to={`/products/${id}`}
          >
            <button
            className="bg-white text-black py-2 px-3 rounded-md border border-solid transition hover:text-white hover:bg-gray-500"
          >
            Show More
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}