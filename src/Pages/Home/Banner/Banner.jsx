import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <div className="h-[100vh]">
        {/* <Swiper
        spaceBetween={30}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        effect={'fade'}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className=" w-full h-full"
      >
        <SwiperSlide className='h-full w-full'>
          <img src="https://i.postimg.cc/BbbgLq31/OC-10-2.jpg" className='w-full h-full object-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/6498300/pexels-photo-6498300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='w-full h-full object-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/Fs10XrN2/OC-10-3.jpg" className='w-full h-full object-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1592919933511-ea9d487c85e4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full h-full object-cover'/>
        </SwiperSlide>
      </Swiper> */}

        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/KYcZkcp4/Group-3.jpg)",
              backgroundSize : 'cover',
              backgroundPosition : 'center'
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-6xl font-bold text-white ">We are at the forefront of technology </h1>
              <p className="mb-5 text-gray-300">
              Elevate your tech quotient with Techo. Uncover a world of innovation where every product is a glimpse into the future, carefully selected to bring you the extraordinary in the realm of technology.
              </p>
              <button className="px-10 py-3 rounded-sm text-gray-200 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-[#be2222] shadow-lg shadow-white/50 bg-[rgb(232,42,42)] font-semibold">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
