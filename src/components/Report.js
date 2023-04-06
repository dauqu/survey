import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoFilterSharp } from 'react-icons/io5';

export default function Report() {
  return (
    <div>
        <div className='h-[60px] w-full flex items-center justify-between bg-[#F47F16] shadow-md'>
            <div className='flex items-center'>
                <Link to='/'>
                    <RxArrowLeft className='text-white text-[20px] mx-3 cursor-pointer'/>
                </Link>
                <p className='text-white'>Report</p>
            </div>
            <IoFilterSharp className='text-white mr-3 cursor-pointer'/>
        </div>
        <div className='min-h-[calc(100vh-60px)] flex justify-center hidden'>
            <div className='md:w-[600px] bg-white w-full'>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>User 0</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>User 0's address</p>
                        </div>
                        <MdDelete className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>User 1</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>User 1's address</p>
                        </div>
                        <MdDelete className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>User 2</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>User 2's address</p>
                        </div>
                        <MdDelete className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>User 3</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>User 3's address</p>
                        </div>
                        <MdDelete className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>User 4</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>User 4's address</p>
                        </div>
                        <MdDelete className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>User 5</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>User 5's address</p>
                        </div>
                        <MdDelete className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>User 6</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>User 6's address</p>
                        </div>
                        <MdDelete className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>User 7</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>User 7's address</p>
                        </div>
                        <MdDelete className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>User 8</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>User 8's address</p>
                        </div>
                        <MdDelete className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>User 9</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>User 9's address</p>
                        </div>
                        <MdDelete className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
