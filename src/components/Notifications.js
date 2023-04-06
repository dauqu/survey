import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { BsFillBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Notifications() {
  return (
    <div>
        <div className='h-[60px] w-full flex items-center bg-[#F47F16] shadow-md'>
            <Link to='/'>
                <RxArrowLeft className='text-white text-[20px] mx-3 cursor-pointer'/>
            </Link>
            <p className='text-white'>Notifications</p>
        </div>
        <div className='min-h-[calc(100vh-60px)] flex justify-center'>
            <div className='md:w-[600px] bg-white w-full'>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center h-[50px]'>
                        <BsFillBellFill className='text-[20px] text-[#979797] cursor-pointer mx-3'/>
                        <p className='text-[16px] leading-[16px]'>Notification 0</p>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center h-[50px]'>
                        <BsFillBellFill className='text-[20px] text-[#979797] cursor-pointer mx-3'/>
                        <p className='text-[16px] leading-[16px]'>Notification 1</p>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center h-[50px]'>
                        <BsFillBellFill className='text-[20px] text-[#979797] cursor-pointer mx-3'/>
                        <p className='text-[16px] leading-[16px]'>Notification 2</p>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center h-[50px]'>
                        <BsFillBellFill className='text-[20px] text-[#979797] cursor-pointer mx-3'/>
                        <p className='text-[16px] leading-[16px]'>Notification 3</p>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center h-[50px]'>
                        <BsFillBellFill className='text-[20px] text-[#979797] cursor-pointer mx-3'/>
                        <p className='text-[16px] leading-[16px]'>Notification 4</p>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center h-[50px]'>
                        <BsFillBellFill className='text-[20px] text-[#979797] cursor-pointer mx-3'/>
                        <p className='text-[16px] leading-[16px]'>Notification 5</p>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center h-[50px]'>
                        <BsFillBellFill className='text-[20px] text-[#979797] cursor-pointer mx-3'/>
                        <p className='text-[16px] leading-[16px]'>Notification 6</p>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center h-[50px]'>
                        <BsFillBellFill className='text-[20px] text-[#979797] cursor-pointer mx-3'/>
                        <p className='text-[16px] leading-[16px]'>Notification 7</p>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center h-[50px]'>
                        <BsFillBellFill className='text-[20px] text-[#979797] cursor-pointer mx-3'/>
                        <p className='text-[16px] leading-[16px]'>Notification 8</p>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center h-[50px]'>
                        <BsFillBellFill className='text-[20px] text-[#979797] cursor-pointer mx-3'/>
                        <p className='text-[16px] leading-[16px]'>Notification 9</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
