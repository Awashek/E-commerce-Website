import React from 'react'
import { products } from '../db/Products'
export default function Hero() {

  const handleAddToCart = ({product}) => {
    console.log("added")
  }

  const handleShopNow = (product) => {
    console.log("added")
  }
  return (
    <div>
      <div className='relative'>
            <img className="w-full h-auto object-cover"
            src="https://www.sneakerhype.eu/cdn/shop/products/file_fc3589a9-2e6b-4daa-9223-4a11922a4fc8.jpg?v=1710154347" alt="logo" 
            />    
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to LaceUp!</h1>
        <p className="mb-6 text-center">Find the best shoes for your style.</p>
        <button className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded">
          Shop Now
        </button>
        </div> */}
        <h2>products</h2>

        <div className="flex flex-wrap justify-center p-4 bg-gray-100">
  {products.map((product) => (
    <div key={product.title} className="m-4 p-4 bg-white shadow-lg rounded-lg w-60 grid grid-rows-[auto_1fr_auto]">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-40 object-contain rounded-t-lg" 
        loading="lazy" 
      />
      <div className="mt-2 flex-grow">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <div className="flex items-center mt-1">
          {product.star}
          <span className="ml-2 text-sm text-gray-500">{product.reviews}</span>
        </div>
        <p className="text-gray-700 mt-1 line-through">{product.prevPrice}</p>
        <p className="text-gray-900 font-bold">{product.newPrice}</p>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center ">
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-slate-800 text-white py-2 px-3 hover:bg-slate-600 transition rounded-full"
          >
            Add to Cart
          </button>
          <button
            onClick={() => handleShopNow(product)}
            className="bg-orange-800 text-white py-2 px-3 rounded-full hover:bg-orange-600 transition"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
    </div>
  )
}
