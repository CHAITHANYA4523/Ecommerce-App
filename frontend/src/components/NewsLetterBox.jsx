import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div>
      <div className="text-center">
        <p className='text-2xl font-medium text-gray-800'>Subscirbe now and get 20% off</p>
        <div className="text-gray-400 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'action="">
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetterBox
