import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import logo from '../assets/logo.jpg'

export const Navbar = () => {
    const [open, setOpen] = useState(false)

    const menu = () => { 
        setOpen(!open)
    }

     return (
        <div className='shadow-md w-full fixed z-[999] top-0 md:top-8 left-0 text-black'>
            <div className='flex bg-white py-4 px-5 lg:px-10 justify-between items-center'>
                <Link to='/'>
                    <div className='items-center flex space-x-2'>
                        <img src={ logo } alt="logo" className='w-9 h-9 ' />
                        <div className="font-bold text-xl sm:text-2xl cursor-pointer hover:text-[#ff3f3f]">MDL</div>
                    </div>
                </Link>
                                
                <nav className='flex items-center'>
                    <ul className="hidden lg:flex items-center mr-5 text-lg font-[400] bg-white left-0 w-auto  transition-all ease-in duration-500">
                        <NavLink to="/" className="p-4 hover:text-[#ff3f3f] cursor-pointer duration-500"><p>Home</p> </NavLink>
                        <NavLink to="/about" className="p-4 hover:text-[#ff3f3f] cursor-pointer"><p>About</p></NavLink>
                        <NavLink to="/gallery" className="p-4 hover:text-[#ff3f3f] cursor-pointer"><p>Gallery</p></NavLink>
                        <NavLink to="/contact" className="p-4 hover:text-[#ff3f3f] cursor-pointer"><p>Contact</p></NavLink>                    
                    </ul>
                    <div className='text-lg cursor-pointer mr-5 flex lg:hidden' onClick={menu}>
                        { open ? <MdOutlineClose size={24} /> : <IoMenu size={24}/> }
                    </div>
                    <div className='items-center'>
                        <Link to="/rooms"><div className="hidden md:flex py-4 px-7 text-white bg-[#ff3f3f] w-full rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]"><p>Book now</p> </div></Link>
                    </div>
                    {
                        open &&                    
                        <ul className={`lg:hidden text-base font-[400]  absolute lg:pl-0 pl-9 pr-5 bg-white z-[-1] left-0 w-full transition-all ease-in duration-500 ${open && 'top-20 opacity-100'} `}>
                            <NavLink to="/" className="p-4 hover:text-[#ff3f3f] cursor-pointer duration-500"><p>Home</p> </NavLink>
                            <NavLink to="/about" className="p-4 hover:text-[#ff3f3f] cursor-pointer"><p>About</p></NavLink>
                            <NavLink to="/gallery" className="p-4 hover:text-[#ff3f3f] cursor-pointer"><p>Gallery</p></NavLink>
                            <NavLink to="/contact" className="p-4 hover:text-[#ff3f3f] cursor-pointer"><p>Contact</p></NavLink>                        
                            <div className='items-center pb-6 text-center'>                                
                                <Link to="/rooms"><div className="sm:max-w-fit  py-4 px-7 text-white bg-[#ff3f3f] w-full rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]"><p>Book now</p></div></Link>
                            </div>
                        </ul>
                                                    
                    }     
                    

                </nav>
                
            </div> 
        </div>
    )

}