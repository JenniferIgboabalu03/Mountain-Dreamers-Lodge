import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'


const Footer = () => { 
    return(
        <div className="border-t 2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="max-w-screen-xl mx-auto px-6 text-[#5d5d5d] font-sans pt-28">
                <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 lg:gap-x-11 pb-10">
                    <div className="w-full">
                        <Link to='/' target="_top">
                            <div className='items-center flex space-x-2'>
                                <img src={ logo } alt="logo" className='w-9 h-9 ' />
                                <div className="font-bold text-xl sm:text-2xl text-black cursor-pointer hover:text-[#ff3f3f]">MDL</div>
                            </div>
                        </Link>
                        <h2 className="text-base md:text-lg mt-4 mb-4 sm:mb-6 font-[500]">Don't forget to check out our social media handles.</h2>
                        <div className="flex space-x-5">
                            <div className="rounded-full box-shadow p-2 cursor-pointer text-[#ff3f3f] hover:text-white hover:bg-[#ff3f3f]"><FaFacebookF size={17} className=""/></div>
                            <div className="rounded-full box-shadow p-2 cursor-pointer text-[#ff3f3f] hover:text-white hover:bg-[#ff3f3f]"><FaTwitter size={17} className=""/></div>
                            <div className="rounded-full box-shadow p-2 cursor-pointer text-[#ff3f3f] hover:text-white hover:bg-[#ff3f3f]"><FaInstagram size={17} className=""/></div>
                            <div className="rounded-full box-shadow p-2 cursor-pointer text-[#ff3f3f] hover:text-white hover:bg-[#ff3f3f]"><FaYoutube size={17} className=""/></div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 sm:flex gap-11 mt-7 lg:mt-0">
                        <div className="hidden sm:block">
                            <h1 className="font-bold text-lg sm:text-xl text-black">Pages</h1>
                            <ul className="text-base md:text-lg mt-4 cursor-pointer font-[500]">
                                <Link to="/" target="_top"><li className="py-1 hover:text-[#ff3f3f]">Home</li></Link>
                                <Link to="/about" target="_top"><li  className="py-2 hover:text-[#ff3f3f]">About</li></Link>
                                <Link to="/contact" target="_top"><li  className="py-2 hover:text-[#ff3f3f]">Contact</li></Link>                                
                                <Link to="/gallery" target="_top"><li  className="py-2 hover:text-[#ff3f3f]">Gallery</li></Link>
                            </ul>
                        </div>

                        <div className="w-full">
                            <div className="flex items-center w-full space-x-5">
                                <div className="rounded-full p-4 box-shadow"><SlEnvolopeLetter size={40} className="text-[#ff3f3f] font-bold"/></div>
                                <div className="w-full">
                                    <h1 className="font-bold text-lg sm:text-xl text-black">Subscribe to our newsletter</h1>
                                    <p className="text-base md:text-lg mt-2 sm:mt-4 font-[500]">Join our 1000+ customers and enjoy your stay with us.</p>
                                </div>
                            </div>

                            <div className="flex flex-row items-center w-full space-x-6 mt-6 sm:mt-8">
                                <input className="p-5 flex w-full lg:w-[50%] rounded-full text-black border shadow-md outline-none" type="email" placeholder="Enter Email"></input>
                                <button className="py-4 px-7 md:py-5 md:px-9 bg-[#ff3f3f] font-bold rounded-full cursor-pointer text-base md:text-lg hover:bg-[#dc2b2b] text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="text-center py-8 border-t text-base md:text-lg font-[500]">
                    <p>Copyright <sup className="text-sm">&copy;</sup> Mdl 2024 All rights reserved | Built by Igboabalu Jennifer.</p>
                </div>
            </div>                  
             
        </div>
    )
}

export default Footer