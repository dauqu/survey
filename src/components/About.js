import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
        <div className='h-[60px] w-full flex items-center bg-[#F47F16] shadow-md'>
            <Link to='/'>
                <RxArrowLeft className='text-white text-[20px] mx-3 cursor-pointer'/>
            </Link>
            <p className='text-white'>About</p>
        </div>
        <div className='min-h-[calc(100vh-60px)] flex items-center justify-center'>
            <p className='text-[24px]'>MohitDotAi</p>
        </div>
    </div>
  )
}
