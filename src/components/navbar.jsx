import React from "react";
import menu from "../constants/navbar"
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const [nav,shownav] = useState(false)

    const changenav = () => { 
        shownav(!nav)
    }
    return(
        <div>
            {menu.map((navlinks) =>  {
                return(
                    <div className="max-w-[1240px] flex xl:mx-auto rounded-full p-4 mx-4 justify-between items-center bg-red-700  text-[#191919] font-sans ">                        
                        <Link to="/" className="w-[70%] md:w-[20%] font-bold text-xl sm:text-2xl cursor-pointer md:ml-4 hover:text-[#5d5d5d]">{navlinks.name} <span>{navlinks.logo}</span></Link>
                        <div className="flex">
                            <div className="hidden lg:flex text-lg font-[400]">
                                <Link to="/" className="p-4 hover:text-[#ff3f3f] cursor-pointer">{navlinks.home}</Link>
                                <Link to="/about" className="p-4 hover:text-[#ff3f3f] cursor-pointer">{navlinks.about}</Link>
                                <Link to="/gallery" className="p-4 hover:text-[#ff3f3f] cursor-pointer">{navlinks.gallery}</Link>
                                <Link to="/contact" className="p-4 hover:text-[#ff3f3f] cursor-pointer">{navlinks.contact}</Link>                            
                            </div>
                            <div onClick={changenav} className="flex lg:hidden">
                                {nav ? <button>close</button> : <button>show</button> }
                            </div>                           
                            <h2 className="px-6 py-4 cursor-pointer">{navlinks.book_logo}</h2>
                            <Link to="/rooms"><div className="hidden md:flex py-4 px-7 text-white bg-[#ff3f3f] w-full rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]">{navlinks.book_button}</div></Link>
                            
                         </div>
                    </div>                    
                )
            })}

            {menu.map((navlinks) => {
                return(
                    <div className="mt-6 p-4 lg:hidden">
                        { nav && 
                        <div className="max-w-[1240px] bg-slate-600 rounded-xl mx-auto p-4 items-center text-[#191919] font-sans ">            
                            <div className="text-base font-semibold space-y-3 ml-4">
                                <Link to="/"className="hover:text-[#ff3f3f] cursor-pointer">{navlinks.home}</Link>
                                <Link to="/about" className="hover:text-[#ff3f3f] cursor-pointer">{navlinks.about}</Link>
                                <Link to="/gallery" className="hover:text-[#ff3f3f] cursor-pointer">{navlinks.gallery}</Link>
                                <Link to="/contact" className="hover:text-[#ff3f3f] cursor-pointer">{navlinks.contact}</Link>                            
                            </div>                          
                            <Link to="/rooms"><div className="rounded-full md:max-w-fit text-center cursor-pointer font-bold text-base mt-3 py-4 px-7 text-white bg-[#ff3f3f] hover:bg-[#dc2b2b]">{navlinks.book_button}</div></Link>
                        </div>   
                        }
                    </div>
                )
            })}             

        </div>
    )
}
