import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FiShare2 } from 'react-icons/fi'
import { HiOutlinePrinter } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'
import { IoHeartOutline } from 'react-icons/io5'
import { RiHomeLine } from 'react-icons/ri'

const HeroSection = () => {
  return (
    <div className='px-24 py-10'>
      <div className='flex flex-col md:flex-row gap-5 justify-between'>
        <div className='text-3xl space-y-16'>
          <div className='flex gap-5' style={{ color: "var(--primary-yellow)" }}>
            <p> <RiHomeLine /></p>
            <p>Home</p>
            <p><IoIosArrowForward /></p>
            <p>Apartment</p>
            <p><IoIosArrowForward /></p>
            <p>Modern apartment on the bay</p>
          </div>
          <div className='space-y-4'>
            <h1 className='text-7xl'>Modern apartment on the bay</h1>
            <div>
              <button className='uppercase  text-white bg-orange-500 mr-5 px-4 py-2 rounded-md'>Featured</button>
              <button className='uppercase  text-white bg-[#000000A6] mr-5 px-4 py-2 rounded-md'>For rent</button>
            </div>
            <div className='flex gap-3 text-[#000000A6]'>
              <CiLocationOn />
              <p>172 Gujar Pura, Peer Gate, Huzur , Bhopal M.P 462001</p>
            </div>
          </div>
        </div>
        <div className='space-y-3'>
          <div className='text-3xl text-[#000000A6] flex gap-2 md:items-end md:justify-end'>
            <div className='p-3 border rounded-md'>
              <IoHeartOutline />
            </div>
            <div className='p-3 border rounded-md'>
              <FiShare2 />
            </div>
            <div className='p-3 border rounded-md'>
              <HiOutlinePrinter />
            </div>
          </div>
          <div>
            <p className='text-3xl text-[#000000A6]'>From ₹45,000,00/-</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection