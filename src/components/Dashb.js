import React from 'react';
import Header from './Header';
import { MdInfo } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <Header/>
      <div className='md:flex w-full'>
        <div className='md:w-1/5 flex items-center justify-center min-h-[250px]'>
          <div className='w-[60px] h-[60px] rounded-full border-black  border-[2px] text-white text-[14px] flex items-center justify-center bg-[#f45c16]'>15</div>
        </div>
        <div className='md:w-2/5 flex flex-col justify-center '>
          <div className='flex flex-wrap items-center'>
            <Link to='/voters-list' className='p-2 w-1/2'>
              <div className='bg-[#F47F16] h-[40px] rounded-sm text-white text-center leading-[40px] cursor-pointer'>Voters List</div>
            </Link>
            <Link to="/survey" className='p-2 w-1/2'>
              <div className='bg-[#F47F16] h-[40px] rounded-sm text-white text-center leading-[40px]'>Survey</div>
            </Link>
            <Link to="/election" className='p-2 w-1/2 cursor-pointer'>
              <div className='bg-[#F47F16] h-[40px] rounded-sm text-white text-center leading-[40px]'>Election</div>
            </Link>
            <Link to="/issues" className='p-2 w-1/2 cursor-pointer'>
              <div className='bg-[#F47F16] h-[40px] rounded-sm text-white text-center leading-[40px]'>Issue</div>
            </Link>
            <Link to="/report" className='p-2 w-1/2 cursor-pointer'>
              <div className='bg-[#F47F16] h-[40px] rounded-sm text-white text-center leading-[40px]'>Report</div>
            </Link>
          </div>
        </div>
        <div className='md:w-2/5 p-4 flex flex-col justify-center'>
          <div className='flex items-center w-full h-[40px] bg-[#ececec] rounded-sm mt-4'>
            <MdInfo className='mx-3 text-[#979797]'/>
            <p className='grow shrink text-[16px]'>Total Districts</p>
            <p className='mx-3 text-[15px]'>33</p>
          </div>
          <div className='flex items-center w-full h-[40px] bg-[#ececec] rounded-sm mt-4'>
            <MdInfo className='mx-3 text-[#979797]'/>
            <p className='grow shrink text-[16px]'>Total Voters Members</p>
            <p className='mx-3 text-[15px]'>100000</p>
          </div>
          <div className='flex items-center w-full h-[40px] bg-[#ececec] rounded-sm mt-4'>
            <MdInfo className='mx-3 text-[#979797]'/>
            <p className='grow shrink text-[16px]'>Total Male Voters</p>
            <p className='mx-3 text-[15px]'>50000</p>
          </div>
          <div className='flex items-center w-full h-[40px] bg-[#ececec] rounded-sm mt-4'>
            <MdInfo className='mx-3 text-[#979797]'/>
            <p className='grow shrink text-[16px]'>Total Female Voters</p>
            <p className='mx-3 text-[15px]'>50000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
