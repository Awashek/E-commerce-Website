import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../Products'
export default function Hero() {

  const handleAddToCart = ({product}) => {
    console.log("added")
  }

  const handelShopNow = (product) => {
    console.log("added")
  }
  return (
    <div>
      <Link className='relative'>
            <img className="w-full h-auto object-cover"
            src="https://www.sneakerhype.eu/cdn/shop/products/file_fc3589a9-2e6b-4daa-9223-4a11922a4fc8.jpg?v=1710154347" alt="logo" 
            />    
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to LaceUp!</h1>
        <p className="mb-6 text-center">Find the best shoes for your style.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Shop Now
        </button>
        </div> */}
        <h2 className='text-3xl text-center '>Products</h2>
        <div className="flex flex-wrap justify-center p-4 bg-gray-100">
            {products.map(product => (
                <div key={product.id} className="m-4 p-4 bg-white shadow-lg rounded-lg w-60">
                    <img src={product.image} alt={product.description} className="w-full h-40 object-cover rounded-t-lg" />
                    <h2 className="text-lg font-semibold mt-2">{product.description}</h2>
                    <p className="text-gray-700 mt-1">{product.price}</p>
                    <div className="mt-4 flex justify-between">
                        <button 
                            onClick={() => handleAddToCart(product)}
                            className="bg-slate-800 text-white py-1 px-3  hover:bg-slate-600 transition rounded-full">
                            Add to Cart
                        </button>
                        <button 
                            onClick={() => handelShopNow(product)}
                            className="bg-orange-800 text-white py-1 px-3 rounded-full hover:bg-orange-600 transition">
                            Shop Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </Link>
    </div>
  )
}
