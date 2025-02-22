import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from  '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-sxl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus quasi iusto, nam provident fugit non, itaque facere veniam a ullam dolore. Voluptatum, molestiae id quas sed repudiandae laboriosam officia.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, cupiditate temporibus error velit quasi assumenda dicta! Quae fugit, iste voluptatem repellendus soluta minus at sequi.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem impedit suscipit dolorum non nam?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, culpa.</p>
        </div>
        </div>  
        <div className='text-2xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        <div className='flex flex-col md:flex-row text-sm md-20'>
          <div className=' px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione est autem tenetur veniam ipsam.</p>
          </div>
          <div className=' px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione est autem tenetur veniam ipsam.</p>
          </div>
          <div className=' px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione est autem tenetur veniam ipsam.</p>
          </div>
        </div>
        <NewsLetterBox />
    </div>
  )
}

export default About
