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
    <div> 
      <h1>{product.title}</h1>
      <img src={product.img} alt={product.title} />
      <p>Price: ${product.newPrice}</p>
      <p>Previous Price: {product.prevPrice}</p>
      <p>Rating: {product.star}</p>
      <p>{product.reviews}</p>
    </div>
  );
}