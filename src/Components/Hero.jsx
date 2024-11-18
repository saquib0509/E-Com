import React from 'react'
import hero from "../Images/alvaro-bernal-RgIKRYhmG2k-unsplash.jpg" // Importing the image
import image1 from "../Images/mech.jpg"

import heroVideo from "../assets/watchVid.mp4";

export default function Hero() {
    return (
        <div className="w-full h-screen relative overflow-hidden">
            {/* <img
                src={image4}
                alt="Elegant Watch Collection"
                className="w-full h-full object-cover object-center"
            /> */}

            <section className="relative w-full h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            
            </section>

            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 text-white px-4 pb-20 text-center">
                <div className='mt=60'>
                    <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">
                        Timeless Elegance
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Discover the perfect watch for every occasion.
                    </p>
                    <button className="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-300 transition">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>

    )
}
