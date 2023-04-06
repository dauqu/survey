import React from 'react';
import { Link } from 'react-router-dom';
import login from './images/login.jpg';
import { RiRadioButtonLine } from 'react-icons/ri';
import { HiUser } from 'react-icons/hi';
import { BiShieldQuarter } from 'react-icons/bi';

export default function Login() {
  return (
    <div className='min-h-screen w-screen flex items-center justify-center'>
        <div className='sm:w-[360px] sm:border bg-white w-full sm:shadow-lg'>
            <div className='h-[80px] bg-[#F47F16] text-white px-4 text-[24px] font-medium leading-[80px] rounded-sm shadow-sm text-center'>Login Now</div>
            <div className='p-10'>
            <div className='h-[40px] rounded-sm flex items-center bg-[#eeeeee] cursor-pointer mb-4 shadow-sm'>
                <RiRadioButtonLine className='text-[20px] ml-3 mr-2 text-[#979797]'/>
                <select name="" id="" className='outline-none border-none h-[40px] w-full bg-[#eeeeee] rounded-sm cursor-pointer text-[#979797]'>
                    <option value="">Select Post</option>
                    <option value="Admin">Admin</option>
                    <option value="Super Admin">Super Admin</option>
                </select>
            </div>
            <div className='h-[40px] rounded-sm flex items-center bg-[#eeeeee] mb-4 shadow-sm'>
                <HiUser className='text-[20px] mx-3 text-[#979797]'/>
                <input name="" id="" className='outline-none border-none h-[40px] w-full bg-[#eeeeee] rounded-sm text-[#979797]' placeholder='Username'/>
            </div>
            <div className='h-[40px] rounded-sm flex items-center bg-[#eeeeee] mb-4 shadow-sm'>
                <BiShieldQuarter className='text-[20px] mx-3 text-[#979797]'/>
                <input type='password' name="" id="" className='outline-none border-none h-[40px] w-full bg-[#eeeeee] rounded-sm text-[#979797]' placeholder='Password' />
            </div>
            <Link to='/'>
            <button className='bg-[#F47F16] h-[40px] rounded-sm w-full text-center text-white text-[20px] shadow-sm'>
                Login
            </button>
            </Link>
            </div>
        </div>
    </div>
  )
}
