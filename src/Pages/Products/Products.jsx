import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Container } from "@mui/material";
import useProducts from "../../Hooks/useProducts";
import "./products.css";
import Promotions from "../../Components/Shared/Promotions/Promotions";

const Products = () => {
  useProducts();

  const products = useSelector((state) => state.productReducer.products);
  console.log(products);

  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);

  const bg = {
    backgroundImage: `url('https://res.cloudinary.com/debqyv4o6/image/upload/v1705059614/istockphoto-1186651737-1024x1024_xhzlkv.jpg')`,
    opacity: "",
  };
  return (
    <div className="min-h-screen bg-white">
      {/*//? heading */}
      <div className="bg-[#120614] h-[80vh] flex flex-col gap-3 items-center justify-center">
        <h3 className="text-[#e82a2a] text-2xl text-center font-medium ">
          Home/Shop
        </h3>
        <h1 className="text-white text-5xl text-center font-semibold">Shop</h1>
      </div>

      {/* //? types of products */}
      <div className="relative ">
        <img
          src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705059614/istockphoto-1186651737-1024x1024_xhzlkv.jpg"
          alt=""
          className="absolute h-full w-full z-0 opacity-40"
        />
        <div className="relative z-10 ">
          <Container>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 py-32 gap-12">
              <div className="p-10  bg-white flex items-center justify-center flex-col gap-4">
                <img
                  id="image"
                  src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705060033/003-headphones-1_ktc0ni.png"
                  alt=""
                  className="h-20 w-20 object-cover "
                />
                <h1 className="text-2xl text-center font-medium text-gray-800 inline-block">
                  Accessories
                </h1>
              </div>
              <div className="p-10  bg-white flex items-center justify-center flex-col gap-4">
                <img
                  id="image"
                  src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705060053/002-laptop-1_gifcei.png"
                  alt=""
                  className="h-20 w-20 "
                />
                <h1 className="text-2xl text-center font-medium text-gray-800 inline-block">
                  Computer
                </h1>
              </div>
              <div className="p-10  bg-white flex items-center justify-center flex-col gap-4">
                <img
                  id="image"
                  src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705060061/001-playstation-1_ckejol.png"
                  alt=""
                  className="h-20 w-20 "
                />
                <h1 className="text-2xl text-center font-medium text-gray-800 inline-block">
                  Gaming
                </h1>
              </div>
              <div className="p-10  bg-white flex items-center justify-center flex-col gap-4">
                <img
                  id="image"
                  src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705060069/smartwatch-1-1_iiwlmf.png"
                  alt=""
                  className="h-20 w-20 "
                />
                <h1 className="text-2xl text-center font-medium text-gray-800 inline-block">
                  Smart Watch
                </h1>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <div
          className="
        flex gap-6 items-start justify-center pt-20 "
        >
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            {products[0]?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <div className="w-[380px]  h-full ">
            <div className="bg-gray-100 rounded-md p-4">
              <h1 className="font-thin text-md  text-center text-black">
                {" "}
                Shopping Cart{" "}
              </h1>
            </div>

            {/* //? Adv#e82a2ertise */}
            <div className="bg-[#cd4446] p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-6">
              <h1 className="font-allison text-[#feb102]  text-8xl text-center font-medium ">
                Performance Sale
              </h1>
              <h1 className=" text-gray-100  text-5xl text-center font-medium ">
                Think Pad Laptop
              </h1>
            <div className="flex items-center justify-center">
            <button className="px-9 mt-2 py-4 border-2 border-[#dbc0c0] hover:bg-[#e67d7d] text-gray-100">Shop Now</button>
            </div>
              </div>
              <div className="relative">
                <img id="image"
                  src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705067271/batch3-rm355-01-laptop-1_da8ggu.png"
                  alt=""
                />
                <div className="absolute h-16 w-16 top-[10%] right-[10%] text-lg bg-yellow-400 border-yellow-400 rounded-full border-dashed flex items-center justify-center text-gray-600 border-2 p-4">
                  Sale
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Promotions/>
    </div>
  );
};

export default Products;
