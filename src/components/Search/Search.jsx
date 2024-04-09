import React from 'react'
import { FaSearch } from "react-icons/fa"

export default function Search() {
  return (
    <div className='flex flex-row items-center'>
        <input type="text" placeholder='Search' className='bg-transparent border-2 border-white outline-none py-2 px-5 w-4/5 lg:w-3/5 h-10 lg:h-8' />
        <FaSearch className='w-1/5 h-10 lg:h-8 bg-white text-black py-2 cursor-pointer'/>

    </div>
  )
}
