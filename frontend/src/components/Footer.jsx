import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-row gap-14 my-10 mt-40 text-sm'>
        <div className='w-1/2'>
          <img src={assets.logo} alt="" className='mb-5 w-32'/>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, laborum?
          </p>
        </div>
        <div className='w-1/2'>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-244-424-784</li>
            <li>contact@foreveru.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@forever.com All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;