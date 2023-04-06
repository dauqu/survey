import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Survey() {
    const [addUserForm, setAddUserForm] = React.useState(false);
  return (
    <div>
        <div className='h-[60px] w-full flex items-center justify-between bg-[#F47F16] shadow-md'>
            <Link to='/'>
                <RxArrowLeft className='text-white text-[20px] mx-3 cursor-pointer'/>
            </Link>
            <div className='mr-3'>
                <select name="" id="" className='bg-[#f47f16] outline-none cursor-pointer'>
                    <option value="">My Survey</option>
                    <option value="">Other Survey</option>
                </select>
            </div>
        </div>
        <div className='min-h-[calc(100vh-60px)] flex justify-center'>
            <div className='md:w-[600px] bg-white w-full'>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>mySurvey 1</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>Description of mySurvey 1</p>
                        </div>
                        <FiArrowRight className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>mySurvey 2</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>Description of mySurvey 2</p>
                        </div>
                        <FiArrowRight className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>mySurvey 3</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>Description of mySurvey 3</p>
                        </div>
                        <FiArrowRight className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>mySurvey 4</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>Description of mySurvey 4</p>
                        </div>
                        <FiArrowRight className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>mySurvey 5</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>Description of mySurvey 5</p>
                        </div>
                        <FiArrowRight className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[50px] pl-3 pr-5'>
                        <div className='flex flex-col justify-evenly'>
                            <p className='text-[16px] leading-[16px]'>mySurvey 6</p>
                            <p className='text-[14px] text-[#979797] leading-[14px] mt-1'>Description of mySurvey 6</p>
                        </div>
                        <FiArrowRight className='text-[20px] text-[#979797] cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
        <div className={ addUserForm ? 'fixed min-h-screen w-screen flex items-center justify-center bg-black/70 top-0' : "hidden" }>
            <div className='p-5 rounded-sm bg-white shadow-md sm:w-[300px]'>
                <p className='text-[20px] font-medium'>Add User</p>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>Name</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>Designation</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>Post</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>District</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>Tehsil</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>Male/Female</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>Age</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>Phone No.</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='flex items-center justify-end mt-10'>
                    <p className='text-[14px] text-[#3081a7] cursor-pointer' onClick={()=>setAddUserForm(false)}>Cancel</p>
                    <p className='text-[14px] text-[#3081a7] ml-[20px] cursor-pointer' onClick={()=>setAddUserForm(false)}>Apply</p>
                </div>
            </div>
        </div>
        <div className='w-[50px] h-[50px] rounded-full bg-[#f47f16] fixed bottom-[20px] right-[20px] text-[30px] text-white leading-[45px] text-center cursor-pointer' onClick={()=>setAddUserForm(true)}>+</div>
    </div>
  )
}
