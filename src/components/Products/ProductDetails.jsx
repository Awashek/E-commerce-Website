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
    <div className="w-1/2 flex gap-4 text-black pl-10 border border-gray-100 pb-5">
  
  {/* Left side for price details */}
  <div className='flex flex-row bg-red-300'>
    <h2 className='text-red-500 text-xl font-bold'>$ {product.newPrice}</h2>
    <h2 className='text-gray-700 text-xl line-through'>{product.prevPrice}</h2>
  </div>

  {/* Right side for review */}
  <div className="text-right">
    <p><span>Review:</span> {product.star}</p>
  </div>
  
</div>

    </div>
  </>
    );
  }