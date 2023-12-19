import React from 'react';
import Banner from './Banner/Banner';
import Todo from '../../Components/Shared/Todo/Todo';
import useProducts from '../../Hooks/useProducts';
import { useSelector } from 'react-redux';

const Home = () => {
    useProducts();
    const products = useSelector(state => state.productReducer.products);
    console.log("Data from redux store", products);
    return (
        <div>
            <Banner/>
            {/* <Todo/> */}
        </div>
    );
};

export default Home;