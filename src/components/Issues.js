import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Issues() {
  return (
    <div>
        <div className='h-[60px] w-full flex items-center bg-[#F47F16] shadow-md'>
            <Link to='/'>
                <RxArrowLeft className='text-white text-[20px] mx-3 cursor-pointer'/>
            </Link>
            <p className='text-white'>My Issue</p>
        </div>
        <div className='min-h-[calc(100vh-60px)] flex justify-center'>
            <div className='md:w-[600px] bg-white w-full'>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>Issue 1</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>status: Resolved</p>
                        </div>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>Issue 1</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>status: not Resolved</p>
                        </div>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>Issue 1</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>status: Resolved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
