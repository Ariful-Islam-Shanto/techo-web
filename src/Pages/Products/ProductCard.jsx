import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux Store/CartSlice';

const ProductCard = ({product}) => {

    const dispatch = useDispatch();
    const {image, _id, name, brand, category, price, description } = product || {};

    return (
        <div className="relative card border-2 z-10 border-gray-600 stroke-white flex flex-col items-center w-full justify-between  bg-gray-800 p-0 text-gray-200 shadow-xl">
  <figure className='w-full '><img src={image} alt="product" className='h-[170px] rounded-br-3xl object-cover w-full border-b-2 border-b-black'/>
  </figure>
  <div className='absolute left-0 top-[148px] rounded-tl-3xl  z-40 h-6 w-full bg-gray-800'></div>
  {/* <div className='absolute right-0 top-[108px] rounded-tl-full  z-40 h-10 w-10 bg-gray-800'></div> */}
  {/* <div className='absolute right-0 top-[118px]   z-40 h-10 w-10 bg-white'></div> */}
  <div className="w-full space-y-2 p-4">
    <h2 className="card-title flex-grow">
     {name}
    </h2>
    <div className=" w-full flex items-center justify-between">
      {/* <button className='px-5 py-2 border-none bg-[#df4840] w-full text-gray-300'>See Details</button> */}
      <button onClick={() => {
         
      }} className='text-left btn border-none border-gray-300 rounded-md w-full text-gray-300'>See details</button>
      <FaArrowRight className='text'/>
      
    </div>
  </div>
</div>
    );
};

export default ProductCard;