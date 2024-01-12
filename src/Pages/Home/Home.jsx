import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Todo from '../../Components/Shared/Todo/Todo';
import useProducts from '../../Hooks/useProducts';
import { useSelector } from 'react-redux';
import './script';
import Showcase from './Showcase/Showcase';
import Featured from './Featured/Featured';
import Promotions from '../../Components/Shared/Promotions/Promotions';

const Home = () => {
    
    // //? This is for the cursor event.
    useEffect(() => {
        const crsr = document.querySelector('#cursor');
        const crsr1 = document.querySelector('#cursor1');
    
        if (crsr || crsr1) {
          document.addEventListener("mousemove", (dets) => {
            crsr.style.left = dets.x + 'px';
            crsr.style.top = dets.y + 'px';
            crsr1.style.left = dets.x - 1 + 'px';
            crsr1.style.top = dets.y - 1 + 'px';
          });
        } else {
          console.error("Element with ID 'cursor' not found");
        }
    
        // Clean up the event listener when the component unmounts
        return () => {
          document.removeEventListener("mousemove", () => {});
        };
      }, []);
   

    const products = useSelector(state => state.productReducer.products);
    console.log("Data from redux store", products);
    return (
        <div>
            <div id="cursor"  className='h-[25px] w-[25px] bg-yellow-300 cursor-auto fixed rounded-full z-[99]'></div>
            <div id="cursor1"  className='h-[100px] w-[100px] bg-yellow-300 cursor-auto opacity-50 fixed rounded-full z-[99] blur-2xl'></div>
            <Banner/>
            {/* <Todo/> */}
            <Showcase/>
            <Featured/>
            <Promotions/>
        </div>
    );
};

export default Home;