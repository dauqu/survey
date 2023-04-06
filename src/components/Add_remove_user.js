import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Add_remove_user() {
    const [addUserForm, setAddUserForm] = React.useState(false);
  return (
    <div>
        <div className='h-[60px] w-full flex items-center bg-[#F47F16] shadow-md'>
            <Link to='/'>
                <RxArrowLeft className='text-white text-[20px] mx-3 cursor-pointer'/>
            </Link>
            <p className='text-white'>Add/Remove User</p>
        </div>
        <div className='min-h-[calc(100vh-60px)] flex justify-center'>
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
