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
//     <div className="m-4 p-4 bg-white shadow-lg rounded-lg min-h-screen">
//       <div className="flex flex-col items-center">
//       <div className="mb-4">
//         <img 
//           src={product.img} 
//           alt="Main" 
//           className="w-80 h-80 object-contain rounded-lg shadow-md" 
//         />
//       </div>

//       {/* Small Images */}
//       <div className="flex space-x-4">
//         {images.map((img, index) => (
//           <img 
//             key={index} 
//             src={img} 
//             alt={`Thumbnail ${index}`} 
//             className="w-20 h-20 object-cover cursor-pointer rounded-md hover:opacity-80 transition" 
//             onClick={() => handleImageClick(img)}
//           />
//         ))}
//       </div>
//     </div>
//       </div>
//   );
// }
<div className="flex flex-col gap-4 min-h-screen p-5">

      <h2 className="text-2xl font-semibold text-center text-gray-500">{product.title}</h2>
      <div className='flex flex-col gap-4'>
      <div className="w-1/2 bg-yellow-200 pl-[13%] border border-black">
        <img src={mainImage} alt={product.title} className="w-[400px] h-[400px]object-cover mb-5 items-center" />
      </div>


      <div className="w-1/2 flex gap-4 flex-row bg-red-300 pl-[13%] ">
        <img 
          src={product.img} 
          alt="Small 1" 
          onClick={() => handleImageClick(product.img)} 
          className="w-[100px] h-[100px] object-contain cursor-pointer" 
        />
        <img 
          src={product.img1} 
          alt="Small 2" 
          onClick={() => handleImageClick(product.img1)} 
          className="w-[100px] h-[100px] object-contain cursor-pointer" 
        />
        <img 
          src={product.img2} 
          alt="Small 3" 
          onClick={() => handleImageClick(product.img2)} 
          className="w-[100px] h-[100px] object-contain cursor-pointer" 
        />
      </div>

      <div>
        <h2 className='text-xl text-bold text-gray-500 '>Product Description</h2>
        <p className="w-1/2 text-gray-500" >{product.description}</p>
      </div>
      
      </div>
      <div>
        hello
      </div>
    </div>
  );
}