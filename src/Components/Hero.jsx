import React from 'react'
import hero from "../Images/alvaro-bernal-RgIKRYhmG2k-unsplash.jpg" // Importing the image
import image1 from "../Images/mech.jpg"
import image2 from "../Images/gold.jpg"
import image3 from "../Images/star.jpg"
import image5 from "../Images/pexels-quang-viet-nguyen-107013384-13257109.jpg"
import image6 from "../Images/pexels-joey-nguy-n-1056657-2113994.jpg"
import image7 from "../Images/pexels-gullywabbit-3638006-7749381.jpg"
import image4 from "../Images/pexels-jatin-anand-33853-125779.jpg"
import image9 from "../Images/pexels-joey-nguy-n-1056657-2113994.jpg"
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
                <div className="relative z-10 text-center text-white">
                    <h1>Welcome to My Website</h1>
                </div>
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
