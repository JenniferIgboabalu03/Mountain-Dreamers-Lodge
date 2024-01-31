import image from "../../assets/image.jpg"
import { RxPerson } from "react-icons/rx";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";

import { IoWifiOutline } from "react-icons/io5";
import { LiaHotTubSolid } from "react-icons/lia";
import { GiFireplace } from "react-icons/gi";
import { MdPool } from "react-icons/md";
import { PiTelevisionSimple } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { PiBowlFood } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { TbFridge } from "react-icons/tb";

const Duplex_cabin  = () => {
    return(
        <div className="text-black font-sans w-full">
            <div className="flex flex-col h-[75vh] md:h-screen bg-purple-500 justify-end">
                <div className="flex  xl:px-5 mb-20">
                    <div className="text-white px-6 md:w-[85%] lg:w-[60%]">
                        <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl mb-8  ">Duplex cabin</h1>
                        <p className="text-base sm:text-lg">Total relaxation is a way of life at Mountain Dreamers Lodge. Every suite and guest room includes natural wood accents, complimented by crisp linens, warm lighting, and stunning views.</p>
                    </div>
                </div>                
            </div>

            <div className="max-w-screen-xl mx-auto px-6 xl:px-5 py-[9%] lg:flex h-full">
                <div className="w-full md:w-[90%] lg:w-[64%]">
                    <div className="w-full space-y-3 sm:space-y-0 sm:space-x-2 cursor-pointer sm:flex">
                        <div className="py-2 px-4 md:py-3 md:px-5 rounded-full justify-center border border-[#d7d5d5] flex items-center space-x-2 text-center"><RxPerson size={17} /><h1 className="text-sm md:text-base font-semibold">6 Guests</h1></div>
                        <div className="py-2 px-4 md:py-3 md:px-5 rounded-full justify-center border border-[#d7d5d5] flex items-center space-x-2"><LiaBedSolid size={17} /><h1 className="text-sm md:text-base font-semibold">3 Bedrooms</h1></div>
                        <div className="py-2 px-4 md:py-3 md:px-5 rounded-full justify-center border border-[#d7d5d5] flex items-center space-x-2"><PiBathtub size={17}/><h1 className="text-sm md:text-base font-semibold">3 Bathrooms</h1></div>
                    </div>

                    <div className="my-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">About the cabin</h1>
                        <p className="text-base sm:text-lg text-[#5d5d5d] mb-8">Our Duplex Cabin is the pinnacle of luxury. This suite offers breathtaking views of Mountain Dreamers Lodge from three bays.</p>

                        <p className="text-base sm:text-lg text-[#5d5d5d]"> It features a spacious living room, a dedicated dining room, 3 master bedrooms with a deep soaking hot tub and a separate shower etc, ensuring a truly opulent experience during your stay.</p>                      

                        <p className="text-base sm:text-lg text-[#5d5d5d] my-9">This suite can accommodate up to 6 guests or more and it's the best choice for the big size family.</p>
                    </div>

                    <div className="border-t"></div>

                    <div className="pt-16">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">Room amenities</h1>
                        <div className="mt-14 w-full md:w-[85%] gap-8 space-y-8 columns-2 sm:columns-3">
                            <div className="flex space-x-5 items-center">
                                <div><IoWifiOutline size={25} /></div>
                                <p className="text-base sm:text-lg font-semibold">WiFi</p>
                            </div>

                            <div className="flex space-x-5 items-center">
                                <div><LiaHotTubSolid size={25}/></div>
                                <p className="text-base sm:5text-lg font-semibold">Hot tub</p>
                            </div>

                            <div className="flex space-x-5 items-center">
                                <div><GiFireplace size={25}/></div>
                                <p className="text-base sm:text-lg font-semibold">Fireplace</p>
                            </div>

                            <div className="flex space-x-5 items-center">
                                <div><MdPool size={25}/></div>
                                <p className="text-base sm:text-lg font-semibold">Pool</p>
                            </div>

                            <div className="flex space-x-5 items-center">
                                <div><PiTelevisionSimple size={25}/></div>
                                <p className="text-base sm:text-lg font-semibold">Tv</p>
                            </div>

                            <div className="flex space-x-5 items-center">
                                <div><IoCarOutline size={25}/></div>
                                <p className="text-base sm:text-lg font-semibold">Parking</p>
                            </div>

                            <div className="flex space-x-5 items-center">
                                <div><PiBowlFood size={25}/></div>
                                <p className="text-base sm:text-lg font-semibold">Full kitchen</p>
                            </div>

                            <div className="flex space-x-5 items-center">
                                <div><IoGameControllerOutline size={25}/></div>
                                <p className="text-base sm:text-lg font-semibold">Game room</p>
                            </div>

                            <div className="flex space-x-5 items-center">
                                <div><TbFridge size={25}/></div>
                                <p className="text-base sm:text-lg font-semibold">Refrigerator</p>
                            </div>

                        </div>
                    </div>
                </div>
                
                <div className="w-[36%] mx-6 h-full mt-40 hidden lg:flex">
                    <div className="py-10 px-9 border box-shadow rounded-3xl">
                        <div>
                            <h1 className="font-bold text-xl md:text-2xl">Reservate room</h1>
                            <p className="text-base sm:text-lg mt-3 mb-6 text-[#5d5d5d]">Don't miss the opportunity to see what we have to offer.</p>
                        </div>

                        <div>
                            <h1 className="text-base md:text-lg font-semibold text-[#5d5d5d]">From</h1>
                            <div className="flex items-center">
                                <p className="font-bold text-xl md:text-3xl">$ 150.00 USD</p>
                                <p className="text-sm md:text-base  text-[#8b8b8b]">/night</p>
                            </div>  
                        </div>

                        <div className="border-t mt-9">
                        </div>

                        <div className="mt-9">
                            <form action="">
                                <div className="grid sm:grid-cols-3 gap-5">
                                    <div className="sm:col-span-2 ">
                                        <label htmlFor="location" className="text-base md:text-lg font-bold">Location</label>
                                        <input type="text" placeholder="Type in location" name="location" className="pl-6 rounded-full py-5 mt-4 w-full" />
                                    </div>

                                    <div>
                                        <label htmlFor="nights" className="text-base md:text-lg font-bold">Nights</label>
                                        <input type="text" placeholder="1" name="nights" className="pl-6 rounded-full py-5 mt-4 w-full" />
                                    </div>
                                </div>

                                <div className="text-base md:text-lg w-full text-center py-5 mt-5 border shadow-lg font-medium rounded-full hover:bg-[#ff3f3f] hover:text-white">Add to Cart</div>

                                <div className="flex my-7 space-x-6">
                                    <div className="border-t my-4 w-[45%]"></div>
                                    <div><h1 className="text-base md:text-lg text-[#5d5d5d] font-medium">OR</h1></div>
                                    <div className="border-t my-4 w-[45%]"></div>
                                </div>

                                <div className="text-base md:text-lg w-full text-center py-5 mt-5 border font-medium rounded-full bg-black hover:bg-[#ff3f3f] text-white">Book Now</div>

                            </form>
                        </div>                    
                    </div>
                </div> 

                <div className="w-full h-full mt-14 block lg:hidden px-6">
                    <div className="py-10 px-9 border box-shadow rounded-3xl">
                        <div>
                            <h1 className="font-bold text-xl md:text-2xl">Reservate room</h1>
                            <p className="text-base sm:text-lg mt-3 mb-6 text-[#5d5d5d]">Don't miss the opportunity to see what we have to offer.</p>
                        </div>

                        <div>
                            <h1 className="text-base md:text-lg font-semibold text-[#5d5d5d]">From</h1>
                            <div className="flex items-center">
                                <p className="font-bold text-xl md:text-3xl">$ 150.00 USD</p>
                                <p className="text-sm md:text-base  text-[#8b8b8b]">/night</p>
                            </div>  
                        </div>

                        <div className="border-t mt-9">
                        </div>

                        <div className="mt-9">
                            <form action="">
                                <div className="grid sm:grid-cols-3 gap-5">
                                    <div className="sm:col-span-2 ">
                                        <label htmlFor="location" className="text-base md:text-lg font-bold">Location</label>
                                        <input type="text" placeholder="Type in location" name="location" className="pl-6 rounded-full py-5 mt-4 w-full" />
                                    </div>

                                    <div>
                                        <label htmlFor="nights" className="text-base md:text-lg font-bold">Nights</label>
                                        <input type="text" placeholder="1" name="nights" className="pl-6 rounded-full py-5 mt-4 w-full" />
                                    </div>
                                </div>

                                <div className="text-base md:text-lg w-full text-center py-5 mt-5 border shadow-lg font-medium rounded-full hover:bg-[#ff3f3f] hover:text-white">Add to Cart</div>

                                <div className="flex my-7 space-x-6">
                                    <div className="border-t my-4 w-[45%]"></div>
                                    <div><h1 className="text-base md:text-lg text-[#5d5d5d] font-medium">OR</h1></div>
                                    <div className="border-t my-4 w-[45%]"></div>
                                </div>

                                <div className="text-base md:text-lg w-full text-center py-5 mt-5 border font-medium rounded-full bg-black hover:bg-[#ff3f3f] text-white">Book Now</div>

                            </form>
                        </div>                    
                    </div>
                </div>       
            </div>  

            <div className="px-6 py-[12%] bg-[#fcfcfc]">
                <div className="max-w-screen-xl mx-auto xl:px-5">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Room gallery</h1>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-x-7 gap-y-7">
                        <div className="h-[270px] sm:h-[300px] md:h-[400px] lg:h-[240px] ">
                            <img src={ image } alt="img" className="image rounded-3xl"/>
                        </div>
                        <div className="h-[270px] sm:h-[300px] md:h-[400px] lg:h-[240px] ">
                            <img src={ image } alt="img" className="image rounded-3xl"/>
                        </div>
                        <div className="h-[270px] sm:h-[300px] md:h-[400px] lg:h-[240px] ">
                            <img src={ image } alt="img" className="image rounded-3xl"/>
                        </div>
                        <div className="h-[270px] sm:h-[300px] md:h-[400px] lg:h-[240px] ">
                            <img src={ image } alt="img" className="image rounded-3xl"/>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default Duplex_cabin