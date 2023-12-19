import React from 'react';
import Banner from './Banner/Banner';
import Todo from '../../Components/Shared/Todo/Todo';
import useProducts from '../../Hooks/useProducts';

const Home = () => {

    const products = useProducts();
    console.log(products);
    return (
        <div>
            <Banner/>
            {/* <Todo/> */}
        </div>
    );
};

export default Home;