import React from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { CiMenuKebab } from 'react-icons/ci';
import { MdInfo } from 'react-icons/md';
import {MdOutlineLogout} from 'react-icons/md';
import { IoMenuOutline } from 'react-icons/io5';
import { BsGrid1X2Fill } from 'react-icons/bs';
import { IoPersonAdd } from 'react-icons/io5';
import { MdModeEditOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Header() {
    const [menu, setMenu] = React.useState(false);
    const [sidebar, setSidebar] = React.useState("");
  return (
    <div className='bg-[#F47F16] h-[60px] '>
        <div className='flex items-center justify-between h-full'>
            <div className='flex items-center'>
                <div className='text-white text-[30px] mx-3 cursor-pointer' onClick={()=>setSidebar(!sidebar)}><IoMenuOutline/></div>
                <div className='text-white text-[20px] cursor-pointer'>Dashboard</div>
            </div>
            <div className='flex items-center'>
                <Link to="/notifications" className='cursor-pointer text-[20px] text-white mx-3'><BsFillBellFill/></Link>
                <div className='cursor-pointer text-[20px] text-white mx-3 relative'>
                    <CiMenuKebab onClick={()=>setMenu(!menu)}/>
                    <div className={ menu ? 'absolute right-0 top-[35px] rounded-md shadow-md bg-white' : 'hidden' }>
                        <Link to="/about" className='flex items-center px-5 py-3'>
                            <MdInfo className='text-[#979797] mr-3'/>
                            <p className='text-[16px] text-black'>About</p>
                        </Link>
                        <Link to='/login' className='flex items-center px-5 pb-3'>
                            <MdOutlineLogout className='text-[#979797] mr-3'/>
                            <p className='text-[16px] text-black'>Logout</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={ sidebar === "" ? "hidden" : sidebar ?  'fixed w-[300px] h-screen shadow-2xl animate-new_chats_show bg-white' : 'fixed w-[300px] h-screen shadow-2xl animate-new_chats_hide bg-white' }>
            <div className='h-[160px] w-full flex items-center justify-center top-0 bg-[#F47F16]'>
                <div>
                    <div className='h-[70px] w-[70px] rounded-full bg-white m-auto'></div>
                    <p className='text-center text-[20px] text-white'>John Doe (admin)</p>
                    <p className='text-center text-[14px] text-white'>+91 1234567890</p>
                </div>
            </div>
            <Link to='/' className='h-[40px] flex items-center cursor-pointer mt-2 hover:bg-[#ececec] hover:transition-all' >
                <BsGrid1X2Fill className='text-[#979797] mx-3 text-[18px]'/>
                <p>Dashboard</p>
            </Link>
            <Link to='/add-remove-user' className='h-[40px] flex items-center cursor-pointer hover:bg-[#ececec] hover:transition-all'>
                <IoPersonAdd className='text-[#979797] mx-3 text-[18px]'/>
                <p>Add/Remove User</p>
            </Link>
            <Link to="/edit-profile" className='h-[40px] flex items-center cursor-pointer hover:bg-[#ececec] hover:transition-all'>
                <MdModeEditOutline className='text-[#979797] mx-3 text-[18px]'/>
                <p>Edit My Profile</p>
            </Link>
        </div>
    </div>
  )
}
