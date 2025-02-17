import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex felx-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div >
        <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
        <p>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
      <div >
        <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
        <p>7 Days return policy</p>
        <p className='text-gray-400'>We 7 Days provide free return policy</p>
      </div>
      <div >
        <img src={assets.support_img} alt="" className='w-12 m-auto mb-5' />
        <p>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
