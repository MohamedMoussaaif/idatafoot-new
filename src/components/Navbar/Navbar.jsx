import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiAlignCenter } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';
import { HiNewspaper } from "react-icons/hi2";
import Search from '../Search/Search';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div
      className={`lg:hidden block fixed top-10 w-full left-0 right-0 bg-zinc-900 h-full transition-all duration-500 ease-in transform ${
        click ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <ul className='text-xl py-10 px-10 w-full'>
        <div onClick={() => { setClick(false); props.setNavClick(false) }} className='w-full'>
          <Link to={'/'} className='my-7 pb-4 px-15 text-[18px] flex flex-row items-center space-x-3'>
            <FaTrophy />
            <span>Top Leagues</span>
          </Link>
        </div>
        <div onClick={() => { setClick(false)}}>
          <Link to={'/news'} className='my-7 pb-4 px-15 text-[18px] flex flex-row items-center space-x-3'>
            <HiNewspaper />
            <span>News</span>
          </Link>
        </div>
        <div onClick={() => { setClick(false)}}>
          <Link to={'/contact'} className='hidden my-7 pb-4 px-15 text-[18px] flex flex-row items-center space-x-3'>
            <BiSolidContact />
            <span>Contact</span>
          </Link>
        </div>
      </ul>
    </div>
  );

  return (
    <nav>
      <div className='h-10vh top-0 fixed w-full flex justify-between z-50 text-white lg:py-1 px-10 lg:px-28 py-5 bg-zinc-900 transition'>
        <div className='flex items-center flex-1'>
          <Link to={'/'} onClick={() => { setClick(false); props.setNavClick(true) }} className='text-s lg:text-xl font-bold cursor-pointer'>IDATA<span className='text-[#0097B2]'>FOOT</span></Link>
        </div>
        <div className='lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden'>
          <div className='flex flex-10'>
            <ul className='flex gap-8 items-center'>
              <div className='my-4 cursor-pointer'>
                <Link to={'/news'}>News</Link>
              </div>
              <div className='hidden my-4 cursor-pointer'>
                <Link to={'/contact'}>Contact us</Link>
              </div>
            </ul>
          </div>
        </div>
        <div>
          {content}
        </div>
        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <FiAlignCenter />}
        </button>
      </div>
    </nav>
  );
}
