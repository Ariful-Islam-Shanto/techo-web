import React from 'react';
import Container from '../../../Components/Shared/Container/Container';
import './showcase.css'

const Showcase = () => {

    
    return (
         <div className='bg-gray-300'>

            <Container>
        <div className='min-h-[60vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8 '>
            <div id='product' className='relative ease-in-out'>
                <img src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705041444/laptop-1_ys5ni6.png" alt="" />
                <div className="overlay bg-black opacity-40 h-0 w-full absolute p-6 flex items-end justify-start z-0">
                </div>
                <div  className='overlay-content absolute z-10 bottom-[10%] left-[10%]'>
                <h3 className='text-2xl text-[#e82a2a] font-semibold'>Smart Watch</h3>
                    <p className='text-sm text-gray-300 font-semibold'>Product 122</p>
                </div>
            </div>
            <div id='product' className='relative ease-in-out'>
                <img src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705041557/laptop-1-1_n2z9do.png" alt="" />
                <div className="overlay bg-black opacity-40 h-0 w-full absolute "></div>
                <div  className='overlay-content absolute z-10 bottom-[10%] left-[10%]'>
                <h3 className='text-2xl text-[#e82a2a] font-semibold'>Laptop</h3>
                    <p className='text-sm text-gray-300 font-semibold'>Product 155</p>
                </div>
            </div>
            <div id='product' className='relative ease-in-out'>
                <img src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705041573/laptop-1-3_1_jdpr8x.png" alt="" />
                <div className="overlay bg-black opacity-40 h-0 w-full absolute "></div>
                <div  className='overlay-content absolute z-10 bottom-[10%] left-[10%]'>
                <h3 className='text-2xl text-[#e82a2a] font-semibold'>Gaming</h3>
                    <p className='text-sm text-gray-300 font-semibold'>Product 100</p>
                </div>
            </div>
            <div id='product' className='relative ease-in-out'>
                <img src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705041645/laptop-1-2_quj1nv.png" alt="" />
                <div className="overlay bg-black opacity-50 h-0 w-full absolute ">

                </div>
                <div  className='overlay-content absolute z-10 bottom-[10%] left-[10%]'>
                <h3 className='text-2xl text-[#e82a2a] font-semibold'>Accessories</h3>
                    <p className='text-sm text-gray-300 font-semibold'>Product 200</p>
                </div>
            </div>
        </div>
            </Container>
         </div>
    );
};

export default Showcase;