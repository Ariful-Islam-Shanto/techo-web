import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux Store/CartSlice';

const ProductCard = ({product}) => {

    const dispatch = useDispatch();
    const {image, _id, name, brand, category, price, description, type } = product || {};

    return (
      <div className="relative flex flex-col items-center justify-center gap-3 ">
      <img src={image} alt="" srcset="" />
      <h3 className="text-2xl text-gray-800 font-medium">{type}</h3>
      <p className="text-[#e82a2a] font-medium">${price}</p>
      <button className="px-6 py-3 hover:bg-gray-800 rounded-sm text-gray-800 bg-none border-b-2 border-gray-800 hover:text-gray-100">
        Add to Cart
      </button>
      <div className="absolute top-2 left-2 text-lg bg-yellow-400 p-3 py-2 text-gray-100">
        Sale
      </div>
    </div>
    );
};

export default ProductCard;