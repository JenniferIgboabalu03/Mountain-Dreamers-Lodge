import React from "react";
import fishing from "../assets/fishing.jpg"
import hiking from "../assets/hiking.jpg"
import gaming from "../assets/gaming.jpg"
import fun from '../assets/fun.png'
import weather from '../assets/weather.png'
import customer from '../assets/customer.png'
import gaming_il from '../assets/gaming-il.png'


import camp_fire from "../assets/camp-fire.jpg"
export const About = () => {
    return(
        <div className="font-sans 2xl:max-w-screen-2xl 2xl:mx-auto">        
            <div className="flex flex-col justify-center text-center text-white about-header w-full h-[400px] md:h-screen">
                <div className="max-w-screen-md mx-auto px-5">
                    <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl mb-8  ">About our resorts</h1>
                    <p className="text-base sm:text-lg">A resort that is decidedly, and purposefully, different. Understated, not loud. Gracious, not pretentious. Deferential, not presumptuous. In short, a sophisticated retreat where you can appreciate the enduring traditions of genuine hospitality.</p>
                </div>                
            </div>
           
            {/* Our story section begins */}
            <div className="py-[20%] sm:py-[15%] px-6 text-[#5d5d5d]">
                <div className="max-w-screen-xl mx-auto xl:px-5 grid md:grid-cols-2 gap-y-8 gap-x-12 lg:gap-x-24">
                    <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">About us</h1>
                        <p className="text-base sm:text-lg ">Wood fire, Fishing and mountain view rooms come together in Mountain Dreamers Lodge.A premier luxury resort, the hotel offers 9 rooms, wellness center, restaurant, bar and private lake beach. In Mountain Dreamers Lodge, every experience provides guests with rest, relaxation and the opportunity for rejuvenation.</p>
                    </div> 

                    <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">Awesome Amenities</h1>
                        <p className="text-base sm:text-lg ">Mountain Dreamers Lodge provides the best of both worlds when it comes to choosing a place to stay. The property offers modern comfort in a truely unique mountain side setting.The resort is also centrally located to various mountain acitivies, attractions and events making it the perfect "Home Base" for any mountain traveler looking for adventure.</p>
                    </div>  

                </div>

                <div className="max-w-screen-xl mx-auto h-fit xl:px-5 mt-10">
                    <div className="block md:hidden space-y-5 gap-5 columns-1 sm:columns-2">
                        <img src={ hiking } alt="img" className="rounded-3xl h-80 w-full object-cover"/>
                        <img src={ gaming } alt="img" className="rounded-3xl h-80 w-full object-cover"/>
                        <img src={ camp_fire } alt="img" className="rounded-3xl h-80 w-full object-cover"/>
                        <img src={ fishing } alt="img" className="rounded-3xl h-80 w-full object-cover"/>
                    </div>
                    <div className="hidden md:flex w-full space-x-6">
                        <div className="w-[40%] ">
                            <img src={ gaming } alt="img" className="rounded-3xl md:h-[80vh] lg:h-[100vh] w-full object-cover"/>
                        </div>
                        <div className="w-[60%] space-y-5">
                            <div className="flex w-full space-x-6">
                                <div className="w-[50%] ">
                                    <img src={ hiking } alt="img" className="rounded-3xl md:h-[27vh] lg:h-[40vh] w-full object-cover"/>
                                </div>
                                <div className="w-[50%] ">
                                    <img src={ camp_fire } alt="img" className="rounded-3xl md:h-[27vh] lg:h-[40vh] w-full object-cover"/>
                                </div>
                            </div>
                            <div className="w-full">
                                <img src={ fishing } alt="img" className="rounded-3xl md:h-[50vh] lg:h-[57vh] w-full object-cover"/>      
                            </div>
                                                                    
                        </div>
                    </div>
                    
                </div>   
            </div>
            {/* Our story section ends */}

            {/* Our diffrence section begins */}
            <div className="bg-[#fcfcfc] mb-[20%] sm:mb-[15%] px-6 py-[20%] sm:py-[15%] text-[#5d5d5d]">
                <div className="text-center max-w-screen-lg mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">What makes our resorts different?</h1>
                    <p className="text-base sm:text-lg mt-4">These are the reasons why you should consider Mountain Dreamers Lodge <br /> during your next vacation.</p>
                </div>

                <div className="max-w-screen-xl mx-auto mt-10 gap-y-6 gap-x-6 grid lg:grid-cols-2 xl:px-5">                                           
                    <div className="flex w-full gap-3 h-fit">
                        <img src={ fun } alt="image" className="h-32 lg:h-36 xl:h-32 w-40 object-cover" />
                        
                        <div className="w-full h-full">
                            <h1 className="font-bold text-xl md:text-2xl text-black w-full" >Unique experience</h1>
                            <p className="text-base sm:text-lg mt-2">Try out and experience our unique and fun activities filled with joy.</p>
                        </div>
                    </div>
                
                    <div className="flex w-full gap-3 h-fit">
                        <img src={ customer } alt="image" className="h-32 lg:h-36 xl:h-32 w-40 object-cover" />
                        
                        <div className="w-full h-full">
                            <h1 className="font-bold text-xl md:text-2xl text-black w-full" >Customer-first</h1>
                            <p className="text-base sm:text-lg mt-2">Mountain Dreamers Lodge will always follow it's customer first rule because there is no us without you.</p>
                        </div>
                    </div>
                
                    <div className="flex w-full gap-3 h-fit">
                        <img src={ gaming_il } alt="image" className="h-32 lg:h-36 xl:h-32 w-40 object-cover" />
                        
                        <div className="w-full h-full">
                            <h1 className="font-bold text-xl md:text-2xl text-black w-full" >Attractions galore</h1>
                            <p className="text-base sm:text-lg mt-2">Besides hiking, deep sea fishing and gaming, you can pretty much find everything else to do in and around Mountain Dreamers Lodge.</p>
                        </div>
                    </div>
                
                    <div className="flex w-full gap-3 h-fit">
                        <img src={ weather } alt="image" className="h-32 lg:h-36 xl:h-32 w-40 object-cover" />
                           
                        <div className="w-full h-full">
                            <h1 className="font-bold text-xl md:text-2xl text-black w-full" >Wonderful weather</h1>
                            <p className="text-base sm:text-lg mt-2">Whether you're looking to visit Mountain Dreamers Lodge during the Summer, or anytime, rest assured that you'll experience a distinction in weather.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our difference section ends */}
        </div>
    )
}

export default About
