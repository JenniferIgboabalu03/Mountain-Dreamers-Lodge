import image from '../assets/image.jpg'
import { Link } from 'react-router-dom'
import { RxPerson } from "react-icons/rx";
import { LiaBedSolid } from "react-icons/lia";

const Rooms = () => {
    return(
        <div className="text-black font-sans w-full">
            <div className="flex flex-col h-[75vh] md:h-screen bg-purple-500 justify-center px-6">
                <div className="xl:px-5 max-w-screen-sm mx-auto text-center">                    
                    <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl mb-8">Rooms</h1>
                    <p className="text-base sm:text-lg">Our guestrooms and suites are designed for total relaxation, featuring natural wood accents, cozy linens, and stunning views of the mountain and lake. </p>                    
                </div>                
            </div>

            <div className='py-[17%] sm:py-[12%] px-6'>
                <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:px-5">
                    <div className="w-full shadow-xl rounded-3xl">
                        <img className="w-full rounded-t-3xl" src={ image } alt="img" />
                        <div className="px-5 pt-8 pb-6">
                            <p className="font-bold text-xl md:text-2xl">Single cabin</p>
                            <p className="text-base sm:text-lg mt-2 mb-6 text-[#5d5d5d]">Our single room is the...</p>
                            <div className="w-full space-x-2 cursor-pointer mb-7 flex">
                                <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><RxPerson size={17} /><h1 className="text-sm md:text-base font-semibold">1 Guest</h1></div>
                                <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><LiaBedSolid size={17} /><h1 className="text-sm md:text-base font-semibold">1 Bedroom</h1></div>
                            </div>
                            <div className="w-full space-y-3 md:space-y-0 md:flex md:justify-between items-center pt-6 border-t border-[#d7d5d5]">
                                <div className="flex items-center">
                                    <p className="font-bold text-xl md:text-3xl">$99</p>
                                    <p className="text-sm md:text-base  text-[#8b8b8b]">/night</p>
                                </div>                                        
                                <Link to="/single_cabin" className="md:w-[50%]"><div className="mt-3 md:mt-0 py-4 px-5 w-full text-center text-white bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]">Book now</div></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full shadow-xl rounded-3xl">
                        <img className="w-full rounded-t-3xl" src={ image } alt="img" />
                        <div className="px-5 pt-8 pb-6">
                            <p className="font-bold text-xl md:text-2xl">Duo cabin</p>
                            <p className="text-base sm:text-lg mt-2 mb-6 text-[#5d5d5d]">Our duo room is the...</p>
                            <div className="w-full space-x-2 cursor-pointer mb-7 flex">
                                <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><RxPerson size={17} /><h1 className="text-sm md:text-base font-semibold">4 Guests</h1></div>
                                <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><LiaBedSolid size={17} /><h1 className="text-sm md:text-base font-semibold">2 Bedrooms</h1></div>
                            </div>
                            <div className="w-full space-y-3 md:space-y-0 md:flex md:justify-between items-center pt-6 border-t border-[#d7d5d5]">
                                <div className="flex items-center">
                                    <p className="font-bold text-xl md:text-3xl">$129</p>
                                    <p className="text-sm md:text-base  text-[#8b8b8b]">/night</p>
                                </div>                                        
                                <Link to="/duo_cabin" className="md:w-[50%]"><div className="mt-3 md:mt-0 py-4 px-5 w-full text-center text-white bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]">Book now</div></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full shadow-xl rounded-3xl">
                        <img className="w-full rounded-t-3xl" src={ image } alt="img" />
                        <div className="px-5 pt-8 pb-6">
                            <p className="font-bold text-xl md:text-2xl">Duplex cabin</p>
                            <p className="text-base sm:text-lg mt-2 mb-6 text-[#5d5d5d]">Our duplex room is the...</p>
                            <div className="w-full space-x-2 cursor-pointer mb-7 flex">
                                <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><RxPerson size={17} /><h1 className="text-sm md:text-base font-semibold">6 Guests</h1></div>
                                <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><LiaBedSolid size={17} /><h1 className="text-sm md:text-base font-semibold">3 Bedrooms</h1></div>
                            </div>
                            <div className="w-full space-y-3 md:space-y-0 md:flex md:justify-between items-center pt-6 border-t border-[#d7d5d5]">
                                <div className="flex items-center">
                                    <p className="font-bold text-xl md:text-3xl">$150</p>
                                    <p className="text-sm md:text-base  text-[#8b8b8b]">/night</p>
                                </div>                                        
                                <Link to="/duplex_cabin" className="md:w-[50%]"><div className="mt-3 md:mt-0 py-4 px-5 w-full text-center text-white bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]">Book now</div></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full shadow-xl rounded-3xl">
                        <img className="w-full rounded-t-3xl" src={ image } alt="img" />
                        <div className="px-5 pt-8 pb-6">
                            <p className="font-bold text-xl md:text-2xl">Family cabin</p>
                            <p className="text-base sm:text-lg mt-2 mb-6 text-[#5d5d5d]">Our family room is the...</p>
                            <div className="w-full space-x-2 cursor-pointer mb-7 flex">
                                <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><RxPerson size={17} /><h1 className="text-sm md:text-base font-semibold">8 Guests</h1></div>
                                <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><LiaBedSolid size={17} /><h1 className="text-sm md:text-base font-semibold">4 Bedrooms</h1></div>
                            </div>
                            <div className="w-full space-y-3 md:space-y-0 md:flex md:justify-between items-center pt-6 border-t border-[#d7d5d5]">
                                <div className="flex items-center">
                                    <p className="font-bold text-xl md:text-3xl">$399</p>
                                    <p className="text-sm md:text-base  text-[#8b8b8b]">/night</p>
                                </div>                                        
                                <Link to="/family_cabin" className="md:w-[50%]"><div className="mt-3 md:mt-0 py-4 px-5 w-full text-center text-white bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]">Book now</div></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full shadow-xl rounded-3xl">
                        <img className="w-full rounded-t-3xl" src={ image } alt="img" />
                        <div className="px-5 pt-8 pb-6">
                            <p className="font-bold text-xl md:text-2xl">Micro cabin</p>
                            <p className="text-base sm:text-lg mt-2 mb-6 text-[#5d5d5d]">Our micro room is the...</p>
                            <div className="w-full space-x-2 cursor-pointer mb-7 flex">
                                <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><RxPerson size={17} /><h1 className="text-sm md:text-base font-semibold">1 Guest</h1></div>
                                <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><LiaBedSolid size={17} /><h1 className="text-sm md:text-base font-semibold">1 Bedroom</h1></div>
                            </div>
                            <div className="w-full space-y-3 md:space-y-0 md:flex md:justify-between items-center pt-6 border-t border-[#d7d5d5]">
                                <div className="flex items-center">
                                    <p className="font-bold text-xl md:text-3xl">$79</p>
                                    <p className="text-sm md:text-base  text-[#8b8b8b]">/night</p>
                                </div>                                        
                                <Link to="/micro_cabin" className="md:w-[50%]"><div className="mt-3 md:mt-0 py-4 px-5 w-full text-center text-white bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]">Book now</div></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full shadow-xl rounded-3xl">
                        <img className="w-full rounded-t-3xl" src={ image } alt="img" />
                        <div className="px-5 pt-8 pb-6">
                            <p className="font-bold text-xl md:text-2xl">Family Duo cabin</p>
                            <p className="text-base sm:text-lg mt-2 mb-6 text-[#5d5d5d]">Our family duo room is the...</p>
                            <div className="w-full space-x-2 cursor-pointer mb-7 flex">
                                <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><RxPerson size={17} /><h1 className="text-sm md:text-base font-semibold">10 Guests</h1></div>
                                <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2"><LiaBedSolid size={17} /><h1 className="text-sm md:text-base font-semibold">5 Bedrooms</h1></div>
                            </div>
                            <div className="w-full space-y-3 md:space-y-0 md:flex md:justify-between items-center pt-6 border-t border-[#d7d5d5]">
                                <div className="flex items-center">
                                    <p className="font-bold text-xl md:text-3xl">$420</p>
                                    <p className="text-sm md:text-base  text-[#8b8b8b]">/night</p>
                                </div>                                        
                                <Link to="/family duo_cabin" className="md:w-[50%]"><div className="mt-3 md:mt-0 py-4 px-5 w-full text-center text-white bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]">Book now</div></Link>
                            </div>
                        </div>
                    </div>
                            
                </div>
            </div> 
        </div>
    )
}

export default Rooms