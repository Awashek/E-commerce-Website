import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../db/Products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="m-4 p-4 bg-white shadow-lg rounded-lg w-60 grid grid-rows-[auto_1fr_auto]">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-40 object-contain rounded-t-lg" 
        loading="lazy" 
      />
      <div className="mt-2 flex-grow">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <div className="flex items-center mt-1">
          {products.star}
          <span className="ml-2 text-sm text-gray-500">{product.reviews}</span>
        </div>
        <p className="text-gray-700 mt-1 line-through">{product.prevPrice}</p>
        <p className="text-gray-900 font-bold">${product.newPrice}</p>
      </div>
      </div>
  );
}