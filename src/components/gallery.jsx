import image from '../assets/image.jpg'
import difference_img1 from '../assets/difference-img1.jpg'
import camp_fire from '../assets/camp-fire.jpg'
import fishing from '../assets/fishing.jpg'
import gaming from "../assets/gaming.jpg"
import hiking from '../assets/hiking.jpg'
import micro_img1 from '../assets/micro-img1.jpg'
import beach from '../assets/beach.jpg'
import rgallery1 from '../assets/rgallery-1.jpg'


const Gallery = () => {
    return(
        <div className="text-black font-sans w-full">
            <div className="flex flex-col h-screen md:h-[800px] gallery-header justify-center px-6">
                <div className="xl:px-5 max-w-screen-sm mx-auto text-center">                    
                    <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl mb-8 text-white">Photo Gallery</h1>
                    <p className="text-base sm:text-lg text-white">Picture your self here. Travel around our gallery for a preview of all that awaits you at Mountain Dreamers Lodge.</p>                    
                </div>                
            </div>

            <div className='py-[17%] sm:py-[12%] px-6'>
                <div className="w-full max-w-screen-xl mx-auto gap-5 columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-4">
                    <img src={ rgallery1 } alt="image" className="h-[260px] md:h-[280px] lg:h-[300px] w-full object-cover rounded-t-2xl" />
                    <img src={ gaming } alt="image" className="h-[240px] md:h-[250px] lg:h-[250px] w-full object-cover rounded-t-2xl" />
                    <img src={ camp_fire } alt="image" className="h-[220px] md:h-[230px] lg:h-[270px] w-full object-cover rounded-t-2xl" />
                    <img src={ difference_img1 } alt="image" className="h-[260px] md:h-[250px] lg:h-[300px] w-full object-cover rounded-t-2xl" />
                    <img src={ beach } alt="image" className="h-[280px] md:h-[230px] lg:h-[250px] w-full object-cover rounded-t-2xl" />
                    <img src={ fishing } alt="image" className="h-[250px] md:h-[220px] lg:h-[270px] w-full object-cover rounded-t-2xl" />
                    <img src={ micro_img1 } alt="image" className="h-[250px] md:h-[210px] lg:h-[300px] w-full object-cover rounded-t-2xl" />
                    <img src={ hiking } alt="image" className="h-[270px] md:h-[230px] lg:h-[270px] w-full object-cover rounded-t-2xl" />
                </div>    
            </div> 
        </div>
    )
}

export default Gallery