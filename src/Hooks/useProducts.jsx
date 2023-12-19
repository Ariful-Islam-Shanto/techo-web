import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useDispatch } from 'react-redux';
import { addProducts } from '../Redux Store/ProductsSlice';

const useProducts = () => {

    const axiosPublic = useAxiosPublic();
    const dispatch = useDispatch();

   const {data : products, isLoading} = useQuery({
    queryKey : ['products'],
    queryFn : async () => {
        const {data } = await axiosPublic('/products');
        return data;
    }
   })

   useEffect(() => {
    if(products) {
        dispatch(addProducts(products));
    }
   }, [dispatch, products])
//   console.log(products);
    return products;
};

export default useProducts;