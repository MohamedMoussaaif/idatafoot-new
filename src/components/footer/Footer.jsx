import React from 'react'
import { FaRegCopyright } from "react-icons/fa"
import { IoLogoFacebook } from "react-icons/io"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"

export default function Footer() {
  return (
      <div className='flex flex-row text-white space-x-4 text-xs lg:text-s px-20 py-3 bg-zinc-900 items-center justify-center lg:justify-start'>
        <div className='flex flex-row items-center space-x-1'>
          <span className='flex flex-row items-center'>Copyright&nbsp;<FaRegCopyright />&nbsp;2024</span>
          <span>IDataFoot</span>
        </div>
        <div className='flex flex-row space-x-3'>
          <a href=""><IoLogoFacebook /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><FaXTwitter /></a>
        </div>
      </div>
  )
}
