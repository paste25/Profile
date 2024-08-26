import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav className='flex justify-center pt-5 text-[rgb(107,107,107)]'>
      <div className='flex gap-4 bg-[#1d1d1d] py-1 px-2 rounded-md'>
       <Link to={'/'}>
       <button className={`${currentPath==="/" && 'bg-[#6b6b6b] text-white'} py-[2px] px-2 rounded-md`}>Home</button>
       </Link>
       <Link to={'/projects'}>
       <button className={`${currentPath==="/projects" && 'bg-[#6b6b6b] text-white'} py-[2px] px-2 rounded-md`}>Projects</button>
       </Link>
       <Link to={'/contact'}>
        <button className={`${currentPath==="/contact" && 'bg-[#6b6b6b] text-white'} py-[2px] px-2 rounded-md`} >Contact</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
