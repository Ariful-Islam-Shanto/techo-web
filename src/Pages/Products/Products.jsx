import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { Container } from '@mui/material';
import useProducts from '../../Hooks/useProducts';

const Products = () => {
    useProducts();

    const products = useSelector(state => state.productReducer.products)
    console.log(products);

    const cart = useSelector(state => state.cartReducer.cart);
    console.log(cart);

    return (
        <div className='min-h-screen bg-[#2C2917]'>
        <Container>
        <div className='
        flex gap-6 items-start justify-center pt-20 '>
            <div className='flex-1 grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    products[0]?.map(product => 
                      <ProductCard 
                      key={product._id}
                      product={product}
                      />  
                        )
                }
            </div>
            <div className='w-[300px] rounded-md p-4  h-full bg-gray-100'>
               <h1 className='font-thin text-md  text-center text-black'> Shopping Cart </h1>
            </div>
        </div>
        </Container>
        </div>
    );
};

export default Products;