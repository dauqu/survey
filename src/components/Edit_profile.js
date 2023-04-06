import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { Link } from 'react-router-dom';

export default function Edit_profile() {
  return (
    <div>
        <div className='h-[60px] w-full flex items-center bg-[#F47F16]'>
            <Link to='/'>
                <RxArrowLeft className='text-white text-[20px] mx-3 cursor-pointer'/>
            </Link>
            <p className='text-white'>Edit Profile</p>
        </div>
        <div className='min-h-[calc(100vh-60px)] w-screen flex items-center justify-center'>
        <div className='sm:w-[360px] sm:border bg-white w-full sm:shadow-lg'>
            <div className='p-4 sm:p-10'>
            <div className='w-full h-[100px] flex items-center justify-center'>
                <div className='w-[70px] h-[70px] rounded-full border border-black'></div>
            </div>
            <input className='h-[40px] rounded-sm flex items-center cursor-pointer mb-4 shadow-sm w-full border px-3 border-black placeholder:text-black' type='text' placeholder='Name' />
            <input type='email' className='h-[40px] rounded-sm flex items-center cursor-pointer mb-4 shadow-sm w-full border px-3 border-black placeholder:text-black' placeholder='Email'/>
            <input  className='h-[40px] rounded-sm flex items-center cursor-pointer mb-4 shadow-sm w-full border px-3 border-black placeholder:text-black' type='number' placeholder='Phone Number'/>
            <input  className='h-[40px] rounded-sm flex items-center cursor-pointer mb-4 shadow-sm w-full border px-3 border-black placeholder:text-black' type='password' placeholder='Old Password'/>
            <input  className='h-[40px] rounded-sm flex items-center cursor-pointer mb-4 shadow-sm w-full border px-3 border-black placeholder:text-black' type='password' placeholder='New Password'/>
            <button className='bg-[#F47F16] h-[40px] rounded-sm w-full text-center text-white text-[16px] shadow-sm'>Submit</button>
            </div>
        </div>
        </div>
    </div>
    
  )
}
