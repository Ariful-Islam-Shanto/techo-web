import React, { useEffect, useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import { useSelector } from 'react-redux';
import Container from '../../../Components/Shared/Container/Container';
import ProductCard from '../../Products/ProductCard';

const NewProducts = () => {

    useProducts();

  const products = useSelector((state) => state.productReducer.products);

        // Check if products is defined and is an array
        if (!products || !Array.isArray(products[0])) {
            console.error("Products data is not an array or is undefined.");
            return null; // or handle it appropriately in your code
          }
        
      const newArray = products[0];
      
      const shuffleArray = (array) => {
         // Creating a copy of the array to avoid modifying the original
      const newArray = [...array];
        //? This function is for shuffling any array.
        let currentIndex = array.length;
        let randomIndex;
    
        while(currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex --;
            [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
        }
    
        return array;
      }
    
       // Check if newArray is defined before shuffling
       if (!newArray) {
        console.error("NewArray is undefined.");
        return null; // or handle it appropriately in your code
      }
      const shuffledArray = shuffleArray(newArray);
      const newProducts = shuffledArray.slice(0, 8);

  console.log(newProducts);
    return (
        <div className='bg-[#fff5fe] min-h-screen py-16'>
             <div className="flex flex-col gap-4 pb-12 max-w-2xl mx-auto">
            <h3 className="text-[#e82a2a] text-xl text-center font-medium">Best Choice</h3>
            <h1 className="text-gray-900 text-5xl text-center font-medium">Our Newest Products</h1>
            <p className="text-md text-gray-600 text-center font-thin">Introducing our latest arrivals – a fusion of innovation and style. Explore the future with our New Products collection.</p>
        </div>
        <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {newProducts?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </Container>
        </div>
    );
};

export default NewProducts;