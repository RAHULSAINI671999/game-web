import React from 'react'
import Image from "next/image";
import Link from "next/link";
const ProductCard = () => {
  return (
    <Link href="/product/1"  className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
        <img className='w-full' src="https://i.ytimg.com/vi/UK_tMhLyPy8/maxresdefault.jpg" alt="" />
        <div className="p-4 text-black/[0.9] flex items-center">
         <img src="https://cdn.mos.cms.futurecdn.net/xKDjdfeeVakza67tMJCDYN.jpg " alt="" className='w-7 h-7 rounded-full mr-2 -ml-25' />
        <h2 className="flex text-sm font-medium md:text-base overflow-hidden -mt-20px ">BOSS Immersive </h2>
        </div>
    </Link>
  )
}

export default ProductCard