import React from 'react'
import { products } from '../../db/Products'
import Recommended from '../Recommended/Recommended'
export default function Shop() {
  return (

    <>
    <Recommended />
    <div className='flex'>
    <div className='w-[40%] bg-blue-100'>
   <h1>sidebar</h1>
    </div>
    <div className='w-[100%] bg-red-100'>
    <div className="flex flex-wrap justify-center p-4 bg-red-100 w-[100%]">
            {products.map(product => (
                <div key={product.title} className="m-4 p-4 bg-white shadow-lg rounded-lg w-60 grid grid-rows-[auto_1fr_auto]">
                    <img src={product.img} alt={product.title} className="w-full h-40 object-contain rounded-t-lg" />
                    <div className="mt-2 flex-grow">
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <div className="flex items-center mt-1">
                            {product.star}
                            <span className="ml-2 text-sm text-gray-500">{product.reviews}</span>
                        </div>
                        <p className="text-gray-700 mt-1 line-through">{product.prevPrice}</p>
                        <p className="text-gray-900 font-bold">${product.newPrice}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center ">
                            <button 
                                onClick={() => handleAddToCart(product)}
                                className="bg-slate-800 text-white py-2 px-3 hover:bg-slate-600 transition rounded-full">
                                Add to Cart
                            </button>
                            <button 
                                onClick={() => handleShopNow(product)}
                                className="bg-orange-800 text-white py-2 px-3 rounded-full hover:bg-orange-600 transition">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
        
        </div>
    </>
  )
}
