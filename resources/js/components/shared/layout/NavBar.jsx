import React, { useState } from 'react'
import LogoIcon from '../icons/LogoIcon'
import SearchIcon from '../icons/SearchIcon'
import NotificationIcon from '../icons/NotificationIcon'

export default function NavBar () {
    const [companiesMenuOpen, setCompaniesMenuOpen] = useState(false)

    return (
        <div className="navbar  bg-white ">
            {/* start */}
            <div className="navbar-start relative">
                <div className='w-52 flex justify-between items-center' style={{alignItems:'center'}}>
                    {/* menu */}
                    <div className="drawer drawer-start flex">
                        <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />

                        <label onClick={()=>companiesMenuOpen ? setCompaniesMenuOpen(false) : ''} className="btn swap swap-rotate z-30  bg-white hover:bg-white border-none shadow-none" for="sidebar-drawer">
                        {/* <!-- hamburger icon --> */}
                        <svg  className=" swap-off fill-black [:checked~*_&]:!-rotate-45 [:checked~*_&]:!opacity-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>        
                        {/* <!-- close icon --> */}
                        <svg className="swap-on fill-black [:checked~*_&]:!rotate-0 [:checked~*_&]:!opacity-100" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>        
                        </label>
                        
                        <div className="drawer-content">
                        {/* <!-- Page content here --> */}
                        {/* <label for="sidebar-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
                        </div>
                        <div className="drawer-side">
                        <label for="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu z-20 p-4 w-80 min-h-full bg-white text-black pt-[68px]">
                            {/* <!-- Sidebar content here --> */}
                            <li><a className='text-main-color'>Main</a></li>
                            <li><a className=''>About us</a></li>
                            <li><a>Projects</a></li>
                            <li><a>News</a></li>
                            <li><a>Contacy us</a></li>
                        </ul>
                        </div>
                    </div>
                    {/* logo */}
                    <a className="flex gap-1 z-20" href='/home'>
                        <LogoIcon />
                        <h1 className='text-lg font-bold text-black'>BisConnect</h1>
                    </a>
                </div>
            </div>

{/*  */}
            <div className="navbar-center hidden md:flex">
                {/* search */}
                <label className="input  bg-third-color text-black rounded-lg input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <SearchIcon />
                </label>
            </div>

            <div className="navbar-end">
                <div className='flex justify-between items-center gap-4'>
                    {/* avatar */}
                    <div className='flex gap-1 items-center'>
                        <div className="avatar online">
                            <div className="w-12 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className='hidden md:block text-xs'>
                            <h2>Employee Name</h2>
                            <h3>Job Name</h3>
                        </div>
                    </div>
                    {/* notification */}
                    <div className='relative me-8'> 
                        <NotificationIcon />
                        <div className='grid place-content-center w-4 h-4 font-bold text-[8px] absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full'>11</div>
                    </div>
                </div>
            </div>
        </div>
    )
}




