import difference_img1 from '../assets/difference-img1.jpg'
import difference_img3 from '../assets/difference-img3.jpg'
import camp_fire from '../assets/camp-fire.jpg'
import difference_img4 from '../assets/difference-img4.jpg'
import wood_fire from '../assets/wood-fire.png'
import gaming_il from '../assets/gaming-il.png'
import fishing_il from '../assets/fishing-il.png'

import { Link } from "react-router-dom";
import { RxPerson } from "react-icons/rx";
import { LiaBedSolid } from "react-icons/lia";
import reviews from '../constants/reviews'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(        
        <div className="text-black font-sans 2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="w-full home-header h-[400px] md:h-screen text-center ">
                <div className="max-w-[900px] mx-auto px-5 h-full flex flex-col justify-center items-center">
                    <div>
                        <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl mb-8 text-white sm:mt-0 ">Welcom to Mountain <br /> Dreamers Lodge</h1>
                        <p className="text-base sm:text-lg text-white">Treat yourself to the perfect staycation with special offers at Mountain Dreamers Lodge. Our mid-century getaway exudes a cozy, lakeside getaway. Enjoy earthy, mountain style decor, Come vibe with us.</p>
                        <div className="mt-10 hidden md:flex justify-center space-y-3 sm:space-y-0 sm:space-x-6 items-center">
                            <Link to="/rooms" target="_top"><div className="py-4 px-7 md:py-6 md:px-9 bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base md:text-lg hover:bg-[#dc2b2b] text-white hover:text-black">Explore rooms</div></Link>
                            <Link to="/about" target="_top"><div className="mt-3 sm:mt-0 py-4 px-7 md:py-6 md:px-10 text-black bg-white rounded-full cursor-pointer text-base md:text-lg hover:bg-[#ff3f3f] hover:text-white">About us</div></Link> 
                        </div>
                    </div>                    
                </div>                
            </div>
            <div className="px-6 bg-[#fcfcfc]">
                {/* Cabin cards section begins */}
                <div className="max-w-[1240px] w-full mx-auto pt-[15%]">
                    <div className="w-full md:flex space-y-7 md:space-y-0 md:justify-between items-center mb-10" >
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Explore our cabins</h1>
                        <Link to="/rooms" target="_top"><div className="mt-5 md:mt-0 py-4 px-6 sm:py-4 sm:px-6 md:py-6 md:px-8 border-2 rounded-full shadow-xl cursor-pointer text-lg hover:bg-[#ff3f3f] hover:text-white text-center">Browse all</div></Link> 
                    </div>
                    <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        <div className="w-full shadow-xl rounded-3xl transition-all  hover:scale-90 cursor-pointer">
                            <div className="w-full rounded-t-3xl single-img1" />
                            <div className="px-5 pt-8 pb-6">
                                <p className="font-bold text-xl md:text-2xl">Single cabin</p>
                                <p className="text-base sm:text-lg mt-2 mb-6 text-[#5d5d5d]">Our single room is the...</p>
                                <div className="w-full space-y-3 xl:space-y-0 xl:space-x-2 cursor-pointer mb-7 xl:flex">
                                    <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><RxPerson size={17} /><h1 className="text-sm md:text-base font-semibold">1 Guest</h1></div>
                                    <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><LiaBedSolid size={17} /><h1 className="text-sm md:text-base font-semibold">1 Bedroom</h1></div>
                                </div>
                                <div className="w-full space-y-3 md:space-y-0 md:flex md:justify-between items-center pt-6 border-t border-[#d7d5d5]">
                                    <div className="flex items-center">
                                        <p className="font-bold text-xl md:text-3xl">$99</p>
                                        <p className="text-sm md:text-base  text-[#8b8b8b]">/night</p>
                                    </div>                                        
                                    <Link to="/single_cabin" target="_top" className="md:w-[50%]"><div className="mt-3 md:mt-0 py-4 px-5 w-full text-center text-white bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]">View Details</div></Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full shadow-xl rounded-3xl transition-all  hover:scale-90 cursor-pointer ">
                            <div className="w-full rounded-t-3xl duo-img1" />
                            <div className="px-5 pt-8 pb-6">
                                <p className="font-bold text-xl md:text-2xl">Duo cabin</p>
                                <p className="text-base sm:text-lg mt-2 mb-6 text-[#5d5d5d]">Our duo room is the...</p>
                                <div className="w-full space-y-3 xl:space-y-0 xl:space-x-2 cursor-pointer mb-7 xl:flex">
                                    <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><RxPerson size={17} /><h1 className="text-sm md:text-base font-semibold">4 Guests</h1></div>
                                    <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><LiaBedSolid size={17} /><h1 className="text-sm md:text-base font-semibold">2 Bedrooms</h1></div>
                                </div>
                                <div className="w-full space-y-3 md:space-y-0 md:flex md:justify-between items-center pt-6 border-t border-[#d7d5d5]">
                                    <div className="flex items-center">
                                        <p className="font-bold text-xl md:text-3xl">$129</p>
                                        <p className="text-sm md:text-base  text-[#8b8b8b]">/night</p>
                                    </div>                                        
                                    <Link to="/duo_cabin" target="_top" className="md:w-[50%]"><div className="mt-3 md:mt-0 py-4 px-5 w-full text-center text-white bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]">View Details</div></Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full shadow-xl rounded-3xl transition-all  hover:scale-90 cursor-pointer ">
                            <div className="w-full rounded-t-3xl duplex-img1" />
                            <div className="px-5 pt-8 pb-6">
                                <p className="font-bold text-xl md:text-2xl">Duplex cabin</p>
                                <p className="text-base sm:text-lg mt-2 mb-6 text-[#5d5d5d]">Our duplex room is the...</p>
                                <div className="w-full space-y-3 xl:space-y-0 xl:space-x-2 cursor-pointer mb-7 xl:flex">
                                    <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><RxPerson size={17} /><h1 className="text-sm md:text-base font-semibold">6 Guests</h1></div>
                                    <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><LiaBedSolid size={17} /><h1 className="text-sm md:text-base font-semibold">3 Bedrooms</h1></div>
                                </div>
                                <div className="w-full space-y-3 md:space-y-0 md:flex md:justify-between items-center pt-6 border-t border-[#d7d5d5]">
                                    <div className="flex items-center">
                                        <p className="font-bold text-xl md:text-3xl">$150</p>
                                        <p className="text-sm md:text-base  text-[#8b8b8b]">/night</p>
                                    </div>                                        
                                    <Link to="/duplex_cabin" target="_top" className="md:w-[50%]"><div className="mt-3 md:mt-0 py-4 px-5 w-full text-center text-white bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]">View Details</div></Link>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div> 
                {/* Cabin card section ends */}

                {/* Experience section begins */}
                <div className="py-[20%] sm:py-[15%] max-w-screen-xl mx-auto ">
                    <div className="max-w-screen-lg mx-auto text-center">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Come and enjoy a one of a <br /> kind experience</p>
                        <p className="text-base sm:text-lg mt-4 text-[#5d5d5d]">Mountain dreamers lodge was built with the idea of allowing<br /> it's visitors have fun while visiting.</p>
                    </div>

                    <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 my-14 gap-6 xl:px-5">
                        <div className="flex w-full gap-3 h-fit"> 

                            <img src={ wood_fire } alt="image" className="h-32 lg:h-36 xl:h-32 w-40 object-cover" />

                            <div className="w-full h-full">
                                <p className="font-bold text-2xl">Wood Fire</p>
                                <p className="text-base sm:text-lg mt-2 text-[#5d5d5d]">Enjoy a nice chat around the wood fire with a loved one.</p>
                            </div>
                        </div>                            
                        
                        <div className="flex w-full gap-3 h-fit ">
                            <img src={ gaming_il } alt="image" className="h-32 lg:h-36 xl:h-32 w-40 object-cover" />

                            
                            <div className="w-full h-full">
                                <p className="font-bold text-2xl">Game Room</p>
                                <p className="text-base sm:text-lg mt-2 text-[#5d5d5d]">Not just kids but adults can also enjoy playing games in our game room.</p>
                            </div>
                        </div>

                        <div className="flex w-full gap-3 h-fit ">
                            <img src={ fishing_il } alt="image" className="h-32 lg:h-36 xl:h-32 w-40 object-cover" />

                            <div className="w-full h-full">
                                <p className="font-bold text-2xl">Fishing</p>
                                <p className="text-base sm:text-lg mt-2 text-[#5d5d5d]">Fishing has never been more fun especially when on vacation.</p>
                            </div>
                        </div>                    

                        <div className="flex w-full gap-3 h-fit ">
                            <img src={ gaming_il } alt="image" className="h-32 lg:h-36 xl:h-32 w-40 object-cover" />

                            
                            <div className="w-full h-full">
                                <p className="font-bold text-2xl">Game Room</p>
                                <p className="text-base sm:text-lg mt-2 text-[#5d5d5d]">Not just kids but adults can also enjoy playing games in our game room.</p>
                            </div>
                        </div> 

                        <div className="flex w-full gap-3 h-fit ">
                            <img src={ fishing_il } alt="image" className="h-32 lg:h-36 xl:h-32 w-40 object-cover" />

                            
                            <div className="w-full h-full">
                                <p className="font-bold text-2xl">Pool oasis</p>
                                <p className="text-base sm:text-lg mt-2 text-[#5d5d5d]">Mark the beginning or end of the day with a splash in our pool oasis.</p>
                            </div>
                        </div>
                        
                        <div className="flex w-full gap-3 h-fit ">
                            <img src={ wood_fire } alt="image" className="h-32 lg:h-36 xl:h-32 w-40 object-cover" />

                            
                            <div className="w-full h-full">
                                <p className="font-bold text-2xl">Outdoor Hot Tub</p>
                                <p className="text-base sm:text-lg mt-2 text-[#5d5d5d]">Relax and unwind in our hot tub after a day filled with different adventures.</p>
                            </div>
                        </div>       

                    </div>

                    <div className="max-w-screen-lg mx-auto text-center justify-center space-y-3 md:space-y-0 sm:space-x-6 items-center md:flex ">
                        <Link to="/rooms" target="_top"><div className="py-4 px-7 md:py-6 md:px-9 bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base md:text-lg hover:bg-[#dc2b2b] text-white hover:text-black">Explore rooms</div></Link> 
                        <Link to="/about" target="_top"><div className="py-4 px-7 md:py-6 md:px-10 text-black bg-white rounded-full cursor-pointer text-base md:text-lg hover:bg-[#ff3f3f] hover:text-white border">About us</div></Link>
                    </div>

                </div>          

                {/* Experience section ends */}
            </div>
            
            <div className="text-[#5d5d5d] py-[20%] sm:py-[15%] px-6">
                {/*difference section begins */}
                <div className="max-w-screen-xl mx-auto px-0 grid lg:grid-cols-2 gap-y-12 lg:gap-y-0 xl:px-5">
                    <div className="w-full h-full hidden lg:flex">
                        <div className="gap-5 space-y-4 columns-2"> 
                            <img src={ difference_img1 } alt="image" className="h-[300px] w-full rounded-3xl object-cover" />
                            <img src={ camp_fire } alt="image" className="h-[260px] rounded-3xl object-cover w-full" />
                            <img src={ difference_img3 } alt="image" className="h-[260px] rounded-3xl object-cover w-full" />
                            <img src={ difference_img4 } alt="image" className="h-[300px] rounded-3xl object-cover w-full" />    
                        </div>
                    </div>

                    <div className="lg:pl-[9%] lg:py-[12%] w-full">
                        <div>
                            <p className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-black hidden lg:flex">What makes us  <br />different</p>
                            <p className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-black flex lg:hidden">What makes us different</p>
                            <p className="pb-5 text-base sm:text-lg mt-2">What sets us apart is our private access to the mountain, providing a unique mountain experience. Whether you're unwinding in the hot tub or in the oasis pool, your stay with us is exceptional.</p>
                            <div className="border-b mt-2 border-[#d7d5d5]"></div>
                            <p className="py-5 text-base sm:text-lg ">Nestled among the trees at an elevation of 5,174 ft, Mountain Dreamers Lodge is less than two hours from the main city, but feels like a different world. Here, you'll find gaming, hiking, fishing, mountain biking, Mountain Dreamers Lodge and the ultimate in peace & harmony.</p>
                            <Link to="/about" target="_top"><div className="py-4 px-7 md:py-6 md:px-10 text-center mt-7 w-full md:max-w-fit text-black bg-white rounded-full cursor-pointer text-base md:text-lg hover:bg-[#ff3f3f] hover:text-white border shadow-md">About us</div></Link> 
                        </div>
                    </div>

                    <div className="flex lg:hidden w-full">
                        <div className="gap-5 space-y-4  columns-1 sm:columns-2 mx-auto">   
                            <img src={ difference_img1 } alt="image" className="h-[300px] sm:h-[300px] object-cover w-full rounded-3xl" />
                            <img src={ camp_fire } alt="image" className="h-[300px] sm:h-[260px] rounded-3xl object-cover w-full" />
                            <img src={ difference_img3 } alt="image" className="h-[300px] sm:h-[260px] rounded-3xl object-cover w-full" />
                            <img src={ difference_img4 } alt="image" className="h-[300px] sm:h-[300px] rounded-3xl object-cover w-full" />   
                        </div>
                    </div>                    
                </div>                
            </div>
            {/* Difference section ends */}

            {/* Testimonies section begins */}
            <div className="py-[20%] sm:py-[15%] w-full px-6 text-black min-h-fit overflow-y-hidden bg-[#fcfcfc] ">
                <div className="max-w-screen-md mx-auto text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold">What our past guests says</p>
                    <p className="text-base sm:text-lg mt-4 text-[#5d5d5d]">Praises from our past guests on how wonderful their stay was in our resort.</p>
                </div>               

                
                <div className="mt-10 max-w-screen-xl mx-auto w-full">                    
                    <div className='max-w-screen-md mx-auto cursor-pointer'>  
                        <Slider {...settings}>             
                            { reviews.map((d) => { 
                                return(
                                    <div className='rounded-3xl p-10 box-shadow'>
                                        <img src={ d.img } alt="image" className="object-cover w-60 h-60 mx-auto rounded-full " />
                                        <div className='text-center h-fit w-full mt-6'>
                                            <p className='text-base sm:text-lg text-[#5d5d5d]'>{ d.summary }</p>
                                            <div className='mt-5 space-y-3'>
                                                <p className='font-bold text-lg sm:text-xl md:text-2xl'>{ d.name }</p>
                                                <p className='text-base sm:text-lg'>{ d.city }</p>
                                            </div> 
                                        </div>                                  
                                    </div> 
                                )
                            })}
                        </Slider>   
                    </div>                    
                </div>                  

                <div className="max-w-screen-xl text-center mx-auto mt-14 sm:space-x-6 sm:flex justify-center space-y-3 sm:space-y-0 items-center">
                    <Link to="/rooms" target="_top"><div className="py-4 px-7 md:py-6 md:px-9 bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base md:text-lg hover:bg-[#dc2b2b] text-white">Book now</div></Link> 
                    <Link to="/rooms" target="_top"><div className="mt-3 sm:mt-0 py-4 px-7 md:py-6 md:px-10 text-black bg-white rounded-full cursor-pointer text-base md:text-lg hover:bg-[#ff3f3f] hover:text-white border">Explore cabins</div></Link>
                </div>
            </div>    
            {/* Testimonies section ends */}
        </div>
    )
}

