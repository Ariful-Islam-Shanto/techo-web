import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Container from "../../../Components/Shared/Container/Container";

const Featured = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="bg-white py-16">
      <Container>
        <div className="flex flex-col gap-4 pb-12 max-w-2xl mx-auto">
            <h3 className="text-[#e82a2a] text-xl text-center font-medium">The Take Over Is Complete</h3>
            <h1 className="text-gray-900 text-5xl text-center font-medium">Featured Products</h1>
            <p className="text-md text-gray-600 text-center font-thin">Explore a world of sophistication in our Featured Products. Uncover the perfect blend of innovation and style.</p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {products &&
            products?.slice(0, 8)?.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative flex flex-col items-center justify-center gap-3 ">
                  <img src={product?.image} alt="" srcset="" />
                  <h3 className="text-2xl text-gray-800 font-medium">{product?.type}</h3>
                  <p className="text-[#e82a2a]">{product?.price}</p>
                  <button className="px-6 py-3 hover:bg-gray-800 rounded-sm text-gray-800 bg-none border-b-2 border-gray-800 hover:text-gray-100">
                    Add to Cart
                  </button>
                  <div className="absolute top-2 left-2 text-lg bg-yellow-400 p-3 py-2 text-gray-100">
                    Sale
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Featured;
