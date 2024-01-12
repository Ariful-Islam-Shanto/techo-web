import React from 'react';
import Container from '../Container/Container';

const Promotions = () => {
    return (
        <div className='py-16 bg-gray-100'>
            <Container>
            <div className="flex flex-col gap-4 pb-12 max-w-2xl mx-auto">
            <h3 className="text-[#e82a2a] text-xl text-center font-medium">Light On The Wallet</h3>
            <h1 className="text-gray-900 text-5xl text-center font-medium">Hot Promotions</h1>
            <p className="text-md text-gray-600 text-center font-thin">Unleash style with our exclusive promotion! Elevate your tech game with cutting-edge accessories.</p>

        </div>
            <div className='flex w-full gap-4'>
            <div className='w-full p-4 bg-[#3344d2] flex items-center justify-between gap-3 '>
                <img src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705071339/pngegg_1_ipn3km.png" alt="" className='h-[300px] w-[300px] drop-shadow-xl shadow-white' />
                <div className='flex gap-4 items-end text-left flex-col text-gray-100'>
                    
                        <h3 className='text-2xl text-semibold'>UPTO</h3> 
                    <h1 className='text-5xl text-gray-100 font-semibold text-left'>
                        50% OFF 
                       
                        </h1>
                        <p className='text-xl text-semibold'>On Gaming Series</p>
                        <div className="flex items-center justify-center">
            <button className="px-9 mt-2 py-4 bg-[#e82a2a] text-gray-100">Shop Now</button>
            </div>
                </div>
            </div>
            <div className='w-full p-4 bg-[#f13d3e] flex items-center justify-between gap-3 '>
                <img src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705070924/pngegg_dtxvuu.png" alt="" className='h-[300px] w-[300px] drop-shadow-xl shadow-white' />
                <div className='flex gap-4 items-end flex-col text-gray-100'>
                    
                        <h3 className='text-2xl text-semibold'>UPTO</h3> 
                    <h1 className='text-5xl text-gray-100 font-semibold text-left'>
                        50% OFF 
                       
                        </h1>
                        <p className='text-xl text-semibold'>On Gaming Series</p>
                        <div className="flex items-center justify-center">
            <button className="px-9 mt-2 py-4 bg-white text-gray-800">Shop Now</button>
            </div>
                </div>
            </div>
            
            </div>
            </Container>
        </div>
    );
};

export default Promotions;