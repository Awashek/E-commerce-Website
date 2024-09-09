import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../db/Products';


export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const [mainImage, setMainImage] = useState(product.img)

  const handleImageClick = (image) => {
    setMainImage(image)
  }

  return (

  <>
    <h2 className="text-3xl font-semibold text-center pl-5 pt-3">{product.title}</h2>
    <div className="flex justify-between gap-4 min-h-screen p-5">
    {/* Left content */}

    <div className="flex flex-col gap-4 w-1/2  ">
      
      <div className='flex flex-col '>
        <div className="w-full pl-[20%] border border-gray-200">
          <img src={mainImage} alt={product.title} className="w-[400px] h-[400px] object-contain mb-5 items-center" />
        </div>

        <div className="w-full flex gap-4 flex-row pl-[25%] pt-3">
          <img 
            src={product.img} 
            alt="Small 1" 
            onClick={() => handleImageClick(product.img)} 
            className="w-[100px] h-[100px] object-contain cursor-pointer border border-gray-100 rounded-sm" 
          />
          <img 
            src={product.img1} 
            alt="Small 2" 
            onClick={() => handleImageClick(product.img1)} 
            className="w-[100px] h-[100px] object-contain cursor-pointer border border-gray-100 rounded-sm" 
          />
          <img 
            src={product.img2} 
            alt="Small 3" 
            onClick={() => handleImageClick(product.img2)} 
            className="w-[100px] h-[100px] object-contain cursor-pointer border border-gray-100 rounded-sm" 
          />
        </div>

        <div>
          <h2 className='text-xl text-bold text-center text-gray-700 pt-6'>Product Description</h2>
          <p className="w-full text-gray-500 p-4">{product.description}</p>
        </div>
      </div>
    </div>

    {/* Right content */}
    <div className="w-1/2 flex flex-col gap-4 text-black pl-10 border border-gray-100 pb-8">
  {/* Price and Review Section */}
  <div className="flex justify-between items-start">
    <div className='flex gap-2 p-4'>
      <h2 className='text-red-500 text-xl font-bold'>Price: ${product.newPrice}</h2>
      <h2 className='text-gray-500 text-xl line-through pl-3'>{product.prevPrice}</h2>
    </div>

    <div className="text-right p-4">
      <p className='text-xl text-gray-500'>Review: {product.star}</p>
    </div>
  </div>

  {/* Quantity Section */}
  <div className='p-4'>
    <h2 className="text-xl font-semibold">Size</h2>
    <select className="border border-gray-300 rounded-md p-2 w-40">
      <option value="XS">XS</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
      <option value="XXL">XXL</option>
    </select>
   
  </div>

  {/* Size Dropdown Section */}
  <div className='p-4'>
    <h2 className="text-xl font-semibold">Select Size</h2>
    <input
      type="number"
      className="border border-gray-300 rounded-md w-16 pl-2"
      defaultValue={1}
      min={1}
    />
  </div>
</div>
    </div>
  </>
    );
  }