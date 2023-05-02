import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";


const HeroBanner = () => {

  return (

    <div classNameName="relative text-white text-[20px] w-full max-w-[1600px] mx-auto mb-7 ">
    <div className="flex flex-col items-center justify-center">
  <div className="w-full max-w-1400">
    <div className="relative">
      <video src="/running-2.mp4" muted autoPlay loop alt="slider-image-description" className="w-full" />
      <div className="absolute inset-0 bg-black opacity-50">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h3 className="text-white text-2xl md:text-3xl text-center font-bold mb-4">Unlock Your Imagination</h3>
        <p className="text-white text-lg md:text-xl text-center mb-8">Create,Share and explore 3D experiences with your community across Web,Mobile and VR.</p>
        <button className=" px-3 py-2 text-white bg-blue-800  font-medium rounded-lg hover:bg-blue-600 focus:outline-none mt-[-15px]">DIVE IN NOW</button>
      </div>
      </div>
    </div>
  </div>
</div>
   
    </div>
 
  )
}

export default HeroBanner