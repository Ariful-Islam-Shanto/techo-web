import React, { useEffect } from "react";
import Container from "../../../Components/Shared/Container/Container";

const Offer = () => {
    useEffect(() => {
        var countDownDate = new Date("Jun 30, 2024 15:37:25").getTime();
      
        // Update the count down every 1 second
        var x = setInterval(function () {
          // Get today's date and time
          var now = new Date().getTime();
      
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
      
          // Time calculations for days, hours, minutes, and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
          // Display the result with leading zeros
          document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
          document.getElementById("hr").innerHTML = hours < 10 ? `0${hours}` : hours;
          document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
          document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
      
          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
          }
        }, 1000);
      }, []);
      

  return (
    <div className="relative bg-[url('https://res.cloudinary.com/debqyv4o6/image/upload/v1705080334/Desktop_-_2_2_nephqi.jpg')] min-h-screen bg-cover">
         <div className="h-full w-full absolute bg-black opacity-30 backdrop-blur-2xl"></div>
      
        <div className="relative min-h-screen">
        <Container>
          <img
            className="h-full absolute bottom-0 left-0"
            src="https://res.cloudinary.com/debqyv4o6/image/upload/v1705081474/pngegg_2_wx2ojn.png"
            alt=""
            srcset=""
          />
         </Container>
          {/* <div className="h-full w-full absolute bg-black opacity-10"></div> */}
          <div className="absolute h-full w-full flex">
            <div className="w-[300px]">
                
            </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            <h1 className="text-8xl mb-0 font-allison text-[#ffb400]">
              Special Offer
            </h1>
            <h1 className="text-5xl text-gray-100 font-semibold">
              VR Headset Pro
            </h1>
            <p className="text-gray-300 text-sm text-center max-w-2xl">Dive into a new reality with our VR Headset Pro offer. Immerse yourself in cutting-edge technology and redefine your gaming experience. Limited-time, unlimited adventures. Grab yours now!</p>
            {/*//? Countdown */}
            <div className="flex gap-4">
                <div  className="relative bg-[#40173db2] flex items-center justify-center flex-col px-10 py-3">
                    <h1 id="days" className="text-5xl text-gray-100 mb-5"></h1>
                    <button className="absolute -bottom-4 px-8 py-2 rounded-sm bg-[#ffb400] text-gray-800 font-semibold">Days</button>
                </div>
                <div  className="relative bg-[#40173db2] flex items-center justify-center flex-col px-10 py-3">
                    <h1 id="hr" className="text-5xl text-gray-100 mb-5"></h1>
                    <button className="absolute -bottom-4 px-8 py-2 rounded-sm bg-[#ffb400] text-gray-800 font-semibold">Hours</button>
                </div>
                <div  className="relative bg-[#40173db2] flex items-center justify-center flex-col px-10 py-3">
                    <h1 id="minutes" className="text-5xl text-gray-100 mb-5"></h1>
                    <button className="absolute -bottom-4 px-8 py-2 rounded-sm bg-[#ffb400] text-gray-800 font-semibold">Minutes</button>
                </div>
                <div  className="relative bg-[#40173db2] flex items-center justify-center flex-col px-10 py-3">
                    <h1 id="seconds" className="text-5xl text-gray-100 mb-5"></h1>
                    <button className="absolute -bottom-4 px-6 py-2 rounded-sm bg-[#ffb400] text-gray-800 font-semibold ">Seconds</button>
                </div>
            </div>

            <div className="mt-6">
            <button className="px-9 mt-2 py-4 bg-[#e82a2a] text-gray-100">Shop Now</button>
            <button className="px-9 mt-2 py-4 bg-[] text-gray-100 hover:-translate-y-4 ease-in-out">$299</button>
            </div>
          </div>
          </div>
        </div>
    
    </div>
  );
};

export default Offer;
