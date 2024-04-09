import React from 'react'
import { IoLogoFacebook } from "react-icons/io"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"

export default function Contact() {
  return (
    <div className='flex flex-col text-white mt-10 lg:justify-center lg:items-center'>
      <div className='flex flex-row items-center space-x-20 mx-8'>
        <span className='text-xl lg:text-2xl'>Contact Form</span>
        <div className='flex flex-row space-x-5 text-xl'>
          <a href=""><IoLogoFacebook /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><FaXTwitter /></a>
        </div>
      </div>

      <div className='flex flex-col bg-zinc-900 my-10 p-10 mx-5' style={{borderRadius:'15px'}}>
        <span className='text-xl'>Contact us</span>

        <div className='flex flex-col mt-5 space-y-5'>
          <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
          <textarea className="textarea textarea-bordered" placeholder="Comment"></textarea>
          <div>
            <button className="btn text-white btn-outline">Send</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}
