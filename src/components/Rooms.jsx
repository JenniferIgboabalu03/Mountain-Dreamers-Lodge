import { Link } from 'react-router-dom'
import rooms_data from '../constants/Rooms_data';

const Rooms = () => {
    
    return(
        <div className="text-black font-sans w-full 2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="flex flex-col h-[400px] md:h-screen rooms-header justify-center px-6">
                <div className="xl:px-5 max-w-screen-sm mx-auto text-center">                    
                    <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl mb-8 text-white">Rooms</h1>
                    <p className="text-base sm:text-lg text-white">Our guestrooms and suites are designed for total relaxation, featuring natural wood accents, cozy linens, and stunning views of the mountain and lake. </p>                    
                </div>                
            </div>

            <div className='py-[17%] sm:py-[12%] px-6'>
                <div className="w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:px-5">
                    { rooms_data.map((data) => { 
                        return(
                            <div className="w-full shadow-xl rounded-3xl transition-all  hover:scale-90 cursor-pointer" key={data.id}>
                                <img src={ data.img } alt="" className='h-[180px] object-cover w-full rounded-t-3xl' />
                                <div className="px-5 pt-8 pb-6">
                                    <p className="font-bold text-xl md:text-2xl">{ data.title }</p>
                                    <p className="text-base sm:text-lg mt-2 mb-6 text-[#5d5d5d]">{ data.sub }</p>
                                    <div className="w-full space-y-3 xl:space-y-0 xl:space-x-2 cursor-pointer mb-7 xl:flex">
                                        <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2">{ data.icon1 }<h1 className="text-sm md:text-base font-semibold">{ data.guest }</h1></div>
                                        <div className="py-2 px-4 md:py-3 md:px-5 rounded-full border border-[#d7d5d5] flex items-center space-x-2">{ data.icon2 }<h1 className="text-sm md:text-base font-semibold">{ data.bedroom }</h1></div>
                                    </div>
                                    <div className="w-full space-y-3 md:space-y-0 md:flex md:justify-between items-center pt-6 border-t border-[#d7d5d5]">
                                        <div className="flex items-center">
                                            <p className="font-bold text-xl md:text-3xl">${ data.price }</p>
                                            <p className="text-sm md:text-base  text-[#8b8b8b]">/{ data.per }</p>
                                        </div>                                        
                                        <Link to={ data.link } className="md:w-[50%]"><div className="mt-3 md:mt-0 py-4 px-5 w-full text-center text-white bg-[#ff3f3f] rounded-full cursor-pointer font-bold text-base hover:bg-[#dc2b2b]">{ data.button }</div></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }) }
                </div>
            </div> 
        </div>
    )
}

export default Rooms