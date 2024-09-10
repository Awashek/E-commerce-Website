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
    <div className="w-1/2 flex flex-col gap-4 text-black pl-10 border border-gray-200 pb-8">
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


  {/* Size Dropdown Section */}
 
  <div className='p-4 flex flex-row'>
    <div>
    <h2 className="text-xl font-semibold pb-2">Size</h2>
    <select className="border border-gray-300 rounded-md p-2 w-60" defaultValue="">
      <option value="" disabled className="text-gray-500">Select Size</option>
      <option value="XS">XS</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
      <option value="XXL">XXL</option>
    </select>
    </div>
    <div className='flex flex-row pt-10 pl-10'>
      <div>
    <h2 className='text-lg'>Size Chart</h2>
      </div>
      <div>
      <i className="fa-solid fa-shirt text-lg pl-1"></i>
      </div>
    </div>
  </div>

 {/* Quantity Section */}
  <div className='p-4 flex flex-row'>
    <div>
    <input
      type="number"
      className="border border-gray-300 border-l bg-gray-100 rounded-md w-16 px-4 py-2  "
      defaultValue={1}
      min={1}
    />
    </div>
    
    <div className='pl-[5%]'>
    
      <button
      className='px-20 py-2 items-center border border-gray-300 rounded-md bg-slate-800 hover:bg-slate-700 text-white'
      > 
      <i className="fa-solid fa-cart-plus text-white"></i> Add to cart</button>
    </div>
  </div>
    <h1 className='pl-4 font-bold'>Delivery</h1>
    <p className='pl-4'>Free standard shipping on order <span className='font-bold'>over $35</span> before tax, plus free returns</p>

    <div className="p-10">

  <div className="flex justify-between border-b-2 border-[#e5e5e5] pb-4 text-gray-500 font-bold">
    <h2 className="w-1/3 text-left">TYPE</h2>
    <h2 className="w-1/3 text-center">HOW LONG</h2>
    <h2 className="w-1/3 text-right">HOW MUCH</h2>
  </div>


  <div className="flex justify-between border-b-2 border-[#e5e5e5] py-4">
    <p className="w-1/3 text-left">Standard delivery</p>
    <p className="w-1/3 text-center">1-4 business days</p>
    <p className="w-1/3 text-right">$4.50</p>
  </div>

  <div className="flex justify-between border-b-2 border-[#e5e5e5] py-4">
    <p className="w-1/3 text-left">Express delivery</p>
    <p className="w-1/3 text-center">1 business day</p>
    <p className="w-1/3 text-right">$10.00</p>
  </div>

  <div className="flex justify-between border-b-2 border-[#e5e5e5] py-4">
    <p className="w-1/3 text-left">Pick up in store</p>
    <p className="w-1/3 text-center">1-3 business days</p>
    <p className="w-1/3 text-right">Free</p>
  </div>
  </div>
    <div className='gap-8 pl-4'>
      <h2>Return</h2>
      <p>You have <span className='font-bold'>60 days</span> to return the items using any of the following methods:</p>
    </div>
    <div className='pl-4'>
    <div className='flex flex-row items-center'>
      <i className="fa-regular fa-circle text-sm"></i>
      <p className='pl-2'>Free store return</p>
    </div>
    <div className='flex flex-row items-center'>
      <i className="fa-regular fa-circle text-sm"></i>
      <p className='pl-2'>Free returns via USPS Dropoff service</p>
    </div>
    </div>
  </div>
  </div>
  </>
    );
  }