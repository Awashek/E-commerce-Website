import React from 'react'
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
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to LaceUp!</h1>
        <p className="mb-6 text-center">Find the best shoes for your style.</p>
        <button className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded">
          Shop Now
        </button>
        </div>
        
        </div>
    </div>
  )
}
