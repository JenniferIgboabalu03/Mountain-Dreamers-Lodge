import { useState } from "react"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import telephone from '../assets/telephone.png'
import mail from '../assets/mail.png'
import calendar from '../assets/calendar.png'

import { useForm } from 'react-hook-form'

const Contact = () =>{ 
    const [answer1,setShowAnswer1] = useState(false)
    const [answer2,setShowAnswer2] = useState(false)
    const [answer3,setShowAnswer3] = useState(false)
    const [answer4,setShowAnswer4] = useState(false)
    const [answer5,setShowAnswer5] = useState(false)
    const [answer6,setShowAnswer6] = useState(false)

    const showArrow1 = () => { 
        setShowAnswer1(!answer1)
    }
    const showArrow2 = () => { 
        setShowAnswer2(!answer2)
    }
    const showArrow3 = () => { 
        setShowAnswer3(!answer3)
    }
    const showArrow4 = () => { 
        setShowAnswer4(!answer4)
    }
    const showArrow5 = () => { 
        setShowAnswer5(!answer5)
    }
    const showArrow6 = () => { 
        setShowAnswer6(!answer6)
    }
    
    const form = useForm({ 
        defaultValues:{ 
            name:'',
            email:'',
            phone:'',
            subject:'',
            message:'',
        }
    })

    const { register, handleSubmit, formState } = form
    const { errors } = formState

    const onSubmit = (data) => { 
        console.log('Form is submited', data)
    }

    return(
        <div className="text-black font-sans">
            <div className="max-w-full h-screen flex flex-col justify-center md:h-[800px] contact-header ">
                <div className="text-white max-w-screen-sm mx-auto px-5 text-center">
                    <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl mb-8  ">Contact us</h1>
                    <p className="text-base sm:text-lg">We are ready to serve you. If you have a request or comment, or if you would like additional information about Mountain Dreamers Lodge, the following is how to reach us.</p>
                </div>
            </div>

            {/* Form section starts */}
            <div className="w-full px-6 pt-[15%]">
                <div className="max-w-screen-sm md:mx-auto mx-6 rounded-3xl px-8 lg:px-16 lg:pt-16 py-14 box-shadow">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="grid sm:grid-cols-2 gap-x-5 md:gap-8 gap-y-5 w-full">
                            <div className="w-full">
                                <label htmlFor="name" className="font-bold text-base sm:text-lg w-full">Full name</label>
                                <input type="text" { ...register('name',{ 
                                    required:{ 
                                        value:true,
                                        message:'Name is required',
                                    },
                                } ) } id="name" placeholder="Name" className="w-full pl-5 rounded-full py-5 mt-3" />    
                                <p className="text-sm md:text-base text-red-700 mt-3">{ errors.name?.message }</p>
                            </div>

                            <div className="w-full">
                                <label htmlFor="email" className="font-bold text-base sm:text-lg w-full">Email address</label>
                                <input type="text" { ...register('email', { 
                                    pattern:{ 
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message:'Invalid email format',
                                    },
                                    required:{ 
                                        value: true,
                                        message:'Email is required',
                                    },
                                }) } id="email" placeholder="example@gmail.com" className="w-full pl-5 rounded-full py-5 mt-3" />    
                                <p className="text-sm md:text-base text-red-700 mt-3">{ errors.email?.message }</p>
                            </div>

                            <div className="w-full">
                                <label htmlFor="phone" className="font-bold text-base sm:text-lg w-full">Phone</label>
                                <input type="text"  { ...register('phone',{ 
                                    required:{ 
                                        value:true,
                                        message:'Number is required',
                                    },
                                } ) } id="phone" placeholder="(123) 456 - 789" className="w-full pl-5 rounded-full py-5 mt-3" />    
                                <p className="text-sm md:text-base text-red-700 mt-3">{ errors.phone?.message }</p>
                            </div>

                            <div className="w-full">
                                <label htmlFor="subject" className="font-bold text-base sm:text-lg w-full">Subject</label>
                                <input type="text"  { ...register('subject',{ 
                                    required:{ 
                                        value:true,
                                        message:'Subject is required',
                                    },
                                } ) } id="subject" placeholder="ex. Support" className="w-full pl-5 rounded-full py-5 mt-3" />    
                                <p className="text-sm md:text-base text-red-700 mt-3">{ errors.subject?.message }</p>
                            </div>  

                        </div>

                        <div className="w-full my-5 md:my-8 grid">
                            <label htmlFor="message" className="w-full font-bold text-base sm:text-lg">Message</label>
                            <input type="text"  { ...register('message',{ 
                                    required:{ 
                                        value:true,
                                        message:'Message is required',
                                    },
                            } ) } id="message" placeholder="Please type your message here..." className="rounded-3xl my-3 pl-5 pt-5 pb-24 "/>
                            <p className="text-base md:text-lg text-red-700 mt-3">{ errors.message?.message }</p>
                        </div>

                        <div className="grid sm:grid-cols-3 ">
                            <button className="py-4 px-7 md:py-6 md:px-10 bg-[rgb(255,63,63)] font-bold rounded-full cursor-pointer text-base md:text-lg hover:bg-[#dc2b2b] text-white">Submit</button>
                            <div className="flex sm:col-span-2 justify-center sm:justify-end mt-5 sm:mt-0 space-x-5 items-center ">
                                <div className="rounded-full box-shadow p-2 cursor-pointer"><FaFacebookF size={17} className="text-[#ff3f3f]"/></div>
                                <div className="rounded-full box-shadow p-2 cursor-pointer"><FaTwitter size={17} className="text-[#ff3f3f]"/></div>
                                <div className="rounded-full box-shadow p-2 cursor-pointer"><FaInstagram size={17} className="text-[#ff3f3f]"/></div>
                                <div className="rounded-full box-shadow p-2 cursor-pointer"><FaYoutube size={17} className="text-[#ff3f3f]"/></div>
                            </div>
                        </div>
                    </form>                    
                </div>

                <div className="max-w-screen-lg mx-auto  grid sm:grid-cols-2 lg:grid-cols-3 mt-20 space-y-2">
                    <div className="text-center sm:text-normal sm:flex justify-center sm:justify-normal items-center cursor-pointer ">
                        <img src={ mail } alt="image" className="w-16 h-16 mx-auto sm:mx-0" />
                        <div className="m-5 sm:m-7">
                            <h2 className="text-base sm:text-lg text-[#5d5d5d] font-semibold ">Have questions?</h2>
                            <p className="text-base sm:text-lg font-bold ">contact@mdl.com</p>
                        </div>
                    </div>

                    <div className="text-center sm:flex justify-center sm:justify-normal items-center cursor-pointer ">
                        <img src={ telephone } alt="image" className="w-16 h-16 mx-auto sm:mx-0" />
                        <div className="m-5 sm:m-7">
                            <h2 className="text-base sm:text-lg text-[#5d5d5d] font-semibold">Give us a call</h2>
                            <p className="text-base sm:text-lg font-bold ">(123)456 - 7890</p>
                        </div>
                    </div>

                    <div className="text-center sm:flex justify-center sm:justify-normal items-center cursor-pointer ">
                        <img src={ calendar } alt="image" className="w-16 h-16 mx-auto sm:mx-0" />
                        <div className="m-5 sm:m-7">
                            <h2 className="text-base sm:text-lg text-[#5d5d5d] font-semibold ">Make a reservation</h2>
                            <p className="text-base sm:text-lg font-bold ">reservation@mdl.com</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Form section ends */}

            <div className="px-6 py-[15%]">
                <div className="max-w-screen-sm w-full mx-auto text-center mb-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Frequently Asked Questions</h1>
                    <p className="text-base sm:text-lg mt-4">These are answers to the questions frequently asked by our customers.</p>
                </div>

                <div className="max-w-screen-xl mx-auto xl:px-5 grid md:grid-cols-2 w-full gap-x-7 gap-y-7 sm:gap-y-5">
                    <div className="space-y-7 sm:space-y-5">
                        <div className="py-10 sm:py-12 pl-8 sm:pl-10 rounded-3xl faq cursor-pointer">
                            <div className="flex items-start space-x-6">
                                <h1 className="text-lg sm:text-xl md:text-2xl font-bold w-[70%] sm:w-[70%]">Can We Bring Our Own Food And Alcohol?</h1>
                                <div onClick={showArrow1} className="w-12 text-center mt-2 rounded-full p-2">
                                    {answer1 ? <div className="rounded-full p-2 bg-[#ff3f3f] "><IoIosArrowDown size={17} className="text-white"/></div> : <div className="rounded-full p-2 bg-[#d7d5d5]"><IoIosArrowForward size={17} className="text-[#5d5d5d]"/></div>}
                                </div>
                            </div> 
                            {answer1 &&
                                <p className="text-base sm:text-lg text-[#5d5d5d] w-[80%] mt-6">Yes, and you may even place a grocery order with a local grocer for delivery upon your arrival.</p>                      
                            }  
                        </div>

                        <div className="py-10 sm:py-12 pl-8 sm:pl-10 rounded-3xl faq cursor-pointer">
                            <div className="flex items-start space-x-6">
                                <h1 className="text-lg sm:text-xl md:text-2xl font-bold w-[70%] sm:w-[70%]">How do I know that my reservation is confirmed?</h1>
                                <div onClick={showArrow2} className="w-12 text-center mt-2 rounded-full p-2">
                                    {answer2 ? <div className="rounded-full p-2 bg-[#ff3f3f] "><IoIosArrowDown size={17} className="text-white"/></div> : <div className="rounded-full p-2 bg-[#d7d5d5]"><IoIosArrowForward size={17} className="text-[#5d5d5d]"/></div>}
                                </div>
                            </div> 
                            {answer2 &&
                                <p className="text-base sm:text-lg text-[#5d5d5d] w-[80%] mt-6">A confirmation email is sent to you through the email you provided when booking.</p>                      
                            }  
                        </div> 

                        <div className="py-10 sm:py-12 pl-8 sm:pl-10 rounded-3xl faq cursor-pointer">
                            <div className="flex items-start space-x-6">
                                <h1 className="text-lg sm:text-xl md:text-2xl font-bold w-[70%] sm:w-[70%]">What happens if I want to cancel my room reservation?</h1>
                                <div onClick={showArrow3} className="w-12 text-center mt-2 rounded-full p-2">
                                    {answer3 ? <div className="rounded-full p-2 bg-[#ff3f3f] "><IoIosArrowDown size={17} className="text-white"/></div> : <div className="rounded-full p-2 bg-[#d7d5d5]"><IoIosArrowForward size={17} className="text-[#5d5d5d]"/></div>}
                                </div>
                            </div> 
                            {answer3 &&
                                <p className="text-base sm:text-lg text-[#5d5d5d] w-[80%] mt-6">If you happen to cancel your room reservation a confirmation email will be sent to you through the email you provided when booking and your fee will be returned to you after 5 hours.</p>                      
                            }  
                        </div> 
                    </div>

                    <div className="space-y-7 sm:space-y-5">
                        <div className="py-10 sm:py-12 pl-8 sm:pl-10 rounded-3xl faq cursor-pointer">
                            <div className="flex items-start space-x-6">
                                <h1 className="text-lg sm:text-xl md:text-2xl font-bold w-[70%] sm:w-[70%]">Can I book a hotel room by telephone or email?</h1>
                                <div onClick={showArrow4} className="w-12 text-center mt-2 rounded-full p-2">
                                    {answer4 ? <div className="rounded-full p-2 bg-[#ff3f3f] "><IoIosArrowDown size={17} className="text-white"/></div> : <div className="rounded-full p-2 bg-[#d7d5d5]"><IoIosArrowForward size={17} className="text-[#5d5d5d]"/></div>}
                                </div>
                            </div> 
                            {answer4 &&
                                <p className="text-base sm:text-lg text-[#5d5d5d] w-[80%] mt-6">No you can not, but you can click on the book now button on the navbar to book a room.</p>                      
                            }  
                        </div> 

                        <div className="py-10 sm:py-12 pl-8 sm:pl-10 rounded-3xl faq cursor-pointer">
                            <div className="flex items-start space-x-6">
                                <h1 className="text-lg sm:text-xl md:text-2xl font-bold w-[70%] sm:w-[70%]">What are the check-in and check-out times of the hotel?</h1>
                                <div onClick={showArrow5} className="w-12 text-center mt-2 rounded-full p-2">
                                    {answer5 ? <div className="rounded-full p-2 bg-[#ff3f3f] "><IoIosArrowDown size={17} className="text-white"/></div> : <div className="rounded-full p-2 bg-[#d7d5d5]"><IoIosArrowForward size={17} className="text-[#5d5d5d]"/></div>}
                                </div>
                            </div> 
                            {answer5 &&
                                <p className="text-base sm:text-lg text-[#5d5d5d] w-[80%] mt-6">Standard check-in time is 3:00pm and check-out time is 11:00am. Early check-ins and late check-outs are subject to the availability and additional charges may apply!.</p>                      
                            }  
                        </div>

                        <div className="py-10 sm:py-12 pl-8 sm:pl-10 rounded-3xl faq cursor-pointer">
                            <div className="flex items-start space-x-6">
                                <h1 className="text-lg sm:text-xl md:text-2xl font-bold w-[70%] sm:w-[70%]">Is Smoking Allowed At The Resort?</h1>
                                <div onClick={showArrow6} className="w-12 text-center mt-2 rounded-full p-2">
                                    {answer6 ? <div className="rounded-full p-2 bg-[#ff3f3f] "><IoIosArrowDown size={17} className="text-white"/></div> : <div className="rounded-full p-2 bg-[#d7d5d5]"><IoIosArrowForward size={17} className="text-[#5d5d5d]"/></div>}
                                </div>
                            </div> 
                            {answer6 &&
                                <p className="text-base sm:text-lg text-[#5d5d5d] w-[80%] mt-6">For the comfort and safety of all our guests, accommodations at Mountain Dreamers Lodge are 100% smoke-free. For your convenience, there are designated areas for smoking at the resort; please inquire with our Concierge at check-in.</p>                      
                            }  
                        </div>   
                    </div>
                    

                    

                     

                     

                      
                </div>
            </div>
            {/* Faq section begins */}
        </div>
    )
}
export default Contact