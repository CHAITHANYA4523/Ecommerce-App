import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
    {/* ------------------ left side -------------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className="flex gap-3">
          <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder = 'First name' type="text" />
          <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder = 'Last name' type="text" />
        </div>
        <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder = 'Email Address' type="email" />
        <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder = 'Street' type="text" />
        <div className="flex gap-3">
          <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder = 'City' type="text" />
          <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder = 'State' type="text" />
        </div>
        <div className="flex gap-3">
          <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder = 'Zipcode' type="number" />
          <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder = 'Country' type="text" />
        </div>
        <input className = 'border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder = 'Phone' type="number" />
      </div>
      {/* -------------------- Right Side --------------------- */}
      <div className='pl-20 mt-8'>
        <div className="mt-8 min-w-100">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* ------------ Payment Method Selection ----------------- */}
          <div className='flex  flex-col lg:flex-row gap-2'>
            <div onClick = {() => setMethod('stripe')}  className='flex items-center gap-3 border p-2  cursor-pointer'>
              <p className= {`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-blue-400' : ''}`}></p>
              <img className = 'h-5 mx-4 pr-16 pl-0.5' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick = {() => setMethod('razorpay')} className='flex items-center gap-3 border p-2  cursor-pointer'>
              <p className= {`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-blue-400' : ''}`}></p>
              <img className = 'h-5 mx-4 pr-8' src={assets.razorpay_logo} alt="" />
            </div>
            </div>
            <div onClick = {() => setMethod('cod')} className='mt-3 flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className= {`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-blue-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
            <div className='w-full text-end mt-8'>
              <button onClick = {() => navigate(('/orders'))} className='bg-black text-white px-16 py-3 text-sm'>Place Order</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
