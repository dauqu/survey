import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoFilterSharp } from 'react-icons/io5';
import { CiMenuKebab } from 'react-icons/ci';

export default function Voters_list() {
    const [addVoterForm, setAddVoterForm] = React.useState(false);
    const [menu, setMenu] = React.useState(false);
    const [filter, setFilter] = React.useState(false);
  return (
    <div>
        <div className='h-[60px] w-full flex items-center justify-between bg-[#F47F16] shadow-md'>
            <div className='flex items-center'>
                <Link to='/'>
                    <RxArrowLeft className='text-white text-[20px] mx-3 cursor-pointer'/>
                </Link>
                <p className='text-white'>Voters List</p>
            </div>
            <div className='flex items-center'>
                <IoFilterSharp className='text-white mr-3 cursor-pointer' onClick={()=>setFilter(true)}/>
                <p className='relative text-[24px] text-white mr-3 top-[-4px] cursor-pointer' onClick={()=>setAddVoterForm(true)}>+</p>
            </div>
        </div>
        <div className='min-h-[calc(100vh-60px)] flex justify-center'>
            <div className='md:w-[600px] bg-white w-full'>
                <div className='p-2'>
                    <div className='shadow-md rounded-md flex items-center justify-between h-[70px] pl-3 pr-5'>
                        <div className=''>
                            <p className='text-[10px] text-center'>0</p>
                            <p className='h-[24px] w-[24px] rounded-full bg-[#F47F16] flex items-center justify-center text-white text-[12px] leading-[20px]'>8</p>
                        </div>
                        <div className='flex flex-col justify-evenly grow shrink px-3'>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[14px] mr-3'>Name</p>
                                <p className='text-[10px]'>Gender</p>
                            </div>
                            <div className='flex items-center my-1'>
                                <p className='text-[12px] text-[#979797] leading-[12px] mr-3'>Age: 57</p>
                                <p className='text-[12px] text-[#979797] leading-[12px]'>Husband's/Father's/Mother's Name: Name</p>
                            </div>
                            <p className='text-[12px] text-[#979797] leading-[12px] mt-1'>Village Name: Name</p>
                        </div>
                        <div className='cursor-pointer text-[20px] text-white mx-3 relative'>
                            <CiMenuKebab onClick={()=>setMenu(!menu)} className='text-black'/>
                            <div className={ menu ? 'absolute w-[150px] right-0 top-[35px] rounded-sm shadow-md bg-white py-3 px-5' : 'hidden' }>
                                    <p className='text-[16px] text-black leading-[30px]'>Add Number</p>
                                    <p className='text-[16px] text-black leading-[30px]'>Create issue</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={ addVoterForm ? 'fixed min-h-screen w-screen flex items-center justify-center bg-black/70 top-0' : "hidden" }>
            <div className='p-5 rounded-sm bg-white shadow-md sm:w-[300px]'>
                <p className='text-[20px] font-medium'>Add Voters</p>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>ID</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>Name</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>Family Head Name</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>District</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='h-[45px]'>
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>Assembly Constituency</p>
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
                    <p htmlFor="" className='text-black/90 relative top-[20px]'>Occupation</p>
                    <input type="text" className='border-b outline-none w-full' />
                </div>
                <div className='flex items-center justify-end mt-10'>
                    <p className='text-[14px] text-[#3081a7] cursor-pointer' onClick={()=>setAddVoterForm(false)}>Cancel</p>
                    <p className='text-[14px] text-[#3081a7] ml-[20px] cursor-pointer' onClick={()=>setAddVoterForm(false)}>Apply</p>
                </div>
            </div>
        </div>
        <div className={ filter ? 'fixed min-h-screen w-screen flex items-center justify-center bg-black/70 top-0' : "hidden" }>
            <div className='p-5 rounded-sm bg-white shadow-md sm:w-[300px]'>
                <p className='text-[20px] font-medium'>Filter Voters</p>
                <div className='w-full border-b'>
                    <select name="" id="" className='w-full h-[40px] outline-none cursor-pointer'>
                        <option value="">Select District</option>
                        <option value="District 1">District 1</option>
                        <option value="District 2">District 2</option>
                        <option value="District 3">District 3</option>
                        <option value="District 4">District 4</option>
                    </select>
                </div>
                <div className='w-full border-b'>
                    <select name="" id="" className='w-full h-[40px] outline-none cursor-pointer'>
                        <option value="">Select Assembly</option>
                        <option value="Assembly 1">Assembly 1</option>
                        <option value="Assembly 2">Assembly 2</option>
                        <option value="Assembly 3">Assembly 3</option>
                        <option value="Assembly 4">Assembly 4</option>
                    </select>
                </div>
                <div className='w-full border-b'>
                    <select name="" id="" className='w-full h-[40px] outline-none cursor-pointer'>
                        <option value="">Select Booth</option>
                        <option value="Booth 1">Booth 1</option>
                        <option value="Booth 2">Booth 2</option>
                        <option value="Booth 3">Booth 3</option>
                        <option value="Booth 4">Booth 4</option>
                    </select>
                </div>
                <div className='flex mt-3'>
                    <div className='h-[45px] grow shrink basis-0'>
                        <input type="text" className='border-b outline-none w-full' placeholder='Min Age'/>
                    </div>
                    <p>&nbsp;-&nbsp;</p>
                    <div className='h-[45px] grow shrink basis-0'>
                        <input type="text" className='border-b outline-none w-full' placeholder='Max Age'/>
                    </div>
                </div>
                <div className='flex items-center justify-end mt-10'>
                    <p className='text-[14px] text-[#3081a7] cursor-pointer' onClick={()=>setFilter(false)}>Cancel</p>
                    <p className='text-[14px] text-[#3081a7] ml-[20px] cursor-pointer' onClick={()=>setFilter(false)}>Apply</p>
                </div>
            </div>
        </div>
    </div>
  )
}
