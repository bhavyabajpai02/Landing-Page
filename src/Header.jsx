import React, { useState, useEffect } from 'react'
// import Features from './Features'
import newlogo from './assets/newlogo.png'
import cmpltlogo from './assets/cmplt-logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() =>{
    const handleScroll = () =>{
      if(window.scrollY > 60){
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll',handleScroll);
    return() =>{
      window.removeEventListener('scroll',handleScroll);
    };
  },[]);
  const zIn = isScrolled ? 'z-30' : 'z-10';

  // RETURNING XML
  return (
    <header className={` relative sticky top-0 ${zIn} flex justify-between  items-center px-3 md:px-6 py-3 bg-[#061d3a]/80 text-white text-[16px] shadow-sm shadow-blue-900 `}>
     
      <div className='flex justify-center  items-center'>
      <img className='logo w-[22px] md:w-[38px]' src={newlogo} alt="logo" />
      <img className='logo w-[120px] md:w-[150px] mt-1' src={cmpltlogo} alt="logo" />
      </div>

      <nav className="flex space-x-2 md:space-x-10 ">
        <a href="#features" className=' hover:text-[#136be0] transition-colors'>Features</a>
        <a href="#how_works" className='hover:text-[#136be0] transition-colors'>How It Works</a>
      </nav>

      <div className="active-scale-95 ">
        <button className='text-white inline-flex items-center px-4 py-3 cursur-pointer rounded-xl hover:bg-[#395eb2]/40 transition-colors bg-[#5773b2]/60  shadow-md shadow-black hover:shadow-lg hover:shadow-black active:scale-95'>Let’s Compile Your Code</button>
       
      </div>

    </header>
  )
}

export default Header
