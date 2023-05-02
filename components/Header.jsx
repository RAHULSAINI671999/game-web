import React,{useState,useEffect} from 'react'
import Wrapper from './Wrapper';
import logo from '../public/logo.png'
import Link from 'next/link';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";



const Header = () => {
const [mobileMenu, setMobileMenu] = useState(false);
const [showCatMenu, setShowCatMenu] = useState(false);
const [show, setShow] = useState("translate-y-0");
const [lastScrollY, setLastScrollY] = useState(0);
const [categories, setCategories] = useState(null);

const controlNavbar = () => {
  if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
          setShow("-translate-y-[80px]");
      } else {
          setShow("shadow-sm");
      }
  } else {
      setShow("translate-y-0");
  }
  setLastScrollY(window.scrollY);
};

useEffect(() => {
  window.addEventListener("scroll", controlNavbar);
  return () => {
      window.removeEventListener("scroll", controlNavbar);
  };
}, [lastScrollY]);
 

  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>

<Wrapper className="h-[60px] flex items-center justify-between">
    <Link href="/">
    <img src="/logo.png" className='w-[40px] md:w-[60px]'  />
    </Link>
    <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
    {mobileMenu && <MenuMobile showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu}/>}
    <div className='flex items-center gap-2 text-green-500'>
    <button className='bg-black text-white rounded-full py-2 px-3 hover:bg-gray-900'>Login</button>
    {/* icon start */}
    {/* <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative'> */}
      {/* <IoMdHeartEmpty className='text-[19px] md:text-[24px]'/> */}
      {/* <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-green-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">44</div> */}
    {/* </div>  */}
    {/* icon end */}
    {/* icon start */}
    {/* <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative'> */}
      {/* <BsCart className='text-[15px] md:text-[20px]'/> */}
      {/* <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-green-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">4</div> */}
    {/* </div>  */}
    {/* icon end */}
    <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative -mr-2'>
      {mobileMenu ? (
  <VscChromeClose className="text-[16px]"
  onClick={() => setMobileMenu(false)}
   />
      ):(
        <BiMenuAltRight className="text-[20px]"
     onClick={() => setMobileMenu(true)}
   />
      )}
    </div>
    </div>
        </Wrapper>
    </header>
  )
}

export default Header

