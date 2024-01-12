import React from "react";
import Container from "../../../Components/Shared/Container/Container";

const Offer = () => {
  return (
    <div className=" bg-[url('https://res.cloudinary.com/debqyv4o6/image/upload/v1705080334/Desktop_-_2_2_nephqi.jpg')] min-h-screen bg-cover">
      <Container>
        <div className="relative min-h-screen">
          <img
            className="h-full absolute bottom-0 left-0"
            src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705081474/pngegg_2_wx2ojn.png"
            alt=""
            srcset=""
          />
          {/* <div className="h-full w-full absolute bg-black opacity-10"></div> */}
          <div className="absolute h-full w-full flex flex-col items-end justify-center gap-4">
            <h1 className="text-9xl font-allison text-[#ffb400]">
              Special Offer
            </h1>
            <h1 className="text-6xl text-gray-100 font-semibold">
              VR Headset Pro
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
