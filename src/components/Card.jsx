import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card({ id, img, title, star, reviews, prevPrice, newPrice, handleAddToCart }) {
  
  return (
    <div className="m-4 p-4 bg-white shadow-lg rounded-lg w-60 grid grid-rows-[auto_1fr_auto]">
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
          <Link 
          to={`/Products/${id}`}>
          <button
            onClick={handleAddToCart}
            className="bg-slate-800 text-white py-2 px-3 hover:bg-slate-600 transition rounded-full"
          >
            Add to Cart
          </button>
          </Link>
          <button
            onClick={() => handleShopNow()}
            className="bg-orange-800 text-white py-2 px-3 rounded-full hover:bg-orange-600 transition"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}