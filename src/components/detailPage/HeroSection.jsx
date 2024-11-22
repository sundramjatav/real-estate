import React, { useState } from 'react'
import { CiLocationOn, CiMap } from 'react-icons/ci'
import { FiShare2 } from 'react-icons/fi'
import { HiOutlinePrinter } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'
import { IoHeartOutline, IoImagesOutline } from 'react-icons/io5'
import { RiHomeLine, RiUserLocationLine } from 'react-icons/ri'

import bg1 from '../../assets1/herosection/bg1.jpeg'
import bg2 from '../../assets1/herosection/bg2.jpeg'
import bg3 from '../../assets1/herosection/bg3.jpeg'
import bg4 from '../../assets1/herosection/bg4.jpeg'
import bg5 from '../../assets1/herosection/bg5.jpeg'
import bg6 from '../../assets1/herosection/bg6.jpeg'
import PopupForm from './PopupForm'


const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(bg1);

  const images = [bg1, bg2, bg3, bg4, bg5, bg6];
  return (
    <div className='md:px-24 sm:px-10 px-5 py-10'>
      <div className='flex flex-col md:flex-row gap-5 justify-between mb-10'>
        <div className='text-3xl space-y-16'>
          <div className='flex gap-5 sm:flex-row flex-col' style={{ color: "var(--primary-yellow)" }}>
            <div className='flex gap-5'>
              <p> <RiHomeLine /></p>
              <p>Home</p>
            </div>
            <div className='flex gap-5'>
              <p><IoIosArrowForward /></p>
              <p>Apartment</p>
            </div>
            <div className='flex gap-5'>
              <p><IoIosArrowForward /></p>
              <p>Modern apartment on the bay</p>
            </div>
          </div>
          <div className='space-y-4'>
            <h1 className='md:text-7xl text-5xl'>Modern apartment on the bay</h1>
            <div>
              <button className='uppercase  text-white text-xl mr-5 px-4 py-2 rounded-md' style={{ background: "var(--primary-yellow)" }}>Featured</button>
              <button className='uppercase  text-white text-xl bg-[#000000A6] mr-5 px-4 py-2 rounded-md'>For rent</button>
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

      <div className="flex flex-col md:flex-row gap-5 md:h-[90vh]">
        {/* Left Side */}
        <div
          className="w-full h-2/3 md:h-full md:w-full p-10 rounded-[3rem] bg-gray-50"
          style={{
            backgroundImage: `url(${currentBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className='flex w-full justify-between'>
            <PopupForm />
            <div className='text-4xl hidden md:flex  items-start gap-3 justify-start'>
              <div className='text-white p-4 rounded-lg' style={{ background: "var(--primary-yellow)" }}>
                <IoImagesOutline />
              </div>
              <div className='bg-[#000000A6] text-white p-4 rounded-lg'>
                <CiMap />
              </div>
              <div className='bg-[#000000A6] text-white p-4 rounded-lg'>
                <RiUserLocationLine />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-52 h-full grid grid-cols-3 md:flex md:flex-col items-center justify-center gap-5">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-36 rounded-2xl cursor-pointer"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => setCurrentBg(image)}
            ></div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default HeroSection