import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card({ id, img, title, star, reviews, prevPrice, newPrice}) {

  // State to track number of items in the cart
  const [cartCount, setCartCount] = useState(0);

  // Function to handle adding items to cart
  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // Increase cart count by 1
  };

  // Function to handle removing items from cart
  const handleRemoveFromCart = () => {
    setCartCount(0); // Reset cart count to 0 when deleting the item
  };

  // Function to handle decrementing cart items
  const handleDecrement = () => {
    if (cartCount > 1) {
      setCartCount(cartCount - 1); // Decrease count if more than 1
    }
  }
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
          onClick={handleAddToCart} // Call handleAddToCart when clicked
          className="bg-white text-black py-1 px-5 rounded-md border border-solid transition hover:text-white hover:bg-slate-800 flex items-center"
        >
          <i className="fa-solid fa-cart-plus pr-2"></i>
          Cart
        </button>
      ) : (
        // If cartCount is more than 0, show the counter with increment and decrement/delete buttons
        <div className="flex items-center">
          {/* Show delete icon if cartCount is 1, otherwise show the decrement button */}
          {cartCount === 1 ? (
            <button 
              onClick={handleRemoveFromCart} // Remove the item from the cart when clicked
              className="text-xs border px-3 py-2 bg-gray-300 rounded-l-md"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          ) : (
            <button 
              onClick={handleDecrement} // Decrease cart count when clicked
              className="px-3 py-1 bg-gray-300 rounded-l-md"
            >
              -
            </button>
          )}
          
          <span className="px-2 py-1 border-t-1 border-gray-300  bg-white">
            {cartCount}
          </span>
          <button 
            onClick={handleAddToCart} // Increase cart count when clicked
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