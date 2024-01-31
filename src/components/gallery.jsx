import image from '../assets/image.jpg'

const Gallery = () => {
    return(
        <div className="text-black font-sans w-full">
            <div className="flex flex-col h-[75vh] md:h-screen bg-purple-500 justify-center px-6">
                <div className="xl:px-5 max-w-screen-sm mx-auto text-center">                    
                    <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl mb-8">Photo Gallery</h1>
                    <p className="text-base sm:text-lg">Picture your self here. Travel around our gallery for a preview of all that awaits you at Mountain Dreamers Lodge.</p>                    
                </div>                
            </div>

            <div className='py-[17%] sm:py-[12%] px-6'>
                <div className="w-full max-w-screen-xl mx-auto gap-5 columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-4">
                    <img src={ image } alt="image" className="sm:h-[260px] md:h-[280px] lg:h-[300px] image" />
                    <img src={ image } alt="image" className="sm:h-[240px] md:h-[250px] lg:h-[250px]" />
                    <img src={ image } alt="image" className="sm:h-[220px] md:h-[230px] lg:h-[270px]" />
                    <img src={ image } alt="image" className="sm:h-[260px] md:h-[250px] lg:h-[300px]" />
                    <img src={ image } alt="image" className="sm:h-[280px] md:h-[230px] lg:h-[250px]" />
                    <img src={ image } alt="image" className="sm:h-[250px] md:h-[220px] lg:h-[270px]" />
                    <img src={ image } alt="image" className="sm:h-[250px] md:h-[210px] lg:h-[300px]" />
                    <img src={ image } alt="image" className="sm:h-[270px] md:h-[230px] lg:h-[270px]" />
                </div>    
            </div> 
        </div>
    )
}

export default Gallery